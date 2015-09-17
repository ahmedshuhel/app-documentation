import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {RepositoryModel, PluginModel, GroupModel, ClassModel, ConstructorModel, MethodModel, InterfaceModel, PropertyModel, VariableModel, SignatureModel, FunctionModel} from 'models/index';
import {LocalCache} from 'services/local-cache';

// Not used yet but perhaps can help busting cache on rawgit's CDN
const cacheBuster = 'v123';
const coreUrl = 'https://rawgit.com/aurelia/registry/master/core-registry.json';
const pluginUrl = 'https://rawgit.com/aurelia/registry/master/plugin-registry.json';
const docName = '/doc/api.json';
const rawgitUrl = 'https://rawgit.com/aurelia/';

@inject(LocalCache)
export class RawGitService {
  constructor(localCache) {
    this.localCache = localCache;
    this.repoHttp = new HttpClient().configure(x=> {
      x.withReviver((k, v) => {
        return (typeof v === 'object' && k !== '_id' && v !== null && !Array.isArray(v)) ?  new RepositoryModel(v) : v;
      });
    });
    this.pluginHttp = new HttpClient().configure(x=> {
      x.withReviver((k, v) => {
        return (typeof v === 'object' && k !== '_id' && v !== null && !Array.isArray(v)) ? new PluginModel(v) : v;
      });
    });
  }
  getOfficialRepos() {
    return this.repoHttp.get(coreUrl + '?v=' + cacheBuster).then(response => {
      response.content.repositories.forEach(repository => {
        this.localCache.repositories.push(repository);
      });
    });
  }
  getPluginRepos() {
    return this.pluginHttp.get(pluginUrl).then(response => {
      response.content.plugins.forEach(plugin => {
        this.localCache.plugins.push(new PluginModel(plugin));
      });
    });
  }
  getRepositoryInfo(repo, version) {
    this.http = new HttpClient();
    return this.http.get(rawgitUrl + stripOutAurelia(repo.location) + '/' + version + docName).then(response => {
      repo.description = response.content.description;
      Object.assign(repo, response.content);
      // The API.json returns everything in 'children' so we need to go through and figure out
      //   the type for each one
      checkForChildren(repo, this.localCache);
      // Check if the kind (type) is already in the localCache.
      //   Using the kind at the moment to match kindName to kind
      this.localCache.checkAddKind(repo);
      // Not using groups for anything yet but could be for filtering
      checkForGroups(repo, this.localCache);
      return repo;
    });
  }
  getPackageJson(repo, version) {
    return this.http.get(rawgitUrl + stripOutAurelia(repo.location) + '/' + version + '/package.json').then(response => {
      repo.packageJson = response.content;
    });
  }
  getChangeLog(repo, version) {
    return this.http.createRequest(rawgitUrl + stripOutAurelia(repo.location) + '/' + version + '/doc/CHANGELOG.md')
      .asGet()
      .withResponseType('text/markdown')
      .send().then(response => {
        repo.changeLog = response.content;
      });
  }
}

function checkForChildren(obj, localcache) {
  if (obj.children) {
    obj.children.forEach(child => {
      let newChild = castObjectAsType(child, obj);
      localcache.checkAddObjectReference(newChild);
      checkForChildren(newChild, localcache);
    });
  }
}

function checkForGroups(obj, localcache) {
  if (obj && obj.groups) {
    obj.groups.forEach(group => {
      let kindName = localcache.getKindName(group.kind);
      group.kindName = kindName;
      obj.groups.push(new GroupModel(group));
      localcache.checkAddObjectReference(group);
      checkForGroups(group, localcache);
    });
  }
}

// Finds the type and casts the object as it so we can recursively search objects
function castObjectAsType(obj, parent) {
  let type = obj.kindString;
  let thisObject;
  switch (type) {
    case 'Class':
      thisObject = new ClassModel(obj);
      parent.classes.push(thisObject);
      break;
    case 'Constructor':
      thisObject = new ConstructorModel(obj);
      thisObject.signature = new SignatureModel(thisObject.signatures[0]);
      parent.constructorMethod = thisObject;
      break;
    case 'Method':
      thisObject = new MethodModel(obj);
      thisObject.signature = new SignatureModel(thisObject.signatures[0]);
      parent.methods.push(thisObject);
      break;
    case 'Interface':
      thisObject = new InterfaceModel(obj);
      parent.interface = thisObject;
      break;
    case 'Property':
      thisObject = new PropertyModel(obj);
      parent.properties.push(thisObject);
      break;
    case 'Variable':
      thisObject = new VariableModel(obj);
      parent.variables.push(thisObject);
      break;
    case 'Signature':
      thisObject = new SignatureModel(obj);
      parent.signature.push(thisObject);
      break;
    case 'Function':
      thisObject = new FunctionModel(obj);
      parent.functions.push(thisObject);
      break;
    default:
      // Do nothing
  };
  return thisObject;
}

// Remove when name is fixed
function stripOutAurelia(location) {
  return location.replace('aurelia/', '');
}
