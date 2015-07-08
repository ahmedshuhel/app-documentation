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
                            route: ['', 'tutorials(/:tutorial)'],
                            moduleId: './tutorials',
                            title: 'Tutorials',
                            href: '#/tutorials',
                            nav: true
                        }, {
                            route: 'api',
                            moduleId: './api',
                            title: 'API Docs',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFBYSxHQUFHOzs7Ozs7Ozs7QUFBSCxlQUFHO3lCQUFILEdBQUc7MENBQUgsR0FBRzs7OzZCQUFILEdBQUc7OzJCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDN0IsOEJBQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3pCLDhCQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDUixpQ0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLHVCQUF1QixDQUFDO0FBQ3BDLG9DQUFRLEVBQUUsYUFBYTtBQUN2QixpQ0FBSyxFQUFFLFdBQVc7QUFDbEIsZ0NBQUksRUFBRSxhQUFhO0FBQ25CLCtCQUFHLEVBQUUsSUFBSTt5QkFDWixFQUFDO0FBQ0UsaUNBQUssRUFBRSxLQUFLO0FBQ1osb0NBQVEsRUFBRSxPQUFPO0FBQ2pCLGlDQUFLLEVBQUUsVUFBVTtBQUNqQiwrQkFBRyxFQUFFLElBQUk7eUJBQ1osQ0FBQyxDQUFDLENBQUM7O0FBRUosNEJBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO3FCQUN0Qjs7O3VCQWpCVSxHQUFHOzs7MkJBQUgsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXBwIHtcbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKXtcbiAgICBjb25maWcudGl0bGUgPSAnQXVyZWxpYSc7XG4gICAgY29uZmlnLm1hcChbeyBcbiAgICAgICAgcm91dGU6IFsnJywgJ3R1dG9yaWFscygvOnR1dG9yaWFsKSddLCBcbiAgICAgICAgbW9kdWxlSWQ6ICcuL3R1dG9yaWFscycsXG4gICAgICAgIHRpdGxlOiAnVHV0b3JpYWxzJyxcbiAgICAgICAgaHJlZjogJyMvdHV0b3JpYWxzJyxcbiAgICAgICAgbmF2OiB0cnVlIFxuICAgIH0seyBcbiAgICAgICAgcm91dGU6ICdhcGknLCBcbiAgICAgICAgbW9kdWxlSWQ6ICcuL2FwaScsIFxuICAgICAgICB0aXRsZTogJ0FQSSBEb2NzJyxcbiAgICAgICAgbmF2OiB0cnVlIFxuICAgIH1dKTtcblxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=