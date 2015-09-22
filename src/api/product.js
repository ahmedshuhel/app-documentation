import {bindable, inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {Server} from 'backend/server';

@inject(Server, Router)
export class Repository {
  @bindable selectedVersion;

  constructor(server, router) {
    this.server = server;
    this.router = router;
  }

  activate(params) {
    return this.server.getProduct(params.userName, params.productName)
      .then(product => {
        product.select();
        return product.getVersion(params.version).then(productVersion => {
          product.preferredVersion = productVersion.version;
          this.product = product;
          this.selectedProductVersion = productVersion;
          this.selectedVersion = params.version;
        });
      });
  }

  selectedVersionChanged(newValue, oldValue) {
    if(this.product.preferredVersion !== newValue){
      this.router.navigate('#/api/' + this.product.userName + '/' + this.product.productName + '/' + newValue);
    }
  }
}
