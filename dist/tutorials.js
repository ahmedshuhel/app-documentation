System.register(['aurelia-http-client'], function (_export) {
    'use strict';

    var HttpClient, ChildRouter;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_aureliaHttpClient) {
            HttpClient = _aureliaHttpClient.HttpClient;
        }],
        execute: function () {
            ChildRouter = (function () {
                function ChildRouter(httpClient) {
                    _classCallCheck(this, _ChildRouter);

                    this.http = httpClient;
                }

                var _ChildRouter = ChildRouter;

                _createClass(_ChildRouter, [{
                    key: 'activate',
                    value: function activate(params) {
                        var tutorial = params.tutorials || 'dependency-injection';
                    }
                }]);

                ChildRouter = inject(HttpClient)(ChildRouter) || ChildRouter;
                return ChildRouter;
            })();

            _export('ChildRouter', ChildRouter);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR1dG9yaWFscy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7b0JBR2EsV0FBVzs7Ozs7Ozs7NENBSGhCLFVBQVU7OztBQUdMLHVCQUFXO0FBRVQseUJBRkYsV0FBVyxDQUVSLFVBQVUsRUFBRTs7O0FBQ3BCLHdCQUFJLENBQUMsSUFBSSxHQUFHLFVBQVUsQ0FBQztpQkFDMUI7O21DQUpRLFdBQVc7Ozs7MkJBTVosa0JBQUMsTUFBTSxFQUFFO0FBR2IsNEJBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxTQUFTLElBQUksc0JBQXNCLENBQUM7cUJBSTdEOzs7QUFiUSwyQkFBVyxHQUR2QixNQUFNLENBQUMsVUFBVSxDQUFDLENBQ04sV0FBVyxLQUFYLFdBQVc7dUJBQVgsV0FBVzs7O21DQUFYLFdBQVciLCJmaWxlIjoidHV0b3JpYWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcblxuQGluamVjdChIdHRwQ2xpZW50KVxuZXhwb3J0IGNsYXNzIENoaWxkUm91dGVye1xuXG4gICAgY29uc3RydWN0b3IoaHR0cENsaWVudCkge1xuICAgICAgICB0aGlzLmh0dHAgPSBodHRwQ2xpZW50O1xuICAgIH1cblxuICAgIGFjdGl2YXRlKHBhcmFtcykge1xuXG4gICAgICAgIC8vIGdyYWIgdGhlIGN1cnJlbnQgdHV0b3JpYWxcbiAgICAgICAgbGV0IHR1dG9yaWFsID0gcGFyYW1zLnR1dG9yaWFscyB8fCAnZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuXG4gICAgICAgIC8vIGFuZCBncmFiIHRoZSBkYXRhIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGxpYnJhcnlcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoYHNvbWV0aGluZy8ke3R1dG9yaWFsfWApO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==