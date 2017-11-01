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
      navigationBarTitleText: '韩式婚纱/wedding'
    }, _this.data = {
      lanumber: 0,
      lbnumber: 0,
      lcnumber: 0,
      ldnumber: 0,
      ranumber: 0,
      rbnumber: 0,
      rcnumber: 0,
      rdnumber: 0,
      lapic: 'http://img1.imgtn.bdimg.com/it/u=2553322381,2925312760&fm=27&gp=0.jpg',
      lbpic: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2269117905,883006692&fm=27&gp=0.jpg',
      lcpic: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2685210028,3457372075&fm=27&gp=0.jpg',
      ldpic: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1943435865,804430348&fm=27&gp=0.jpg',
      rapic: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3960877383,1051484866&fm=27&gp=0.jpg',
      rbpic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1453502849,2727599889&fm=27&gp=0.jpg',
      rcpic: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1161813563,3069512331&fm=27&gp=0.jpg',
      rdpic: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2650753610,2725677441&fm=27&gp=0.jpg',
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/Korean'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIktvcmVhbi5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibGFudW1iZXIiLCJsYm51bWJlciIsImxjbnVtYmVyIiwibGRudW1iZXIiLCJyYW51bWJlciIsInJibnVtYmVyIiwicmNudW1iZXIiLCJyZG51bWJlciIsImxhcGljIiwibGJwaWMiLCJsY3BpYyIsImxkcGljIiwicmFwaWMiLCJyYnBpYyIsInJjcGljIiwicmRwaWMiLCJub3Rjb2xsZWN0IiwicmFjb2xsZWN0IiwicmJjb2xsZWN0IiwicmNjb2xsZWN0IiwicmRjb2xsZWN0IiwibGFjb2xsZWN0IiwibGJjb2xsZWN0IiwibGNjb2xsZWN0IiwibGRjb2xsZWN0IiwiYWNvbGxlY3QiLCJiY29sbGVjdCIsImNjb2xsZWN0IiwiZGNvbGxlY3QiLCJtZXRob2RzIiwic2VsZiIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsZ0JBQVUsQ0FETDtBQUVMQyxnQkFBVSxDQUZMO0FBR0xDLGdCQUFVLENBSEw7QUFJTEMsZ0JBQVUsQ0FKTDtBQUtMQyxnQkFBVSxDQUxMO0FBTUxDLGdCQUFVLENBTkw7QUFPTEMsZ0JBQVUsQ0FQTDtBQVFMQyxnQkFBVSxDQVJMO0FBU0xDLGFBQU8sdUVBVEY7QUFVTEMsYUFBTywrRkFWRjtBQVdMQyxhQUFPLGdHQVhGO0FBWUxDLGFBQU8sK0ZBWkY7QUFhTEMsYUFBTyxnR0FiRjtBQWNMQyxhQUFPLGdHQWRGO0FBZUxDLGFBQU8sZ0dBZkY7QUFnQkxDLGFBQU8sZ0dBaEJGO0FBaUJMQyxrQkFBWSx3QkFqQlA7QUFrQkxDLGlCQUFXLHdCQWxCTjtBQW1CTEMsaUJBQVcsd0JBbkJOO0FBb0JMQyxpQkFBVyx3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IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpn6nlvI/lqZrnurEvd2VkZGluZydcbiAgfVxuICBkYXRhID0ge1xuICAgIGxhbnVtYmVyOiAwLFxuICAgIGxibnVtYmVyOiAwLFxuICAgIGxjbnVtYmVyOiAwLFxuICAgIGxkbnVtYmVyOiAwLFxuICAgIHJhbnVtYmVyOiAwLFxuICAgIHJibnVtYmVyOiAwLFxuICAgIHJjbnVtYmVyOiAwLFxuICAgIHJkbnVtYmVyOiAwLFxuICAgIGxhcGljOiAnaHR0cDovL2ltZzEuaW1ndG4uYmRpbWcuY29tL2l0L3U9MjU1MzMyMjM4MSwyOTI1MzEyNzYwJmZtPTI3JmdwPTAuanBnJyxcbiAgICBsYnBpYzogJ2h0dHBzOi8vc3MzLmJkc3RhdGljLmNvbS83MGNGdjhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yMjY5MTE3OTA1LDg4MzAwNjY5MiZmbT0yNyZncD0wLmpwZycsXG4gICAgbGNwaWM6ICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnZYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MjY4NTIxMDAyOCwzNDU3MzcyMDc1JmZtPTI3JmdwPTAuanBnJyxcbiAgICBsZHBpYzogJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdlhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xOTQzNDM1ODY1LDgwNDQzMDM0OCZmbT0yNyZncD0wLmpwZycsXG4gICAgcmFwaWM6ICdodHRwczovL3NzMy5iZHN0YXRpYy5jb20vNzBjRnY4U2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9Mzk2MDg3NzM4MywxMDUxNDg0ODY2JmZtPTI3JmdwPTAuanBnJyxcbiAgICByYnBpYzogJ2h0dHBzOi8vc3MyLmJkc3RhdGljLmNvbS83MGNGdm5TaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xNDUzNTAyODQ5LDI3Mjc1OTk4ODkmZm09MjcmZ3A9MC5qcGcnLFxuICAgIHJjcGljOiAnaHR0cHM6Ly9zczIuYmRzdGF0aWMuY29tLzcwY0Z2blNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTExNjE4MTM1NjMsMzA2OTUxMjMzMSZmbT0yNyZncD0wLmpwZycsXG4gICAgcmRwaWM6ICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnZYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MjY1MDc1MzYxMCwyNzI1Njc3NDQxJmZtPTI3JmdwPTAuanBnJyxcbiAgICBub3Rjb2xsZWN0OiAnLi4vaW1hZ2VzL2Fjb2xsZWN0LnBuZycsXG4gICAgcmFjb2xsZWN0OiAnLi4vaW1hZ2VzL2Fjb2xsZWN0LnBuZycsXG4gICAgcmJjb2xsZWN0OiAnLi4vaW1hZ2VzL2Fjb2xsZWN0LnBuZycsXG4gICAgcmNjb2xsZWN0OiAnLi4vaW1hZ2VzL2Fjb2xsZWN0LnBuZycsXG4gICAgcmRjb2xsZWN0OiAnLi4vaW1hZ2VzL2Fjb2xsZWN0LnBuZycsXG4gICAgbGFjb2xsZWN0OiBmYWxzZSxcbiAgICBsYmNvbGxlY3Q6IGZhbHNlLFxuICAgIGxjY29sbGVjdDogZmFsc2UsXG4gICAgbGRjb2xsZWN0OiBmYWxzZSxcbiAgICBhY29sbGVjdDogZmFsc2UsXG4gICAgYmNvbGxlY3Q6IGZhbHNlLFxuICAgIGNjb2xsZWN0OiBmYWxzZSxcbiAgICBkY29sbGVjdDogZmFsc2VcblxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgbGFjb2xsZWN0KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmxhY29sbGVjdCA9ICFzZWxmLmxhY29sbGVjdFxuICAgICAgLy8gc2VsZi5sYWNvbGxlY3QgPSAnLi4vaW1hZ2VzL+aUtuiXjy3pgInkuK0ucG5nJ1xuICAgICAgaWYgKHNlbGYubGFjb2xsZWN0KSB7XG4gICAgICAgIHNlbGYubGFudW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5sYW51bWJlci0tXG4gICAgICB9XG4gICAgfSxcbiAgICBsYmNvbGxlY3QoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYubGJjb2xsZWN0ID0gIXNlbGYubGJjb2xsZWN0XG4gICAgICBpZiAoc2VsZi5sYmNvbGxlY3QpIHtcbiAgICAgICAgc2VsZi5sYm51bWJlcisrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmxibnVtYmVyLS1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxjY29sbGVjdCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5sY2NvbGxlY3QgPSAhc2VsZi5sY2NvbGxlY3RcbiAgICAgIGlmIChzZWxmLmxjY29sbGVjdCkge1xuICAgICAgICBzZWxmLmxjbnVtYmVyKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYubGNudW1iZXItLVxuICAgICAgfVxuICAgIH0sXG4gICAgbGRjb2xsZWN0KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmxkY29sbGVjdCA9ICFzZWxmLmxkY29sbGVjdFxuICAgICAgaWYgKHNlbGYubGRjb2xsZWN0KSB7XG4gICAgICAgIHNlbGYubGRudW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5sZG51bWJlci0tXG4gICAgICB9XG4gICAgfSxcbiAgICByYWNvbGxlY3QoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuYWNvbGxlY3QgPSAhc2VsZi5hY29sbGVjdFxuICAgICAgaWYgKHNlbGYuYWNvbGxlY3QpIHtcbiAgICAgICAgc2VsZi5yYW51bWJlcisrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLnJhbnVtYmVyLS1cbiAgICAgIH1cbiAgICB9LFxuICAgIHJiY29sbGVjdCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5iY29sbGVjdCA9ICFzZWxmLmJjb2xsZWN0XG4gICAgICBpZiAoc2VsZi5iY29sbGVjdCkge1xuICAgICAgICBzZWxmLnJibnVtYmVyKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYucmJudW1iZXItLVxuICAgICAgfVxuICAgIH0sXG4gICAgcmNjb2xsZWN0KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNjb2xsZWN0ID0gIXNlbGYuY2NvbGxlY3RcbiAgICAgIGlmIChzZWxmLmNjb2xsZWN0KSB7XG4gICAgICAgIHNlbGYucmNudW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5yY251bWJlci0tXG4gICAgICB9XG4gICAgfSxcbiAgICByZGNvbGxlY3QoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuZGNvbGxlY3QgPSAhc2VsZi5kY29sbGVjdFxuICAgICAgaWYgKHNlbGYuZGNvbGxlY3QpIHtcbiAgICAgICAgc2VsZi5yZG51bWJlcisrXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLnJkbnVtYmVyLS1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxhcGljKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMva2xhJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkgeyB9XG59XG4iXX0=