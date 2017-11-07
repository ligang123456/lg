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
          url: './kla?image=' + _china2.default[index].c_pic + '&title=' + _china2.default[index].c_int + '&price=' + _china2.default[index].c_price
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
      var self = this;
      self.china = _china2.default;
      console.log(self.korean, 'aaaaaaaaaa');
    }
  }]);

  return Korean;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Korean , 'pages/China'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNoaW5hLmpzIl0sIm5hbWVzIjpbIktvcmVhbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibm90Y29sbGVjdCIsImxhY29sbGVjdCIsImFjb2xsZWN0IiwiY2hpbmEiLCJtZXRob2RzIiwiY29sbGVjdCIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJjX251bWJlciIsImxhZ29vZHMiLCJpdGVtIiwiZGF0YXNldCIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY19waWMiLCJjX2ludCIsImNfcHJpY2UiLCJrb3JlYW4iLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxrQkFBWSx3QkFEUDtBQUVMQyxpQkFBVyxLQUZOO0FBR0xDLGdCQUFVLEtBSEw7QUFJTEMsYUFBTzs7QUFKRixLLFFBT1BDLE8sR0FBVTtBQUNSQyxhQURRLG1CQUNBQyxDQURBLEVBQ0c7QUFDVCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQyxRQUFRRixFQUFFRyxhQUFGLENBQWdCQyxFQUE1QjtBQUNBSCxhQUFLSixLQUFMLENBQVdLLEtBQVgsRUFBa0JOLFFBQWxCLEdBQTZCLENBQUNLLEtBQUtKLEtBQUwsQ0FBV0ssS0FBWCxFQUFrQk4sUUFBaEQ7QUFDQTtBQUNBLFlBQUlLLEtBQUtKLEtBQUwsQ0FBV0ssS0FBWCxFQUFrQk4sUUFBdEIsRUFBZ0M7QUFDOUJLLGVBQUtKLEtBQUwsQ0FBV0ssS0FBWCxFQUFrQkcsUUFBbEI7QUFDRCxTQUZELE1BRU87QUFDTEosZUFBS0osS0FBTCxDQUFXSyxLQUFYLEVBQWtCRyxRQUFsQjtBQUNEO0FBQ0YsT0FYTztBQVlSQyxhQVpRLG1CQVlBTixDQVpBLEVBWUc7QUFDVCxZQUFJTyxPQUFPUCxFQUFFRyxhQUFGLENBQWdCSyxPQUFoQixDQUF3Qk4sS0FBbkM7QUFDQU8sZ0JBQVFDLEdBQVIsQ0FBWVYsQ0FBWixFQUFlLE1BQWY7QUFDQSxnQkFBUU8sSUFBUjtBQUNFLGVBQUssQ0FBTDtBQUFTLDJCQUFLSSxVQUFMLENBQWdCO0FBQ3ZCQyxtQkFBSztBQURrQixhQUFoQixFQUVMO0FBQ0osZUFBSyxDQUFMO0FBQVMsMkJBQUtELFVBQUwsQ0FBZ0I7QUFDdkJDLG1CQUFLO0FBRGtCLGFBQWhCLEVBRUw7QUFOTjtBQVFBLFlBQUlYLE9BQU8sSUFBWDtBQUNBLFlBQU1DLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTlCO0FBQ0EsdUJBQUtPLFVBQUwsQ0FBZ0I7QUFDZEMsZ0NBQW9CLGdCQUFNVixLQUFOLEVBQWFXLEtBQWpDLGVBQWdELGdCQUFNWCxLQUFOLEVBQWFZLEtBQTdELGVBQTRFLGdCQUFNWixLQUFOLEVBQWFhO0FBRDNFLFNBQWhCO0FBR0FOLGdCQUFRQyxHQUFSLENBQVlULEtBQUtKLEtBQUwsQ0FBV0ssS0FBWCxDQUFaLEVBQStCLFFBQS9CO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXJDUSxLOzs7Ozs2QkF1Q0Q7QUFDUCxVQUFJRCxPQUFPLElBQVg7QUFDQUEsV0FBS0osS0FBTDtBQUNBWSxjQUFRQyxHQUFSLENBQVlULEtBQUtlLE1BQWpCLEVBQXlCLFlBQXpCO0FBQ0Q7Ozs7RUF0RGlDLGVBQUtDLEk7O2tCQUFwQjNCLE0iLCJmaWxlIjoiQ2hpbmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBjaGluYSBmcm9tICcuLi9kYXRhL2NoaW5hLmpzJ1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtvcmVhbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6Z+p5byP5ama57qxL3dlZGRpbmcnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBub3Rjb2xsZWN0OiAnLi4vaW1hZ2VzL2Fjb2xsZWN0LnBuZycsXG4gICAgbGFjb2xsZWN0OiBmYWxzZSxcbiAgICBhY29sbGVjdDogZmFsc2UsXG4gICAgY2hpbmE6IFtdXG5cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGNvbGxlY3QoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIHNlbGYuY2hpbmFbaW5kZXhdLmFjb2xsZWN0ID0gIXNlbGYuY2hpbmFbaW5kZXhdLmFjb2xsZWN0XG4gICAgICAvLyBzZWxmLmxhY29sbGVjdCA9ICcuLi9pbWFnZXMv5pS26JePLemAieS4rS5wbmcnXG4gICAgICBpZiAoc2VsZi5jaGluYVtpbmRleF0uYWNvbGxlY3QpIHtcbiAgICAgICAgc2VsZi5jaGluYVtpbmRleF0uY19udW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5jaGluYVtpbmRleF0uY19udW1iZXItLVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFnb29kcyhlKSB7XG4gICAgICB2YXIgaXRlbSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBjb25zb2xlLmxvZyhlLCAnaXRlbScpXG4gICAgICBzd2l0Y2ggKGl0ZW0pIHtcbiAgICAgICAgY2FzZSAwIDogd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9wYWdlcy9rbGEnXG4gICAgICAgIH0pOyBicmVha1xuICAgICAgICBjYXNlIDEgOiB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3BhZ2VzL2tsYidcbiAgICAgICAgfSk7IGJyZWFrXG4gICAgICB9XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL2tsYT9pbWFnZT0ke2NoaW5hW2luZGV4XS5jX3BpY30mdGl0bGU9JHtjaGluYVtpbmRleF0uY19pbnR9JnByaWNlPSR7Y2hpbmFbaW5kZXhdLmNfcHJpY2V9YFxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuY2hpbmFbaW5kZXhdLCAnMTExMTExJylcbiAgICB9XG4gICAgLy8gbGFnb29kcyhlKSB7XG4gICAgLy8gICBsZXQgc2VsZiA9IHRoaXNcbiAgICAvLyAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgLy8gICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgIC8vICAgICB1cmw6IGAuL2tsYWBcbiAgICAvLyAgIH0pXG4gICAgLy8gICBjb25zb2xlLmxvZyhzZWxmLmtvcmVhbltpbmRleF0sICcxMTExMTEnKVxuICAgIC8vIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5jaGluYSA9IGNoaW5hXG4gICAgY29uc29sZS5sb2coc2VsZi5rb3JlYW4sICdhYWFhYWFhYWFhJylcbiAgfVxufVxuIl19