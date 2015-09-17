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
    // In case the selected repository changes, null out the version so it won't try to load
    //   the wrong version from the previously selected library
    this.selectedVersion = null;
    // Load the selected repository
    this.loadRepository(params.name);
  }
  selectedModuleChanged(newValue) {
    // Combine the keywords to show
    if (newValue) {
      this.keywords = newValue.keywords.join(',')
    }
  }
  selectedVersionChanged(newValue, oldValue) {
    // Only load the repository if there was a previously selected value
    //   since the initial select being hydrated
    if (oldValue) {
      // Force the service to hit the server
      this.loadRepository(this.selectedModule.name, true);
    }
  }
  loadRepository(repoName, forceReload) {
    // Don't let the method fire twice while still loading
    if (!this.isLoading) {
      // Find the matching repository
      let repoMatch = this.localCache.repositories.find(repo => {
        return repo.name === repoName;
      });
      // If there is a match and it's not been loaded yet or being forced to reload
      //   the reason we need the isLoaded state is because the repository.json
      //   contains a smaller DTO of the fully loaded repository
      if (repoMatch && (!repoMatch.isLoaded || forceReload)) {
        repoMatch.cleanRepository();
        this.isLoading = true;
        this.repositoryService.getRepositoryInfo(repoMatch, this.selectedVersion).then(resp => {
          // Have to clean up the names because the API.json files are checked in with extra
          //   double-quotes in the name
          repoMatch.cleanUpName();
          repoMatch.isLoaded = true;
          this.setSelectedModule(resp);
          this.isLoading = false;
        });
      } else if (repoMatch) {
        this.setSelectedModule(repoMatch);
      }
    }
  }
  setSelectedModule(module) {
    this.selectedModule = module;
    this.api.selectedModule = module;
  }
}
