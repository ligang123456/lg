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
      navigationBarTitleText: '资讯'
    }, _this.data = {
      imgUrls: ['../images/韩式.jpg', '../images/中国古装式.jpg', '../images/欧式.jpg', '../images/小清新.jpg'],
      indicatorDots: true,
      autoplay: true,
      interval: '3000',
      duration: '300',
      ta: '最新动态',
      tb: '服务小贴士',
      tc: '新婚资讯',
      td: '婚礼课堂'
    }, _this.methods = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/information'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm9ybWF0aW9uLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbWdVcmxzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInRhIiwidGIiLCJ0YyIsInRkIiwibWV0aG9kcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxlQUFTLENBQ1Asa0JBRE8sRUFFUCxxQkFGTyxFQUdQLGtCQUhPLEVBSVAsbUJBSk8sQ0FESjtBQU9MQyxxQkFBZSxJQVBWO0FBUUxDLGdCQUFVLElBUkw7QUFTTEMsZ0JBQVUsTUFUTDtBQVVMQyxnQkFBVSxLQVZMO0FBV0xDLFVBQUksTUFYQztBQVlMQyxVQUFJLE9BWkM7QUFhTEMsVUFBSSxNQWJDO0FBY0xDLFVBQUk7QUFkQyxLLFFBZ0JQQyxPLEdBQVUsRTs7Ozs7NkJBQ0QsQ0FBRzs7OztFQXJCcUIsZUFBS0MsSTs7a0JBQW5CZCxLIiwiZmlsZSI6ImluZm9ybWF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i1hOiurydcbiAgfVxuICBkYXRhID0ge1xuICAgIGltZ1VybHM6IFtcbiAgICAgICcuLi9pbWFnZXMv6Z+p5byPLmpwZycsXG4gICAgICAnLi4vaW1hZ2VzL+S4reWbveWPpOijheW8jy5qcGcnLFxuICAgICAgJy4uL2ltYWdlcy/mrKflvI8uanBnJyxcbiAgICAgICcuLi9pbWFnZXMv5bCP5riF5pawLmpwZydcbiAgICBdLFxuICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgaW50ZXJ2YWw6ICczMDAwJyxcbiAgICBkdXJhdGlvbjogJzMwMCcsXG4gICAgdGE6ICfmnIDmlrDliqjmgIEnLFxuICAgIHRiOiAn5pyN5Yqh5bCP6LS05aOrJyxcbiAgICB0YzogJ+aWsOWpmui1hOiurycsXG4gICAgdGQ6ICflqZrnpLzor77loIInXG4gIH1cbiAgbWV0aG9kcyA9IHt9XG4gIG9uTG9hZCgpIHsgfVxufVxuIl19