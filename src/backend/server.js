import {database} from './database';
import {HttpClient} from 'aurelia-http-client';
import {inject} from 'aurelia-framework';
import {ChangeLogParser} from './change-log-parser';
import {
  GroupModel,
  ClassModel,
  ConstructorModel,
  MethodModel,
  InterfaceModel,
  PropertyModel,
  VariableModel,
  SignatureModel,
  FunctionModel
} from './model';

class Product {
  static previousSelection = null;

  constructor(attrs, server) {
    this.userName = attrs.userName;
    this.productName = attrs.productName;
    this.latestVersion = attrs.latestVersion;
    this.preferredVersion = this.latestVersion;
    this.isSelected = false;
    this.versions = [];
    this.keywords = [];
    this.server = server;
  }

  select(){
    if(Product.previousSelection) {
      Product.previousSelection.isSelected = false;
    }

    Product.previousSelection = this;
    this.isSelected = true;
  }

  getLatestVersion() {
    return this.getVersion(this.latestVersion);
  }

  getVersion(version) {
    version = version || this.preferredVersion;
    let found = this.versions.find(x => x.version === version);

    if(found) {
      return Promise.resolve(found);
    }

    return this.server.getProductVersion(this, version).then(productVersion => {
      productVersion.product = this;
      this.versions.push(productVersion);
      return productVersion;
    });
  }
}

class ProductVersion {
  classes = [];
  properties = [];
  variables = [];
  events = [];
  methods = [];
  functions = [];
  
  constructor(attrs) {

  }
}

function getProductVersion(product, version) {
  let apiUrl = `https://rawgit.com/${product.userName}/${product.productName}/${version}/doc/api.json`;
  let http = new HttpClient();

  return http.get(apiUrl).then(response => {
    let productVersion = new ProductVersion();
    productVersion.version = version;

    let api = response.content;

    productVersion.children = api.children;
    productVersion.groups = api.groups;
    checkForChildren(productVersion);
    checkForGroups(productVersion);

    product.versions.push(productVersion);
    return productVersion;
  });
}

@inject(ChangeLogParser)
export class Server {
  constructor(changeLogParser) {
    this.changeLogParser = changeLogParser;
    this.officialProducts = [];
    this.otherProducts = [];
  }

  getOfficialProducts() {
    if(this.officialProducts.length > 0){
      return Promise.resolve(this.officialProducts);
    }

    this.officialProducts = database.officialProducts.map(x => new Product(x, this));
    return Promise.resolve(this.officialProducts);
  }

  getProduct(userName, productName) {
    let found = this.otherProducts.find(x => x.userName === userName && x.productName === productName);
    if(found) {
      return Promise.resolve(found);
    }

    return this.getOfficialProducts().then(officialProducts => {
      found = officialProducts.find(x => x.userName === userName && x.productName === productName);

      if(!found) {
        found = new Product({userName:userName, productName:productName, latestVersion: 'master'}, this)
        this.otherProducts.push(found);
      }

      return found;
    });
  }

  getProductVersion(product, version) {
    if(product.isLoaded) {
      return getProductVersion(product, version);
    }

    return this.getProductDescription(this.changeLogParser, product)
      .then(x => getProductVersion(product, version));
  }

  getProductDescription(changeLogParser, product) {
    let packageUrl = `https://rawgit.com/${product.userName}/${product.productName}/${product.latestVersion}/package.json`;
    let changeLogUrl = `https://rawgit.com/${product.userName}/${product.productName}/${product.latestVersion}/doc/CHANGELOG.md`;

    return Promise.all([
      new HttpClient().get(packageUrl).then(response => {
        let pack = response.content;

        product.description = pack.description;
        product.bugsUrl = pack.bugs.url;
        product.repositoryUrl = pack.repository.url;

        if(pack.jspm && pack.jspm.dependencies) {
          product.dependencies = Object.keys(pack.jspm.dependencies)
            .filter(x => x.startsWith('aurelia-'))
            .map(x => x.replace('aurelia-', ''))
            .map(x => this.officialProducts.find(y => y.productName === x) || this.otherProducts.find(y => y.productName === x));
        }

        pack.keywords.forEach(keyword => {
          product.keywords.push(keyword);
        });
      }),
      new HttpClient().createRequest(changeLogUrl)
        .asGet()
        .withResponseType('text/markdown')
        .send().then(response => {
          product.availableVersions = changeLogParser.parseVersions(response.content);
        })
      ]).then(() => {
      product.isLoaded = true;
      return product;
    });
  }
}

function checkForChildren(obj) {
  if (obj.children) {
    obj.children.forEach(child => {
      let newChild = castObjectAsType(child, obj);
      checkForChildren(newChild);
    });
  }
}

function checkForGroups(obj) {
  if (obj && obj.groups) {
    obj.groups.forEach(group => {
      group.kindName = group.kind.name;
      obj.groups.push(new GroupModel(group));
      checkForGroups(group);
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
