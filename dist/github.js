System.register(["aurelia-http-client", "aurelia-framework"], function (_export) {
  "use strict";

  var HttpClient, LogManager, _prototypeProperties, logger, GitHub;
  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      logger = LogManager.getLogger("github");
      GitHub = (function () {
        function GitHub(http) {
          this.http = http;
        }

        _prototypeProperties(GitHub, {
          inject: {
            value: function inject() {
              return [HttpClient];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          getTags: {
            value: function getTags(library) {
              logger.error("getTags is not yet implemented.");
            },
            writable: true,
            enumerable: true,
            configurable: true
          },
          getPackageInfo: {
            value: function getPackageInfo(library, tag) {
              logger.error("getPackageInfo is not yet implemented.");
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return GitHub;
      })();
      _export("GitHub", GitHub);
    }
  };
});