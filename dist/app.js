System.register(["./github"], function (_export) {
  "use strict";

  var GitHub, _prototypeProperties, App;
  return {
    setters: [function (_github) {
      GitHub = _github.GitHub;
    }],
    execute: function () {
      _prototypeProperties = function (child, staticProps, instanceProps) {
        if (staticProps) Object.defineProperties(child, staticProps);
        if (instanceProps) Object.defineProperties(child.prototype, instanceProps);
      };

      App = (function () {
        function App(github) {
          this.github = github;
          this.name = "Aurelia Documentation";
        }

        _prototypeProperties(App, {
          inject: {
            value: function () {
              return [GitHub];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          attached: {
            value: function () {
              this.github.getTags();
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        });

        return App;
      })();
      _export("App", App);
    }
  };
});