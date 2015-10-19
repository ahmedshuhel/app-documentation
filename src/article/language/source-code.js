import {inject, bindable, processContent, noView, TargetInstruction} from 'aurelia-framework';
import {join} from 'aurelia-path';
import {Loader} from 'aurelia-loader';

@noView()
@processContent(extractRawSource)
@inject(TargetInstruction, Loader)
export class SourceCode {
  @bindable src;
  @bindable lang;

  constructor(instruction, loader) {
    this.raw = instruction.elementInstruction.raw;
    this.loader = loader;
  }

  bind(context) {
    if(this.src){
      this.path = join(context.url, '../../../' + this.src);
      if(context.local) {
        this.path = './' + this.path;
      }
    }
  }

  load() {
    if(this.path) {
      return this.loader.loadText(this.path).then(x => this.raw = x);
    } else {
      return Promise.resolve(this.raw);
    }
  }
}

function extractRawSource(compiler, resources, element, instruction) {
  instruction.raw = element.innerHTML;
  element.innerHTML = '';
  return false;
}
