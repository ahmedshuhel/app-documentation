import {bindable, containerless} from 'aurelia-framework';

@containerless()
export class AuMethod {
  @bindable value;
  isExpanded = false;
  toggleExpand() {

    console.log(this.value)
    this.isExpanded = !this.isExpanded;
  }
}
