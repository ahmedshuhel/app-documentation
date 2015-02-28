System.register(["aurelia-http-client", "aurelia-framework"], function (_export) {
  var HttpClient, LogManager, _prototypeProperties, _classCallCheck, logger, GitHub;

  return {
    setters: [function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_aureliaFramework) {
      LogManager = _aureliaFramework.LogManager;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      logger = LogManager.getLogger("github");
      GitHub = _export("GitHub", (function () {
        function GitHub(http) {
          _classCallCheck(this, GitHub);

          this.http = http;
        }

        _prototypeProperties(GitHub, {
          inject: {
            value: function inject() {
              return [HttpClient];
            },
            writable: true,
            configurable: true
          }
        }, {
          getTags: {
            value: function getTags(library) {
              //https://developer.github.com/v3/git/refs/#get-all-references
              logger.error("getTags is not yet implemented.");
            },
            writable: true,
            configurable: true
          },
          getPackageInfo: {
            value: function getPackageInfo(library, tag) {
              logger.error("getPackageInfo is not yet implemented.");
            },
            writable: true,
            configurable: true
          }
        });

        return GitHub;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsVUFBVSxFQUNWLFVBQVUseUNBRWQsTUFBTSxFQUVHLE1BQU07Ozs7QUFMWCxnQkFBVSxzQkFBVixVQUFVOztBQUNWLGdCQUFVLHFCQUFWLFVBQVU7Ozs7Ozs7OztBQUVkLFlBQU0sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztBQUU5QixZQUFNO0FBRU4saUJBRkEsTUFBTSxDQUVMLElBQUk7Z0NBRkwsTUFBTTs7QUFHZixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNsQjs7NkJBSlUsTUFBTTtBQUNWLGdCQUFNO21CQUFBLGtCQUFFO0FBQUUscUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQTthQUFFOzs7OztBQUt0QyxpQkFBTzttQkFBQSxpQkFBQyxPQUFPLEVBQUM7O0FBRWQsb0JBQU0sQ0FBQyxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQzthQUNqRDs7OztBQUVELHdCQUFjO21CQUFBLHdCQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUM7QUFDMUIsb0JBQU0sQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQzthQUN4RDs7Ozs7O2VBYlUsTUFBTSIsImZpbGUiOiJnaXRodWIuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==