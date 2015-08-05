import {inject} from 'aurelia-framework';
import {LocalCache} from 'services/local-cache';
import {RawGitService} from 'services/raw-git';

@inject(LocalCache, RawGitService)
export class Api{
  constructor(localCache, gitService){
    this.localCache = localCache;
    this.gitService = gitService;
  }
  selectedModule;
  activate(params){
    let repoMatch = this.localCache.repositories.filter(repo => {
      return repo.name === params.module;
    })[0];
    this.gitService.getRepositoryInfo(repoMatch).then(resp => {
      this.selectedModule = resp;
    });
  }
}
