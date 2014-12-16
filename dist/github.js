define(["exports", "aurelia-http-client", "aurelia-framework"], function (exports, _aureliaHttpClient, _aureliaFramework) {
  "use strict";

  var HttpClient = _aureliaHttpClient.HttpClient;
  var LogManager = _aureliaFramework.LogManager;


  var logger = LogManager.getLogger("github");

  var GitHub = (function () {
    var GitHub = function GitHub(http) {
      this.http = http;
    };

    GitHub.inject = function () {
      return [HttpClient];
    };

    GitHub.prototype.getTags = function (library) {
      logger.error("getTags is not yet implemented.");
    };

    GitHub.prototype.getPackageInfo = function (library, tag) {
      logger.error("getPackageInfo is not yet implemented.");
    };

    return GitHub;
  })();

  exports.GitHub = GitHub;
});