import {bindable, inject} from 'aurelia-framework';
import {Server} from 'backend/server';

@inject(Server)
export class Index {
  profiles = ['Developer', 'Newbie'];
  tutorials = null;
  @bindable selectedProfile = 'Developer';

  constructor(server) {
    this.server = server;
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
    return this.selectedProfileChanged(this.selectedProfile);
  }

  selectedProfileChanged(newProfile) {
    return this.server.getTutorialsForProfile(newProfile)
      .then(tutorials => this.tutorials = tutorials);
  }
}
