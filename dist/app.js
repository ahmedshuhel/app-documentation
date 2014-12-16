define(["exports", "./github"], function (exports, _github) {
  "use strict";

  var GitHub = _github.GitHub;
  var App = (function () {
    var App = function App(github) {
      this.github = github;
      this.name = "Aurelia Documentation";
    };

    App.inject = function () {
      return [GitHub];
    };

    App.prototype.attached = function () {
      this.github.getTags();
    };

    return App;
  })();

  exports.App = App;
});