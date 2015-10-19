import {inject} from 'aurelia-framework';

@inject(Element)
export class Test {
  constructor(private element: Element) {
    this.element = element;
  }
}
