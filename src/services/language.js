import {inject, ObserverLocator} from 'aurelia-framework';
import {Cache} from './cache';

@inject(ObserverLocator, Cache)
export class Language {
  options = ['ES 2016', 'ES 2015', 'TypeScript'];
  _handlers = [];

  constructor(observerLocator, cache) {
    this.cache = cache;
    this.current = cache.getItem('language.current') || this.options[0];

    observerLocator.getObserver(this, 'current')
      .subscribe(newValue => this._currentChanged(newValue));
  }

  _currentChanged(newValue) {
    this.cache.setItem('language.current', newValue);
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
