import {Redirect} from 'aurelia-router';

export class NoSelection {
  canActivate() {
  //  if(Product.previousSelection) {
  //    let product = Product.previousSelection;
  //    return new Redirect(`api/${product.userName}/${product.productName}/${product.preferredVersion}`);
  //  }

    return true;
  }
}
