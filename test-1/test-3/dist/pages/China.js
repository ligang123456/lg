'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _china = require('./../data/china.js');

var _china2 = _interopRequireDefault(_china);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var China = function (_wepy$page) {
  _inherits(China, _wepy$page);

  function China() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, China);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = China.__proto__ || Object.getPrototypeOf(China)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '韩式婚纱/wedding'
    }, _this.data = {
      notcollect: '../images/acollect.png',
      lacollect: false,
      acollect: false,
      china: []

    }, _this.methods = {
      collect: function collect(e) {
        var self = this;
        var index = e.currentTarget.id;
        self.china[index].acollect = !self.china[index].acollect;
        // self.lacollect = '../images/收藏-选中.png'
        if (self.china[index].acollect) {
          self.china[index].c_number++;
        } else {
          self.china[index].c_number--;
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
          url: './kla?image=' + _china2.default[index].pic + '&title=' + _china2.default[index].title + '&price=' + _china2.default[index].price
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

  _createClass(China, [{
    key: 'onLoad',
    value: function onLoad() {
      _wepy2.default.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 1000
        // image: '../images/ahome.png'
      });
      var self = this;
      self.china = _china2.default;
      console.log(self.china, 'aaaaaaaaaa');
    }
  }]);

  return China;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(China , 'pages/China'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoaW5hLmpzIl0sIm5hbWVzIjpbIkNoaW5hIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJub3Rjb2xsZWN0IiwibGFjb2xsZWN0IiwiYWNvbGxlY3QiLCJjaGluYSIsIm1ldGhvZHMiLCJjb2xsZWN0IiwiZSIsInNlbGYiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImNfbnVtYmVyIiwibGFnb29kcyIsIml0ZW0iLCJkYXRhc2V0IiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwaWMiLCJ0aXRsZSIsInByaWNlIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsa0JBQVksd0JBRFA7QUFFTEMsaUJBQVcsS0FGTjtBQUdMQyxnQkFBVSxLQUhMO0FBSUxDLGFBQU87O0FBSkYsSyxRQU9QQyxPLEdBQVU7QUFDUkMsYUFEUSxtQkFDQUMsQ0FEQSxFQUNHO0FBQ1QsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsRUFBNUI7QUFDQUgsYUFBS0osS0FBTCxDQUFXSyxLQUFYLEVBQWtCTixRQUFsQixHQUE2QixDQUFDSyxLQUFLSixLQUFMLENBQVdLLEtBQVgsRUFBa0JOLFFBQWhEO0FBQ0E7QUFDQSxZQUFJSyxLQUFLSixLQUFMLENBQVdLLEtBQVgsRUFBa0JOLFFBQXRCLEVBQWdDO0FBQzlCSyxlQUFLSixLQUFMLENBQVdLLEtBQVgsRUFBa0JHLFFBQWxCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xKLGVBQUtKLEtBQUwsQ0FBV0ssS0FBWCxFQUFrQkcsUUFBbEI7QUFDRDtBQUNGLE9BWE87QUFZUkMsYUFaUSxtQkFZQU4sQ0FaQSxFQVlHO0FBQ1QsWUFBSU8sT0FBT1AsRUFBRUcsYUFBRixDQUFnQkssT0FBaEIsQ0FBd0JOLEtBQW5DO0FBQ0FPLGdCQUFRQyxHQUFSLENBQVlWLENBQVosRUFBZSxNQUFmO0FBQ0EsZ0JBQVFPLElBQVI7QUFDRSxlQUFLLENBQUw7QUFBUywyQkFBS0ksVUFBTCxDQUFnQjtBQUN2QkMsbUJBQUs7QUFEa0IsYUFBaEIsRUFFTDtBQUNKLGVBQUssQ0FBTDtBQUFTLDJCQUFLRCxVQUFMLENBQWdCO0FBQ3ZCQyxtQkFBSztBQURrQixhQUFoQixFQUVMO0FBTk47QUFRQSxZQUFJWCxPQUFPLElBQVg7QUFDQSxZQUFNQyxRQUFRRixFQUFFRyxhQUFGLENBQWdCQyxFQUE5QjtBQUNBLHVCQUFLTyxVQUFMLENBQWdCO0FBQ2RDLGdDQUFvQixnQkFBTVYsS0FBTixFQUFhVyxHQUFqQyxlQUE4QyxnQkFBTVgsS0FBTixFQUFhWSxLQUEzRCxlQUEwRSxnQkFBTVosS0FBTixFQUFhYTtBQUR6RSxTQUFoQjtBQUdBTixnQkFBUUMsR0FBUixDQUFZVCxLQUFLSixLQUFMLENBQVdLLEtBQVgsQ0FBWixFQUErQixRQUEvQjtBQUNEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFyQ1EsSzs7Ozs7NkJBdUNEO0FBQ1AscUJBQUtjLFNBQUwsQ0FBZTtBQUNiRixlQUFPLEtBRE07QUFFYkcsY0FBTSxTQUZPO0FBR2JDLGtCQUFVO0FBQ1Y7QUFKYSxPQUFmO0FBTUEsVUFBSWpCLE9BQU8sSUFBWDtBQUNBQSxXQUFLSixLQUFMO0FBQ0FZLGNBQVFDLEdBQVIsQ0FBWVQsS0FBS0osS0FBakIsRUFBd0IsWUFBeEI7QUFDRDs7OztFQTVEZ0MsZUFBS3NCLEk7O2tCQUFuQjdCLEsiLCJmaWxlIjoiQ2hpbmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBjaGluYSBmcm9tICcuLi9kYXRhL2NoaW5hLmpzJ1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaW5hIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpn6nlvI/lqZrnurEvd2VkZGluZydcbiAgfVxuICBkYXRhID0ge1xuICAgIG5vdGNvbGxlY3Q6ICcuLi9pbWFnZXMvYWNvbGxlY3QucG5nJyxcbiAgICBsYWNvbGxlY3Q6IGZhbHNlLFxuICAgIGFjb2xsZWN0OiBmYWxzZSxcbiAgICBjaGluYTogW11cblxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY29sbGVjdChlKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGxldCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgc2VsZi5jaGluYVtpbmRleF0uYWNvbGxlY3QgPSAhc2VsZi5jaGluYVtpbmRleF0uYWNvbGxlY3RcbiAgICAgIC8vIHNlbGYubGFjb2xsZWN0ID0gJy4uL2ltYWdlcy/mlLbol48t6YCJ5LitLnBuZydcbiAgICAgIGlmIChzZWxmLmNoaW5hW2luZGV4XS5hY29sbGVjdCkge1xuICAgICAgICBzZWxmLmNoaW5hW2luZGV4XS5jX251bWJlcisrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmNoaW5hW2luZGV4XS5jX251bWJlci0tXG4gICAgICB9XG4gICAgfSxcbiAgICBsYWdvb2RzKGUpIHtcbiAgICAgIHZhciBpdGVtID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGNvbnNvbGUubG9nKGUsICdpdGVtJylcbiAgICAgIHN3aXRjaCAoaXRlbSkge1xuICAgICAgICBjYXNlIDAgOiB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3BhZ2VzL2tsYSdcbiAgICAgICAgfSk7IGJyZWFrXG4gICAgICAgIGNhc2UgMSA6IHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vcGFnZXMva2xiJ1xuICAgICAgICB9KTsgYnJlYWtcbiAgICAgIH1cbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4va2xhP2ltYWdlPSR7Y2hpbmFbaW5kZXhdLnBpY30mdGl0bGU9JHtjaGluYVtpbmRleF0udGl0bGV9JnByaWNlPSR7Y2hpbmFbaW5kZXhdLnByaWNlfWBcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhzZWxmLmNoaW5hW2luZGV4XSwgJzExMTExMScpXG4gICAgfVxuICAgIC8vIGxhZ29vZHMoZSkge1xuICAgIC8vICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgLy8gICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgIC8vICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAvLyAgICAgdXJsOiBgLi9rbGFgXG4gICAgLy8gICB9KVxuICAgIC8vICAgY29uc29sZS5sb2coc2VsZi5rb3JlYW5baW5kZXhdLCAnMTExMTExJylcbiAgICAvLyB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcbiAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAvLyBpbWFnZTogJy4uL2ltYWdlcy9haG9tZS5wbmcnXG4gICAgfSlcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmNoaW5hID0gY2hpbmFcbiAgICBjb25zb2xlLmxvZyhzZWxmLmNoaW5hLCAnYWFhYWFhYWFhYScpXG4gIH1cbn1cbiJdfQ==