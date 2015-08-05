import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';
import {Repository, Plugin} from 'models/index';
import {LocalCache} from 'services/local-cache';

const cacheBuster = 'v123';
const coreUrl = 'https://rawgit.com/aurelia/registry/master/core-registry.json';
const pluginUrl = 'https://rawgit.com/aurelia/registry/master/plugin-registry.json';
const docName = '/master/doc/api.json';
const rawgitUrl = 'https://rawgit.com/aurelia/'

@inject(LocalCache)
export class RawGitService {
  constructor(localCache){
    this.localCache = localCache;
    this.repoHttp = new HttpClient().configure(x=> {
      x.withReviver((k,v) => {
        return (typeof v === 'object' && k !== '_id' && v !== null && !Array.isArray(v)) ? new Repository(v) : v;
      });
    });
    this.pluginHttp = new HttpClient().configure(x=> {
      x.withReviver((k,v) => {
        return (typeof v === 'object' && k !== '_id' && v !== null && !Array.isArray(v)) ? new Plugin(v) : v;
      });
    });
  }
  getOfficialRepos(){
    return this.repoHttp.get(coreUrl + '?v=' + cacheBuster).then(response => {
      response.content.repositories.forEach(repository => {
        this.localCache.repositories.push(repository);
      });
    });
  }
  getPluginRepos(){
    return this.pluginHttp.get(pluginUrl).then(response => {
      response.content.plugins.forEach(plugin => {
        this.localCache.plugins.push(plugin);
      });
    });
  }
  getRepositoryInfo(repo){
    this.http = new HttpClient();
    return this.http.get(rawgitUrl + repo.name + docName).then(response => {
      response.content.classes.forEach(klass => {
        repo.classes.push(klass);
      });
      response.content.methods.forEach(method => {
        repo.methods.push(method);
      });
      response.content.properties.forEach(property => {
        repo.properties.push(property);
      });
      response.content.events.forEach(event => {
        repo.events.push(event);
      });
      return repo;
    });
  }
}
