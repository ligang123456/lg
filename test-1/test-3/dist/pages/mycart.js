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
        var i;
        // let index = e.currentTarget.id
        self.cpic = !self.cpic;
        if (self.cpic) {
          // self.cpic = '../images/check.png'
          for (i = 0; i < _cart2.default.length; i++) {
            self.cart[i].check_pic = 1;
          }
        } else {
          // self.cpic = '../images/circle.png'
          for (i = 0; i < _cart2.default.length; i++) {
            self.cart[i].check_pic = 0;
          }
        }
      },
      check_pic: function check_pic(e) {
        var self = this;
        var index = e.currentTarget.id;
        self.cart[index].check_pic = !self.cart[index].check_pic;
        // self.cart[index].check_pic = '../images/check.png'
      },
      delete_pic: function delete_pic() {
        _wepy2.default.showToast({
          title: '删除成功'
          // icon: 'success'
          // duration: 2000
        });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15Y2FydC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiY2FydCIsInN1YnRyYWN0aW9uIiwiYWRkIiwiY3BpYyIsImNpcmNsZXBpYyIsImNfdGV4dCIsInN1Yl9hbnVtYmVyIiwic3ViX2JudW1iZXIiLCJtZXRob2RzIiwiY29sbGVjdCIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJrb3JlYW4iLCJhY29sbGVjdCIsImtfbnVtYmVyIiwibnVtYmVyIiwiaSIsImxlbmd0aCIsImNoZWNrX3BpYyIsImRlbGV0ZV9waWMiLCJzaG93VG9hc3QiLCJ0aXRsZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLFlBQU0sRUFERDtBQUVMQyxtQkFBYSxHQUZSO0FBR0xDLFdBQUssR0FIQTtBQUlMQyxZQUFNLEtBSkQ7QUFLTEMsaUJBQVcsc0JBTE47QUFNTEMsY0FBUSxJQU5IO0FBT0xDLG1CQUFhLEdBUFI7QUFRTEMsbUJBQWE7QUFDYjtBQVRLLEssUUFXUEMsTyxHQUFVO0FBQ1JDLGFBRFEsbUJBQ0FDLENBREEsRUFDRztBQUNULFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTVCO0FBQ0FILGFBQUtJLE1BQUwsQ0FBWUgsS0FBWixFQUFtQkksUUFBbkIsR0FBOEIsQ0FBQ0wsS0FBS0ksTUFBTCxDQUFZSCxLQUFaLEVBQW1CSSxRQUFsRDtBQUNBO0FBQ0EsWUFBSUwsS0FBS0ksTUFBTCxDQUFZSCxLQUFaLEVBQW1CSSxRQUF2QixFQUFpQztBQUMvQkwsZUFBS0ksTUFBTCxDQUFZSCxLQUFaLEVBQW1CSyxRQUFuQjtBQUNELFNBRkQsTUFFTztBQUNMTixlQUFLSSxNQUFMLENBQVlILEtBQVosRUFBbUJLLFFBQW5CO0FBQ0Q7QUFDRixPQVhPO0FBYVJmLFNBYlEsZUFhSlEsQ0FiSSxFQWFEO0FBQ0wsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsRUFBNUI7QUFDQTtBQUNBO0FBQ0EsWUFBSUgsS0FBS1gsSUFBTCxDQUFVWSxLQUFWLEVBQWlCVixHQUFyQixFQUEwQjtBQUN4QlMsZUFBS0ksTUFBTCxDQUFZSCxLQUFaLEVBQW1CTSxNQUFuQjtBQUNELFNBRkQsTUFFTztBQUNMUCxlQUFLWCxJQUFMLENBQVVZLEtBQVYsRUFBaUJNLE1BQWpCLEdBQTBCLENBQTFCO0FBQ0Q7QUFDRixPQXZCTztBQXdCUmpCLGlCQXhCUSx1QkF3QklTLENBeEJKLEVBd0JPO0FBQ2IsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsRUFBNUI7QUFDQUgsYUFBS1IsSUFBTCxHQUFZLENBQUNRLEtBQUtSLElBQWxCO0FBQ0EsWUFBSVEsS0FBS1gsSUFBTCxDQUFVWSxLQUFWLEVBQWlCWCxXQUFyQixFQUFrQztBQUNoQ1UsZUFBS0ksTUFBTCxDQUFZSCxLQUFaLEVBQW1CTSxNQUFuQjtBQUNELFNBRkQsTUFFTztBQUNMUCxlQUFLSSxNQUFMLENBQVlILEtBQVosRUFBbUJNLE1BQW5CLEdBQTRCLENBQTVCO0FBQ0Q7QUFDRixPQWpDTztBQWtDUmYsVUFsQ1EsZ0JBa0NITyxDQWxDRyxFQWtDQTtBQUNOLFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlRLENBQUo7QUFDQTtBQUNBUixhQUFLUixJQUFMLEdBQVksQ0FBQ1EsS0FBS1IsSUFBbEI7QUFDQSxZQUFJUSxLQUFLUixJQUFULEVBQWU7QUFDYjtBQUNBLGVBQUtnQixJQUFJLENBQVQsRUFBWUEsSUFBSSxlQUFLQyxNQUFyQixFQUE2QkQsR0FBN0IsRUFBa0M7QUFDaENSLGlCQUFLWCxJQUFMLENBQVVtQixDQUFWLEVBQWFFLFNBQWIsR0FBeUIsQ0FBekI7QUFDRDtBQUNGLFNBTEQsTUFLTztBQUNMO0FBQ0EsZUFBS0YsSUFBSSxDQUFULEVBQVlBLElBQUksZUFBS0MsTUFBckIsRUFBNkJELEdBQTdCLEVBQWtDO0FBQ2hDUixpQkFBS1gsSUFBTCxDQUFVbUIsQ0FBVixFQUFhRSxTQUFiLEdBQXlCLENBQXpCO0FBQ0Q7QUFDRjtBQUNGLE9BbERPO0FBbURSQSxlQW5EUSxxQkFtREVYLENBbkRGLEVBbURLO0FBQ1gsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsRUFBNUI7QUFDQUgsYUFBS1gsSUFBTCxDQUFVWSxLQUFWLEVBQWlCUyxTQUFqQixHQUE2QixDQUFDVixLQUFLWCxJQUFMLENBQVVZLEtBQVYsRUFBaUJTLFNBQS9DO0FBQ0E7QUFDRCxPQXhETztBQXlEUkMsZ0JBekRRLHdCQXlESztBQUNYLHVCQUFLQyxTQUFMLENBQWU7QUFDYkMsaUJBQU87QUFDUDtBQUNBO0FBSGEsU0FBZjtBQUtEO0FBL0RPLEs7Ozs7OzZCQWlFRDtBQUNQLFVBQUliLE9BQU8sSUFBWDtBQUNBQSxXQUFLWCxJQUFMO0FBQ0Q7Ozs7RUFuRmdDLGVBQUt5QixJOztrQkFBbkI3QixLIiwiZmlsZSI6Im15Y2FydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGNhcnQgZnJvbSAnLi4vZGF0YS9jYXJ0LmpzJ1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfotK3nianovaYnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBjYXJ0OiBbXSxcbiAgICBzdWJ0cmFjdGlvbjogJy0nLFxuICAgIGFkZDogJysnLFxuICAgIGNwaWM6IGZhbHNlLFxuICAgIGNpcmNsZXBpYzogJy4uL2ltYWdlcy9jaXJjbGUucG5nJyxcbiAgICBjX3RleHQ6ICflhajpgIknLFxuICAgIHN1Yl9hbnVtYmVyOiAwLjAsXG4gICAgc3ViX2JudW1iZXI6IDBcbiAgICAvLyBjcGljOiBmYWxzZVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY29sbGVjdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgc2VsZi5rb3JlYW5baW5kZXhdLmFjb2xsZWN0ID0gIXNlbGYua29yZWFuW2luZGV4XS5hY29sbGVjdFxuICAgICAgLy8gc2VsZi5sYWNvbGxlY3QgPSAnLi4vaW1hZ2VzL+aUtuiXjy3pgInkuK0ucG5nJ1xuICAgICAgaWYgKHNlbGYua29yZWFuW2luZGV4XS5hY29sbGVjdCkge1xuICAgICAgICBzZWxmLmtvcmVhbltpbmRleF0ua19udW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5rb3JlYW5baW5kZXhdLmtfbnVtYmVyLS1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWRkKGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICAvLyBzZWxmLmNhcnRbaW5kZXhdLmFkZCA9ICFzZWxmLmNhcnRbaW5kZXhdLmFkZFxuICAgICAgLy8gc2VsZi5sYWNvbGxlY3QgPSAnLi4vaW1hZ2VzL+aUtuiXjy3pgInkuK0ucG5nJ1xuICAgICAgaWYgKHNlbGYuY2FydFtpbmRleF0uYWRkKSB7XG4gICAgICAgIHNlbGYua29yZWFuW2luZGV4XS5udW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5jYXJ0W2luZGV4XS5udW1iZXIgPSAwXG4gICAgICB9XG4gICAgfSxcbiAgICBzdWJ0cmFjdGlvbihlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgc2VsZi5jcGljID0gIXNlbGYuY3BpY1xuICAgICAgaWYgKHNlbGYuY2FydFtpbmRleF0uc3VidHJhY3Rpb24pIHtcbiAgICAgICAgc2VsZi5rb3JlYW5baW5kZXhdLm51bWJlci0tXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmtvcmVhbltpbmRleF0ubnVtYmVyID0gMFxuICAgICAgfVxuICAgIH0sXG4gICAgY3BpYyhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHZhciBpXG4gICAgICAvLyBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIHNlbGYuY3BpYyA9ICFzZWxmLmNwaWNcbiAgICAgIGlmIChzZWxmLmNwaWMpIHtcbiAgICAgICAgLy8gc2VsZi5jcGljID0gJy4uL2ltYWdlcy9jaGVjay5wbmcnXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBjYXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgc2VsZi5jYXJ0W2ldLmNoZWNrX3BpYyA9IDFcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gc2VsZi5jcGljID0gJy4uL2ltYWdlcy9jaXJjbGUucG5nJ1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2FydC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHNlbGYuY2FydFtpXS5jaGVja19waWMgPSAwXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNoZWNrX3BpYyhlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgc2VsZi5jYXJ0W2luZGV4XS5jaGVja19waWMgPSAhc2VsZi5jYXJ0W2luZGV4XS5jaGVja19waWNcbiAgICAgIC8vIHNlbGYuY2FydFtpbmRleF0uY2hlY2tfcGljID0gJy4uL2ltYWdlcy9jaGVjay5wbmcnXG4gICAgfSxcbiAgICBkZWxldGVfcGljKCkge1xuICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogJ+WIoOmZpOaIkOWKnydcbiAgICAgICAgLy8gaWNvbjogJ3N1Y2Nlc3MnXG4gICAgICAgIC8vIGR1cmF0aW9uOiAyMDAwXG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5jYXJ0ID0gY2FydFxuICB9XG59XG4iXX0=