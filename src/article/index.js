import {bindable, inject} from 'aurelia-framework';
import {Server} from 'backend/server';

@inject(Server)
export class Index {
  profiles = [{name:'a Developer', value:'developer'}];
  tutorials = null;
  @bindable selectedProfile;

  constructor(server) {
    this.server = server;
    this.selectedProfile = this.profiles[0];
  }

  configureRouter(config, router) {
    config.map([
      { route: '', moduleId: './no-selection', title: 'API Home' },
      { route: [':userName/:productName/:version/:articleSlug'], moduleId: './article' }
    ]);

    config.mapUnknownRoutes(instruction => instruction.config.moduleId = '');

    this.router = router;
  }

  activate() {
    return this.selectedProfileChanged(this.selectedProfile.value);
  }

  selectedProfileChanged(newProfile) {
    return this.server.getTutorialsForProfile(newProfile.value)
      .then(tutorials => this.tutorials = tutorials);
  }
}
