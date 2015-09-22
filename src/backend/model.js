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

export class ProductVersion {
  classes = [];
  properties = [];
  variables = [];
  events = [];
  methods = [];
  functions = [];

  findClass(className) {
    return this.classes.find(x => x.name === className);
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
  }
}
