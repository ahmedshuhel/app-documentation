let versions = {
  'dependency-injection': '0.10.0',
  'binding': '0.9.0'
}

export class GitTagListService {
  getLatestVersion(repo) {
    let repoName = stripOutAurelia(repo.location);
    return versions[repoName];
  }
}

function stripOutAurelia(location) {
  return location.replace('aurelia/', '');
}
