export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia Docs';
    config.map([
      { route: '', moduleId: 'article/index', title: 'Article' },
      { route: ':userName/:productName/:version/doc/article', moduleId: 'article/index', title: 'Article' },
      { route: 'api', moduleId: 'api/index', title: 'API' },
      { route: ':userName/:productName/:version/doc/api', moduleId: 'api/index', title: 'API' }
    ]);

    this.router = router;
  }
}
