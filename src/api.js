import {inject} from 'aurelia-framework';
import {LocalCache} from 'services/local-cache';
import {RepositoryService} from 'services/repository';

@inject(LocalCache, RepositoryService)
export class Api {
  selectedModule;
  constructor(localCache, repositoryService) {
    this.localCache = localCache;
    this.repositoryService = repositoryService;
  }
  activate(params) {
    let repoMatch = this.localCache.repositories.find(repo => {
      return repo.name === params.module;
    });
    if (repoMatch && !repoMatch.isLoaded) {
      this.repositoryService.getRepositoryInfo(repoMatch).then(resp => {
        this.selectedModule = resp;
        repoMatch.isLoaded = true;
      });
    } else if (repoMatch) {
      this.selectedModule = repoMatch;
    }
  }
}
