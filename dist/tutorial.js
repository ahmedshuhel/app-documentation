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

                var _TutorialViewModel = TutorialViewModel;

                _createClass(_TutorialViewModel, [{
                    key: 'activate',
                    value: function activate(params) {
                        if (params.module == 'binding') {
                            this.module = {
                                title: 'Binding',
                                version: '0.3.4',
                                description: 'Binding',

                                articles: ['Binding stuff.']
                            };
                        } else {
                            this.module = {
                                title: 'Dependency Injection',
                                version: '0.7.1',
                                description: 'A lightweight, extensible dependency injection container for JavaScript.',
                                keywords: ['di', 'dependency injection', 'ioc'],
                                dependencies: ['aurelia-metadata', 'aurelia-logging'],
                                usedby: ['aurelia-binding', 'aurelia-framework', 'aurelia-router', 'aurelia-templating', 'aurelia-templating-resources'],
                                exports: {
                                    classes: ['All', 'ClassActivator', 'Container', 'FactoryActivator', 'Optional', 'Parent', 'Resolver', 'SingletonRegistration', 'TransientRegistration'],
                                    functions: ['autoinject', 'factory', 'inject', 'instanceActivator', 'registration', 'singleton', 'transient']
                                },
                                articles: ['Using Dependency Injection in Your Classes', 'Configuring the Dependency Injection Container', 'Specifying Object Lifetime and Autoregistration', 'Leveraging Custom Resolvers', 'Creating Child Containers', 'Customizing Object Creation']
                            };
                        }
                    }
                }]);

                TutorialViewModel = inject(HttpClient)(TutorialViewModel) || TutorialViewModel;
                return TutorialViewModel;
            })();

            _export('TutorialViewModel', TutorialViewModel);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1dG9yaWFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs0QkFJYSxpQkFBaUI7Ozs7Ozs7O3VDQUp0QixNQUFNOzs0Q0FDTixVQUFVOzs7QUFHTCw2QkFBaUI7QUFJZix5QkFKRixpQkFBaUIsQ0FJZCxVQUFVLEVBQUU7Ozt5QkFGeEIsTUFBTSxHQUFHLElBQUk7O0FBR1Qsd0JBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO2lCQUMxQjs7eUNBTlEsaUJBQWlCOzs7OzJCQVFsQixrQkFBQyxNQUFNLEVBQUU7QUFDYiw0QkFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRTtBQUM1QixnQ0FBSSxDQUFDLE1BQU0sR0FBRztBQUNWLHFDQUFLLEVBQUUsU0FBUztBQUNoQix1Q0FBTyxFQUFFLE9BQU87QUFDaEIsMkNBQVcsRUFBRSxTQUFTOztBQVF0Qix3Q0FBUSxFQUFFLENBQ04sZ0JBQWdCLENBQ25COzZCQUNKLENBQUM7eUJBQ0wsTUFBTTtBQUNILGdDQUFJLENBQUMsTUFBTSxHQUFHO0FBQ1YscUNBQUssRUFBRSxzQkFBc0I7QUFDN0IsdUNBQU8sRUFBRSxPQUFPO0FBQ2hCLDJDQUFXLEVBQUUsMEVBQTBFO0FBQ3ZGLHdDQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsS0FBSyxDQUFDO0FBQy9DLDRDQUFZLEVBQUUsQ0FBQyxrQkFBa0IsRUFBQyxpQkFBaUIsQ0FBQztBQUNwRCxzQ0FBTSxFQUFFLENBQUMsaUJBQWlCLEVBQUMsbUJBQW1CLEVBQUMsZ0JBQWdCLEVBQUMsb0JBQW9CLEVBQUMsOEJBQThCLENBQUM7QUFDcEgsdUNBQU8sRUFBRTtBQUNMLDJDQUFPLEVBQUUsQ0FBQyxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsV0FBVyxFQUFDLGtCQUFrQixFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDLHVCQUF1QixDQUFDO0FBQy9JLDZDQUFTLEVBQUUsQ0FBQyxZQUFZLEVBQUMsU0FBUyxFQUFDLFFBQVEsRUFBQyxtQkFBbUIsRUFBQyxjQUFjLEVBQUMsV0FBVyxFQUFDLFdBQVcsQ0FBQztpQ0FDMUc7QUFDRCx3Q0FBUSxFQUFFLENBQ04sNENBQTRDLEVBQzVDLGdEQUFnRCxFQUNoRCxpREFBaUQsRUFDakQsNkJBQTZCLEVBQzdCLDJCQUEyQixFQUMzQiw2QkFBNkIsQ0FDaEM7NkJBQ0osQ0FBQzt5QkFDTDtxQkFDSjs7O0FBL0NRLGlDQUFpQixHQUQ3QixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04saUJBQWlCLEtBQWpCLGlCQUFpQjt1QkFBakIsaUJBQWlCOzs7eUNBQWpCLGlCQUFpQiIsImZpbGUiOiJ0dXRvcmlhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1odHRwLWNsaWVudCc7XHJcblxyXG5AaW5qZWN0KEh0dHBDbGllbnQpXHJcbmV4cG9ydCBjbGFzcyBUdXRvcmlhbFZpZXdNb2RlbHtcclxuXHJcbiAgICBtb2R1bGUgPSBudWxsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGh0dHBDbGllbnQpIHtcclxuICAgICAgICB0aGlzLmh0dHAgPSBodHRwQ2xpZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2YXRlKHBhcmFtcykge1xyXG4gICAgICAgIGlmIChwYXJhbXMubW9kdWxlID09ICdiaW5kaW5nJykge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZSA9IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQmluZGluZycsXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiAnMC4zLjQnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdCaW5kaW5nJyxcclxuICAgICAgICAgICAgICAgIC8vIGtleXdvcmRzOiBbJ2RpJywgJ2RlcGVuZGVuY3kgaW5qZWN0aW9uJywgJ2lvYyddLFxyXG4gICAgICAgICAgICAgICAgLy8gZGVwZW5kZW5jaWVzOiBbJ2F1cmVsaWEtbWV0YWRhdGEnLCdhdXJlbGlhLWxvZ2dpbmcnXTtcclxuICAgICAgICAgICAgICAgIC8vIHVzZWRieTogWydhdXJlbGlhLWJpbmRpbmcnLCdhdXJlbGlhLWZyYW1ld29yaycsJ2F1cmVsaWEtcm91dGVyJywnYXVyZWxpYS10ZW1wbGF0aW5nJywnYXVyZWxpYS10ZW1wbGF0aW5nLXJlc291cmNlcyddO1xyXG4gICAgICAgICAgICAgICAgLy8gZXhwb3J0czoge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNsYXNzZXM6IFsnQWxsJywnQ2xhc3NBY3RpdmF0b3InLCdDb250YWluZXInLCdGYWN0b3J5QWN0aXZhdG9yJywnT3B0aW9uYWwnLCdQYXJlbnQnLCdSZXNvbHZlcicsJ1NpbmdsZXRvblJlZ2lzdHJhdGlvbicsJ1RyYW5zaWVudFJlZ2lzdHJhdGlvbiddLFxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGZ1bmN0aW9uczogWydhdXRvaW5qZWN0JywnZmFjdG9yeScsJ2luamVjdCcsJ2luc3RhbmNlQWN0aXZhdG9yJywncmVnaXN0cmF0aW9uJywnc2luZ2xldG9uJywndHJhbnNpZW50J10sXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlczogW1xyXG4gICAgICAgICAgICAgICAgICAgICdCaW5kaW5nIHN0dWZmLidcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1vZHVsZSA9IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnRGVwZW5kZW5jeSBJbmplY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgdmVyc2lvbjogJzAuNy4xJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQSBsaWdodHdlaWdodCwgZXh0ZW5zaWJsZSBkZXBlbmRlbmN5IGluamVjdGlvbiBjb250YWluZXIgZm9yIEphdmFTY3JpcHQuJyxcclxuICAgICAgICAgICAgICAgIGtleXdvcmRzOiBbJ2RpJywgJ2RlcGVuZGVuY3kgaW5qZWN0aW9uJywgJ2lvYyddLFxyXG4gICAgICAgICAgICAgICAgZGVwZW5kZW5jaWVzOiBbJ2F1cmVsaWEtbWV0YWRhdGEnLCdhdXJlbGlhLWxvZ2dpbmcnXSxcclxuICAgICAgICAgICAgICAgIHVzZWRieTogWydhdXJlbGlhLWJpbmRpbmcnLCdhdXJlbGlhLWZyYW1ld29yaycsJ2F1cmVsaWEtcm91dGVyJywnYXVyZWxpYS10ZW1wbGF0aW5nJywnYXVyZWxpYS10ZW1wbGF0aW5nLXJlc291cmNlcyddLFxyXG4gICAgICAgICAgICAgICAgZXhwb3J0czoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IFsnQWxsJywnQ2xhc3NBY3RpdmF0b3InLCdDb250YWluZXInLCdGYWN0b3J5QWN0aXZhdG9yJywnT3B0aW9uYWwnLCdQYXJlbnQnLCdSZXNvbHZlcicsJ1NpbmdsZXRvblJlZ2lzdHJhdGlvbicsJ1RyYW5zaWVudFJlZ2lzdHJhdGlvbiddLFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uczogWydhdXRvaW5qZWN0JywnZmFjdG9yeScsJ2luamVjdCcsJ2luc3RhbmNlQWN0aXZhdG9yJywncmVnaXN0cmF0aW9uJywnc2luZ2xldG9uJywndHJhbnNpZW50J10sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYXJ0aWNsZXM6IFtcclxuICAgICAgICAgICAgICAgICAgICAnVXNpbmcgRGVwZW5kZW5jeSBJbmplY3Rpb24gaW4gWW91ciBDbGFzc2VzJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ29uZmlndXJpbmcgdGhlIERlcGVuZGVuY3kgSW5qZWN0aW9uIENvbnRhaW5lcicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ1NwZWNpZnlpbmcgT2JqZWN0IExpZmV0aW1lIGFuZCBBdXRvcmVnaXN0cmF0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAnTGV2ZXJhZ2luZyBDdXN0b20gUmVzb2x2ZXJzJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ3JlYXRpbmcgQ2hpbGQgQ29udGFpbmVycycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ0N1c3RvbWl6aW5nIE9iamVjdCBDcmVhdGlvbidcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9