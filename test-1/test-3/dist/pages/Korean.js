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
      navigationBarTitleText: '韩式婚纱/wedding',
      enablePullDownRefresh: true
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
          url: './kla?pic=' + _korean2.default[index].pic + '&title=' + _korean2.default[index].title + '&price=' + _korean2.default[index].price
        });
        console.log(self.china[index], '111111');
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
      // 加载
      _wepy2.default.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 1000
        // image: '../images/ahome.png'
      });
      var self = this;
      self.korean = _korean2.default;
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/Korean',
        method: 'POST',
        successs: function successs(res) {
          self.korean = res.data;
          self.setData({
            korean: res.data
          });
          console.log(res.data);
        }
      });
    }
  }]);

  return Korean;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Korean , 'pages/Korean'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIktvcmVhbi5qcyJdLCJuYW1lcyI6WyJLb3JlYW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsIm5vdGNvbGxlY3QiLCJsYWNvbGxlY3QiLCJhY29sbGVjdCIsImtvcmVhbiIsIm1ldGhvZHMiLCJjb2xsZWN0IiwiZSIsInNlbGYiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImtfbnVtYmVyIiwibGFnb29kcyIsIml0ZW0iLCJkYXRhc2V0IiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwaWMiLCJ0aXRsZSIsInByaWNlIiwiY2hpbmEiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJyZXF1ZXN0IiwibWV0aG9kIiwic3VjY2Vzc3MiLCJyZXMiLCJzZXREYXRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsY0FEakI7QUFFUEMsNkJBQXVCO0FBRmhCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGtCQUFZLHdCQURQO0FBRUxDLGlCQUFXLEtBRk47QUFHTEMsZ0JBQVUsS0FITDtBQUlMQyxjQUFROztBQUpILEssUUFPUEMsTyxHQUFVO0FBQ1JDLGFBRFEsbUJBQ0FDLENBREEsRUFDRztBQUNULFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTVCO0FBQ0FILGFBQUtKLE1BQUwsQ0FBWUssS0FBWixFQUFtQk4sUUFBbkIsR0FBOEIsQ0FBQ0ssS0FBS0osTUFBTCxDQUFZSyxLQUFaLEVBQW1CTixRQUFsRDtBQUNBO0FBQ0EsWUFBSUssS0FBS0osTUFBTCxDQUFZSyxLQUFaLEVBQW1CTixRQUF2QixFQUFpQztBQUMvQkssZUFBS0osTUFBTCxDQUFZSyxLQUFaLEVBQW1CRyxRQUFuQjtBQUNELFNBRkQsTUFFTztBQUNMSixlQUFLSixNQUFMLENBQVlLLEtBQVosRUFBbUJHLFFBQW5CO0FBQ0Q7QUFDRixPQVhPO0FBWVJDLGFBWlEsbUJBWUFOLENBWkEsRUFZRztBQUNULFlBQUlPLE9BQU9QLEVBQUVHLGFBQUYsQ0FBZ0JLLE9BQWhCLENBQXdCTixLQUFuQztBQUNBTyxnQkFBUUMsR0FBUixDQUFZVixDQUFaLEVBQWUsTUFBZjtBQUNBLGdCQUFRTyxJQUFSO0FBQ0UsZUFBSyxDQUFMO0FBQVMsMkJBQUtJLFVBQUwsQ0FBZ0I7QUFDdkJDLG1CQUFLO0FBRGtCLGFBQWhCLEVBRUw7QUFDSixlQUFLLENBQUw7QUFBUywyQkFBS0QsVUFBTCxDQUFnQjtBQUN2QkMsbUJBQUs7QUFEa0IsYUFBaEIsRUFFTDtBQU5OO0FBUUEsWUFBSVgsT0FBTyxJQUFYO0FBQ0EsWUFBTUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsRUFBOUI7QUFDQSx1QkFBS08sVUFBTCxDQUFnQjtBQUNkQyw4QkFBa0IsaUJBQU9WLEtBQVAsRUFBY1csR0FBaEMsZUFBNkMsaUJBQU9YLEtBQVAsRUFBY1ksS0FBM0QsZUFBMEUsaUJBQU9aLEtBQVAsRUFBY2E7QUFEMUUsU0FBaEI7QUFHQU4sZ0JBQVFDLEdBQVIsQ0FBWVQsS0FBS2UsS0FBTCxDQUFXZCxLQUFYLENBQVosRUFBK0IsUUFBL0I7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBckNRLEs7Ozs7OzZCQXVDRDtBQUNQO0FBQ0EscUJBQUtlLFNBQUwsQ0FBZTtBQUNiSCxlQUFPLEtBRE07QUFFYkksY0FBTSxTQUZPO0FBR2JDLGtCQUFVO0FBQ1Y7QUFKYSxPQUFmO0FBTUEsVUFBSWxCLE9BQU8sSUFBWDtBQUNBQSxXQUFLSixNQUFMO0FBQ0EscUJBQUt1QixPQUFMLENBQWE7QUFDWFIsYUFBSyw4QkFETTtBQUVYUyxnQkFBUSxNQUZHO0FBR1hDLGtCQUFVLGtCQUFVQyxHQUFWLEVBQWU7QUFDdkJ0QixlQUFLSixNQUFMLEdBQWMwQixJQUFJOUIsSUFBbEI7QUFDQVEsZUFBS3VCLE9BQUwsQ0FBYTtBQUNYM0Isb0JBQVEwQixJQUFJOUI7QUFERCxXQUFiO0FBR0FnQixrQkFBUUMsR0FBUixDQUFZYSxJQUFJOUIsSUFBaEI7QUFDRDtBQVRVLE9BQWI7QUFXRDs7OztFQXhFaUMsZUFBS2dDLEk7O2tCQUFwQnBDLE0iLCJmaWxlIjoiS29yZWFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQga29yZWFuIGZyb20gJy4uL2RhdGEva29yZWFuLmpzJ1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtvcmVhbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6Z+p5byP5ama57qxL3dlZGRpbmcnLFxuICAgIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxuICB9XG4gIGRhdGEgPSB7XG4gICAgbm90Y29sbGVjdDogJy4uL2ltYWdlcy9hY29sbGVjdC5wbmcnLFxuICAgIGxhY29sbGVjdDogZmFsc2UsXG4gICAgYWNvbGxlY3Q6IGZhbHNlLFxuICAgIGtvcmVhbjogW11cblxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY29sbGVjdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgc2VsZi5rb3JlYW5baW5kZXhdLmFjb2xsZWN0ID0gIXNlbGYua29yZWFuW2luZGV4XS5hY29sbGVjdFxuICAgICAgLy8gc2VsZi5sYWNvbGxlY3QgPSAnLi4vaW1hZ2VzL+aUtuiXjy3pgInkuK0ucG5nJ1xuICAgICAgaWYgKHNlbGYua29yZWFuW2luZGV4XS5hY29sbGVjdCkge1xuICAgICAgICBzZWxmLmtvcmVhbltpbmRleF0ua19udW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5rb3JlYW5baW5kZXhdLmtfbnVtYmVyLS1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxhZ29vZHMoZSkge1xuICAgICAgdmFyIGl0ZW0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgY29uc29sZS5sb2coZSwgJ2l0ZW0nKVxuICAgICAgc3dpdGNoIChpdGVtKSB7XG4gICAgICAgIGNhc2UgMCA6IHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vcGFnZXMva2xhJ1xuICAgICAgICB9KTsgYnJlYWtcbiAgICAgICAgY2FzZSAxIDogd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9wYWdlcy9rbGInXG4gICAgICAgIH0pOyBicmVha1xuICAgICAgfVxuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgLi9rbGE/cGljPSR7a29yZWFuW2luZGV4XS5waWN9JnRpdGxlPSR7a29yZWFuW2luZGV4XS50aXRsZX0mcHJpY2U9JHtrb3JlYW5baW5kZXhdLnByaWNlfWBcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhzZWxmLmNoaW5hW2luZGV4XSwgJzExMTExMScpXG4gICAgfVxuICAgIC8vIGxhZ29vZHMoZSkge1xuICAgIC8vICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgLy8gICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgIC8vICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAvLyAgICAgdXJsOiBgLi9rbGFgXG4gICAgLy8gICB9KVxuICAgIC8vICAgY29uc29sZS5sb2coc2VsZi5rb3JlYW5baW5kZXhdLCAnMTExMTExJylcbiAgICAvLyB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIC8vIOWKoOi9vVxuICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcbiAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAvLyBpbWFnZTogJy4uL2ltYWdlcy9haG9tZS5wbmcnXG4gICAgfSlcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmtvcmVhbiA9IGtvcmVhblxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xOjcwMDEvS29yZWFuJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3VjY2Vzc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgc2VsZi5rb3JlYW4gPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGtvcmVhbjogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19