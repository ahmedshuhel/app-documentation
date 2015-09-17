import {inject} from 'aurelia-framework';
import {RepositoryService} from 'services/repository';

@inject(RepositoryService)
export class App {
  constructor(repositoryService) {
    this.repositoryService = repositoryService;
  }
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([{
      route: ['', '/api'],
      moduleId: 'api',
      title: 'API'
    }, {
      route: ['/tutorial', '/tutorial/:module'],
      moduleId: './tutorial',
      title: 'Tutorial',
      href: '#/tutorial'
    }, {
      route: '/plugins',
      moduleId: './plugins',
      href: '#/plugins'
    }]);
    this.router = router;
  }
  activate() {
    // Go load all repos and plugins from aurelia-registry
    return Promise.all([
      this.repositoryService.getOfficialRepos(),
      this.repositoryService.getPluginRepos()
    ]);
  }
}
