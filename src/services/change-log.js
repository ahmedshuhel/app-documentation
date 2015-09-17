let mmpRegex = /(\d+)/g;

export class ChangeLogService {
  // Parse the change log markdown file
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
    let patchVersions = changeLog.match(patchRegex);
    patchVersions.forEach(arr => {
      let thisArr = arr.replace(/(\r\n|\n|\r)/gm, '');
      thisArr = thisArr.replace('### ', '');
      thisArr = thisArr.replace(/ \(.*?\)/, '');
      tempPatchVersions.push(thisArr);
    });
    this.grabOnlyMinorPatchVersions(repo, tempPatchVersions, tempMinorVersions);
    return repo;
  }
  // We only want the minor and patch versions to check for duplicates
  grabOnlyMinorPatchVersions(repo, tempPatch, tempMinor) {
    let latestMinorPatchCombos = [];
    tempMinor.forEach(version => {
      latestMinorPatchCombos.push(version);
    });
    tempPatch.forEach(version => {
      let [major, minor, patch] = version.match(mmpRegex);
      let matchedVersion = latestMinorPatchCombos.filter(combo => {
        let [comboMajor, comboMinor, comboPatch] = combo.match(mmpRegex);
        return comboMajor === major && comboMinor === minor;
      })[0];
      if (matchedVersion) {
        let [matchMajor, matchMinor, matchPatch] = matchedVersion.match(mmpRegex);
        if (matchPatch < patch) {
          let matchedIndex = latestMinorPatchCombos.indexOf(matchedVersion);
          latestMinorPatchCombos.splice(matchedIndex, 1);
          latestMinorPatchCombos.splice(matchedIndex, 0, version);
        }
      }
    });
    latestMinorPatchCombos.forEach(version => {
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
