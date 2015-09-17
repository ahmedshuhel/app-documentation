export class RepositoryModel {
  id = -1;
  name = '';
  description = '';
  flags = {};
  kind = -1;
  isLoaded = false;
  children = [];
  classes = [];
  properties = [];
  variables = [];
  events = [];
  methods = [];
  functions = [];
  groups = [];
  keywords = [];
  usedBy = [];
  bugsUrl = '';
  repositoryUrl = '';
  changeLog = {};
  majorVersions = [];
  myVersions = [];
  minorVersions = [];
  constructor(data) {
    Object.assign(this, data);
    this.prettyName = prettyName(this.name);
    this.cleanUpName();
  }
  cleanUpName() {
    if (this.location && this.location.indexOf('aurelia/') > -1) {
      this.name = stripOutAurelia(this.location);
    }
  }
  cleanRepository() {
    this.children.splice(0, this.children.length);
    this.classes.splice(0, this.classes.length);
    this.properties.splice(0, this.properties.length);
    this.variables.splice(0, this.variables.length);
    this.events.splice(0, this.events.length);
    this.methods.splice(0, this.methods.length);
    this.functions.splice(0, this.functions.length);
    this.groups.splice(0, this.groups.length);
    this.keywords.splice(0, this.keywords.length);
    this.usedBy.splice(0, this.usedBy.length);
  }
}

// Have to strip aurelia out of the location to construct the name
function stripOutAurelia(location) {
  return location.replace('aurelia/', '');
}

// Make a PascalCase'd and spaced version of the name from the dasherized-version
function prettyName(s) {
  s =  s.replace(/(\-\w)/g, function(m) {
    return m[1].toUpperCase();
  });
  s = s.replace(/([a-z])([A-Z])/g, '$1 $2');
  return s.charAt(0).toUpperCase() + s.slice(1);
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
