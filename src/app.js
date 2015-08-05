import {inject} from 'aurelia-framework';
import {RawGitService} from 'services/raw-git';

@inject(RawGitService)
export class App {
  constructor(gitService){
    this.gitService = gitService;
  }
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([{
      route: ['', '/api', '/api/:module'],
      moduleId: './api',
      title: 'API',
      href: '#/api'
    },{
      route: ['/tutorial', '/tutorial/:module'],
      moduleId: './tutorial',
      title: 'Tutorial',
      href: '#/tutorial'
    }]);

    this.router = router;
  }
  activate(){
    return Promise.all([
      this.gitService.getOfficialRepos(),
      this.gitService.getPluginRepos()
    ]);
  }

  get currentRoute() {
    var route = null
    if (this.router.currentInstruction) {
      route = this.router.currentInstruction.fragment;
    }
    if (/^\/tutorial/.test(route)) {
      return 'tutorial';
    } else {
      return 'api';
    }
  }
}