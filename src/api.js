import {inject} from 'aurelia-framework';
import {Server} from 'backend/server';

@inject(Server)
export class Api {
  constructor(server) {
    this.server = server;
  }

  configureRouter(config, router){
    config.map([
      { route: '', moduleId: 'api/index', title: 'API Home' },
      { route: [':userName/:productName', ':userName/:productName/:version'], moduleId: 'api/product' }
    ]);

    config.mapUnknownRoutes(instruction => instruction.config.moduleId = '');

    this.router = router;
  }

  activate() {
    return this.server.getOfficialProducts().then(products => this.products = products);
  }
}
