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
      navigationBarTitleText: 'klb'
    }, _this.data = {
      mapic: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2685210028,3457372075&fm=27&gp=0.jpg',
      ta: '加入购物车',
      tb: '立即购买',
      price: '¥3999',
      title: '2017最新款韩式婚纱2017最新款韩式婚纱2017最新款韩式婚纱2017最新款韩式婚纱',
      numbers: '数量',
      subtraction: '-',
      number: 0,
      add: '+'
    }, _this.methods = {
      subtraction: function subtraction() {
        var self = this;
        if (self.number) {
          self.number--;
        } else {
          self.number = 0;
        }
      },
      add: function add() {
        var self = this;
        if (self.add) {
          self.number++;
        } else {
          self.number = 0;
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/klb'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtsYi5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibWFwaWMiLCJ0YSIsInRiIiwicHJpY2UiLCJ0aXRsZSIsIm51bWJlcnMiLCJzdWJ0cmFjdGlvbiIsIm51bWJlciIsImFkZCIsIm1ldGhvZHMiLCJzZWxmIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGFBQU8sZ0dBREY7QUFFTEMsVUFBSSxPQUZDO0FBR0xDLFVBQUksTUFIQztBQUlMQyxhQUFPLE9BSkY7QUFLTEMsYUFBTyw4Q0FMRjtBQU1MQyxlQUFTLElBTko7QUFPTEMsbUJBQWEsR0FQUjtBQVFMQyxjQUFRLENBUkg7QUFTTEMsV0FBSztBQVRBLEssUUFXUEMsTyxHQUFVO0FBQ1JILGlCQURRLHlCQUNNO0FBQ1osWUFBSUksT0FBTyxJQUFYO0FBQ0EsWUFBSUEsS0FBS0gsTUFBVCxFQUFpQjtBQUNmRyxlQUFLSCxNQUFMO0FBQ0QsU0FGRCxNQUVPO0FBQ0xHLGVBQUtILE1BQUwsR0FBYyxDQUFkO0FBQ0Q7QUFDRixPQVJPO0FBU1JDLFNBVFEsaUJBU0Y7QUFDSixZQUFJRSxPQUFPLElBQVg7QUFDQSxZQUFJQSxLQUFLRixHQUFULEVBQWM7QUFDWkUsZUFBS0gsTUFBTDtBQUNELFNBRkQsTUFFTztBQUNMRyxlQUFLSCxNQUFMLEdBQWMsQ0FBZDtBQUNEO0FBQ0Y7QUFoQk8sSzs7Ozs7NkJBa0JELENBQUU7Ozs7RUFqQ3NCLGVBQUtJLEk7O2tCQUFuQmYsSyIsImZpbGUiOiJrbGIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAna2xiJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgbWFwaWM6ICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnZYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MjY4NTIxMDAyOCwzNDU3MzcyMDc1JmZtPTI3JmdwPTAuanBnJyxcbiAgICB0YTogJ+WKoOWFpei0reeJqei9picsXG4gICAgdGI6ICfnq4vljbPotK3kubAnLFxuICAgIHByaWNlOiAnwqUzOTk5JyxcbiAgICB0aXRsZTogJzIwMTfmnIDmlrDmrL7pn6nlvI/lqZrnurEyMDE35pyA5paw5qy+6Z+p5byP5ama57qxMjAxN+acgOaWsOasvumfqeW8j+Wpmue6sTIwMTfmnIDmlrDmrL7pn6nlvI/lqZrnurEnLFxuICAgIG51bWJlcnM6ICfmlbDph48nLFxuICAgIHN1YnRyYWN0aW9uOiAnLScsXG4gICAgbnVtYmVyOiAwLFxuICAgIGFkZDogJysnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBzdWJ0cmFjdGlvbigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgaWYgKHNlbGYubnVtYmVyKSB7XG4gICAgICAgIHNlbGYubnVtYmVyLS1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYubnVtYmVyID0gMFxuICAgICAgfVxuICAgIH0sXG4gICAgYWRkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBpZiAoc2VsZi5hZGQpIHtcbiAgICAgICAgc2VsZi5udW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5udW1iZXIgPSAwXG4gICAgICB9XG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHt9XG59XG4iXX0=