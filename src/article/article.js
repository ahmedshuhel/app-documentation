import {bindable, inject, InlineViewStrategy} from 'aurelia-framework';
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
    this.disposeCultureChangeCallback = this.culture.onChange(() => this.loadArticle());
  }

  activate(params) {
    this.articleSlug = params.articleSlug;

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
    return this.productVersion.getArticle(this.articleSlug, this.culture.current)
      .then(article => {
        article.view = article.view || new InlineViewStrategy(`
          <template>${article.title}</template>
        `);

        this.article = article;
      }).catch(() => {
        //TODO: problem with article
      });
  }

  detached() {
    this.disposeCultureChangeCallback();
  }
}
