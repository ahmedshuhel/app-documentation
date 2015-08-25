import {factory} from 'aurelia-dependency-injection';

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
  groups = [];
  constructor(data){
    Object.assign(this, data);
    this.prettyName = prettyName(this.name);
  }
}

function prettyName(s) {
  s =  s.replace(/(\-\w)/g, function(m){return m[1].toUpperCase();});
  s = s.replace(/([a-z])([A-Z])/g, '$1 $2')
  return s.charAt(0).toUpperCase() + s.slice(1);
}

@factory('LocalCache')

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
  constructor(data){
    Object.assign(this, data);
    this.kindName = this.kindString;
    this.prettyName = prettyName(this.name);
  };
}

export class GroupModel {
  id = -1;
  kind = -1;
  kindName = '';
  title = '';
  children = [];
  constructor(data){
    Object.assign(this, data);
    this.kindName = this.kindString;
  };
}

export class ClassModel {
  methods = [];
  constructorMethod = {};
  constructor(data){
    Object.assign(this, data);
    this.kindName = this.kindString;
  }
}

export class MethodModel {
  constructor(data){
    Object.assign(this, data);
    this.kindName = this.kindString;
  }
}

export class ConstructorModel {
  constructor(data){
    Object.assign(this, data);
    this.kindName = this.kindString;
  }
}

export class InterfaceModel {
  classes = [];
  properties = [];
  variables = [];
  methods = [];
  constructor(data){
    Object.assign(this, data);
    this.kindName = this.kindString;
  }
}

export class PropertyModel {
  constructor(data){
    Object.assign(this, data);
    this.kindName = this.kindString;
  }
}

export class VariableModel {
  constructor(data){
    Object.assign(this, data);
    this.kindName = this.kindString;
  }
}
