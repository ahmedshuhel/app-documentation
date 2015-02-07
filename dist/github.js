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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpdGh1Yi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxVQUFVLEVBQ1YsVUFBVSx3QkFFZCxNQUFNLEVBRUcsTUFBTTs7O0FBTFgsZ0JBQVUsc0JBQVYsVUFBVTs7QUFDVixnQkFBVSxxQkFBVixVQUFVOzs7Ozs7OztBQUVkLFlBQU0sR0FBRyxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztBQUU5QixZQUFNO0FBRU4saUJBRkEsTUFBTSxDQUVMLElBQUksRUFBQztBQUNmLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1NBQ2xCOzs2QkFKVSxNQUFNO0FBQ1YsZ0JBQU07bUJBQUEsa0JBQUU7QUFBRSxxQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFBO2FBQUU7Ozs7OztBQUt0QyxpQkFBTzttQkFBQSxpQkFBQyxPQUFPLEVBQUM7QUFFZCxvQkFBTSxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO2FBQ2pEOzs7OztBQUVELHdCQUFjO21CQUFBLHdCQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUM7QUFDMUIsb0JBQU0sQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQzthQUN4RDs7Ozs7OztlQWJVLE1BQU07O3dCQUFOLE1BQU0iLCJmaWxlIjoiZ2l0aHViLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=