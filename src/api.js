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
    let repoMatch = this.localCache.repositories.find(repo => {
      return repo.name === params.module;
    });
    if (repoMatch) {
      this.gitService.getRepositoryInfo(repoMatch).then(resp => {
        this.selectedModule = resp;
      }); 
    } 
    // else error out?
  }
}
