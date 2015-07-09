System.register([], function (_export) {
    'use strict';

    var App;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [],
        execute: function () {
            App = (function () {
                function App() {
                    _classCallCheck(this, App);
                }

                _createClass(App, [{
                    key: 'configureRouter',
                    value: function configureRouter(config, router) {
                        config.title = 'Aurelia';
                        config.map([{
                            route: '',
                            moduleId: './tutorials',
                            title: 'Tutorials',
                            href: '#/tutorials',
                            nav: true
                        }]);

                        this.router = router;
                    }
                }]);

                return App;
            })();

            _export('App', App);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFBYSxHQUFHOzs7Ozs7Ozs7QUFBSCxlQUFHO3lCQUFILEdBQUc7MENBQUgsR0FBRzs7OzZCQUFILEdBQUc7OzJCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDN0IsOEJBQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3pCLDhCQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDUixpQ0FBSyxFQUFFLEVBQUU7QUFDVCxvQ0FBUSxFQUFFLGFBQWE7QUFDdkIsaUNBQUssRUFBRSxXQUFXO0FBQ2xCLGdDQUFJLEVBQUUsYUFBYTtBQUNuQiwrQkFBRyxFQUFFLElBQUk7eUJBQ1osQ0FBQyxDQUFDLENBQUM7O0FBRUosNEJBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO3FCQUN0Qjs7O3VCQVpVLEdBQUc7OzsyQkFBSCxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBcHAge1xyXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcil7XHJcbiAgICBjb25maWcudGl0bGUgPSAnQXVyZWxpYSc7XHJcbiAgICBjb25maWcubWFwKFt7IFxyXG4gICAgICAgIHJvdXRlOiAnJywgXHJcbiAgICAgICAgbW9kdWxlSWQ6ICcuL3R1dG9yaWFscycsXHJcbiAgICAgICAgdGl0bGU6ICdUdXRvcmlhbHMnLFxyXG4gICAgICAgIGhyZWY6ICcjL3R1dG9yaWFscycsXHJcbiAgICAgICAgbmF2OiB0cnVlIFxyXG4gICAgfV0pO1xyXG5cclxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=