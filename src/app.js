import {inject} from 'aurelia-framework';
import {RepositoryService} from 'services/repository';

@inject(RepositoryService)
export class App {
  constructor(repositoryService){
    this.repositoryService = repositoryService;
  }
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([{
      route: ['', '/api', '/api/:module', '/api/:module/:version'],
      moduleId: './api',
      title: 'API',
      href: '#/api'
    },{
      route: ['/tutorial', '/tutorial/:module'],
      moduleId: './tutorial',
      title: 'Tutorial',
      href: '#/tutorial'
    }]);

    this.router = router;
  }
  activate(){
    return Promise.all([
      this.repositoryService.getOfficialRepos(),
      this.repositoryService.getPluginRepos()
    ]);
  }

  get currentRoute() {
    let route = null
    if (this.router.currentInstruction) {
      route = this.router.currentInstruction.fragment;
    }
    if (/^\/tutorial/.test(route)) {
      return 'tutorial';
    } else {
      return 'api';
    }
  }
}