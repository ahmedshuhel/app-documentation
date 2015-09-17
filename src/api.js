import {LocalCache} from 'services/local-cache';

export class Api {
  // LocalCache is a data store with repositories and other info
  static inject = [LocalCache];
  // Which module is currently selected and visible?
  selectedModule;
  // Which version has been selected in the dropdown?
  selectedVersion;
  configureRouter(config, router){
    config.map([
      { route: ['','index'], name: 'index', moduleId: 'api/index', nav: true, title:'Index' },
      { route: 'repository/:name', name: 'repository', moduleId: 'api/repository', nav: true, title:'Repositories', href: 'repository' },
      { route: 'classes/:id', name: 'classes', moduleId: 'api/classes', nav: true, title:'Classes', href: 'classes' }
    ]);
    this.router = router;
    config.mapUnknownRoutes(instruction => {
      instruction.config.moduleId = 'index';
    });
  }
  constructor(localCache) {
    this.localCache = localCache;
  }
  activate(params) {
    this.selectedVersion = null;
  }
}
