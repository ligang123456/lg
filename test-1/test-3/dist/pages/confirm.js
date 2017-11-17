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
      navigationBarTitleText: '订单处理'
    }, _this.data = {
      price: 3999
      // myname: '收货人',
      // mynumber: '手机号码',
      // myregion: '地区信息',
      // myaddress: '详细地址',
      // region: ['', '']
    }, _this.methods = {
      myaddress: function myaddress() {
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
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var res = this;
      console.log(res.myname);
      console.log(res.postalCode);
      console.log(res.provinceName);
      console.log(res.cityName);
      console.log(res.countyName);
      console.log(res.detailInfo);
      console.log(res.nationalCode);
      console.log(res.telNumber);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/confirm'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0uanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInByaWNlIiwibWV0aG9kcyIsIm15YWRkcmVzcyIsImNob29zZUFkZHJlc3MiLCJzdWNjZXNzIiwicmVzIiwiY29uc29sZSIsImxvZyIsIm15bmFtZSIsInBvc3RhbENvZGUiLCJwcm92aW5jZU5hbWUiLCJjaXR5TmFtZSIsImNvdW50eU5hbWUiLCJkZXRhaWxJbmZvIiwibmF0aW9uYWxDb2RlIiwidGVsTnVtYmVyIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkssSyxRQVFQQyxPLEdBQVU7QUFDUkMsZUFEUSx1QkFDSTtBQUNWLHVCQUFLQyxhQUFMLENBQW1CO0FBQ2pCQyxtQkFBUyxpQkFBVUMsR0FBVixFQUFlO0FBQ3RCQyxvQkFBUUMsR0FBUixDQUFZRixJQUFJRyxNQUFoQjtBQUNBRixvQkFBUUMsR0FBUixDQUFZRixJQUFJSSxVQUFoQjtBQUNBSCxvQkFBUUMsR0FBUixDQUFZRixJQUFJSyxZQUFoQjtBQUNBSixvQkFBUUMsR0FBUixDQUFZRixJQUFJTSxRQUFoQjtBQUNBTCxvQkFBUUMsR0FBUixDQUFZRixJQUFJTyxVQUFoQjtBQUNBTixvQkFBUUMsR0FBUixDQUFZRixJQUFJUSxVQUFoQjtBQUNBUCxvQkFBUUMsR0FBUixDQUFZRixJQUFJUyxZQUFoQjtBQUNBUixvQkFBUUMsR0FBUixDQUFZRixJQUFJVSxTQUFoQjtBQUNEO0FBVmdCLFNBQW5CO0FBWUQ7QUFkTyxLOzs7Ozs2QkFnQkQ7QUFDUCxVQUFJVixNQUFNLElBQVY7QUFDQUMsY0FBUUMsR0FBUixDQUFZRixJQUFJRyxNQUFoQjtBQUNNRixjQUFRQyxHQUFSLENBQVlGLElBQUlJLFVBQWhCO0FBQ0FILGNBQVFDLEdBQVIsQ0FBWUYsSUFBSUssWUFBaEI7QUFDQUosY0FBUUMsR0FBUixDQUFZRixJQUFJTSxRQUFoQjtBQUNBTCxjQUFRQyxHQUFSLENBQVlGLElBQUlPLFVBQWhCO0FBQ0FOLGNBQVFDLEdBQVIsQ0FBWUYsSUFBSVEsVUFBaEI7QUFDQVAsY0FBUUMsR0FBUixDQUFZRixJQUFJUyxZQUFoQjtBQUNBUixjQUFRQyxHQUFSLENBQVlGLElBQUlVLFNBQWhCO0FBQ1A7Ozs7RUF0Q2dDLGVBQUtDLEk7O2tCQUFuQnBCLEsiLCJmaWxlIjoiY29uZmlybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforqLljZXlpITnkIYnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBwcmljZTogMzk5OVxuICAgIC8vIG15bmFtZTogJ+aUtui0p+S6uicsXG4gICAgLy8gbXludW1iZXI6ICfmiYvmnLrlj7fnoIEnLFxuICAgIC8vIG15cmVnaW9uOiAn5Zyw5Yy65L+h5oGvJyxcbiAgICAvLyBteWFkZHJlc3M6ICfor6bnu4blnLDlnYAnLFxuICAgIC8vIHJlZ2lvbjogWycnLCAnJ11cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIG15YWRkcmVzcygpIHtcbiAgICAgIHdlcHkuY2hvb3NlQWRkcmVzcyh7XG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMubXluYW1lKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5wb3N0YWxDb2RlKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5wcm92aW5jZU5hbWUpXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmNpdHlOYW1lKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5jb3VudHlOYW1lKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kZXRhaWxJbmZvKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5uYXRpb25hbENvZGUpXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLnRlbE51bWJlcilcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCByZXMgPSB0aGlzXG4gICAgY29uc29sZS5sb2cocmVzLm15bmFtZSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMucG9zdGFsQ29kZSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMucHJvdmluY2VOYW1lKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5jaXR5TmFtZSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuY291bnR5TmFtZSlcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGV0YWlsSW5mbylcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMubmF0aW9uYWxDb2RlKVxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy50ZWxOdW1iZXIpXG4gIH1cbn1cbiJdfQ==