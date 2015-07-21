System.register(['aurelia-framework'], function (_export) {
    'use strict';

    var inject, computedFrom, TutorialViewModel;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaFramework) {
            inject = _aureliaFramework.inject;
            computedFrom = _aureliaFramework.computedFrom;
        }],
        execute: function () {
            TutorialViewModel = (function () {
                function TutorialViewModel() {
                    _classCallCheck(this, TutorialViewModel);

                    this.module = null;
                }

                _createClass(TutorialViewModel, [{
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

                return TutorialViewModel;
            })();

            _export('TutorialViewModel', TutorialViewModel);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OEJBSWEsaUJBQWlCOzs7Ozs7Ozt1Q0FKckIsTUFBTTs2Q0FBRSxZQUFZOzs7QUFJaEIsNkJBQWlCO3lCQUFqQixpQkFBaUI7MENBQWpCLGlCQUFpQjs7eUJBRTFCLE1BQU0sR0FBRyxJQUFJOzs7NkJBRkosaUJBQWlCOzsyQkFRbEIsa0JBQUMsTUFBTSxFQUFFO0FBQ2IsNEJBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7QUFDNUIsZ0NBQUksQ0FBQyxNQUFNLEdBQUc7QUFDVixxQ0FBSyxFQUFFLFNBQVM7QUFDaEIsdUNBQU8sRUFBRSxPQUFPO0FBQ2hCLDJDQUFXLEVBQUUsU0FBUzs7QUFRdEIsd0NBQVEsRUFBRSxDQUNOLGdCQUFnQixDQUNuQjs2QkFDSixDQUFDO3lCQUNMLE1BQU07QUFDSCxnQ0FBSSxDQUFDLE1BQU0sR0FBRztBQUNWLHFDQUFLLEVBQUUsc0JBQXNCO0FBQzdCLHVDQUFPLEVBQUUsT0FBTztBQUNoQiwyQ0FBVyxFQUFFLDBFQUEwRTtBQUN2Rix3Q0FBUSxFQUFFLENBQUMsSUFBSSxFQUFFLHNCQUFzQixFQUFFLEtBQUssQ0FBQztBQUMvQyw0Q0FBWSxFQUFFLENBQUMsa0JBQWtCLEVBQUMsaUJBQWlCLENBQUM7QUFDcEQsc0NBQU0sRUFBRSxDQUFDLGlCQUFpQixFQUFDLG1CQUFtQixFQUFDLGdCQUFnQixFQUFDLG9CQUFvQixFQUFDLDhCQUE4QixDQUFDO0FBQ3BILHVDQUFPLEVBQUU7QUFDTCwyQ0FBTyxFQUFFLENBQUMsS0FBSyxFQUFDLGdCQUFnQixFQUFDLFdBQVcsRUFBQyxrQkFBa0IsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQyx1QkFBdUIsQ0FBQztBQUMvSSw2Q0FBUyxFQUFFLENBQUMsWUFBWSxFQUFDLFNBQVMsRUFBQyxRQUFRLEVBQUMsbUJBQW1CLEVBQUMsY0FBYyxFQUFDLFdBQVcsRUFBQyxXQUFXLENBQUM7aUNBQzFHO0FBQ0Qsd0NBQVEsRUFBRSxDQUNOLDRDQUE0QyxFQUM1QyxnREFBZ0QsRUFDaEQsaURBQWlELEVBQ2pELDZCQUE2QixFQUM3QiwyQkFBMkIsRUFDM0IsNkJBQTZCLENBQ2hDOzZCQUNKLENBQUM7eUJBQ0w7cUJBQ0o7Ozt1QkEvQ1EsaUJBQWlCOzs7eUNBQWpCLGlCQUFpQiIsImZpbGUiOiJhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIGNvbXB1dGVkRnJvbSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuLy8gaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcclxuXHJcbi8vIEBpbmplY3QoSHR0cENsaWVudClcclxuZXhwb3J0IGNsYXNzIFR1dG9yaWFsVmlld01vZGVse1xyXG5cclxuICAgIG1vZHVsZSA9IG51bGw7XHJcblxyXG4gICAgLy8gY29uc3RydWN0b3IoaHR0cENsaWVudCkge1xyXG4gICAgLy8gICAgIHRoaXMuaHR0cCA9IGh0dHBDbGllbnQ7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgYWN0aXZhdGUocGFyYW1zKSB7XHJcbiAgICAgICAgaWYgKHBhcmFtcy5tb2R1bGUgPT0gJ2JpbmRpbmcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlID0ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdCaW5kaW5nJyxcclxuICAgICAgICAgICAgICAgIHZlcnNpb246ICcwLjMuNCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0JpbmRpbmcnLFxyXG4gICAgICAgICAgICAgICAgLy8ga2V5d29yZHM6IFsnZGknLCAnZGVwZW5kZW5jeSBpbmplY3Rpb24nLCAnaW9jJ10sXHJcbiAgICAgICAgICAgICAgICAvLyBkZXBlbmRlbmNpZXM6IFsnYXVyZWxpYS1tZXRhZGF0YScsJ2F1cmVsaWEtbG9nZ2luZyddO1xyXG4gICAgICAgICAgICAgICAgLy8gdXNlZGJ5OiBbJ2F1cmVsaWEtYmluZGluZycsJ2F1cmVsaWEtZnJhbWV3b3JrJywnYXVyZWxpYS1yb3V0ZXInLCdhdXJlbGlhLXRlbXBsYXRpbmcnLCdhdXJlbGlhLXRlbXBsYXRpbmctcmVzb3VyY2VzJ107XHJcbiAgICAgICAgICAgICAgICAvLyBleHBvcnRzOiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY2xhc3NlczogWydBbGwnLCdDbGFzc0FjdGl2YXRvcicsJ0NvbnRhaW5lcicsJ0ZhY3RvcnlBY3RpdmF0b3InLCdPcHRpb25hbCcsJ1BhcmVudCcsJ1Jlc29sdmVyJywnU2luZ2xldG9uUmVnaXN0cmF0aW9uJywnVHJhbnNpZW50UmVnaXN0cmF0aW9uJ10sXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgZnVuY3Rpb25zOiBbJ2F1dG9pbmplY3QnLCdmYWN0b3J5JywnaW5qZWN0JywnaW5zdGFuY2VBY3RpdmF0b3InLCdyZWdpc3RyYXRpb24nLCdzaW5nbGV0b24nLCd0cmFuc2llbnQnXSxcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIGFydGljbGVzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgJ0JpbmRpbmcgc3R1ZmYuJ1xyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubW9kdWxlID0ge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdEZXBlbmRlbmN5IEluamVjdGlvbicsXHJcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiAnMC43LjEnLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBIGxpZ2h0d2VpZ2h0LCBleHRlbnNpYmxlIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGNvbnRhaW5lciBmb3IgSmF2YVNjcmlwdC4nLFxyXG4gICAgICAgICAgICAgICAga2V5d29yZHM6IFsnZGknLCAnZGVwZW5kZW5jeSBpbmplY3Rpb24nLCAnaW9jJ10sXHJcbiAgICAgICAgICAgICAgICBkZXBlbmRlbmNpZXM6IFsnYXVyZWxpYS1tZXRhZGF0YScsJ2F1cmVsaWEtbG9nZ2luZyddLFxyXG4gICAgICAgICAgICAgICAgdXNlZGJ5OiBbJ2F1cmVsaWEtYmluZGluZycsJ2F1cmVsaWEtZnJhbWV3b3JrJywnYXVyZWxpYS1yb3V0ZXInLCdhdXJlbGlhLXRlbXBsYXRpbmcnLCdhdXJlbGlhLXRlbXBsYXRpbmctcmVzb3VyY2VzJ10sXHJcbiAgICAgICAgICAgICAgICBleHBvcnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogWydBbGwnLCdDbGFzc0FjdGl2YXRvcicsJ0NvbnRhaW5lcicsJ0ZhY3RvcnlBY3RpdmF0b3InLCdPcHRpb25hbCcsJ1BhcmVudCcsJ1Jlc29sdmVyJywnU2luZ2xldG9uUmVnaXN0cmF0aW9uJywnVHJhbnNpZW50UmVnaXN0cmF0aW9uJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb25zOiBbJ2F1dG9pbmplY3QnLCdmYWN0b3J5JywnaW5qZWN0JywnaW5zdGFuY2VBY3RpdmF0b3InLCdyZWdpc3RyYXRpb24nLCdzaW5nbGV0b24nLCd0cmFuc2llbnQnXSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBhcnRpY2xlczogW1xyXG4gICAgICAgICAgICAgICAgICAgICdVc2luZyBEZXBlbmRlbmN5IEluamVjdGlvbiBpbiBZb3VyIENsYXNzZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDb25maWd1cmluZyB0aGUgRGVwZW5kZW5jeSBJbmplY3Rpb24gQ29udGFpbmVyJyxcclxuICAgICAgICAgICAgICAgICAgICAnU3BlY2lmeWluZyBPYmplY3QgTGlmZXRpbWUgYW5kIEF1dG9yZWdpc3RyYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICdMZXZlcmFnaW5nIEN1c3RvbSBSZXNvbHZlcnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICdDcmVhdGluZyBDaGlsZCBDb250YWluZXJzJyxcclxuICAgICAgICAgICAgICAgICAgICAnQ3VzdG9taXppbmcgT2JqZWN0IENyZWF0aW9uJ1xyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=