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
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7TUFBYSxHQUFHOzs7Ozs7Ozs7QUFBSCxTQUFHO2lCQUFILEdBQUc7Z0NBQUgsR0FBRzs7O3FCQUFILEdBQUc7O2lCQUNDLHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUM7QUFDN0Isa0JBQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0FBQ3pCLGtCQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDUixtQkFBSyxFQUFFLEVBQUU7QUFDVCxzQkFBUSxFQUFFLGFBQWE7QUFDdkIsbUJBQUssRUFBRSxXQUFXO0FBQ2xCLGtCQUFJLEVBQUUsYUFBYTtBQUNuQixpQkFBRyxFQUFFLElBQUk7YUFDWixDQUFDLENBQUMsQ0FBQztXQUNMOzs7ZUFWVSxHQUFHOzs7cUJBQUgsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQXBwIHtcclxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpe1xyXG4gICAgY29uZmlnLnRpdGxlID0gJ0F1cmVsaWEnO1xyXG4gICAgY29uZmlnLm1hcChbeyBcclxuICAgICAgICByb3V0ZTogJycsIFxyXG4gICAgICAgIG1vZHVsZUlkOiAnLi90dXRvcmlhbHMnLFxyXG4gICAgICAgIHRpdGxlOiAnVHV0b3JpYWxzJyxcclxuICAgICAgICBocmVmOiAnIy90dXRvcmlhbHMnLFxyXG4gICAgICAgIG5hdjogdHJ1ZSBcclxuICAgIH1dKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9