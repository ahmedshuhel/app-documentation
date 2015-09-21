import {inject} from 'aurelia-framework';
import {RepositoryService} from 'services/repository';

@inject(RepositoryService)
export class Api {
  selectedModule;

  constructor(repositoryService) {
    this.repositoryService = repositoryService;
  }

  configureRouter(config, router){
    config.map([
      { route: '', moduleId: 'api/index', title: 'API Home' },
      { route: [':organization/:package', ':organization/:package/:version'], moduleId: 'api/repository' }
    ]);

    config.mapUnknownRoutes(instruction => instruction.config.moduleId = '');

    this.router = router;
  }

  activate() {
    return this.repositoryService.getOfficialRepos().then(repos => this.repos = repos);
  }
}
