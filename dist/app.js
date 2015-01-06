System.register(["./github"], function (_export) {
  "use strict";

  var GitHub, App;
  return {
    setters: [function (_github) {
      GitHub = _github.GitHub;
    }],
    execute: function () {
      App = function App(github) {
        this.github = github;
        this.name = "Aurelia Documentation";
      };

      App.inject = function () {
        return [GitHub];
      };

      App.prototype.attached = function () {
        this.github.getTags();
      };

      _export("App", App);
    }
  };
});