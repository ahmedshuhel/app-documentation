import {bindable, containerless} from 'aurelia-framework';

@containerless()
export class AuSignature {
  @bindable value;
  isExpanded = false;
  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
