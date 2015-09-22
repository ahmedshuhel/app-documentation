export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia Docs';

    config.map([
      { route: ['', 'tutorial', 'tutorial/:module'], moduleId: 'tutorial', title: 'Tutorial', href: '#/tutorial' },
      { route: 'api', moduleId: 'api/index', title: 'API' }
    ]);

    this.router = router;
  }
}
