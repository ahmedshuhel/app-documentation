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
            value: function inject() {
              return [GitHub];
            },
            writable: true,
            enumerable: true,
            configurable: true
          }
        }, {
          attached: {
            value: function attached() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBUSxNQUFNLHdCQUVELEdBQUc7OztBQUZSLFlBQU0sV0FBTixNQUFNOzs7Ozs7OztBQUVELFNBQUc7QUFFSCxpQkFGQSxHQUFHLENBRUYsTUFBTSxFQUFDO0FBQ2pCLGNBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLGNBQUksQ0FBQyxJQUFJLEdBQUcsdUJBQXVCLENBQUM7U0FDckM7OzZCQUxVLEdBQUc7QUFDUCxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7YUFBRTs7Ozs7O0FBTXBDLGtCQUFRO21CQUFBLG9CQUFFO0FBQ1Isa0JBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDdkI7Ozs7Ozs7ZUFUVSxHQUFHOztxQkFBSCxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9