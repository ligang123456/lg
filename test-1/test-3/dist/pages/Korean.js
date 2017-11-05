'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _korean = require('./../data/korean.js');

var _korean2 = _interopRequireDefault(_korean);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Korean = function (_wepy$page) {
  _inherits(Korean, _wepy$page);

  function Korean() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Korean);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Korean.__proto__ || Object.getPrototypeOf(Korean)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '韩式婚纱/wedding'
    }, _this.data = {
      notcollect: '../images/acollect.png',
      lacollect: false,
      acollect: false,
      korean: []

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
      lagoods: function lagoods(e) {
        var item = e.currentTarget.dataset.index;
        console.log(e, 'item');
        switch (item) {
          case 0:
            _wepy2.default.navigateTo({
              url: '../pages/kla'
            });break;
          case 1:
            _wepy2.default.navigateTo({
              url: '../pages/klb'
            });break;
        }
        var self = this;
        var index = e.currentTarget.id;
        _wepy2.default.navigateTo({
          url: './kla?image=' + _korean2.default[index].k_pic + '&title=' + _korean2.default[index].k_int + '&price=' + _korean2.default[index].k_price
        });
        console.log(self.korean[index], '111111');
      }
      // lagoods(e) {
      //   let self = this
      //   const index = e.currentTarget.id
      //   wepy.navigateTo({
      //     url: `./kla`
      //   })
      //   console.log(self.korean[index], '111111')
      // }

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Korean, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.korean = _korean2.default;
      console.log(self.korean, 'aaaaaaaaaa');
    }
  }]);

  return Korean;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Korean , 'pages/Korean'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIktvcmVhbi5qcyJdLCJuYW1lcyI6WyJLb3JlYW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm5vdGNvbGxlY3QiLCJsYWNvbGxlY3QiLCJhY29sbGVjdCIsImtvcmVhbiIsIm1ldGhvZHMiLCJjb2xsZWN0IiwiZSIsInNlbGYiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImtfbnVtYmVyIiwibGFnb29kcyIsIml0ZW0iLCJkYXRhc2V0IiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJrX3BpYyIsImtfaW50Iiwia19wcmljZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGtCQUFZLHdCQURQO0FBRUxDLGlCQUFXLEtBRk47QUFHTEMsZ0JBQVUsS0FITDtBQUlMQyxjQUFROztBQUpILEssUUFPUEMsTyxHQUFVO0FBQ1JDLGFBRFEsbUJBQ0FDLENBREEsRUFDRztBQUNULFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTVCO0FBQ0FILGFBQUtKLE1BQUwsQ0FBWUssS0FBWixFQUFtQk4sUUFBbkIsR0FBOEIsQ0FBQ0ssS0FBS0osTUFBTCxDQUFZSyxLQUFaLEVBQW1CTixRQUFsRDtBQUNBO0FBQ0EsWUFBSUssS0FBS0osTUFBTCxDQUFZSyxLQUFaLEVBQW1CTixRQUF2QixFQUFpQztBQUMvQkssZUFBS0osTUFBTCxDQUFZSyxLQUFaLEVBQW1CRyxRQUFuQjtBQUNELFNBRkQsTUFFTztBQUNMSixlQUFLSixNQUFMLENBQVlLLEtBQVosRUFBbUJHLFFBQW5CO0FBQ0Q7QUFDRixPQVhPO0FBWVJDLGFBWlEsbUJBWUFOLENBWkEsRUFZRztBQUNULFlBQUlPLE9BQU9QLEVBQUVHLGFBQUYsQ0FBZ0JLLE9BQWhCLENBQXdCTixLQUFuQztBQUNBTyxnQkFBUUMsR0FBUixDQUFZVixDQUFaLEVBQWUsTUFBZjtBQUNBLGdCQUFRTyxJQUFSO0FBQ0UsZUFBSyxDQUFMO0FBQVMsMkJBQUtJLFVBQUwsQ0FBZ0I7QUFDdkJDLG1CQUFLO0FBRGtCLGFBQWhCLEVBRUw7QUFDSixlQUFLLENBQUw7QUFBUywyQkFBS0QsVUFBTCxDQUFnQjtBQUN2QkMsbUJBQUs7QUFEa0IsYUFBaEIsRUFFTDtBQU5OO0FBUUEsWUFBSVgsT0FBTyxJQUFYO0FBQ0EsWUFBTUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsRUFBOUI7QUFDQSx1QkFBS08sVUFBTCxDQUFnQjtBQUNkQyxnQ0FBb0IsaUJBQU9WLEtBQVAsRUFBY1csS0FBbEMsZUFBaUQsaUJBQU9YLEtBQVAsRUFBY1ksS0FBL0QsZUFBOEUsaUJBQU9aLEtBQVAsRUFBY2E7QUFEOUUsU0FBaEI7QUFHQU4sZ0JBQVFDLEdBQVIsQ0FBWVQsS0FBS0osTUFBTCxDQUFZSyxLQUFaLENBQVosRUFBZ0MsUUFBaEM7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBckNRLEs7Ozs7OzZCQXVDRDtBQUNQLFVBQUlELE9BQU8sSUFBWDtBQUNBQSxXQUFLSixNQUFMO0FBQ0FZLGNBQVFDLEdBQVIsQ0FBWVQsS0FBS0osTUFBakIsRUFBeUIsWUFBekI7QUFDRDs7OztFQXREaUMsZUFBS21CLEk7O2tCQUFwQjFCLE0iLCJmaWxlIjoiS29yZWFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQga29yZWFuIGZyb20gJy4uL2RhdGEva29yZWFuLmpzJ1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtvcmVhbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6Z+p5byP5ama57qxL3dlZGRpbmcnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBub3Rjb2xsZWN0OiAnLi4vaW1hZ2VzL2Fjb2xsZWN0LnBuZycsXG4gICAgbGFjb2xsZWN0OiBmYWxzZSxcbiAgICBhY29sbGVjdDogZmFsc2UsXG4gICAga29yZWFuOiBbXVxuXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBjb2xsZWN0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICBzZWxmLmtvcmVhbltpbmRleF0uYWNvbGxlY3QgPSAhc2VsZi5rb3JlYW5baW5kZXhdLmFjb2xsZWN0XG4gICAgICAvLyBzZWxmLmxhY29sbGVjdCA9ICcuLi9pbWFnZXMv5pS26JePLemAieS4rS5wbmcnXG4gICAgICBpZiAoc2VsZi5rb3JlYW5baW5kZXhdLmFjb2xsZWN0KSB7XG4gICAgICAgIHNlbGYua29yZWFuW2luZGV4XS5rX251bWJlcisrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmtvcmVhbltpbmRleF0ua19udW1iZXItLVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFnb29kcyhlKSB7XG4gICAgICB2YXIgaXRlbSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBjb25zb2xlLmxvZyhlLCAnaXRlbScpXG4gICAgICBzd2l0Y2ggKGl0ZW0pIHtcbiAgICAgICAgY2FzZSAwIDogd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9wYWdlcy9rbGEnXG4gICAgICAgIH0pOyBicmVha1xuICAgICAgICBjYXNlIDEgOiB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3BhZ2VzL2tsYidcbiAgICAgICAgfSk7IGJyZWFrXG4gICAgICB9XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL2tsYT9pbWFnZT0ke2tvcmVhbltpbmRleF0ua19waWN9JnRpdGxlPSR7a29yZWFuW2luZGV4XS5rX2ludH0mcHJpY2U9JHtrb3JlYW5baW5kZXhdLmtfcHJpY2V9YFxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYua29yZWFuW2luZGV4XSwgJzExMTExMScpXG4gICAgfVxuICAgIC8vIGxhZ29vZHMoZSkge1xuICAgIC8vICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgLy8gICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgIC8vICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAvLyAgICAgdXJsOiBgLi9rbGFgXG4gICAgLy8gICB9KVxuICAgIC8vICAgY29uc29sZS5sb2coc2VsZi5rb3JlYW5baW5kZXhdLCAnMTExMTExJylcbiAgICAvLyB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYua29yZWFuID0ga29yZWFuXG4gICAgY29uc29sZS5sb2coc2VsZi5rb3JlYW4sICdhYWFhYWFhYWFhJylcbiAgfVxufVxuIl19