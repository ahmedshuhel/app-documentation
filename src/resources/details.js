import {bindable, containerless} from 'aurelia-framework';

@containerless()
export class Details {
  @bindable value;
  isExpanded = false;
  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }
}
