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
                            route: ['', '/api', '/api/:module'],
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

                return App;
            })();

            _export('App', App);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7UUFBYSxHQUFHOzs7Ozs7Ozs7QUFBSCxlQUFHO3lCQUFILEdBQUc7MENBQUgsR0FBRzs7OzZCQUFILEdBQUc7OzJCQUVHLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDM0IsOEJBQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3pCLDhCQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDUixpQ0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxjQUFjLENBQUM7QUFDbkMsb0NBQVEsRUFBRSxPQUFPO0FBQ2pCLGlDQUFLLEVBQUUsS0FBSztBQUNaLGdDQUFJLEVBQUUsT0FBTzt5QkFDaEIsRUFBQztBQUNFLGlDQUFLLEVBQUUsQ0FBQyxXQUFXLEVBQUUsbUJBQW1CLENBQUM7QUFDekMsb0NBQVEsRUFBRSxZQUFZO0FBQ3RCLGlDQUFLLEVBQUUsVUFBVTtBQUNqQixnQ0FBSSxFQUFFLFlBQVk7eUJBQ3JCLENBQUMsQ0FBQyxDQUFDOztBQUVKLDRCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztxQkFDeEI7Ozt5QkFFZSxlQUFHO0FBQ2YsNEJBQUksS0FBSyxHQUFHLElBQUksQ0FBQTtBQUNoQiw0QkFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFO0FBQ2hDLGlDQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUM7eUJBQ25EO0FBQ0QsNEJBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUMzQixtQ0FBTyxVQUFVLENBQUM7eUJBQ3JCLE1BQU07QUFDSCxtQ0FBTyxLQUFLLENBQUM7eUJBQ2hCO3FCQUNKOzs7dUJBN0JRLEdBQUc7OzsyQkFBSCxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBcHAge1xyXG4gIFxyXG4gICAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKXtcclxuICAgICAgICBjb25maWcudGl0bGUgPSAnQXVyZWxpYSc7XHJcbiAgICAgICAgY29uZmlnLm1hcChbeyBcclxuICAgICAgICAgICAgcm91dGU6IFsnJywgJy9hcGknLCAnL2FwaS86bW9kdWxlJ10sIFxyXG4gICAgICAgICAgICBtb2R1bGVJZDogJy4vYXBpJyxcclxuICAgICAgICAgICAgdGl0bGU6ICdBUEknLFxyXG4gICAgICAgICAgICBocmVmOiAnIy9hcGknXHJcbiAgICAgICAgfSx7IFxyXG4gICAgICAgICAgICByb3V0ZTogWycvdHV0b3JpYWwnLCAnL3R1dG9yaWFsLzptb2R1bGUnXSwgXHJcbiAgICAgICAgICAgIG1vZHVsZUlkOiAnLi90dXRvcmlhbCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiAnVHV0b3JpYWwnLFxyXG4gICAgICAgICAgICBocmVmOiAnIy90dXRvcmlhbCdcclxuICAgICAgICB9XSk7XHJcblxyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBjdXJyZW50Um91dGUoKSB7XHJcbiAgICAgICAgdmFyIHJvdXRlID0gbnVsbFxyXG4gICAgICAgIGlmICh0aGlzLnJvdXRlci5jdXJyZW50SW5zdHJ1Y3Rpb24pIHtcclxuICAgICAgICAgICAgcm91dGUgPSB0aGlzLnJvdXRlci5jdXJyZW50SW5zdHJ1Y3Rpb24uZnJhZ21lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICgvXlxcL3R1dG9yaWFsLy50ZXN0KHJvdXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ3R1dG9yaWFsJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2FwaSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9