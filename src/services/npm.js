export class NpmService {
  parsePackageJson(repo) {
    let packageJson = repo.packageJson;
    repo.description = packageJson.description;
    repo.version = packageJson.version;
    repo.bugsUrl = packageJson.bugs.url;
    repo.repositoryUrl = packageJson.repository.url;
    packageJson.keywords.forEach(keyword => {
      repo.keywords.push(keyword);
    });
    if (packageJson.usedBy) {
      packageJson.usedBy.forEach(consumer => {
        repo.usedBy.push(consumer);
      });
    }
    return repo;
  }
}
