System.register(['aurelia-framework', 'services/raw-git'], function (_export) {
  'use strict';

  var inject, RawGitService, App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_servicesRawGit) {
      RawGitService = _servicesRawGit.RawGitService;
    }],
    execute: function () {
      App = (function () {
        function App(gitService) {
          _classCallCheck(this, _App);

          this.gitService = gitService;
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Aurelia';
            config.map([{
              route: ['', '/api', '/api/:module', '/api/:module/:version'],
              moduleId: './api',
              title: 'API',
              href: '#/api'
            }, {
              route: ['/tutorial', '/tutorial/:module'],
              moduleId: './tutorial',
              title: 'Tutorial',
              href: '#/tutorial'
            }]);

            this.router = router;
          }
        }, {
          key: 'activate',
          value: function activate() {
            return Promise.all([this.gitService.getOfficialRepos(), this.gitService.getPluginRepos()]);
          }
        }, {
          key: 'currentRoute',
          get: function get() {
            var route = null;
            if (this.router.currentInstruction) {
              route = this.router.currentInstruction.fragment;
            }
            if (/^\/tutorial/.test(route)) {
              return 'tutorial';
            } else {
              return 'api';
            }
          }
        }]);

        var _App = App;
        App = inject(RawGitService)(App) || App;
        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkJBSWEsR0FBRzs7Ozs7Ozs7aUNBSlIsTUFBTTs7c0NBQ04sYUFBYTs7O0FBR1IsU0FBRztBQUNILGlCQURBLEdBQUcsQ0FDRixVQUFVLEVBQUM7OztBQUNyQixjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztTQUM5Qjs7cUJBSFUsR0FBRzs7aUJBSUMseUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBQztBQUM3QixrQkFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7QUFDekIsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNWLG1CQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSx1QkFBdUIsQ0FBQztBQUM1RCxzQkFBUSxFQUFFLE9BQU87QUFDakIsbUJBQUssRUFBRSxLQUFLO0FBQ1osa0JBQUksRUFBRSxPQUFPO2FBQ2QsRUFBQztBQUNBLG1CQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLENBQUM7QUFDekMsc0JBQVEsRUFBRSxZQUFZO0FBQ3RCLG1CQUFLLEVBQUUsVUFBVTtBQUNqQixrQkFBSSxFQUFFLFlBQVk7YUFDbkIsQ0FBQyxDQUFDLENBQUM7O0FBRUosZ0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1dBQ3RCOzs7aUJBQ08sb0JBQUU7QUFDUixtQkFBTyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQ2pCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEVBQUUsRUFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FDakMsQ0FBQyxDQUFDO1dBQ0o7OztlQUVlLGVBQUc7QUFDakIsZ0JBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtBQUNoQixnQkFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFO0FBQ2xDLG1CQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7YUFDakQ7QUFDRCxnQkFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzdCLHFCQUFPLFVBQVUsQ0FBQzthQUNuQixNQUFNO0FBQ0wscUJBQU8sS0FBSyxDQUFDO2FBQ2Q7V0FDRjs7O21CQXJDVSxHQUFHO0FBQUgsV0FBRyxHQURmLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FDVCxHQUFHLEtBQUgsR0FBRztlQUFILEdBQUc7OztxQkFBSCxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1Jhd0dpdFNlcnZpY2V9IGZyb20gJ3NlcnZpY2VzL3Jhdy1naXQnO1xuXG5AaW5qZWN0KFJhd0dpdFNlcnZpY2UpXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoZ2l0U2VydmljZSl7XG4gICAgdGhpcy5naXRTZXJ2aWNlID0gZ2l0U2VydmljZTtcbiAgfVxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpe1xuICAgIGNvbmZpZy50aXRsZSA9ICdBdXJlbGlhJztcbiAgICBjb25maWcubWFwKFt7XG4gICAgICByb3V0ZTogWycnLCAnL2FwaScsICcvYXBpLzptb2R1bGUnLCAnL2FwaS86bW9kdWxlLzp2ZXJzaW9uJ10sXG4gICAgICBtb2R1bGVJZDogJy4vYXBpJyxcbiAgICAgIHRpdGxlOiAnQVBJJyxcbiAgICAgIGhyZWY6ICcjL2FwaSdcbiAgICB9LHtcbiAgICAgIHJvdXRlOiBbJy90dXRvcmlhbCcsICcvdHV0b3JpYWwvOm1vZHVsZSddLFxuICAgICAgbW9kdWxlSWQ6ICcuL3R1dG9yaWFsJyxcbiAgICAgIHRpdGxlOiAnVHV0b3JpYWwnLFxuICAgICAgaHJlZjogJyMvdHV0b3JpYWwnXG4gICAgfV0pO1xuXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cbiAgYWN0aXZhdGUoKXtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5naXRTZXJ2aWNlLmdldE9mZmljaWFsUmVwb3MoKSxcbiAgICAgIHRoaXMuZ2l0U2VydmljZS5nZXRQbHVnaW5SZXBvcygpXG4gICAgXSk7XG4gIH1cblxuICBnZXQgY3VycmVudFJvdXRlKCkge1xuICAgIGxldCByb3V0ZSA9IG51bGxcbiAgICBpZiAodGhpcy5yb3V0ZXIuY3VycmVudEluc3RydWN0aW9uKSB7XG4gICAgICByb3V0ZSA9IHRoaXMucm91dGVyLmN1cnJlbnRJbnN0cnVjdGlvbi5mcmFnbWVudDtcbiAgICB9XG4gICAgaWYgKC9eXFwvdHV0b3JpYWwvLnRlc3Qocm91dGUpKSB7XG4gICAgICByZXR1cm4gJ3R1dG9yaWFsJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdhcGknO1xuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==