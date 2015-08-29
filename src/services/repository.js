import {RawGitService} from 'services/raw-git';
import {NpmService} from 'services/npm';
import {ChangeLogService} from 'services/change-log';
import {inject} from 'aurelia-framework';

@inject(RawGitService, NpmService, ChangeLogService)
export class RepositoryService {
  constructor(rawGitService, npmService, changeLogService) {
    this.rawGitService = rawGitService;
    this.npmService = npmService;
    this.changeLogService = changeLogService;
  }
  getOfficialRepos() {
    return this.rawGitService.getOfficialRepos();
  }
  getPluginRepos() {
    return this.rawGitService.getPluginRepos();
  }
  getRepositoryInfo(repo) {
    return Promise.all([
      this.rawGitService.getRepositoryInfo(repo),
      this.rawGitService.getPackageJson(repo),
      this.rawGitService.getChangeLog(repo)
    ]).then(() => {
      return this.npmService.parsePackageJson(repo);
    }).then(() => {
      return this.changeLogService.parseChangeLog(repo);
    })
  }
  getPackageJson(repo) {
    return this.npmService.getPackageJson(repo);
  }
}
