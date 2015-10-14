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
    this._handlers.push(callback);

    return {
      dispose() {
        let index = this._handlers.indexOf(callback);
        this._handlers.splice(index, 1);
      }
    };
  }
}
