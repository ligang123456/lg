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
      cpic: '../images/circle.png',
      c_text: '全选',
      sub_anumber: 0.0,
      sub_bnumber: 0
      // cpic: false
    }, _this.methods = {
      collect: function collect(e) {
        var self = this;
        var index = e.currentTarget.id;
        self.korean[index].acollect = !self.korean[index].acollect;
        // self.lacollect = '../images/收藏-选中.png'
        if (self.korean[index].acollect) {
          self.korean[index].k_number++;
        } else {
          self.korean[index].k_number--;
        }
      },
      add: function add(e) {
        var self = this;
        var index = e.currentTarget.id;
        // self.cart[index].add = !self.cart[index].add
        // self.lacollect = '../images/收藏-选中.png'
        if (self.cart[index].add) {
          self.korean[index].number++;
        } else {
          self.cart[index].number = 0;
        }
      },
      subtraction: function subtraction(e) {
        var self = this;
        var index = e.currentTarget.id;
        self.cpic = !self.cpic;
        if (self.cart[index].subtraction) {
          self.korean[index].number--;
        } else {
          self.korean[index].number = 0;
        }
      },
      cpic: function cpic(e) {
        var self = this;
        // let index = e.currentTarget.id
        self.cpic = '../images/check.png';
        for (var i = 0; i < _cart2.default.length; i++) {
          self.cart[i].check_pic = '../images/check.png';
        }
      },
      check_pic: function check_pic(e) {
        var self = this;
        var index = e.currentTarget.id;
        self.cart[index] = !self.cart[index];
        if (self.cart[index]) {
          self.cart[index].check_pic = '../images/check.png';
        } else {
          self.cart[index].check_pic = '../images/circle.png';
        }
      }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15Y2FydC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiY2FydCIsInN1YnRyYWN0aW9uIiwiYWRkIiwiY3BpYyIsImNfdGV4dCIsInN1Yl9hbnVtYmVyIiwic3ViX2JudW1iZXIiLCJtZXRob2RzIiwiY29sbGVjdCIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJrb3JlYW4iLCJhY29sbGVjdCIsImtfbnVtYmVyIiwibnVtYmVyIiwiaSIsImxlbmd0aCIsImNoZWNrX3BpYyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxtQkFBYSxHQUZSO0FBR0xDLFdBQUssR0FIQTtBQUlMQyxZQUFNLHNCQUpEO0FBS0xDLGNBQVEsSUFMSDtBQU1MQyxtQkFBYSxHQU5SO0FBT0xDLG1CQUFhO0FBQ2I7QUFSSyxLLFFBVVBDLE8sR0FBVTtBQUNSQyxhQURRLG1CQUNBQyxDQURBLEVBQ0c7QUFDVCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQyxRQUFRRixFQUFFRyxhQUFGLENBQWdCQyxFQUE1QjtBQUNBSCxhQUFLSSxNQUFMLENBQVlILEtBQVosRUFBbUJJLFFBQW5CLEdBQThCLENBQUNMLEtBQUtJLE1BQUwsQ0FBWUgsS0FBWixFQUFtQkksUUFBbEQ7QUFDQTtBQUNBLFlBQUlMLEtBQUtJLE1BQUwsQ0FBWUgsS0FBWixFQUFtQkksUUFBdkIsRUFBaUM7QUFDL0JMLGVBQUtJLE1BQUwsQ0FBWUgsS0FBWixFQUFtQkssUUFBbkI7QUFDRCxTQUZELE1BRU87QUFDTE4sZUFBS0ksTUFBTCxDQUFZSCxLQUFaLEVBQW1CSyxRQUFuQjtBQUNEO0FBQ0YsT0FYTztBQWFSZCxTQWJRLGVBYUpPLENBYkksRUFhRDtBQUNMLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTVCO0FBQ0E7QUFDQTtBQUNBLFlBQUlILEtBQUtWLElBQUwsQ0FBVVcsS0FBVixFQUFpQlQsR0FBckIsRUFBMEI7QUFDeEJRLGVBQUtJLE1BQUwsQ0FBWUgsS0FBWixFQUFtQk0sTUFBbkI7QUFDRCxTQUZELE1BRU87QUFDTFAsZUFBS1YsSUFBTCxDQUFVVyxLQUFWLEVBQWlCTSxNQUFqQixHQUEwQixDQUExQjtBQUNEO0FBQ0YsT0F2Qk87QUF3QlJoQixpQkF4QlEsdUJBd0JJUSxDQXhCSixFQXdCTztBQUNiLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTVCO0FBQ0FILGFBQUtQLElBQUwsR0FBWSxDQUFDTyxLQUFLUCxJQUFsQjtBQUNBLFlBQUlPLEtBQUtWLElBQUwsQ0FBVVcsS0FBVixFQUFpQlYsV0FBckIsRUFBa0M7QUFDaENTLGVBQUtJLE1BQUwsQ0FBWUgsS0FBWixFQUFtQk0sTUFBbkI7QUFDRCxTQUZELE1BRU87QUFDTFAsZUFBS0ksTUFBTCxDQUFZSCxLQUFaLEVBQW1CTSxNQUFuQixHQUE0QixDQUE1QjtBQUNEO0FBQ0YsT0FqQ087QUFrQ1JkLFVBbENRLGdCQWtDSE0sQ0FsQ0csRUFrQ0E7QUFDTixZQUFJQyxPQUFPLElBQVg7QUFDQTtBQUNBQSxhQUFLUCxJQUFMLEdBQVkscUJBQVo7QUFDQSxhQUFLLElBQUllLElBQUksQ0FBYixFQUFnQkEsSUFBSSxlQUFLQyxNQUF6QixFQUFpQ0QsR0FBakMsRUFBc0M7QUFDcENSLGVBQUtWLElBQUwsQ0FBVWtCLENBQVYsRUFBYUUsU0FBYixHQUF5QixxQkFBekI7QUFDRDtBQUNGLE9BekNPO0FBMENSQSxlQTFDUSxxQkEwQ0VYLENBMUNGLEVBMENLO0FBQ1gsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsRUFBNUI7QUFDQUgsYUFBS1YsSUFBTCxDQUFVVyxLQUFWLElBQW1CLENBQUNELEtBQUtWLElBQUwsQ0FBVVcsS0FBVixDQUFwQjtBQUNBLFlBQUlELEtBQUtWLElBQUwsQ0FBVVcsS0FBVixDQUFKLEVBQXNCO0FBQ3BCRCxlQUFLVixJQUFMLENBQVVXLEtBQVYsRUFBaUJTLFNBQWpCLEdBQTZCLHFCQUE3QjtBQUNELFNBRkQsTUFFTztBQUNMVixlQUFLVixJQUFMLENBQVVXLEtBQVYsRUFBaUJTLFNBQWpCLEdBQTZCLHNCQUE3QjtBQUNEO0FBQ0Y7QUFuRE8sSzs7Ozs7NkJBcUREO0FBQ1AsVUFBSVYsT0FBTyxJQUFYO0FBQ0FBLFdBQUtWLElBQUw7QUFDRDs7OztFQXRFZ0MsZUFBS3FCLEk7O2tCQUFuQnpCLEsiLCJmaWxlIjoibXljYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgY2FydCBmcm9tICcuLi9kYXRhL2NhcnQuanMnXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+i0reeJqei9pidcbiAgfVxuICBkYXRhID0ge1xuICAgIGNhcnQ6IFtdLFxuICAgIHN1YnRyYWN0aW9uOiAnLScsXG4gICAgYWRkOiAnKycsXG4gICAgY3BpYzogJy4uL2ltYWdlcy9jaXJjbGUucG5nJyxcbiAgICBjX3RleHQ6ICflhajpgIknLFxuICAgIHN1Yl9hbnVtYmVyOiAwLjAsXG4gICAgc3ViX2JudW1iZXI6IDBcbiAgICAvLyBjcGljOiBmYWxzZVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY29sbGVjdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgc2VsZi5rb3JlYW5baW5kZXhdLmFjb2xsZWN0ID0gIXNlbGYua29yZWFuW2luZGV4XS5hY29sbGVjdFxuICAgICAgLy8gc2VsZi5sYWNvbGxlY3QgPSAnLi4vaW1hZ2VzL+aUtuiXjy3pgInkuK0ucG5nJ1xuICAgICAgaWYgKHNlbGYua29yZWFuW2luZGV4XS5hY29sbGVjdCkge1xuICAgICAgICBzZWxmLmtvcmVhbltpbmRleF0ua19udW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5rb3JlYW5baW5kZXhdLmtfbnVtYmVyLS1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWRkKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICAvLyBzZWxmLmNhcnRbaW5kZXhdLmFkZCA9ICFzZWxmLmNhcnRbaW5kZXhdLmFkZFxuICAgICAgLy8gc2VsZi5sYWNvbGxlY3QgPSAnLi4vaW1hZ2VzL+aUtuiXjy3pgInkuK0ucG5nJ1xuICAgICAgaWYgKHNlbGYuY2FydFtpbmRleF0uYWRkKSB7XG4gICAgICAgIHNlbGYua29yZWFuW2luZGV4XS5udW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5jYXJ0W2luZGV4XS5udW1iZXIgPSAwXG4gICAgICB9XG4gICAgfSxcbiAgICBzdWJ0cmFjdGlvbihlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgc2VsZi5jcGljID0gIXNlbGYuY3BpY1xuICAgICAgaWYgKHNlbGYuY2FydFtpbmRleF0uc3VidHJhY3Rpb24pIHtcbiAgICAgICAgc2VsZi5rb3JlYW5baW5kZXhdLm51bWJlci0tXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmtvcmVhbltpbmRleF0ubnVtYmVyID0gMFxuICAgICAgfVxuICAgIH0sXG4gICAgY3BpYyhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIC8vIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgc2VsZi5jcGljID0gJy4uL2ltYWdlcy9jaGVjay5wbmcnXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhcnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2VsZi5jYXJ0W2ldLmNoZWNrX3BpYyA9ICcuLi9pbWFnZXMvY2hlY2sucG5nJ1xuICAgICAgfVxuICAgIH0sXG4gICAgY2hlY2tfcGljKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICBzZWxmLmNhcnRbaW5kZXhdID0gIXNlbGYuY2FydFtpbmRleF1cbiAgICAgIGlmIChzZWxmLmNhcnRbaW5kZXhdKSB7XG4gICAgICAgIHNlbGYuY2FydFtpbmRleF0uY2hlY2tfcGljID0gJy4uL2ltYWdlcy9jaGVjay5wbmcnXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmNhcnRbaW5kZXhdLmNoZWNrX3BpYyA9ICcuLi9pbWFnZXMvY2lyY2xlLnBuZydcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuY2FydCA9IGNhcnRcbiAgfVxufVxuIl19