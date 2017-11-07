'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '管理收货地址',
      navigationBarBackgroundColor: 'orangered'

    }, _this.data = {
      myname: '收货人',
      mynumber: '手机号码',
      myregion: '地区信息',
      myaddress: '详细地址'
    }, _this.methods = {
      address: function address() {
        _wepy2.default.navigateTo({
          url: '../pages/myadderss'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      _wepy2.default.chooseAddress({
        success: function success(res) {
          console.log(res.myname);
          console.log(res.postalCode);
          console.log(res.provinceName);
          console.log(res.cityName);
          console.log(res.countyName);
          console.log(res.detailInfo);
          console.log(res.nationalCode);
          console.log(res.telNumber);
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/addmyaddress'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZG15YWRkcmVzcy5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwiZGF0YSIsIm15bmFtZSIsIm15bnVtYmVyIiwibXlyZWdpb24iLCJteWFkZHJlc3MiLCJtZXRob2RzIiwiYWRkcmVzcyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjaG9vc2VBZGRyZXNzIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0YWxDb2RlIiwicHJvdmluY2VOYW1lIiwiY2l0eU5hbWUiLCJjb3VudHlOYW1lIiwiZGV0YWlsSW5mbyIsIm5hdGlvbmFsQ29kZSIsInRlbE51bWJlciIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixRQURqQjtBQUVQQyxvQ0FBOEI7O0FBRnZCLEssUUFLVEMsSSxHQUFPO0FBQ0xDLGNBQVEsS0FESDtBQUVMQyxnQkFBVSxNQUZMO0FBR0xDLGdCQUFVLE1BSEw7QUFJTEMsaUJBQVc7QUFKTixLLFFBTVBDLE8sR0FBVTtBQUNSQyxhQURRLHFCQUNFO0FBQ1IsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFMTyxLOzs7Ozs2QkFPRDtBQUNQLHFCQUFLQyxhQUFMLENBQW1CO0FBQ2pCQyxpQkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCQyxrQkFBUUMsR0FBUixDQUFZRixJQUFJVixNQUFoQjtBQUNBVyxrQkFBUUMsR0FBUixDQUFZRixJQUFJRyxVQUFoQjtBQUNBRixrQkFBUUMsR0FBUixDQUFZRixJQUFJSSxZQUFoQjtBQUNBSCxrQkFBUUMsR0FBUixDQUFZRixJQUFJSyxRQUFoQjtBQUNBSixrQkFBUUMsR0FBUixDQUFZRixJQUFJTSxVQUFoQjtBQUNBTCxrQkFBUUMsR0FBUixDQUFZRixJQUFJTyxVQUFoQjtBQUNBTixrQkFBUUMsR0FBUixDQUFZRixJQUFJUSxZQUFoQjtBQUNBUCxrQkFBUUMsR0FBUixDQUFZRixJQUFJUyxTQUFoQjtBQUNEO0FBVmdCLE9BQW5CO0FBWUQ7Ozs7RUFoQ2dDLGVBQUtDLEk7O2tCQUFuQnpCLEsiLCJmaWxlIjoiYWRkbXlhZGRyZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+euoeeQhuaUtui0p+WcsOWdgCcsXG4gICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJ29yYW5nZXJlZCdcblxuICB9XG4gIGRhdGEgPSB7XG4gICAgbXluYW1lOiAn5pS26LSn5Lq6JyxcbiAgICBteW51bWJlcjogJ+aJi+acuuWPt+eggScsXG4gICAgbXlyZWdpb246ICflnLDljLrkv6Hmga8nLFxuICAgIG15YWRkcmVzczogJ+ivpue7huWcsOWdgCdcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGFkZHJlc3MoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9wYWdlcy9teWFkZGVyc3MnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgd2VweS5jaG9vc2VBZGRyZXNzKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzLm15bmFtZSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzLnBvc3RhbENvZGUpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5wcm92aW5jZU5hbWUpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5jaXR5TmFtZSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmNvdW50eU5hbWUpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kZXRhaWxJbmZvKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMubmF0aW9uYWxDb2RlKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMudGVsTnVtYmVyKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==