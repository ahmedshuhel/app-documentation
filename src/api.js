import {LocalCache} from 'services/local-cache';

export class Api {
  static inject = [LocalCache];
  selectedModule;
  selectedVersion;
  configureRouter(config, router){
    config.map([
      { route: ['','index'], name: 'index', moduleId: 'api/index', nav: true, title:'Index' },
      { route: 'repository/:name', name: 'repository', moduleId: 'api/repository', nav: true, title:'Repositories', href: 'repository' },
      { route: 'classes/:id', name: 'classes', moduleId: 'api/classes', nav: true, title:'Classes', href: 'classes' }
    ]);
    this.router = router;
    config.mapUnknownRoutes(instruction => {
      console.log(instruction)
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
