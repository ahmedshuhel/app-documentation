import {inject} from 'aurelia-framework';
import {LocalCache} from 'services/local-cache';

@inject(LocalCache)
export class Plugins {
  constructor(localCache) {
    this.localCache = localCache;
  }
}
