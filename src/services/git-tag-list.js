let versions = {
  'binding': '0.9.1',
  'bootstrapper': '0.17.0',
  'dependency-injection': '0.10.1',
  'event-aggregator': '0.8.0',
  'framework': '0.16.0',
  'history': '0.7.0',
  'history-browser': '0.8.0',
  'http-client': '0.11.0',
  'loader': '0.9.0',
  'loader-default': '0.10.0',
  'logging': '0.11.0',
  'logging-console': '0.7.1',
  'metadata': '0.8.0',
  'path': '0.9.0',
  'router': '0.12.0',
  'route-recognizer': '0.7.0',
  'task-queue': '0.7.0',
  'templating': '0.15.3',
  'templating-binding': '0.15.0',
  'templating-resources': '0.15.2',
  'templating-router': '0.16.1'
}

export class GitTagListService {
  getLatestVersion(orgSlug, productSlug) {
    if(orgSlug == 'aurelia') {
      return versions[productSlug];
    }

    return 'master';
  }
}
