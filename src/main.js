export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
    .plugin('joelcoxokc/aurelia-interface-grid');

  aurelia.start().then(a => a.setRoot());
}
