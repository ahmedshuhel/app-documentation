import {inject, ObserverLocator} from 'aurelia-framework';
import {Cache} from './cache';

@inject(ObserverLocator, Cache)
export class Culture {
  options = ['en-US', 'pt-BR'];
  _handlers = [];

  constructor(observerLocator, cache) {
    this.cache = cache;
    this.base = this.options[0];
    this.current = cache.getItem('culture.current') || this.base;

    observerLocator.getObserver(this, 'current')
      .subscribe(newValue => this._currentChanged(newValue));
  }

  _currentChanged(newValue) {
    this.cache.setItem('culture.current', newValue);
    this._handlers.forEach(x => x(newValue));
  }

  onChange(callback) {
    let handlers = this._handlers;

    handlers.push(callback);

    return {
      dispose() {
        let index = handlers.indexOf(callback);

        if (index !== -1) {
          handlers.splice(index, 1);
        }
      }
    };
  }
}
