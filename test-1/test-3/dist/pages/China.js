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
      navigationBarTitleText: '中式婚纱/wedding'
    }, _this.data = {
      lanumber: 0,
      lbnumber: 0,
      lcnumber: 0,
      ldnumber: 0,
      ranumber: 0,
      rbnumber: 0,
      rcnumber: 0,
      rdnumber: 0,
      lapic: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1050848129,653593312&fm=27&gp=0.jpg',
      lbpic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3061289273,1862940451&fm=11&gp=0.jpg',
      lcpic: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2792928026,4035569877&fm=27&gp=0.jpg',
      ldpic: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=400619145,2816616768&fm=27&gp=0.jpg',
      rapic: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1887976017,3134824751&fm=27&gp=0.jpg',
      rbpic: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4109140288,4045698816&fm=27&gp=0.jpg',
      rcpic: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=691853908,3835353995&fm=27&gp=0.jpg',
      rdpic: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1461531979,3090219501&fm=11&gp=0.jpg',
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/China'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoaW5hLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJsYW51bWJlciIsImxibnVtYmVyIiwibGNudW1iZXIiLCJsZG51bWJlciIsInJhbnVtYmVyIiwicmJudW1iZXIiLCJyY251bWJlciIsInJkbnVtYmVyIiwibGFwaWMiLCJsYnBpYyIsImxjcGljIiwibGRwaWMiLCJyYXBpYyIsInJicGljIiwicmNwaWMiLCJyZHBpYyIsIm5vdGNvbGxlY3QiLCJyYWNvbGxlY3QiLCJyYmNvbGxlY3QiLCJyY2NvbGxlY3QiLCJyZGNvbGxlY3QiLCJsYWNvbGxlY3QiLCJsYmNvbGxlY3QiLCJsY2NvbGxlY3QiLCJsZGNvbGxlY3QiLCJhY29sbGVjdCIsImJjb2xsZWN0IiwiY2NvbGxlY3QiLCJkY29sbGVjdCIsIm1ldGhvZHMiLCJzZWxmIiwibmF2aWdhdGVUbyIsInVybCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxnQkFBVSxDQURMO0FBRUxDLGdCQUFVLENBRkw7QUFHTEMsZ0JBQVUsQ0FITDtBQUlMQyxnQkFBVSxDQUpMO0FBS0xDLGdCQUFVLENBTEw7QUFNTEMsZ0JBQVUsQ0FOTDtBQU9MQyxnQkFBVSxDQVBMO0FBUUxDLGdCQUFVLENBUkw7QUFTTEMsYUFBTywrRkFURjtBQVVMQyxhQUFPLGdHQVZGO0FBV0xDLGFBQU8sZ0dBWEY7QUFZTEMsYUFBTywrRkFaRjtBQWFMQyxhQUFPLGdHQWJGO0FBY0xDLGFBQU8sZ0dBZEY7QUFlTEMsYUFBTywrRkFmRjtBQWdCTEMsYUFBTyxnR0FoQkY7QUFpQkxDLGtCQUFZLHdCQWpCUDtBQWtCTEMsaUJBQVcsd0JBbEJOO0FBbUJMQyxpQkFBVyx3QkFuQk47QUFvQkxDLGlCQUFXLHdC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ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5Lit5byP5ama57qxL3dlZGRpbmcnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBsYW51bWJlcjogMCxcbiAgICBsYm51bWJlcjogMCxcbiAgICBsY251bWJlcjogMCxcbiAgICBsZG51bWJlcjogMCxcbiAgICByYW51bWJlcjogMCxcbiAgICByYm51bWJlcjogMCxcbiAgICByY251bWJlcjogMCxcbiAgICByZG51bWJlcjogMCxcbiAgICBsYXBpYzogJ2h0dHBzOi8vc3MzLmJkc3RhdGljLmNvbS83MGNGdjhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xMDUwODQ4MTI5LDY1MzU5MzMxMiZmbT0yNyZncD0wLmpwZycsXG4gICAgbGJwaWM6ICdodHRwczovL3NzMi5iZHN0YXRpYy5jb20vNzBjRnZuU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MzA2MTI4OTI3MywxODYyOTQwNDUxJmZtPTExJmdwPTAuanBnJyxcbiAgICBsY3BpYzogJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdlhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yNzkyOTI4MDI2LDQwMzU1Njk4NzcmZm09MjcmZ3A9MC5qcGcnLFxuICAgIGxkcGljOiAnaHR0cHM6Ly9zczMuYmRzdGF0aWMuY29tLzcwY0Z2OFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTQwMDYxOTE0NSwyODE2NjE2NzY4JmZtPTI3JmdwPTAuanBnJyxcbiAgICByYXBpYzogJ2h0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdUhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xODg3OTc2MDE3LDMxMzQ4MjQ3NTEmZm09MjcmZ3A9MC5qcGcnLFxuICAgIHJicGljOiAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z2SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTQxMDkxNDAyODgsNDA0NTY5ODgxNiZmbT0yNyZncD0wLmpwZycsXG4gICAgcmNwaWM6ICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnVYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9NjkxODUzOTA4LDM4MzUzNTM5OTUmZm09MjcmZ3A9MC5qcGcnLFxuICAgIHJkcGljOiAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z2SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTE0NjE1MzE5NzksMzA5MDIxOTUwMSZmbT0xMSZncD0wLmpwZycsXG4gICAgbm90Y29sbGVjdDogJy4uL2ltYWdlcy9hY29sbGVjdC5wbmcnLFxuICAgIHJhY29sbGVjdDogJy4uL2ltYWdlcy9hY29sbGVjdC5wbmcnLFxuICAgIHJiY29sbGVjdDogJy4uL2ltYWdlcy9hY29sbGVjdC5wbmcnLFxuICAgIHJjY29sbGVjdDogJy4uL2ltYWdlcy9hY29sbGVjdC5wbmcnLFxuICAgIHJkY29sbGVjdDogJy4uL2ltYWdlcy9hY29sbGVjdC5wbmcnLFxuICAgIGxhY29sbGVjdDogZmFsc2UsXG4gICAgbGJjb2xsZWN0OiBmYWxzZSxcbiAgICBsY2NvbGxlY3Q6IGZhbHNlLFxuICAgIGxkY29sbGVjdDogZmFsc2UsXG4gICAgYWNvbGxlY3Q6IGZhbHNlLFxuICAgIGJjb2xsZWN0OiBmYWxzZSxcbiAgICBjY29sbGVjdDogZmFsc2UsXG4gICAgZGNvbGxlY3Q6IGZhbHNlXG5cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGxhY29sbGVjdCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5sYWNvbGxlY3QgPSAhc2VsZi5sYWNvbGxlY3RcbiAgICAgIC8vIHNlbGYubGFjb2xsZWN0ID0gJy4uL2ltYWdlcy/mlLbol48t6YCJ5LitLnBuZydcbiAgICAgIGlmIChzZWxmLmxhY29sbGVjdCkge1xuICAgICAgICBzZWxmLmxhbnVtYmVyKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYubGFudW1iZXItLVxuICAgICAgfVxuICAgIH0sXG4gICAgbGJjb2xsZWN0KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmxiY29sbGVjdCA9ICFzZWxmLmxiY29sbGVjdFxuICAgICAgaWYgKHNlbGYubGJjb2xsZWN0KSB7XG4gICAgICAgIHNlbGYubGJudW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5sYm51bWJlci0tXG4gICAgICB9XG4gICAgfSxcbiAgICBsY2NvbGxlY3QoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYubGNjb2xsZWN0ID0gIXNlbGYubGNjb2xsZWN0XG4gICAgICBpZiAoc2VsZi5sY2NvbGxlY3QpIHtcbiAgICAgICAgc2VsZi5sY251bWJlcisrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmxjbnVtYmVyLS1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxkY29sbGVjdCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5sZGNvbGxlY3QgPSAhc2VsZi5sZGNvbGxlY3RcbiAgICAgIGlmIChzZWxmLmxkY29sbGVjdCkge1xuICAgICAgICBzZWxmLmxkbnVtYmVyKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYubGRudW1iZXItLVxuICAgICAgfVxuICAgIH0sXG4gICAgcmFjb2xsZWN0KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmFjb2xsZWN0ID0gIXNlbGYuYWNvbGxlY3RcbiAgICAgIGlmIChzZWxmLmFjb2xsZWN0KSB7XG4gICAgICAgIHNlbGYucmFudW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5yYW51bWJlci0tXG4gICAgICB9XG4gICAgfSxcbiAgICByYmNvbGxlY3QoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuYmNvbGxlY3QgPSAhc2VsZi5iY29sbGVjdFxuICAgICAgaWYgKHNlbGYuYmNvbGxlY3QpIHtcbiAgICAgICAgc2VsZi5yYm51bWJlcisrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLnJibnVtYmVyLS1cbiAgICAgIH1cbiAgICB9LFxuICAgIHJjY29sbGVjdCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jY29sbGVjdCA9ICFzZWxmLmNjb2xsZWN0XG4gICAgICBpZiAoc2VsZi5jY29sbGVjdCkge1xuICAgICAgICBzZWxmLnJjbnVtYmVyKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYucmNudW1iZXItLVxuICAgICAgfVxuICAgIH0sXG4gICAgcmRjb2xsZWN0KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmRjb2xsZWN0ID0gIXNlbGYuZGNvbGxlY3RcbiAgICAgIGlmIChzZWxmLmRjb2xsZWN0KSB7XG4gICAgICAgIHNlbGYucmRudW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5yZG51bWJlci0tXG4gICAgICB9XG4gICAgfSxcbiAgICBsYXBpYygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL2tsYSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHsgfVxufVxuIl19