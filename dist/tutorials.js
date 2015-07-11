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
                        this.title = 'Dependency Injection';
                        this.version = '0.7.1';
                        this.description = 'A lightweight, extensible dependency injection container for JavaScript.';
                        this.keywords = ['di', 'dependency injection', 'ioc'];
                        this.dependencies = ['aurelia-metadata', 'aurelia-logging'];
                        this.usedby = ['aurelia-binding', 'aurelia-framework', 'aurelia-router', 'aurelia-templating', 'aurelia-templating-resources'];
                        this.exports = {
                            classes: ['All', 'ClassActivator', 'Container', 'FactoryActivator', 'Optional', 'Parent', 'Resolver', 'SingletonRegistration', 'TransientRegistration'],
                            functions: ['autoinject', 'factory', 'inject', 'instanceActivator', 'registration', 'singleton', 'transient']
                        };
                        this.articles = ['Using Dependency Injection in Your Classes', 'Configuring the Dependency Injection Container', 'Specifying Object Lifetime and Autoregistration', 'Leveraging Custom Resolvers', 'Creating Child Containers', 'Customizing Object Creation'];
                    }
                }]);

                TutorialViewModel = inject(HttpClient)(TutorialViewModel) || TutorialViewModel;
                return TutorialViewModel;
            })();

            _export('TutorialViewModel', TutorialViewModel);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1dG9yaWFscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NEJBSWEsaUJBQWlCOzs7Ozs7Ozt1Q0FKdEIsTUFBTTs7NENBQ04sVUFBVTs7O0FBR0wsNkJBQWlCO0FBRWYseUJBRkYsaUJBQWlCLENBRWQsVUFBVSxFQUFFOzs7QUFDcEIsd0JBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO2lCQUMxQjs7eUNBSlEsaUJBQWlCOzs7OzJCQU1sQixrQkFBQyxNQUFNLEVBQUU7QUFDYiw0QkFBSSxDQUFDLEtBQUssR0FBRyxzQkFBc0IsQ0FBQztBQUNwQyw0QkFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsNEJBQUksQ0FBQyxXQUFXLEdBQUcsMEVBQTBFLENBQUM7QUFDOUYsNEJBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDdEQsNEJBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxrQkFBa0IsRUFBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzNELDRCQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsaUJBQWlCLEVBQUMsbUJBQW1CLEVBQUMsZ0JBQWdCLEVBQUMsb0JBQW9CLEVBQUMsOEJBQThCLENBQUMsQ0FBQztBQUMzSCw0QkFBSSxDQUFDLE9BQU8sR0FBRztBQUNYLG1DQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsV0FBVyxFQUFDLGtCQUFrQixFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDLHVCQUF1QixDQUFDO0FBQy9JLHFDQUFTLEVBQUUsQ0FBQyxZQUFZLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxtQkFBbUIsRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLFdBQVcsQ0FBQzt5QkFDMUcsQ0FBQTtBQUNELDRCQUFJLENBQUMsUUFBUSxHQUFHLENBQ1osNENBQTRDLEVBQzVDLGdEQUFnRCxFQUNoRCxpREFBaUQsRUFDakQsNkJBQTZCLEVBQzdCLDJCQUEyQixFQUMzQiw2QkFBNkIsQ0FDaEMsQ0FBQztxQkFDTDs7O0FBekJRLGlDQUFpQixHQUQ3QixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04saUJBQWlCLEtBQWpCLGlCQUFpQjt1QkFBakIsaUJBQWlCOzs7eUNBQWpCLGlCQUFpQiIsImZpbGUiOiJ0dXRvcmlhbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xyXG5cclxuQGluamVjdChIdHRwQ2xpZW50KVxyXG5leHBvcnQgY2xhc3MgVHV0b3JpYWxWaWV3TW9kZWx7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaHR0cENsaWVudCkge1xyXG4gICAgICAgIHRoaXMuaHR0cCA9IGh0dHBDbGllbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZhdGUocGFyYW1zKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9ICdEZXBlbmRlbmN5IEluamVjdGlvbic7XHJcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gJzAuNy4xJztcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gJ0EgbGlnaHR3ZWlnaHQsIGV4dGVuc2libGUgZGVwZW5kZW5jeSBpbmplY3Rpb24gY29udGFpbmVyIGZvciBKYXZhU2NyaXB0Lic7XHJcbiAgICAgICAgdGhpcy5rZXl3b3JkcyA9IFsnZGknLCAnZGVwZW5kZW5jeSBpbmplY3Rpb24nLCAnaW9jJ107XHJcbiAgICAgICAgdGhpcy5kZXBlbmRlbmNpZXMgPSBbJ2F1cmVsaWEtbWV0YWRhdGEnLCdhdXJlbGlhLWxvZ2dpbmcnXTtcclxuICAgICAgICB0aGlzLnVzZWRieSA9IFsnYXVyZWxpYS1iaW5kaW5nJywnYXVyZWxpYS1mcmFtZXdvcmsnLCdhdXJlbGlhLXJvdXRlcicsJ2F1cmVsaWEtdGVtcGxhdGluZycsJ2F1cmVsaWEtdGVtcGxhdGluZy1yZXNvdXJjZXMnXTtcclxuICAgICAgICB0aGlzLmV4cG9ydHMgPSB7XHJcbiAgICAgICAgICAgIGNsYXNzZXM6IFsnQWxsJywnQ2xhc3NBY3RpdmF0b3InLCdDb250YWluZXInLCdGYWN0b3J5QWN0aXZhdG9yJywnT3B0aW9uYWwnLCdQYXJlbnQnLCdSZXNvbHZlcicsJ1NpbmdsZXRvblJlZ2lzdHJhdGlvbicsJ1RyYW5zaWVudFJlZ2lzdHJhdGlvbiddLFxyXG4gICAgICAgICAgICBmdW5jdGlvbnM6IFsnYXV0b2luamVjdCcsJ2ZhY3RvcnknLCdpbmplY3QnLCdpbnN0YW5jZUFjdGl2YXRvcicsJ3JlZ2lzdHJhdGlvbicsJ3NpbmdsZXRvbicsJ3RyYW5zaWVudCddLFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFydGljbGVzID0gW1xyXG4gICAgICAgICAgICAnVXNpbmcgRGVwZW5kZW5jeSBJbmplY3Rpb24gaW4gWW91ciBDbGFzc2VzJyxcclxuICAgICAgICAgICAgJ0NvbmZpZ3VyaW5nIHRoZSBEZXBlbmRlbmN5IEluamVjdGlvbiBDb250YWluZXInLFxyXG4gICAgICAgICAgICAnU3BlY2lmeWluZyBPYmplY3QgTGlmZXRpbWUgYW5kIEF1dG9yZWdpc3RyYXRpb24nLFxyXG4gICAgICAgICAgICAnTGV2ZXJhZ2luZyBDdXN0b20gUmVzb2x2ZXJzJyxcclxuICAgICAgICAgICAgJ0NyZWF0aW5nIENoaWxkIENvbnRhaW5lcnMnLFxyXG4gICAgICAgICAgICAnQ3VzdG9taXppbmcgT2JqZWN0IENyZWF0aW9uJ1xyXG4gICAgICAgIF07XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9