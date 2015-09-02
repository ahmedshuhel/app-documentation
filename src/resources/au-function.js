import {bindable, containerless} from 'aurelia-framework';

@containerless()
export class AuFunction {
  @bindable value;
  isExpanded = false;
  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
