import {inject} from 'aurelia-framework';
import {Server} from 'backend/server';

@inject(Server)
export class Index {
  constructor(server) {
    this.server = server;
  }

  configureRouter(config, router){
    config.map([
      { route: '', moduleId: './no-selection', title: 'API Home' },
      { route: [':userName/:productName', ':userName/:productName/:version'], moduleId: './product' },
      { route: ':userName/:productName/:version/:classOrInterface/:name', moduleId: './class-or-interface' }
    ]);

    config.mapUnknownRoutes(instruction => instruction.config.moduleId = '');

    this.router = router;
  }

  activate() {
    return this.server.getOfficialProducts().then(products => this.products = products);
  }
}
