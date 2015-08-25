System.register(['aurelia-framework', 'aurelia-http-client'], function (_export) {
    'use strict';

    var inject, HttpClient, TutorialViewModel;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
        }, function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }],
        execute: function () {
            TutorialViewModel = (function () {
                function TutorialViewModel(httpClient) {
                    _classCallCheck(this, _TutorialViewModel);

                    this.module = null;

                    this.http = httpClient;
                }

                _createClass(TutorialViewModel, [{
                    key: 'activate',
                    value: function activate(params) {}
                }]);

                var _TutorialViewModel = TutorialViewModel;
                TutorialViewModel = inject(HttpClient)(TutorialViewModel) || TutorialViewModel;
                return TutorialViewModel;
            })();

            _export('TutorialViewModel', TutorialViewModel);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1dG9yaWFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs0QkFJYSxpQkFBaUI7Ozs7Ozs7O3VDQUp0QixNQUFNOzs0Q0FDTixVQUFVOzs7QUFHTCw2QkFBaUI7QUFFZix5QkFGRixpQkFBaUIsQ0FFZCxVQUFVLEVBQUU7Ozt5QkFEeEIsTUFBTSxHQUFHLElBQUk7O0FBRVQsd0JBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO2lCQUMxQjs7NkJBSlEsaUJBQWlCOzsyQkFLbEIsa0JBQUMsTUFBTSxFQUFFLEVBQ2hCOzs7eUNBTlEsaUJBQWlCO0FBQWpCLGlDQUFpQixHQUQ3QixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04saUJBQWlCLEtBQWpCLGlCQUFpQjt1QkFBakIsaUJBQWlCOzs7eUNBQWpCLGlCQUFpQiIsImZpbGUiOiJ0dXRvcmlhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xuXG5AaW5qZWN0KEh0dHBDbGllbnQpXG5leHBvcnQgY2xhc3MgVHV0b3JpYWxWaWV3TW9kZWx7XG4gICAgbW9kdWxlID0gbnVsbDtcbiAgICBjb25zdHJ1Y3RvcihodHRwQ2xpZW50KSB7XG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHBDbGllbnQ7XG4gICAgfVxuICAgIGFjdGl2YXRlKHBhcmFtcykge1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==