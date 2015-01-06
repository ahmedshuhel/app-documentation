System.register(["aurelia-http-client", "aurelia-framework"], function (_export) {
  "use strict";

  var HttpClient, LogManager, logger, GitHub;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }],
    execute: function () {
      logger = LogManager.getLogger("github");
      GitHub = function GitHub(http) {
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

      _export("GitHub", GitHub);
    }
  };
});