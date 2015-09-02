import {bindable, containerless} from 'aurelia-framework';

@containerless()
export class AuConstructor {
  @bindable value;
  isExpanded = false;
  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
