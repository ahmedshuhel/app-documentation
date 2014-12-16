import {GitHub} from './github';

export class App {
  static inject() { return [GitHub]; }
  constructor(github){
    this.github = github;
    this.name = 'Aurelia Documentation';
  }

  attached(){
    this.github.getTags();
  }
}