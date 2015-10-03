import {join} from 'aurelia-framework';

function prettyName(s) {
  s =  s.replace(/(\-\w)/g, function(m) {
    return m[1].toUpperCase();
  });
  s = s.replace(/([a-z])([A-Z])/g, '$1 $2');
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export class Product {
  static previousSelection = null;

  constructor(attrs, server) {
    this.userName = attrs.userName;
    this.productName = attrs.productName;
    this.latestVersion = 'latest';
    this.preferredVersion = this.latestVersion;
    this.tutorials = attrs.tutorials.map(a => new Tutorial(a, this));
    this.isSelected = false;
    this.versions = [];
    this.server = server;
    this.baseUrl = `https://rawgit.com/${this.userName}/${this.productName}`;
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

  getTutorialBySlug(articleSlug) {
    return this.tutorials.find(x => x.slug === articleSlug);
  }

  getTutorialForProfile(profileName) {
    return this.tutorials.filter(x => x.matchesProfile(profileName));
  }

  configureLatestVersion() {
    if(this.latestVersion === 'latest') {
      this.latestVersion = this.availableVersions[0].version;

      if(this.preferredVersion === 'latest') {
        this.preferredVersion = this.latestVersion;
      }
    }
  }
}

export class ProductVersion {
  classes = [];
  interfaces = [];
  properties = [];
  variables = [];
  events = [];
  methods = [];
  functions = [];
  articles = [];
  keywords = [];

  constructor(product, version, server) {
    this.product = product;
    this.version = version;
    this.server = server;
    this.baseUrl = join(product.baseUrl, version);
    this.apiUrl = join(this.baseUrl, 'doc/api.json');
    this.packageUrl = join(this.baseUrl, 'package.json');
  }

  findClass(className) {
    return this.classes.find(x => x.name === className);
  }

  findInterface(interfaceName) {
    return this.interfaces.find(x => x.name === interfaceName);
  }

  getArticle(slug, culture) {
    let found = this.articles.find(x => x.slug === slug);

    if(!found) {
      return Promise.reject();
    }

    return found.getTranslation(culture);
  }
}

export class Article {
  constructor(attrs, productVersion, server) {
    this.title = attrs.title;
    this.productVersion = productVersion;
    this.server = server;
    this.baseUrl = productVersion.baseUrl;
    this.primaryUrl = join(this.baseUrl, attrs.href);
    this.slug = this.primaryUrl.substring(this.primaryUrl.lastIndexOf('/') + 1).replace('.html', '');
    this.translations = {};
  }

  getTranslation(culture) {
    if(culture in this.translations) {
      return Promise.resolve(this.translations[culture]);
    }

    //TODO: check available translations
    if(this.primaryTranslation) {
      return this._loadTranslation(culture);
    }

    return this._loadTranslation('en-US')
      .then(translation => {
        this.primaryTranslation = translation;
        return this._loadTranslation(culture);
      });
  }

  _loadTranslation(culture) {
    let translation = new ArticleTranslation(this, culture);
    this.translations[culture] = translation;

    return this.server.loadArticleTranslation(translation)
      .then(translation => {
        if(!translation.content) {
          //no translation found
        }

        return translation;
      });
  }
}

export class ArticleTranslation {
  constructor(article, culture) {
    this.url = article.primaryUrl;

    if(culture !== 'en-US') {
      this.url = this.url.replace('en-US', culture);
    }
  }
}

export class Tutorial {
  static previousSelection = null;

  constructor(attrs, product) {
    this.title = attrs.title;
    this.slug = attrs.href.substring(attrs.href.lastIndexOf('/') + 1).replace('.html', '');
    this.href = attrs.href;
    this.profiles = attrs.profiles;
    this.product = product;
  }

  getOrderForProfile(profileName) {
    return this.profiles.find(x => x.name === profileName).order;
  }

  matchesProfile(profileName) {
    if(this.profiles) {
      return !!this.profiles.find(x => x.name === profileName);
    }

    return false;
  }

  select(){
    if(Tutorial.previousSelection) {
      Tutorial.previousSelection.isSelected = false;
    }

    Tutorial.previousSelection = this;
    this.isSelected = true;
  }
}

export class ChildModel {
  id = -1;
  kind = -1;
  kindString = '';
  kindName = '';
  name = '';
  originalName = '';
  children = [];
  classes = [];
  groups = [];
  flags = {};
  constructor(data) {
    Object.assign(this, data);
    this.kindName = this.kindString;
    this.prettyName = prettyName(this.name);
  }
}

export class GroupModel {
  id = -1;
  kind = -1;
  kindName = '';
  title = '';
  children = [];
  constructor(data) {
    Object.assign(this, data);
    this.kindName = this.kindName;
  }
}

export class ClassModel {
  comment = {};
  methods = [];
  groups = [];
  flags = {};
  properties = [];
  constructorMethod = {};
  constructor(data) {
    Object.assign(this, data);
    this.kindName = this.kindString;
  }
}

export class MethodModel {
  signature = {};
  constructor(data) {
    Object.assign(this, data);
    this.kindName = this.kindString;
  }
}

export class ConstructorModel {
  signature = {};
  constructor(data) {
    Object.assign(this, data);
    this.kindName = this.kindString;
  }
}

export class InterfaceModel {
  classes = [];
  properties = [];
  variables = [];
  methods = [];
  constructor(data) {
    Object.assign(this, data);
    this.kindName = this.kindString;
  }
}

export class PropertyModel {
  constructor(data) {
    Object.assign(this, data);
    this.kindName = this.kindString;
  }
}

export class SignatureModel {
  comment = {};
  constructor(data) {
    Object.assign(this, data);
    this.kindName = this.kindString;
  }
}

export class VariableModel {
  constructor(data) {
    Object.assign(this, data);
    this.kindName = this.kindString;
  }
}

export class FunctionModel {
  constructor(data) {
    Object.assign(this, data);
    this.kindName = this.kindString;
    this.signature = this.signatures[0];
  }
}
