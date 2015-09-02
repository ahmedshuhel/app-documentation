export class ChangeLogService {
  parseChangeLog(repo) {
    let changeLog = repo.changeLog;
    let majorRegex = /\n## (.*?)\n/g;
    let majorVersions = changeLog.match(majorRegex);
    majorVersions.forEach(arr => {
      let thisArr = arr.replace(/(\r\n|\n|\r)/gm, '');
      thisArr = thisArr.replace('## ', '');
      thisArr = thisArr.replace(/ \(.*?\)/, '');
      repo.majorVersions.push(thisArr);
    });
    let minorRegex = /\n### (.*?)\n/g;
    let minorVersions = changeLog.match(minorRegex);
    minorVersions.forEach(arr => {
      let thisArr = arr.replace(/(\r\n|\n|\r)/gm, '');
      thisArr = thisArr.replace('### ', '');
      thisArr = thisArr.replace(/ \(.*?\)/, '');
      repo.minorVersions.push(thisArr);
    });
    return repo;
  }
}
