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
      lagoods: function lagoods(e) {
        var self = this;
        var index = e.currentTarget.id;
        _wepy2.default.navigateTo({
          url: './kla?title=' + self.korean[index]
        });
        console.log(self.korean[index], '111111');
      }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIktvcmVhbi5qcyJdLCJuYW1lcyI6WyJLb3JlYW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsIm5vdGNvbGxlY3QiLCJsYWNvbGxlY3QiLCJhY29sbGVjdCIsImtvcmVhbiIsIm1ldGhvZHMiLCJsYWdvb2RzIiwiZSIsInNlbGYiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsa0JBQVksd0JBRFA7QUFFTEMsaUJBQVcsS0FGTjtBQUdMQyxnQkFBVSxLQUhMO0FBSUxDLGNBQVE7O0FBSkgsSyxRQU9QQyxPLEdBQVU7QUFDUkMsYUFEUSxtQkFDQUMsQ0FEQSxFQUNHO0FBQ1QsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBTUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsRUFBOUI7QUFDQSx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxnQ0FBb0JMLEtBQUtKLE1BQUwsQ0FBWUssS0FBWjtBQUROLFNBQWhCO0FBR0FLLGdCQUFRQyxHQUFSLENBQVlQLEtBQUtKLE1BQUwsQ0FBWUssS0FBWixDQUFaLEVBQWdDLFFBQWhDO0FBQ0Q7QUFSTyxLOzs7Ozs2QkFVRDtBQUNQLFVBQUlELE9BQU8sSUFBWDtBQUNBQSxXQUFLSixNQUFMO0FBQ0FVLGNBQVFDLEdBQVIsQ0FBWVAsS0FBS0osTUFBakIsRUFBeUIsWUFBekI7QUFDRDs7OztFQXpCaUMsZUFBS1ksSTs7a0JBQXBCbkIsTSIsImZpbGUiOiJLb3JlYW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBrb3JlYW4gZnJvbSAnLi4vZGF0YS9rb3JlYW4uanMnXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS29yZWFuIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpn6nlvI/lqZrnurEvd2VkZGluZydcbiAgfVxuICBkYXRhID0ge1xuICAgIG5vdGNvbGxlY3Q6ICcuLi9pbWFnZXMvYWNvbGxlY3QucG5nJyxcbiAgICBsYWNvbGxlY3Q6IGZhbHNlLFxuICAgIGFjb2xsZWN0OiBmYWxzZSxcbiAgICBrb3JlYW46IFtdXG5cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGxhZ29vZHMoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgLi9rbGE/dGl0bGU9JHtzZWxmLmtvcmVhbltpbmRleF19YFxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYua29yZWFuW2luZGV4XSwgJzExMTExMScpXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmtvcmVhbiA9IGtvcmVhblxuICAgIGNvbnNvbGUubG9nKHNlbGYua29yZWFuLCAnYWFhYWFhYWFhYScpXG4gIH1cbn1cbiJdfQ==