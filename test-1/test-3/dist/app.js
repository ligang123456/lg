'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/search', 'pages/mine', 'pages/myadderss', 'pages/addmyaddress', 'pages/mycorder', 'pages/mycart', 'pages/mycollect', 'pages/Korean', 'pages/China', 'pages/euramerican', 'pages/fresh', 'pages/mynickname', 'pages/mycode', 'pages/kla', 'pages/klb', 'pages/mypay', 'pages/mygoods', 'pages/myappraise', 'pages/mynews', 'pages/myfeedback'],
      tabBar: {
        color: 'black',
        selectedColor: '#1296db',
        backgroundColor: 'silver',
        list: [{
          pagePath: 'pages/index',
          text: '首页',
          iconPath: './images/ahome.png',
          selectedIconPath: './images/bhome.png'
        }, {
          pagePath: 'pages/mine',
          text: '个人',
          iconPath: './images/aexpression.png',
          selectedIconPath: './images/bexpression.png'
        }]
      },
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: 'silver',
        navigationBarTitleText: 'WeChat',
        navigationBarTextStyle: 'black',
        enablePullDownRefresh: true // 默认刷新
      }
    };
    _this.globalData = {
      userInfo: null,
      nickName: 'Beautiful'
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function onLaunch() {
      this.testAsync();
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.sleep(3);

              case 2:
                data = _context.sent;

                console.log(data);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, undefined));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsInRhYkJhciIsImNvbG9yIiwic2VsZWN0ZWRDb2xvciIsImJhY2tncm91bmRDb2xvciIsImxpc3QiLCJwYWdlUGF0aCIsInRleHQiLCJpY29uUGF0aCIsInNlbGVjdGVkSWNvblBhdGgiLCJ3aW5kb3ciLCJiYWNrZ3JvdW5kVGV4dFN0eWxlIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlIiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJ1c2UiLCJ0ZXN0QXN5bmMiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImNiIiwidGhhdCIsImdldFVzZXJJbmZvIiwic3VjY2VzcyIsInJlcyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBMERFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUF2RGRBLE1BdURjLEdBdkRMO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsY0FGSyxFQUdMLFlBSEssRUFJTCxpQkFKSyxFQUtMLG9CQUxLLEVBTUwsZ0JBTkssRUFPTCxjQVBLLEVBUUwsaUJBUkssRUFTTCxjQVRLLEVBVUwsYUFWSyxFQVdMLG1CQVhLLEVBWUwsYUFaSyxFQWFMLGtCQWJLLEVBY0wsY0FkSyxFQWVMLFdBZkssRUFnQkwsV0FoQkssRUFpQkwsYUFqQkssRUFrQkwsZUFsQkssRUFtQkwsa0JBbkJLLEVBb0JMLGNBcEJLLEVBcUJMLGtCQXJCSyxDQURBO0FBd0JQQyxjQUFRO0FBQ05DLGVBQU8sT0FERDtBQUVOQyx1QkFBZSxTQUZUO0FBR05DLHlCQUFpQixRQUhYO0FBSU5DLGNBQU0sQ0FBQztBQUNMQyxvQkFBVSxhQURMO0FBRUxDLGdCQUFNLElBRkQ7QUFHTEMsb0JBQVUsb0JBSEw7QUFJTEMsNEJBQWtCO0FBSmIsU0FBRCxFQU1OO0FBQ0VILG9CQUFVLFlBRFo7QUFFRUMsZ0JBQU0sSUFGUjtBQUdFQyxvQkFBVSwwQkFIWjtBQUlFQyw0QkFBa0I7QUFKcEIsU0FOTTtBQUpBLE9BeEJEO0FBeUNQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixRQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCLE9BSmxCO0FBS05DLCtCQUF1QixJQUxqQixDQUtzQjtBQUx0QjtBQXpDRCxLQXVESztBQUFBLFVBTGRDLFVBS2MsR0FMRDtBQUNYQyxnQkFBVSxJQURDO0FBRVhDLGdCQUFVO0FBRkMsS0FLQzs7QUFFWixVQUFLQyxHQUFMLENBQVMsWUFBVDtBQUZZO0FBR2I7Ozs7K0JBRVU7QUFDVCxXQUFLQyxTQUFMO0FBQ0Q7OzswQkFFS0MsQyxFQUFHO0FBQ1AsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxtQkFBVyxZQUFNO0FBQ2ZGLGtCQUFRLGtCQUFSO0FBQ0QsU0FGRCxFQUVHRixJQUFJLElBRlA7QUFHRCxPQUpNLENBQVA7QUFLRDs7Ozs7Ozs7Ozs7dUJBR29CLEtBQUtLLEtBQUwsQ0FBVyxDQUFYLEM7OztBQUFiQyxvQjs7QUFDTkMsd0JBQVFDLEdBQVIsQ0FBWUYsSUFBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dDQUdVRyxFLEVBQUk7QUFDZCxVQUFNQyxPQUFPLElBQWI7QUFDQSxVQUFJLEtBQUtmLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzVCLGVBQU8sS0FBS0QsVUFBTCxDQUFnQkMsUUFBdkI7QUFDRDtBQUNELHFCQUFLZSxXQUFMLENBQWlCO0FBQ2ZDLGVBRGUsbUJBQ1BDLEdBRE8sRUFDRjtBQUNYSCxlQUFLZixVQUFMLENBQWdCQyxRQUFoQixHQUEyQmlCLElBQUlqQixRQUEvQjtBQUNBYSxnQkFBTUEsR0FBR0ksSUFBSWpCLFFBQVAsQ0FBTjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OztFQXpGMEIsZUFBS2tCLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICdwYWdlcy9pbmRleCcsXHJcbiAgICAgICdwYWdlcy9zZWFyY2gnLFxyXG4gICAgICAncGFnZXMvbWluZScsXHJcbiAgICAgICdwYWdlcy9teWFkZGVyc3MnLFxyXG4gICAgICAncGFnZXMvYWRkbXlhZGRyZXNzJyxcclxuICAgICAgJ3BhZ2VzL215Y29yZGVyJyxcclxuICAgICAgJ3BhZ2VzL215Y2FydCcsXHJcbiAgICAgICdwYWdlcy9teWNvbGxlY3QnLFxyXG4gICAgICAncGFnZXMvS29yZWFuJyxcclxuICAgICAgJ3BhZ2VzL0NoaW5hJyxcclxuICAgICAgJ3BhZ2VzL2V1cmFtZXJpY2FuJyxcclxuICAgICAgJ3BhZ2VzL2ZyZXNoJyxcclxuICAgICAgJ3BhZ2VzL215bmlja25hbWUnLFxyXG4gICAgICAncGFnZXMvbXljb2RlJyxcclxuICAgICAgJ3BhZ2VzL2tsYScsXHJcbiAgICAgICdwYWdlcy9rbGInLFxyXG4gICAgICAncGFnZXMvbXlwYXknLFxyXG4gICAgICAncGFnZXMvbXlnb29kcycsXHJcbiAgICAgICdwYWdlcy9teWFwcHJhaXNlJyxcclxuICAgICAgJ3BhZ2VzL215bmV3cycsXHJcbiAgICAgICdwYWdlcy9teWZlZWRiYWNrJ1xyXG4gICAgXSxcclxuICAgIHRhYkJhcjoge1xyXG4gICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgc2VsZWN0ZWRDb2xvcjogJyMxMjk2ZGInLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdzaWx2ZXInLFxyXG4gICAgICBsaXN0OiBbe1xyXG4gICAgICAgIHBhZ2VQYXRoOiAncGFnZXMvaW5kZXgnLFxyXG4gICAgICAgIHRleHQ6ICfpppbpobUnLFxyXG4gICAgICAgIGljb25QYXRoOiAnLi9pbWFnZXMvYWhvbWUucG5nJyxcclxuICAgICAgICBzZWxlY3RlZEljb25QYXRoOiAnLi9pbWFnZXMvYmhvbWUucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFnZVBhdGg6ICdwYWdlcy9taW5lJyxcclxuICAgICAgICB0ZXh0OiAn5Liq5Lq6JyxcclxuICAgICAgICBpY29uUGF0aDogJy4vaW1hZ2VzL2FleHByZXNzaW9uLnBuZycsXHJcbiAgICAgICAgc2VsZWN0ZWRJY29uUGF0aDogJy4vaW1hZ2VzL2JleHByZXNzaW9uLnBuZydcclxuICAgICAgfV1cclxuICAgIH0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcclxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJ3NpbHZlcicsXHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdXZUNoYXQnLFxyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snLFxyXG4gICAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWUgLy8g6buY6K6k5Yi35pawXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgdXNlckluZm86IG51bGwsXHJcbiAgICBuaWNrTmFtZTogJ0JlYXV0aWZ1bCdcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gIH1cclxuXHJcbiAgb25MYXVuY2goKSB7XHJcbiAgICB0aGlzLnRlc3RBc3luYygpXHJcbiAgfVxyXG5cclxuICBzbGVlcChzKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcclxuICAgICAgfSwgcyAqIDEwMDApXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgdGVzdEFzeW5jKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuc2xlZXAoMylcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgfVxyXG5cclxuICBnZXRVc2VySW5mbyhjYikge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xyXG4gICAgfVxyXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxyXG4iXX0=