export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([{ 
        route: '', 
        moduleId: './tutorials',
        title: 'Tutorials',
        href: '#/tutorials',
        nav: true 
    }]);

    this.router = router;
  }
}
