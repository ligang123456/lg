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
      navigationBarTitleText: '小清新婚纱/wedding'
    }, _this.data = {
      lanumber: 0,
      lbnumber: 0,
      lcnumber: 0,
      ldnumber: 0,
      ranumber: 0,
      rbnumber: 0,
      rcnumber: 0,
      rdnumber: 0,
      lapic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330062990,4245696189&fm=27&gp=0.jpg',
      lbpic: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4064038270,1595400132&fm=27&gp=0.jpg',
      lcpic: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=897783695,942150829&fm=27&gp=0.jpg',
      ldpic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=67229818,1333284618&fm=27&gp=0.jpg',
      rapic: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3155610230,438529439&fm=27&gp=0.jpg',
      rbpic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=122757271,1438254285&fm=27&gp=0.jpg',
      rcpic: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2372960960,3959808633&fm=27&gp=0.jpg',
      rdpic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=994154604,1342887172&fm=27&gp=0.jpg',
      notcollect: '../images/acollect.png',
      racollect: '../images/acollect.png',
      rbcollect: '../images/acollect.png',
      rccollect: '../images/acollect.png',
      rdcollect: '../images/acollect.png',
      lacollect: false,
      lbcollect: false,
      lccollect: false,
      ldcollect: false,
      acollect: false,
      bcollect: false,
      ccollect: false,
      dcollect: false

    }, _this.methods = {
      lacollect: function lacollect() {
        var self = this;
        self.lacollect = !self.lacollect;
        // self.lacollect = '../images/收藏-选中.png'
        if (self.lacollect) {
          self.lanumber++;
        } else {
          self.lanumber--;
        }
      },
      lbcollect: function lbcollect() {
        var self = this;
        self.lbcollect = !self.lbcollect;
        if (self.lbcollect) {
          self.lbnumber++;
        } else {
          self.lbnumber--;
        }
      },
      lccollect: function lccollect() {
        var self = this;
        self.lccollect = !self.lccollect;
        if (self.lccollect) {
          self.lcnumber++;
        } else {
          self.lcnumber--;
        }
      },
      ldcollect: function ldcollect() {
        var self = this;
        self.ldcollect = !self.ldcollect;
        if (self.ldcollect) {
          self.ldnumber++;
        } else {
          self.ldnumber--;
        }
      },
      racollect: function racollect() {
        var self = this;
        self.acollect = !self.acollect;
        if (self.acollect) {
          self.ranumber++;
        } else {
          self.ranumber--;
        }
      },
      rbcollect: function rbcollect() {
        var self = this;
        self.bcollect = !self.bcollect;
        if (self.bcollect) {
          self.rbnumber++;
        } else {
          self.rbnumber--;
        }
      },
      rccollect: function rccollect() {
        var self = this;
        self.ccollect = !self.ccollect;
        if (self.ccollect) {
          self.rcnumber++;
        } else {
          self.rcnumber--;
        }
      },
      rdcollect: function rdcollect() {
        var self = this;
        self.dcollect = !self.dcollect;
        if (self.dcollect) {
          self.rdnumber++;
        } else {
          self.rdnumber--;
        }
      },
      lapic: function lapic() {
        _wepy2.default.navigateTo({
          url: '../pages/kla'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/fresh'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyZXNoLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsYW51bWJlciIsImxibnVtYmVyIiwibGNudW1iZXIiLCJsZG51bWJlciIsInJhbnVtYmVyIiwicmJudW1iZXIiLCJyY251bWJlciIsInJkbnVtYmVyIiwibGFwaWMiLCJsYnBpYyIsImxjcGljIiwibGRwaWMiLCJyYXBpYyIsInJicGljIiwicmNwaWMiLCJyZHBpYyIsIm5vdGNvbGxlY3QiLCJyYWNvbGxlY3QiLCJyYmNvbGxlY3QiLCJyY2NvbGxlY3QiLCJyZGNvbGxlY3QiLCJsYWNvbGxlY3QiLCJsYmNvbGxlY3QiLCJsY2NvbGxlY3QiLCJsZGNvbGxlY3QiLCJhY29sbGVjdCIsImJjb2xsZWN0IiwiY2NvbGxlY3QiLCJkY29sbGVjdCIsIm1ldGhvZHMiLCJzZWxmIiwibmF2aWdhdGVUbyIsInVybCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxnQkFBVSxDQURMO0FBRUxDLGdCQUFVLENBRkw7QUFHTEMsZ0JBQVUsQ0FITDtBQUlMQyxnQkFBVSxDQUpMO0FBS0xDLGdCQUFVLENBTEw7QUFNTEMsZ0JBQVUsQ0FOTDtBQU9MQyxnQkFBVSxDQVBMO0FBUUxDLGdCQUFVLENBUkw7QUFTTEMsYUFBTyxnR0FURjtBQVVMQyxhQUFPLGdHQVZGO0FBV0xDLGFBQU8sOEZBWEY7QUFZTEMsYUFBTyw4RkFaRjtBQWFMQyxhQUFPLCtGQWJGO0FBY0xDLGFBQU8sK0ZBZEY7QUFlTEMsYUFBTyxnR0FmRjtBQWdCTEMsYUFBTywrRkFoQkY7QUFpQkxDLGtCQUFZLHdCQWpCUDtBQWtCTEMsaUJBQVcsd0JBbEJOO0FBbUJMQyxpQkFBVyx3QkFuQk47QUFvQkxDLGlCQUFXLHdC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ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5bCP5riF5paw5ama57qxL3dlZGRpbmcnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBsYW51bWJlcjogMCxcbiAgICBsYm51bWJlcjogMCxcbiAgICBsY251bWJlcjogMCxcbiAgICBsZG51bWJlcjogMCxcbiAgICByYW51bWJlcjogMCxcbiAgICByYm51bWJlcjogMCxcbiAgICByY251bWJlcjogMCxcbiAgICByZG51bWJlcjogMCxcbiAgICBsYXBpYzogJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdVhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xMzMwMDYyOTkwLDQyNDU2OTYxODkmZm09MjcmZ3A9MC5qcGcnLFxuICAgIGxicGljOiAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z2SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTQwNjQwMzgyNzAsMTU5NTQwMDEzMiZmbT0yNyZncD0wLmpwZycsXG4gICAgbGNwaWM6ICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnZIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9ODk3NzgzNjk1LDk0MjE1MDgyOSZmbT0yNyZncD0wLmpwZycsXG4gICAgbGRwaWM6ICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnVIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9NjcyMjk4MTgsMTMzMzI4NDYxOCZmbT0yNyZncD0wLmpwZycsXG4gICAgcmFwaWM6ICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnZYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MzE1NTYxMDIzMCw0Mzg1Mjk0MzkmZm09MjcmZ3A9MC5qcGcnLFxuICAgIHJicGljOiAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z1SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTEyMjc1NzI3MSwxNDM4MjU0Mjg1JmZtPTI3JmdwPTAuanBnJyxcbiAgICByY3BpYzogJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdlhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yMzcyOTYwOTYwLDM5NTk4MDg2MzMmZm09MjcmZ3A9MC5qcGcnLFxuICAgIHJkcGljOiAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z1SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTk5NDE1NDYwNCwxMzQyODg3MTcyJmZtPTI3JmdwPTAuanBnJyxcbiAgICBub3Rjb2xsZWN0OiAnLi4vaW1hZ2VzL2Fjb2xsZWN0LnBuZycsXG4gICAgcmFjb2xsZWN0OiAnLi4vaW1hZ2VzL2Fjb2xsZWN0LnBuZycsXG4gICAgcmJjb2xsZWN0OiAnLi4vaW1hZ2VzL2Fjb2xsZWN0LnBuZycsXG4gICAgcmNjb2xsZWN0OiAnLi4vaW1hZ2VzL2Fjb2xsZWN0LnBuZycsXG4gICAgcmRjb2xsZWN0OiAnLi4vaW1hZ2VzL2Fjb2xsZWN0LnBuZycsXG4gICAgbGFjb2xsZWN0OiBmYWxzZSxcbiAgICBsYmNvbGxlY3Q6IGZhbHNlLFxuICAgIGxjY29sbGVjdDogZmFsc2UsXG4gICAgbGRjb2xsZWN0OiBmYWxzZSxcbiAgICBhY29sbGVjdDogZmFsc2UsXG4gICAgYmNvbGxlY3Q6IGZhbHNlLFxuICAgIGNjb2xsZWN0OiBmYWxzZSxcbiAgICBkY29sbGVjdDogZmFsc2VcblxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgbGFjb2xsZWN0KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmxhY29sbGVjdCA9ICFzZWxmLmxhY29sbGVjdFxuICAgICAgLy8gc2VsZi5sYWNvbGxlY3QgPSAnLi4vaW1hZ2VzL+aUtuiXjy3pgInkuK0ucG5nJ1xuICAgICAgaWYgKHNlbGYubGFjb2xsZWN0KSB7XG4gICAgICAgIHNlbGYubGFudW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5sYW51bWJlci0tXG4gICAgICB9XG4gICAgfSxcbiAgICBsYmNvbGxlY3QoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYubGJjb2xsZWN0ID0gIXNlbGYubGJjb2xsZWN0XG4gICAgICBpZiAoc2VsZi5sYmNvbGxlY3QpIHtcbiAgICAgICAgc2VsZi5sYm51bWJlcisrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmxibnVtYmVyLS1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxjY29sbGVjdCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5sY2NvbGxlY3QgPSAhc2VsZi5sY2NvbGxlY3RcbiAgICAgIGlmIChzZWxmLmxjY29sbGVjdCkge1xuICAgICAgICBzZWxmLmxjbnVtYmVyKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYubGNudW1iZXItLVxuICAgICAgfVxuICAgIH0sXG4gICAgbGRjb2xsZWN0KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmxkY29sbGVjdCA9ICFzZWxmLmxkY29sbGVjdFxuICAgICAgaWYgKHNlbGYubGRjb2xsZWN0KSB7XG4gICAgICAgIHNlbGYubGRudW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5sZG51bWJlci0tXG4gICAgICB9XG4gICAgfSxcbiAgICByYWNvbGxlY3QoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuYWNvbGxlY3QgPSAhc2VsZi5hY29sbGVjdFxuICAgICAgaWYgKHNlbGYuYWNvbGxlY3QpIHtcbiAgICAgICAgc2VsZi5yYW51bWJlcisrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLnJhbnVtYmVyLS1cbiAgICAgIH1cbiAgICB9LFxuICAgIHJiY29sbGVjdCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5iY29sbGVjdCA9ICFzZWxmLmJjb2xsZWN0XG4gICAgICBpZiAoc2VsZi5iY29sbGVjdCkge1xuICAgICAgICBzZWxmLnJibnVtYmVyKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYucmJudW1iZXItLVxuICAgICAgfVxuICAgIH0sXG4gICAgcmNjb2xsZWN0KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNjb2xsZWN0ID0gIXNlbGYuY2NvbGxlY3RcbiAgICAgIGlmIChzZWxmLmNjb2xsZWN0KSB7XG4gICAgICAgIHNlbGYucmNudW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5yY251bWJlci0tXG4gICAgICB9XG4gICAgfSxcbiAgICByZGNvbGxlY3QoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuZGNvbGxlY3QgPSAhc2VsZi5kY29sbGVjdFxuICAgICAgaWYgKHNlbGYuZGNvbGxlY3QpIHtcbiAgICAgICAgc2VsZi5yZG51bWJlcisrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLnJkbnVtYmVyLS1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxhcGljKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMva2xhJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkgeyB9XG59XG4iXX0=