import {Culture} from 'services/culture';
import {Language} from 'services/language';
import {inject} from 'aurelia-framework';

@inject(Culture, Language)
export class App {
  constructor(culture, language) {
    this.culture = culture;
    this.language = language;
  }

  configureRouter(config, router) {
    config.title = 'Aurelia Docs';
    config.map([
      { route: '', moduleId: 'article/index', title: 'Article' },
      { route: ':userName/:productName/:version/doc/article', moduleId: 'article/index', title: 'Article' },
      { route: 'doc/article', moduleId: 'article/index', title: 'Local Article', name: 'local' },

      { route: 'api', moduleId: 'api/index', title: 'API' },
      { route: ':userName/:productName/:version/doc/api', moduleId: 'api/index', title: 'API' }
    ]);

    this.router = router;
  }
}
