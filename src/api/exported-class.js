import {inject} from 'aurelia-framework';
import {Server} from 'backend/server';

@inject(Server)
export class ExportedClass {
  constructor(server) {
    this.server = server;
  }

  activate(params) {
    return this.server.getProduct(params.userName, params.productName)
      .then(product => {
        product.select();
        return product.getVersion(params.version).then(productVersion => {
          product.preferredVersion = productVersion.version;
          this.product = product;
          this.exportedClass = productVersion.findClass(params.className);
          console.log(this.exportedClass);
        });
      });
  }
}
