import {inject, bindable} from 'aurelia-framework';
import {LocalCache} from 'services/local-cache';
import {RepositoryService} from 'services/repository';

@inject(LocalCache, RepositoryService)
export class Api {
  @bindable selectedModule;
  @bindable selectedVersion;
  constructor(localCache, repositoryService) {
    this.localCache = localCache;
    this.repositoryService = repositoryService;
  }
  activate(params) {
    this.selectedVersion = null;
    this.loadRepository(params.module);
  }
  selectedModuleChanged(newValue) {
    if (newValue) {
      this.keywords = newValue.keywords.join(',')
    }
  }
  selectedVersionChanged(newValue, oldValue) {
    if (oldValue) {
      this.loadRepository(stripOutAurelia(this.selectedModule.location), true);
    }
  }
  loadRepository(repoName, forceReload) {
    let repoMatch = this.localCache.repositories.find(repo => {
      return stripOutAurelia(repo.location) === repoName;
    });
    if (repoMatch && (!repoMatch.isLoaded || forceReload)) {
      repoMatch.cleanRepository();
      this.repositoryService.getRepositoryInfo(repoMatch, this.selectedVersion).then(resp => {
        this.selectedModule = resp;
        repoMatch.isLoaded = true;
      });
    } else if (repoMatch) {
      this.selectedModule = repoMatch;
    }
  }
}

// Remove when name is fixed
function stripOutAurelia(location) {
  return location.replace('aurelia/', '');
}
