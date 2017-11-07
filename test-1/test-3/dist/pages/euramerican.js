'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _euramerican = require('./../data/euramerican.js');

var _euramerican2 = _interopRequireDefault(_euramerican);

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
      navigationBarTitleText: '欧式婚纱/wedding'
    }, _this.data = {
      notcollect: '../images/acollect.png',
      lacollect: false,
      acollect: false,
      euramerican: []

    }, _this.methods = {
      collect: function collect(e) {
        var self = this;
        var index = e.currentTarget.id;
        self.euramerican[index].acollect = !self.euramerican[index].acollect;
        // self.lacollect = '../images/收藏-选中.png'
        if (self.euramerican[index].acollect) {
          self.euramerican[index].e_number++;
        } else {
          self.euramerican[index].e_number--;
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
          url: './kla?image=' + _euramerican2.default[index].e_pic + '&title=' + _euramerican2.default[index].e_int + '&price=' + _euramerican2.default[index].e_price
        });
        console.log(self.euramerican[index], '111111');
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
      self.euramerican = _euramerican2.default;
      console.log(self.euramerican, 'aaaaaaaaaa');
    }
  }]);

  return Korean;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Korean , 'pages/euramerican'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV1cmFtZXJpY2FuLmpzIl0sIm5hbWVzIjpbIktvcmVhbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibm90Y29sbGVjdCIsImxhY29sbGVjdCIsImFjb2xsZWN0IiwiZXVyYW1lcmljYW4iLCJtZXRob2RzIiwiY29sbGVjdCIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJlX251bWJlciIsImxhZ29vZHMiLCJpdGVtIiwiZGF0YXNldCIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZV9waWMiLCJlX2ludCIsImVfcHJpY2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxrQkFBWSx3QkFEUDtBQUVMQyxpQkFBVyxLQUZOO0FBR0xDLGdCQUFVLEtBSEw7QUFJTEMsbUJBQWE7O0FBSlIsSyxRQU9QQyxPLEdBQVU7QUFDUkMsYUFEUSxtQkFDQUMsQ0FEQSxFQUNHO0FBQ1QsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsRUFBNUI7QUFDQUgsYUFBS0osV0FBTCxDQUFpQkssS0FBakIsRUFBd0JOLFFBQXhCLEdBQW1DLENBQUNLLEtBQUtKLFdBQUwsQ0FBaUJLLEtBQWpCLEVBQXdCTixRQUE1RDtBQUNBO0FBQ0EsWUFBSUssS0FBS0osV0FBTCxDQUFpQkssS0FBakIsRUFBd0JOLFFBQTVCLEVBQXNDO0FBQ3BDSyxlQUFLSixXQUFMLENBQWlCSyxLQUFqQixFQUF3QkcsUUFBeEI7QUFDRCxTQUZELE1BRU87QUFDTEosZUFBS0osV0FBTCxDQUFpQkssS0FBakIsRUFBd0JHLFFBQXhCO0FBQ0Q7QUFDRixPQVhPO0FBWVJDLGFBWlEsbUJBWUFOLENBWkEsRUFZRztBQUNULFlBQUlPLE9BQU9QLEVBQUVHLGFBQUYsQ0FBZ0JLLE9BQWhCLENBQXdCTixLQUFuQztBQUNBTyxnQkFBUUMsR0FBUixDQUFZVixDQUFaLEVBQWUsTUFBZjtBQUNBLGdCQUFRTyxJQUFSO0FBQ0UsZUFBSyxDQUFMO0FBQVMsMkJBQUtJLFVBQUwsQ0FBZ0I7QUFDdkJDLG1CQUFLO0FBRGtCLGFBQWhCLEVBRUw7QUFDSixlQUFLLENBQUw7QUFBUywyQkFBS0QsVUFBTCxDQUFnQjtBQUN2QkMsbUJBQUs7QUFEa0IsYUFBaEIsRUFFTDtBQU5OO0FBUUEsWUFBSVgsT0FBTyxJQUFYO0FBQ0EsWUFBTUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsRUFBOUI7QUFDQSx1QkFBS08sVUFBTCxDQUFnQjtBQUNkQyxnQ0FBb0Isc0JBQVlWLEtBQVosRUFBbUJXLEtBQXZDLGVBQXNELHNCQUFZWCxLQUFaLEVBQW1CWSxLQUF6RSxlQUF3RixzQkFBWVosS0FBWixFQUFtQmE7QUFEN0YsU0FBaEI7QUFHQU4sZ0JBQVFDLEdBQVIsQ0FBWVQsS0FBS0osV0FBTCxDQUFpQkssS0FBakIsQ0FBWixFQUFxQyxRQUFyQztBQUNEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFyQ1EsSzs7Ozs7NkJBdUNEO0FBQ1AsVUFBSUQsT0FBTyxJQUFYO0FBQ0FBLFdBQUtKLFdBQUw7QUFDQVksY0FBUUMsR0FBUixDQUFZVCxLQUFLSixXQUFqQixFQUE4QixZQUE5QjtBQUNEOzs7O0VBdERpQyxlQUFLbUIsSTs7a0JBQXBCMUIsTSIsImZpbGUiOiJldXJhbWVyaWNhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGV1cmFtZXJpY2FuIGZyb20gJy4uL2RhdGEvZXVyYW1lcmljYW4uanMnXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS29yZWFuIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmrKflvI/lqZrnurEvd2VkZGluZydcbiAgfVxuICBkYXRhID0ge1xuICAgIG5vdGNvbGxlY3Q6ICcuLi9pbWFnZXMvYWNvbGxlY3QucG5nJyxcbiAgICBsYWNvbGxlY3Q6IGZhbHNlLFxuICAgIGFjb2xsZWN0OiBmYWxzZSxcbiAgICBldXJhbWVyaWNhbjogW11cblxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY29sbGVjdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgc2VsZi5ldXJhbWVyaWNhbltpbmRleF0uYWNvbGxlY3QgPSAhc2VsZi5ldXJhbWVyaWNhbltpbmRleF0uYWNvbGxlY3RcbiAgICAgIC8vIHNlbGYubGFjb2xsZWN0ID0gJy4uL2ltYWdlcy/mlLbol48t6YCJ5LitLnBuZydcbiAgICAgIGlmIChzZWxmLmV1cmFtZXJpY2FuW2luZGV4XS5hY29sbGVjdCkge1xuICAgICAgICBzZWxmLmV1cmFtZXJpY2FuW2luZGV4XS5lX251bWJlcisrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmV1cmFtZXJpY2FuW2luZGV4XS5lX251bWJlci0tXG4gICAgICB9XG4gICAgfSxcbiAgICBsYWdvb2RzKGUpIHtcbiAgICAgIHZhciBpdGVtID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGNvbnNvbGUubG9nKGUsICdpdGVtJylcbiAgICAgIHN3aXRjaCAoaXRlbSkge1xuICAgICAgICBjYXNlIDAgOiB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3BhZ2VzL2tsYSdcbiAgICAgICAgfSk7IGJyZWFrXG4gICAgICAgIGNhc2UgMSA6IHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vcGFnZXMva2xiJ1xuICAgICAgICB9KTsgYnJlYWtcbiAgICAgIH1cbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4va2xhP2ltYWdlPSR7ZXVyYW1lcmljYW5baW5kZXhdLmVfcGljfSZ0aXRsZT0ke2V1cmFtZXJpY2FuW2luZGV4XS5lX2ludH0mcHJpY2U9JHtldXJhbWVyaWNhbltpbmRleF0uZV9wcmljZX1gXG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2coc2VsZi5ldXJhbWVyaWNhbltpbmRleF0sICcxMTExMTEnKVxuICAgIH1cbiAgICAvLyBsYWdvb2RzKGUpIHtcbiAgICAvLyAgIGxldCBzZWxmID0gdGhpc1xuICAgIC8vICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAvLyAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgLy8gICAgIHVybDogYC4va2xhYFxuICAgIC8vICAgfSlcbiAgICAvLyAgIGNvbnNvbGUubG9nKHNlbGYua29yZWFuW2luZGV4XSwgJzExMTExMScpXG4gICAgLy8gfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmV1cmFtZXJpY2FuID0gZXVyYW1lcmljYW5cbiAgICBjb25zb2xlLmxvZyhzZWxmLmV1cmFtZXJpY2FuLCAnYWFhYWFhYWFhYScpXG4gIH1cbn1cbiJdfQ==