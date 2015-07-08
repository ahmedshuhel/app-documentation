export class App {
  configureRouter(config, router){
    config.title = 'Aurelia';
    config.map([{ 
        route: ['', 'tutorials(/:tutorial)'], 
        moduleId: './tutorials',
        title: 'Tutorials',
        href: '#/tutorials',
        nav: true 
    },{ 
        route: 'api', 
        moduleId: './api', 
        title: 'API Docs',
        nav: true 
    }]);

    this.router = router;
  }
}
