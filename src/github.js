import {HttpClient} from 'aurelia-http-client';
import {LogManager} from 'aurelia-framework';

var logger = LogManager.getLogger('github');

export class GitHub {
  static inject = [HttpClient];
  
  constructor(http){
    this.http = http;
  }

  getTags(library){
    //https://developer.github.com/v3/git/refs/#get-all-references
    logger.error('getTags is not yet implemented.');
  }

  getPackageInfo(library, tag){
    logger.error('getPackageInfo is not yet implemented.');
  }
}
