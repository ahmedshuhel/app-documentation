import {GitHub} from './github';

export class App {
  static inject = [GitHub];
  
  constructor(github){
    this.github = github;
    this.name = 'Aurelia Documentation';
  }

  attached(){
    this.github.getTags();
  }
}
