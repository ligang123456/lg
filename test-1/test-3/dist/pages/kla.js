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
      navigationBarTitleText: 'kla'
    }, _this.data = {
      mapic: 'http://img1.imgtn.bdimg.com/it/u=2553322381,2925312760&fm=27&gp=0.jpg',
      ta: '加入购物车',
      tb: '立即购买',
      price: '',
      title: '',
      numbers: '数量',
      subtraction: '-',
      number: 0,
      add: '+',
      image: ''
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
    value: function onLoad(data) {
      var self = this;
      self.title = data.title.k_int;
      self.image = data.title.k_pic;
      self.price = data.title.k_price;
      console.log(data.title, '22222');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/kla'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtsYS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibWFwaWMiLCJ0YSIsInRiIiwicHJpY2UiLCJ0aXRsZSIsIm51bWJlcnMiLCJzdWJ0cmFjdGlvbiIsIm51bWJlciIsImFkZCIsImltYWdlIiwibWV0aG9kcyIsInNlbGYiLCJrX2ludCIsImtfcGljIiwia19wcmljZSIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsYUFBTyx1RUFERjtBQUVMQyxVQUFJLE9BRkM7QUFHTEMsVUFBSSxNQUhDO0FBSUxDLGFBQU8sRUFKRjtBQUtMQyxhQUFPLEVBTEY7QUFNTEMsZUFBUyxJQU5KO0FBT0xDLG1CQUFhLEdBUFI7QUFRTEMsY0FBUSxDQVJIO0FBU0xDLFdBQUssR0FUQTtBQVVMQyxhQUFPO0FBVkYsSyxRQVlQQyxPLEdBQVU7QUFDUkosaUJBRFEseUJBQ007QUFDWixZQUFJSyxPQUFPLElBQVg7QUFDQSxZQUFJQSxLQUFLSixNQUFULEVBQWlCO0FBQ2ZJLGVBQUtKLE1BQUw7QUFDRCxTQUZELE1BRU87QUFDTEksZUFBS0osTUFBTCxHQUFjLENBQWQ7QUFDRDtBQUNGLE9BUk87QUFTUkMsU0FUUSxpQkFTRjtBQUNKLFlBQUlHLE9BQU8sSUFBWDtBQUNBLFlBQUlBLEtBQUtILEdBQVQsRUFBYztBQUNaRyxlQUFLSixNQUFMO0FBQ0QsU0FGRCxNQUVPO0FBQ0xJLGVBQUtKLE1BQUwsR0FBYyxDQUFkO0FBQ0Q7QUFDRjtBQWhCTyxLOzs7OzsyQkFrQkhSLEksRUFBTTtBQUNYLFVBQUlZLE9BQU8sSUFBWDtBQUNBQSxXQUFLUCxLQUFMLEdBQWFMLEtBQUtLLEtBQUwsQ0FBV1EsS0FBeEI7QUFDQUQsV0FBS0YsS0FBTCxHQUFhVixLQUFLSyxLQUFMLENBQVdTLEtBQXhCO0FBQ0FGLFdBQUtSLEtBQUwsR0FBYUosS0FBS0ssS0FBTCxDQUFXVSxPQUF4QjtBQUNBQyxjQUFRQyxHQUFSLENBQVlqQixLQUFLSyxLQUFqQixFQUF3QixPQUF4QjtBQUNEOzs7O0VBeENnQyxlQUFLYSxJOztrQkFBbkJyQixLIiwiZmlsZSI6ImtsYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdrbGEnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBtYXBpYzogJ2h0dHA6Ly9pbWcxLmltZ3RuLmJkaW1nLmNvbS9pdC91PTI1NTMzMjIzODEsMjkyNTMxMjc2MCZmbT0yNyZncD0wLmpwZycsXG4gICAgdGE6ICfliqDlhaXotK3nianovaYnLFxuICAgIHRiOiAn56uL5Y2z6LSt5LmwJyxcbiAgICBwcmljZTogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIG51bWJlcnM6ICfmlbDph48nLFxuICAgIHN1YnRyYWN0aW9uOiAnLScsXG4gICAgbnVtYmVyOiAwLFxuICAgIGFkZDogJysnLFxuICAgIGltYWdlOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc3VidHJhY3Rpb24oKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGlmIChzZWxmLm51bWJlcikge1xuICAgICAgICBzZWxmLm51bWJlci0tXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLm51bWJlciA9IDBcbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgaWYgKHNlbGYuYWRkKSB7XG4gICAgICAgIHNlbGYubnVtYmVyKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYubnVtYmVyID0gMFxuICAgICAgfVxuICAgIH1cbiAgfVxuICBvbkxvYWQoZGF0YSkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYudGl0bGUgPSBkYXRhLnRpdGxlLmtfaW50XG4gICAgc2VsZi5pbWFnZSA9IGRhdGEudGl0bGUua19waWNcbiAgICBzZWxmLnByaWNlID0gZGF0YS50aXRsZS5rX3ByaWNlXG4gICAgY29uc29sZS5sb2coZGF0YS50aXRsZSwgJzIyMjIyJylcbiAgfVxufVxuIl19