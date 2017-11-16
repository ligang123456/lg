'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
    }, _this.data = {}, _this.methods = {
      showModal: function showModal() {
        // 显示遮罩层
        // 实例化一个动画
        var animation = _wepy2.default.createAnimation({
          duration: 200, // 动画持续时间，单位ms，默认值 400
          timingFunction: 'linear', // 动画一直较为均匀
          delay: 0
        });
        this.animation = animation;
        animation.translateY(300).step();
        this.setData({
          animationData: animation.export(),
          showModalStatus: true
        });
        setTimeout(function () {
          animation.translateY(0).step();
          this.setData({
            animationData: animation.export()
          });
        }.bind(this), 200);
      },
      hideModal: function hideModal() {
        // 隐藏遮罩层
        var animation = _wepy2.default.createAnimation({
          duration: 200,
          timingFunction: 'linear',
          delay: 0
        });
        this.animation = animation;
        animation.translateY(300).step();
        this.setData({
          animationData: animation.export()
        });
        setTimeout(function () {
          animation.translateY(0).step();
          this.setData({
            animationData: animation.export(),
            showModalStatus: false
          });
        }.bind(this), 200);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR4dC5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibWV0aG9kcyIsInNob3dNb2RhbCIsImFuaW1hdGlvbiIsImNyZWF0ZUFuaW1hdGlvbiIsImR1cmF0aW9uIiwidGltaW5nRnVuY3Rpb24iLCJkZWxheSIsInRyYW5zbGF0ZVkiLCJzdGVwIiwic2V0RGF0YSIsImFuaW1hdGlvbkRhdGEiLCJleHBvcnQiLCJzaG93TW9kYWxTdGF0dXMiLCJzZXRUaW1lb3V0IiwiYmluZCIsImhpZGVNb2RhbCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQzs7Ozs7Ozs7Ozs7O0lBQ29CQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbEJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU8sRSxRQUNQQyxPLEdBQVU7QUFDUkMsZUFEUSx1QkFDSTtBQUNiO0FBQ0E7QUFDRyxZQUFJQyxZQUFZLGVBQUtDLGVBQUwsQ0FBcUI7QUFDbkNDLG9CQUFVLEdBRHlCLEVBQ3BCO0FBQ2ZDLDBCQUFnQixRQUZtQixFQUVUO0FBQzFCQyxpQkFBTztBQUg0QixTQUFyQixDQUFoQjtBQUtBLGFBQUtKLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0FBLGtCQUFVSyxVQUFWLENBQXFCLEdBQXJCLEVBQTBCQyxJQUExQjtBQUNBLGFBQUtDLE9BQUwsQ0FBYTtBQUNYQyx5QkFBZVIsVUFBVVMsTUFBVixFQURKO0FBRVhDLDJCQUFpQjtBQUZOLFNBQWI7QUFJQUMsbUJBQVcsWUFBWTtBQUNyQlgsb0JBQVVLLFVBQVYsQ0FBcUIsQ0FBckIsRUFBd0JDLElBQXhCO0FBQ0EsZUFBS0MsT0FBTCxDQUFhO0FBQ1hDLDJCQUFlUixVQUFVUyxNQUFWO0FBREosV0FBYjtBQUdELFNBTFUsQ0FLVEcsSUFMUyxDQUtKLElBTEksQ0FBWCxFQUtjLEdBTGQ7QUFNRCxPQXJCTztBQXNCUkMsZUF0QlEsdUJBc0JJO0FBQ2I7QUFDRyxZQUFJYixZQUFZLGVBQUtDLGVBQUwsQ0FBcUI7QUFDbkNDLG9CQUFVLEdBRHlCO0FBRW5DQywwQkFBZ0IsUUFGbUI7QUFHbkNDLGlCQUFPO0FBSDRCLFNBQXJCLENBQWhCO0FBS0EsYUFBS0osU0FBTCxHQUFpQkEsU0FBakI7QUFDQUEsa0JBQVVLLFVBQVYsQ0FBcUIsR0FBckIsRUFBMEJDLElBQTFCO0FBQ0EsYUFBS0MsT0FBTCxDQUFhO0FBQ1hDLHlCQUFlUixVQUFVUyxNQUFWO0FBREosU0FBYjtBQUdBRSxtQkFBVyxZQUFZO0FBQ3JCWCxvQkFBVUssVUFBVixDQUFxQixDQUFyQixFQUF3QkMsSUFBeEI7QUFDQSxlQUFLQyxPQUFMLENBQWE7QUFDWEMsMkJBQWVSLFVBQVVTLE1BQVYsRUFESjtBQUVYQyw2QkFBaUI7QUFGTixXQUFiO0FBSUQsU0FOVSxDQU1URSxJQU5TLENBTUosSUFOSSxDQUFYLEVBTWMsR0FOZDtBQU9EO0FBekNPLEs7Ozs7RUFMc0IsZUFBS0UsSTs7a0JBQW5CcEIsSyIsImZpbGUiOiJ0eHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgY29uZmlnID0ge1xuICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAna2xhJ1xuICAgfVxuICAgZGF0YSA9IHt9XG4gICBtZXRob2RzID0ge1xuICAgICBzaG93TW9kYWwoKSB7XG4gICAgLy8g5pi+56S66YGu572p5bGCXG4gICAgLy8g5a6e5L6L5YyW5LiA5Liq5Yqo55S7XG4gICAgICAgdmFyIGFuaW1hdGlvbiA9IHdlcHkuY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgIGR1cmF0aW9uOiAyMDAsIC8vIOWKqOeUu+aMgee7reaXtumXtO+8jOWNleS9jW1z77yM6buY6K6k5YC8IDQwMFxuICAgICAgICAgdGltaW5nRnVuY3Rpb246ICdsaW5lYXInLCAvLyDliqjnlLvkuIDnm7TovoPkuLrlnYfljIBcbiAgICAgICAgIGRlbGF5OiAwXG4gICAgICAgfSlcbiAgICAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvblxuICAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDMwMCkuc3RlcCgpXG4gICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbi5leHBvcnQoKSxcbiAgICAgICAgIHNob3dNb2RhbFN0YXR1czogdHJ1ZVxuICAgICAgIH0pXG4gICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgwKS5zdGVwKClcbiAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbi5leHBvcnQoKVxuICAgICAgICAgfSlcbiAgICAgICB9LmJpbmQodGhpcyksIDIwMClcbiAgICAgfSxcbiAgICAgaGlkZU1vZGFsKCkge1xuICAgIC8vIOmakOiXj+mBrue9qeWxglxuICAgICAgIHZhciBhbmltYXRpb24gPSB3ZXB5LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgdGltaW5nRnVuY3Rpb246ICdsaW5lYXInLFxuICAgICAgICAgZGVsYXk6IDBcbiAgICAgICB9KVxuICAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uXG4gICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMzAwKS5zdGVwKClcbiAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uLmV4cG9ydCgpXG4gICAgICAgfSlcbiAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDApLnN0ZXAoKVxuICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uLmV4cG9ydCgpLFxuICAgICAgICAgICBzaG93TW9kYWxTdGF0dXM6IGZhbHNlXG4gICAgICAgICB9KVxuICAgICAgIH0uYmluZCh0aGlzKSwgMjAwKVxuICAgICB9XG4gICB9XG59XG4gIl19