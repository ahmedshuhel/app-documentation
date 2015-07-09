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

                    this.http = httpClient;
                }

                var _TutorialViewModel = TutorialViewModel;

                _createClass(_TutorialViewModel, [{
                    key: 'activate',
                    value: function activate(params) {
                        this.heading = 'ehy';
                    }
                }]);

                TutorialViewModel = inject(HttpClient)(TutorialViewModel) || TutorialViewModel;
                return TutorialViewModel;
            })();

            _export('TutorialViewModel', TutorialViewModel);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1dG9yaWFscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NEJBSWEsaUJBQWlCOzs7Ozs7Ozt1Q0FKdEIsTUFBTTs7NENBQ04sVUFBVTs7O0FBR0wsNkJBQWlCO0FBRWYseUJBRkYsaUJBQWlCLENBRWQsVUFBVSxFQUFFOzs7QUFDcEIsd0JBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO2lCQUMxQjs7eUNBSlEsaUJBQWlCOzs7OzJCQU1sQixrQkFBQyxNQUFNLEVBQUU7QUFDYiw0QkFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7cUJBQ3hCOzs7QUFSUSxpQ0FBaUIsR0FEN0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUNOLGlCQUFpQixLQUFqQixpQkFBaUI7dUJBQWpCLGlCQUFpQjs7O3lDQUFqQixpQkFBaUIiLCJmaWxlIjoidHV0b3JpYWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcclxuXHJcbkBpbmplY3QoSHR0cENsaWVudClcclxuZXhwb3J0IGNsYXNzIFR1dG9yaWFsVmlld01vZGVse1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGh0dHBDbGllbnQpIHtcclxuICAgICAgICB0aGlzLmh0dHAgPSBodHRwQ2xpZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlKHBhcmFtcykge1xyXG4gICAgICAgIHRoaXMuaGVhZGluZyA9ICdlaHknO1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==