export class LocalCache {
  repositories = [];
  plugins = [];
  kinds = [];
  allObjects = [];
  checkAddKind(data) {
    let match = this.kinds.filter(kind => {
      return kind.id === data.kind;
    })[0];
    if (!match) {
      this.kinds.push(new Kind(data.kind, data.kindString));
    }
    if (data.children) {
      data.children.forEach(child => {
        this.checkAddKind(child);
      });
    }
  }
  checkAddObjectReference(ref) {
    let match = this.allObjects.filter(obj => {
      return obj.id === ref.id;
    })[0];
    if (!match) {
      this.allObjects.push(new ObjectReference(ref.id, ref.name));
    }
  }
  getKindName(kindId) {
    let match = this.kinds.filter(kind => {
      return kind.id === kindId;
    })[0];
    return match ? match.name : '';
  }
}

class Kind {
  id = -1;
  name = '';
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class ObjectReference {
  id = -1;
  name = '';
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}
