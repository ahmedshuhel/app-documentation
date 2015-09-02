export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
    .feature('resources');

  aurelia.start().then(a => {
    a.setRoot();
  });
}
