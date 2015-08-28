import {bindable, containerless} from 'aurelia-framework';

@containerless()
export class AuClass {
  @bindable value;
  isExpanded = false;
  toggleExpand(){
    this.isExpanded = !this.isExpanded;
  }
}
