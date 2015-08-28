System.register(['aurelia-framework', 'services/local-cache', 'services/raw-git'], function (_export) {
  'use strict';

  var inject, LocalCache, RawGitService, Api;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_servicesLocalCache) {
      LocalCache = _servicesLocalCache.LocalCache;
    }, function (_servicesRawGit) {
      RawGitService = _servicesRawGit.RawGitService;
    }],
    execute: function () {
      Api = (function () {
        function Api(localCache, gitService) {
          _classCallCheck(this, _Api);

          this.localCache = localCache;
          this.gitService = gitService;
        }

        _createClass(Api, [{
          key: 'activate',
          value: function activate(params) {
            var _this = this;

            var repoMatch = this.localCache.repositories.find(function (repo) {
              return repo.name === params.module;
            });
            if (repoMatch && !repoMatch.isLoaded) {
              this.gitService.getRepositoryInfo(repoMatch).then(function (resp) {
                _this.selectedModule = resp;
                repoMatch.isLoaded = true;
              });
            } else if (repoMatch) {
              this.selectedModule = repoMatch;
            }
          }
        }]);

        var _Api = Api;
        Api = inject(LocalCache, RawGitService)(Api) || Api;
        return Api;
      })();

      _export('Api', Api);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7eUNBS2EsR0FBRzs7Ozs7Ozs7aUNBTFIsTUFBTTs7dUNBQ04sVUFBVTs7c0NBQ1YsYUFBYTs7O0FBR1IsU0FBRztBQUVILGlCQUZBLEdBQUcsQ0FFRixVQUFVLEVBQUUsVUFBVSxFQUFDOzs7QUFDakMsY0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDN0IsY0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7U0FDOUI7O3FCQUxVLEdBQUc7O2lCQU1OLGtCQUFDLE1BQU0sRUFBQzs7O0FBQ2QsZ0JBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFBLElBQUksRUFBSTtBQUN4RCxxQkFBTyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDcEMsQ0FBQyxDQUFDO0FBQ0gsZ0JBQUksU0FBUyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtBQUNwQyxrQkFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJLEVBQUk7QUFDeEQsc0JBQUssY0FBYyxHQUFHLElBQUksQ0FBQztBQUMzQix5QkFBUyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7ZUFDM0IsQ0FBQyxDQUFDO2FBQ0osTUFBTSxJQUFJLFNBQVMsRUFBRTtBQUNyQixrQkFBSSxDQUFDLGNBQWMsR0FBRyxTQUFTLENBQUM7YUFDaEM7V0FDRjs7O21CQWxCVSxHQUFHO0FBQUgsV0FBRyxHQURmLE1BQU0sQ0FBQyxVQUFVLEVBQUUsYUFBYSxDQUFDLENBQ3JCLEdBQUcsS0FBSCxHQUFHO2VBQUgsR0FBRzs7O3FCQUFILEdBQUciLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7TG9jYWxDYWNoZX0gZnJvbSAnc2VydmljZXMvbG9jYWwtY2FjaGUnO1xuaW1wb3J0IHtSYXdHaXRTZXJ2aWNlfSBmcm9tICdzZXJ2aWNlcy9yYXctZ2l0JztcblxuQGluamVjdChMb2NhbENhY2hlLCBSYXdHaXRTZXJ2aWNlKVxuZXhwb3J0IGNsYXNzIEFwaXtcbiAgc2VsZWN0ZWRNb2R1bGU7XG4gIGNvbnN0cnVjdG9yKGxvY2FsQ2FjaGUsIGdpdFNlcnZpY2Upe1xuICAgIHRoaXMubG9jYWxDYWNoZSA9IGxvY2FsQ2FjaGU7XG4gICAgdGhpcy5naXRTZXJ2aWNlID0gZ2l0U2VydmljZTtcbiAgfVxuICBhY3RpdmF0ZShwYXJhbXMpe1xuICAgIGxldCByZXBvTWF0Y2ggPSB0aGlzLmxvY2FsQ2FjaGUucmVwb3NpdG9yaWVzLmZpbmQocmVwbyA9PiB7XG4gICAgICByZXR1cm4gcmVwby5uYW1lID09PSBwYXJhbXMubW9kdWxlO1xuICAgIH0pO1xuICAgIGlmIChyZXBvTWF0Y2ggJiYgIXJlcG9NYXRjaC5pc0xvYWRlZCkge1xuICAgICAgdGhpcy5naXRTZXJ2aWNlLmdldFJlcG9zaXRvcnlJbmZvKHJlcG9NYXRjaCkudGhlbihyZXNwID0+IHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZE1vZHVsZSA9IHJlc3A7XG4gICAgICAgIHJlcG9NYXRjaC5pc0xvYWRlZCA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHJlcG9NYXRjaCkge1xuICAgIFx0dGhpcy5zZWxlY3RlZE1vZHVsZSA9IHJlcG9NYXRjaDtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==