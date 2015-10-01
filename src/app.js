export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia Docs';
    config.map([
      { route: ['', 'article'], moduleId: 'article/index', title: 'Article' },
      { route: 'api', moduleId: 'api/index', title: 'API' }
    ]);

    this.router = router;
  }
}
