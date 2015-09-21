import {bindable, inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {RepositoryService} from 'services/repository';
import {Api} from 'api';

@inject(RepositoryService, Api, Router)
export class Repository {
  @bindable selectedVersion;
  isLoading = false;

  constructor(repositoryService, api, router) {
    this.repositoryService = repositoryService;
    this.api = api;
    this.router = router;
  }

  activate(params) {
    return this.repositoryService.getRepositoryInfo(params.organization, params.package, params.version).then(resp => {
      this.selectedModule = resp;
      this.api.selectedModule = resp;
      this.selectedVersion = params.version;
      this.keywords = resp.keywords.join(', ');
    });
  }

  selectedVersionChanged(newValue, oldValue) {
    let lastVersion = this.selectedModule.preferredVersion;
    this.selectedModule.preferredVersion = newValue;

    if(lastVersion !== this.selectedModule.preferredVersion){
      this.router.navigate('#/api/' + this.selectedModule.organization + '/' + this.selectedModule.name + '/' + this.selectedModule.preferredVersion);
    }
  }
}
