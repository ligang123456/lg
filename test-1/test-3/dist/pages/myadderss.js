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
      navigationBarTitleText: '收货地址'
    }, _this.data = {
      myname: '收货人',
      mynumber: '手机号码',
      myregion: '地区信息',
      myaddress: '详细地址',
      region: ['', '']
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      // wepy.chooseAddress({
      //   success: function (res) {
      //     console.log(res.myname)
      //     console.log(res.postalCode)
      //     console.log(res.provinceName)
      //     console.log(res.cityName)
      //     console.log(res.countyName)
      //     console.log(res.detailInfo)
      //     console.log(res.nationalCode)
      //     console.log(res.telNumber)
      //   }
      // })
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/myadderss'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15YWRkZXJzcy5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibXluYW1lIiwibXludW1iZXIiLCJteXJlZ2lvbiIsIm15YWRkcmVzcyIsInJlZ2lvbiIsIm1ldGhvZHMiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsY0FBUSxLQURIO0FBRUxDLGdCQUFVLE1BRkw7QUFHTEMsZ0JBQVUsTUFITDtBQUlMQyxpQkFBVyxNQUpOO0FBS0xDLGNBQVEsQ0FBQyxFQUFELEVBQUssRUFBTDtBQUxILEssUUFPUEMsTyxHQUFVLEU7Ozs7OzZCQUNEO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs7RUF6QmdDLGVBQUtDLEk7O2tCQUFuQlYsSyIsImZpbGUiOiJteWFkZGVyc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pS26LSn5Zyw5Z2AJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgbXluYW1lOiAn5pS26LSn5Lq6JyxcbiAgICBteW51bWJlcjogJ+aJi+acuuWPt+eggScsXG4gICAgbXlyZWdpb246ICflnLDljLrkv6Hmga8nLFxuICAgIG15YWRkcmVzczogJ+ivpue7huWcsOWdgCcsXG4gICAgcmVnaW9uOiBbJycsICcnXVxuICB9XG4gIG1ldGhvZHMgPSB7fVxuICBvbkxvYWQoKSB7XG4gICAgLy8gd2VweS5jaG9vc2VBZGRyZXNzKHtcbiAgICAvLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVzLm15bmFtZSlcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVzLnBvc3RhbENvZGUpXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcy5wcm92aW5jZU5hbWUpXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcy5jaXR5TmFtZSlcbiAgICAvLyAgICAgY29uc29sZS5sb2cocmVzLmNvdW50eU5hbWUpXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcy5kZXRhaWxJbmZvKVxuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMubmF0aW9uYWxDb2RlKVxuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMudGVsTnVtYmVyKVxuICAgIC8vICAgfVxuICAgIC8vIH0pXG4gIH1cbn1cbiJdfQ==