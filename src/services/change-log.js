export class ChangeLogService {
  parseChangeLog(repo) {
    let changeLog = repo.changeLog;
    let re = /\n## (.*?)\n/g;
    let myArray = changeLog.match(re);
    myArray.forEach(arr => {
      let thisArr = arr.replace(/(\r\n|\n|\r)/gm,'');
      thisArr = thisArr.replace('## ','');
      thisArr = thisArr.replace(/ \(.*?\)/,'');
      repo.versions.push(thisArr);
    });
    return repo;
  }
}
