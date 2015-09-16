import {bindable, inject} from 'aurelia-framework';
import {LocalCache} from 'services/local-cache';
import {RepositoryService} from 'services/repository';
import {Api} from 'api';

@inject(LocalCache, RepositoryService, Api)
export class Repository {
  @bindable selectedModule;
  @bindable selectedVersion;
  isLoading = false;
  constructor(localCache, repositoryService, api) {
    this.localCache = localCache;
    this.repositoryService = repositoryService;
    this.api = api;
  }
  activate(params) {
    this.selectedVersion = null;
    this.loadRepository(params.name);
  }
  selectedModuleChanged(newValue) {
    if (newValue) {
      this.keywords = newValue.keywords.join(',')
    }
  }
  selectedVersionChanged(newValue, oldValue) {
    if (oldValue) {
      this.loadRepository(this.selectedModule.name, true);
    }
  }
  loadRepository(repoName, forceReload) {
    if (!this.isLoading) {
      let repoMatch = this.localCache.repositories.find(repo => {
        return repo.name === repoName;
      });
      if (repoMatch && (!repoMatch.isLoaded || forceReload)) {
        repoMatch.cleanRepository();
        this.isLoading = true;
        this.repositoryService.getRepositoryInfo(repoMatch, this.selectedVersion).then(resp => {
          repoMatch.cleanUpName();
          repoMatch.isLoaded = true;
          this.isChanging = false;
          this.setSelectedModule(resp);
          this.isLoading = false;
        });
      } else if (repoMatch) {
        this.isChanging = false;
        this.setSelectedModule(repoMatch);
      }
    }
  }
  setSelectedModule(module) {
    this.selectedModule = module;
    this.api.selectedModule = module;
  }
}
