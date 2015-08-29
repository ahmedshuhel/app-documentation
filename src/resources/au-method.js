import {bindable, containerless} from 'aurelia-framework';

@containerless()
export class AuMethod {
  @bindable value;
  isExpanded = false;
  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
