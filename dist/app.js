System.register(["./github"], function (_export) {
  var GitHub, _prototypeProperties, _classCallCheck, App;

  return {
    setters: [function (_github) {
      GitHub = _github.GitHub;
    }],
    execute: function () {
      "use strict";

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(github) {
          _classCallCheck(this, App);

          this.github = github;
          this.name = "Aurelia Documentation";
        }

        _prototypeProperties(App, {
          inject: {
            value: function inject() {
              return [GitHub];
            },
            writable: true,
            configurable: true
          }
        }, {
          attached: {
            value: function attached() {
              this.github.getTags();
            },
            writable: true,
            configurable: true
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsTUFBTSx5Q0FFRCxHQUFHOzs7O0FBRlIsWUFBTSxXQUFOLE1BQU07Ozs7Ozs7OztBQUVELFNBQUc7QUFFSCxpQkFGQSxHQUFHLENBRUYsTUFBTTtnQ0FGUCxHQUFHOztBQUdaLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxJQUFJLEdBQUcsdUJBQXVCLENBQUM7U0FDckM7OzZCQUxVLEdBQUc7QUFDUCxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7YUFBRTs7Ozs7QUFNcEMsa0JBQVE7bUJBQUEsb0JBQUU7QUFDUixrQkFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUN2Qjs7Ozs7O2VBVFUsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==