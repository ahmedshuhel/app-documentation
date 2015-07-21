export class App {
  
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