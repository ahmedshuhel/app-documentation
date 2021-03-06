import {inject} from 'aurelia-framework';
import {Server} from 'backend/server';

@inject(Server)
export class ClassOrInterface {
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

          if(params.classOrInterface === 'class') {
            this.target = productVersion.findClass(params.name);
          } else {
            this.target = productVersion.findInterface(params.name);
          }

          this.constructorSignature = this.target.constructorMethod ? this.target.constructorMethod.signature : null;
        });
      });
  }
}
