import {inject, ObserverLocator} from 'aurelia-framework';

@inject(ObserverLocator)
export class Culture {
  current = 'en-US';
  base = 'en-US';
  options = ['en-US'];

  _handlers = [];

  constructor(observerLocator) {
    observerLocator.getObserver(this, 'current')
      .subscribe(newValue => this.currentChanged(newValue));
  }

  currentChanged(newCulture) {
    this._handlers.forEach(x => x(newCulture));
  }

  onChange(callback) {
    this._handlers.push(callback);

    return () => {
      let index = this._handlers.indexOf(callback);
      this._handlers.splice(index, 1);
    };
  }
}
