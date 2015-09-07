import {RawGitService} from 'services/raw-git';
import {NpmService} from 'services/npm';
import {ChangeLogService} from 'services/change-log';
import {inject} from 'aurelia-framework';
import {GitTagListService} from 'services/git-tag-list';

@inject(RawGitService, NpmService, ChangeLogService, GitTagListService)
export class RepositoryService {
  constructor(rawGitService, npmService, changeLogService, gitTagService) {
    this.rawGitService = rawGitService;
    this.npmService = npmService;
    this.changeLogService = changeLogService;
    this.gitTagService = gitTagService;
  }
  getOfficialRepos() {
    return this.rawGitService.getOfficialRepos();
  }
  getPluginRepos() {
    return this.rawGitService.getPluginRepos();
  }
  getRepositoryInfo(repo, version) {
    console.log('getting repository information');
    let tag = version || this.gitTagService.getLatestVersion(repo);
    return Promise.all([
      this.rawGitService.getRepositoryInfo(repo, tag),
      this.rawGitService.getPackageJson(repo, tag),
      this.rawGitService.getChangeLog(repo, tag)
    ]).then(() => {
      return this.npmService.parsePackageJson(repo);
    }).then(() => {
      if (!repo.isLoaded) {
        return this.changeLogService.parseChangeLog(repo);
      } else {
        Promise.resolve(false)
      }
    });
  }
  getAllRepositoryInfo() {

  }
  getPackageJson(repo) {
    return this.npmService.getPackageJson(repo);
  }
}
