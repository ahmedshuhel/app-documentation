let mmpRegex = /(\d+)/g;

export class ChangeLogService {
  parseChangeLog(repo) {
    let changeLog = repo.changeLog;
    let tempMinorVersions = [];
    let tempPatchVersions = [];
    let minorRegex = /(\n|^)## (.*?)\n/g;
    let minorVersions = changeLog.match(minorRegex);
    minorVersions.forEach(arr => {
      let thisArr = arr.replace(/(\r\n|\n|\r)/gm, '');
      thisArr = thisArr.replace('## ', '');
      thisArr = thisArr.replace(/ \(.*?\)/, '');
      tempMinorVersions.push(thisArr);
    });
    let patchRegex = /(\n|^#|^)### (.*?)\n/g;
    // let patchRegex = /\n### (.*?)\n/g;
    let patchVersions = changeLog.match(patchRegex);
    patchVersions.forEach(arr => {
      let thisArr = arr.replace(/(\r\n|\n|\r)/gm, '');
      thisArr = thisArr.replace('### ', '');
      thisArr = thisArr.replace(/ \(.*?\)/, '');
      tempPatchVersions.push(thisArr);
    });
    this.grabOnlyMinorMajorVersions(repo, tempPatchVersions, tempMinorVersions);
    return repo;
  }
  grabOnlyMinorMajorVersions(repo, tempPatch, tempMinor) {
    let latestMajorMinorCombos = [];
    tempMinor.forEach(version => {
      latestMajorMinorCombos.push(version);
    });
    tempPatch.forEach(version => {
      let [major, minor, patch] = version.match(mmpRegex);
      let matchedVersion = latestMajorMinorCombos.filter(combo => {
        let [comboMajor, comboMinor, comboPatch] = combo.match(mmpRegex);
        return comboMajor === major && comboMinor === minor;
      })[0];
      if (matchedVersion) {
        let [matchMajor, matchMinor, matchPatch] = matchedVersion.match(mmpRegex);
        if (matchPatch < patch) {
          let matchedIndex = latestMajorMinorCombos.indexOf(matchedVersion);
          latestMajorMinorCombos.splice(matchedIndex, 1);
          latestMajorMinorCombos.splice(matchedIndex, 0, version);
        }
      }
    });
    latestMajorMinorCombos.forEach(version => {
      repo.myVersions.push(new Version(version));
    });
  }
}

class Version {
  constructor(version) {
    this.version = version;
    this.display = this.getDisplay();
  }
  getDisplay() {
    let [major, minor, patch] = this.version.match(mmpRegex);
    return major + '.' + minor + '.0';
  }
}
