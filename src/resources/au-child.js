import {bindable, containerless} from 'aurelia-framework';

@containerless()
export class AuChild {
  @bindable value;
  isExpanded = false;
  toggleExpand(){
    this.isExpanded = !this.isExpanded;
  }
}
