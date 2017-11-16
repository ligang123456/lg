'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cart = require('./../data/cart.js');

var _cart2 = _interopRequireDefault(_cart);

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
      navigationBarTitleText: '购物车'
    }, _this.data = {
      cart: [],
      subtraction: '-',
      add: '+',
      cpic: false,
      circlepic: '../images/circle.png',
      c_text: '全选',
      sub_anumber: 0.0,
      sub_bnumber: 0,
      nadd: false,
      nsubtraction: false
      // cpic: false
    }, _this.methods = {
      add: function add(e) {
        var self = this;
        var index = e.currentTarget.id;
        self.cart[index].nadd = !self.cart[index].nadd;
        // self.lacollect = '../images/收藏-选中.png'
        if (self.cart[index].nadd) {
          self.cart[index].number++;
        }
      },
      subtraction: function subtraction(e) {
        var self = this;
        var index = e.currentTarget.id;
        // self.cart[index].nsubtraction = !self.cart[index].nsubtraction
        if (self.cart[index].number > 0) {
          self.cart[index].number--;
        } else {
          self.cart[index].number = 0;
        }
      },
      cpic: function cpic(e) {
        var self = this;
        var i;
        // let index = e.currentTarget.id
        self.cpic = !self.cpic;
        if (self.cpic) {
          // self.cpic = '../images/check.png'
          for (i = 0; i < _cart2.default.length; i++) {
            self.cart[i].check_pic = 1;
            // self.sub_anumber = self.cart[i].price
          }
          // self.sub_anumber += self.cart[index].number * self.cart[index].price
        } else {
          // self.cpic = '../images/circle.png'
          for (i = 0; i < _cart2.default.length; i++) {
            self.cart[i].check_pic = 0;
            self.sub_anumber = 0;
          }
        }
        // self.sub_anumber = self.cart[i].number * self.cart[i].price
      },
      check_pic: function check_pic(e) {
        var self = this;
        var index = e.currentTarget.id;
        self.cart[index].check_pic = !self.cart[index].check_pic;
        if (self.cart[index].check_pic) {
          self.sub_anumber = self.cart[index].price * self.cart[index].number;
          // self.cart[index].check_pic = '../images/check.png'
        } else {
          self.sub_anumber = 0;
        }
      },
      delete_pic: function delete_pic(e) {
        var self = this;
        var index = e.currentTarget.id;
        delete _cart2.default[index]; // 删除对象中的元素
        self.cart[index] = [];
        _wepy2.default.showToast({
          title: '删除成功'
          // icon: 'success'
          // duration: 2000
        });
      }
      // delete_pic(e) {
      //   console.log(e) // 为空是1，购物车有缓存为2，显示界面做简单处理
      //   this.setData({
      //     carClear: e
      //   })
      // }

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.cart = _cart2.default;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/mycart'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15Y2FydC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiY2FydCIsInN1YnRyYWN0aW9uIiwiYWRkIiwiY3BpYyIsImNpcmNsZXBpYyIsImNfdGV4dCIsInN1Yl9hbnVtYmVyIiwic3ViX2JudW1iZXIiLCJuYWRkIiwibnN1YnRyYWN0aW9uIiwibWV0aG9kcyIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJudW1iZXIiLCJpIiwibGVuZ3RoIiwiY2hlY2tfcGljIiwicHJpY2UiLCJkZWxldGVfcGljIiwic2hvd1RvYXN0IiwidGl0bGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxZQUFNLEVBREQ7QUFFTEMsbUJBQWEsR0FGUjtBQUdMQyxXQUFLLEdBSEE7QUFJTEMsWUFBTSxLQUpEO0FBS0xDLGlCQUFXLHNCQUxOO0FBTUxDLGNBQVEsSUFOSDtBQU9MQyxtQkFBYSxHQVBSO0FBUUxDLG1CQUFhLENBUlI7QUFTTEMsWUFBTSxLQVREO0FBVUxDLG9CQUFjO0FBQ2Q7QUFYSyxLLFFBYVBDLE8sR0FBVTtBQUNSUixTQURRLGVBQ0pTLENBREksRUFDRDtBQUNMLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTVCO0FBQ0FILGFBQUtaLElBQUwsQ0FBVWEsS0FBVixFQUFpQkwsSUFBakIsR0FBd0IsQ0FBQ0ksS0FBS1osSUFBTCxDQUFVYSxLQUFWLEVBQWlCTCxJQUExQztBQUNBO0FBQ0EsWUFBSUksS0FBS1osSUFBTCxDQUFVYSxLQUFWLEVBQWlCTCxJQUFyQixFQUEyQjtBQUN6QkksZUFBS1osSUFBTCxDQUFVYSxLQUFWLEVBQWlCRyxNQUFqQjtBQUNEO0FBQ0YsT0FUTztBQVVSZixpQkFWUSx1QkFVSVUsQ0FWSixFQVVPO0FBQ2IsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsRUFBNUI7QUFDQTtBQUNBLFlBQUlILEtBQUtaLElBQUwsQ0FBVWEsS0FBVixFQUFpQkcsTUFBakIsR0FBMEIsQ0FBOUIsRUFBaUM7QUFDL0JKLGVBQUtaLElBQUwsQ0FBVWEsS0FBVixFQUFpQkcsTUFBakI7QUFDRCxTQUZELE1BRU87QUFDTEosZUFBS1osSUFBTCxDQUFVYSxLQUFWLEVBQWlCRyxNQUFqQixHQUEwQixDQUExQjtBQUNEO0FBQ0YsT0FuQk87QUFvQlJiLFVBcEJRLGdCQW9CSFEsQ0FwQkcsRUFvQkE7QUFDTixZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJSyxDQUFKO0FBQ0E7QUFDQUwsYUFBS1QsSUFBTCxHQUFZLENBQUNTLEtBQUtULElBQWxCO0FBQ0EsWUFBSVMsS0FBS1QsSUFBVCxFQUFlO0FBQ2I7QUFDQSxlQUFLYyxJQUFJLENBQVQsRUFBWUEsSUFBSSxlQUFLQyxNQUFyQixFQUE2QkQsR0FBN0IsRUFBa0M7QUFDaENMLGlCQUFLWixJQUFMLENBQVVpQixDQUFWLEVBQWFFLFNBQWIsR0FBeUIsQ0FBekI7QUFDQTtBQUNEO0FBQ0Q7QUFDRCxTQVBELE1BT087QUFDTDtBQUNBLGVBQUtGLElBQUksQ0FBVCxFQUFZQSxJQUFJLGVBQUtDLE1BQXJCLEVBQTZCRCxHQUE3QixFQUFrQztBQUNoQ0wsaUJBQUtaLElBQUwsQ0FBVWlCLENBQVYsRUFBYUUsU0FBYixHQUF5QixDQUF6QjtBQUNBUCxpQkFBS04sV0FBTCxHQUFtQixDQUFuQjtBQUNEO0FBQ0Y7QUFDRDtBQUNELE9BeENPO0FBeUNSYSxlQXpDUSxxQkF5Q0VSLENBekNGLEVBeUNLO0FBQ1gsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsRUFBNUI7QUFDQUgsYUFBS1osSUFBTCxDQUFVYSxLQUFWLEVBQWlCTSxTQUFqQixHQUE2QixDQUFDUCxLQUFLWixJQUFMLENBQVVhLEtBQVYsRUFBaUJNLFNBQS9DO0FBQ0EsWUFBSVAsS0FBS1osSUFBTCxDQUFVYSxLQUFWLEVBQWlCTSxTQUFyQixFQUFnQztBQUM5QlAsZUFBS04sV0FBTCxHQUFtQk0sS0FBS1osSUFBTCxDQUFVYSxLQUFWLEVBQWlCTyxLQUFqQixHQUF5QlIsS0FBS1osSUFBTCxDQUFVYSxLQUFWLEVBQWlCRyxNQUE3RDtBQUNGO0FBQ0MsU0FIRCxNQUdPO0FBQ0xKLGVBQUtOLFdBQUwsR0FBbUIsQ0FBbkI7QUFDRDtBQUNGLE9BbkRPO0FBb0RSZSxnQkFwRFEsc0JBb0RHVixDQXBESCxFQW9ETTtBQUNaLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTVCO0FBQ0EsZUFBTyxlQUFLRixLQUFMLENBQVAsQ0FIWSxDQUdPO0FBQ25CRCxhQUFLWixJQUFMLENBQVVhLEtBQVYsSUFBbUIsRUFBbkI7QUFDQSx1QkFBS1MsU0FBTCxDQUFlO0FBQ2JDLGlCQUFPO0FBQ1A7QUFDQTtBQUhhLFNBQWY7QUFLRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFwRVEsSzs7Ozs7NkJBc0VEO0FBQ1AsVUFBSVgsT0FBTyxJQUFYO0FBQ0FBLFdBQUtaLElBQUw7QUFDRDs7OztFQTFGZ0MsZUFBS3dCLEk7O2tCQUFuQjVCLEsiLCJmaWxlIjoibXljYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgY2FydCBmcm9tICcuLi9kYXRhL2NhcnQuanMnXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i0reeJqei9pidcbiAgfVxuICBkYXRhID0ge1xuICAgIGNhcnQ6IFtdLFxuICAgIHN1YnRyYWN0aW9uOiAnLScsXG4gICAgYWRkOiAnKycsXG4gICAgY3BpYzogZmFsc2UsXG4gICAgY2lyY2xlcGljOiAnLi4vaW1hZ2VzL2NpcmNsZS5wbmcnLFxuICAgIGNfdGV4dDogJ+WFqOmAiScsXG4gICAgc3ViX2FudW1iZXI6IDAuMCxcbiAgICBzdWJfYm51bWJlcjogMCxcbiAgICBuYWRkOiBmYWxzZSxcbiAgICBuc3VidHJhY3Rpb246IGZhbHNlXG4gICAgLy8gY3BpYzogZmFsc2VcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGFkZChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgc2VsZi5jYXJ0W2luZGV4XS5uYWRkID0gIXNlbGYuY2FydFtpbmRleF0ubmFkZFxuICAgICAgLy8gc2VsZi5sYWNvbGxlY3QgPSAnLi4vaW1hZ2VzL+aUtuiXjy3pgInkuK0ucG5nJ1xuICAgICAgaWYgKHNlbGYuY2FydFtpbmRleF0ubmFkZCkge1xuICAgICAgICBzZWxmLmNhcnRbaW5kZXhdLm51bWJlcisrXG4gICAgICB9XG4gICAgfSxcbiAgICBzdWJ0cmFjdGlvbihlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgLy8gc2VsZi5jYXJ0W2luZGV4XS5uc3VidHJhY3Rpb24gPSAhc2VsZi5jYXJ0W2luZGV4XS5uc3VidHJhY3Rpb25cbiAgICAgIGlmIChzZWxmLmNhcnRbaW5kZXhdLm51bWJlciA+IDApIHtcbiAgICAgICAgc2VsZi5jYXJ0W2luZGV4XS5udW1iZXItLVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5jYXJ0W2luZGV4XS5udW1iZXIgPSAwXG4gICAgICB9XG4gICAgfSxcbiAgICBjcGljKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgdmFyIGlcbiAgICAgIC8vIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgc2VsZi5jcGljID0gIXNlbGYuY3BpY1xuICAgICAgaWYgKHNlbGYuY3BpYykge1xuICAgICAgICAvLyBzZWxmLmNwaWMgPSAnLi4vaW1hZ2VzL2NoZWNrLnBuZydcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNhcnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBzZWxmLmNhcnRbaV0uY2hlY2tfcGljID0gMVxuICAgICAgICAgIC8vIHNlbGYuc3ViX2FudW1iZXIgPSBzZWxmLmNhcnRbaV0ucHJpY2VcbiAgICAgICAgfVxuICAgICAgICAvLyBzZWxmLnN1Yl9hbnVtYmVyICs9IHNlbGYuY2FydFtpbmRleF0ubnVtYmVyICogc2VsZi5jYXJ0W2luZGV4XS5wcmljZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc2VsZi5jcGljID0gJy4uL2ltYWdlcy9jaXJjbGUucG5nJ1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2FydC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHNlbGYuY2FydFtpXS5jaGVja19waWMgPSAwXG4gICAgICAgICAgc2VsZi5zdWJfYW51bWJlciA9IDBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gc2VsZi5zdWJfYW51bWJlciA9IHNlbGYuY2FydFtpXS5udW1iZXIgKiBzZWxmLmNhcnRbaV0ucHJpY2VcbiAgICB9LFxuICAgIGNoZWNrX3BpYyhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgc2VsZi5jYXJ0W2luZGV4XS5jaGVja19waWMgPSAhc2VsZi5jYXJ0W2luZGV4XS5jaGVja19waWNcbiAgICAgIGlmIChzZWxmLmNhcnRbaW5kZXhdLmNoZWNrX3BpYykge1xuICAgICAgICBzZWxmLnN1Yl9hbnVtYmVyID0gc2VsZi5jYXJ0W2luZGV4XS5wcmljZSAqIHNlbGYuY2FydFtpbmRleF0ubnVtYmVyXG4gICAgICAvLyBzZWxmLmNhcnRbaW5kZXhdLmNoZWNrX3BpYyA9ICcuLi9pbWFnZXMvY2hlY2sucG5nJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5zdWJfYW51bWJlciA9IDBcbiAgICAgIH1cbiAgICB9LFxuICAgIGRlbGV0ZV9waWMoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIGRlbGV0ZSBjYXJ0W2luZGV4XSAvLyDliKDpmaTlr7nosaHkuK3nmoTlhYPntKBcbiAgICAgIHNlbGYuY2FydFtpbmRleF0gPSBbXVxuICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ+WIoOmZpOaIkOWKnydcbiAgICAgICAgLy8gaWNvbjogJ3N1Y2Nlc3MnXG4gICAgICAgIC8vIGR1cmF0aW9uOiAyMDAwXG4gICAgICB9KVxuICAgIH1cbiAgICAvLyBkZWxldGVfcGljKGUpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGUpIC8vIOS4uuepuuaYrzHvvIzotK3nianovabmnInnvJPlrZjkuLoy77yM5pi+56S655WM6Z2i5YGa566A5Y2V5aSE55CGXG4gICAgLy8gICB0aGlzLnNldERhdGEoe1xuICAgIC8vICAgICBjYXJDbGVhcjogZVxuICAgIC8vICAgfSlcbiAgICAvLyB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuY2FydCA9IGNhcnRcbiAgfVxufVxuIl19