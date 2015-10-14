import {bindable, inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Server} from 'backend/server';
import {Culture} from 'services/culture';

@inject(Server, Router, Culture)
export class Article {
  constructor(server, router, culture) {
    this.server = server;
    this.router = router;
    this.culture = culture;
  }

  attached() {
    this.cultureSubscription = this.culture.onChange(() => this.loadArticle());
  }

  activate(params) {
    this.articleSlug = params.articleSlug;
    this.local = params.local === 'true';

    return this.server.getProduct(params.userName, params.productName)
      .then(product => {
        let tutorial = product.getTutorialBySlug(params.articleSlug);
        if(tutorial) {
          tutorial.select();
        }

        return product.getVersion(params.version)
      }).then(productVersion => {
        this.productVersion = productVersion;
        return this.loadArticle();
      });
  }

  loadArticle() {
    return this.productVersion.getArticle(this.articleSlug, this.culture.current, this.local)
      .then(article => this.article = article);
  }

  detached() {
    this.cultureSubscription.dispose();
  }
}
