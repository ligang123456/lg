'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fresh = require('./../data/fresh.js');

var _fresh2 = _interopRequireDefault(_fresh);

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Fresh = function (_wepy$page) {
  _inherits(Fresh, _wepy$page);

  function Fresh() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Fresh);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Fresh.__proto__ || Object.getPrototypeOf(Fresh)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '小清新婚纱/wedding'
    }, _this.data = {
      notcollect: '../images/acollect.png',
      lacollect: false,
      acollect: false,
      fresh: []

    }, _this.methods = {
      collect: function collect(e) {
        var self = this;
        var index = e.currentTarget.id;
        self.fresh[index].acollect = !self.fresh[index].acollect;
        if (self.fresh[index].acollect) {
          self.fresh[index].f_number++;
        } else {
          self.fresh[index].f_number--;
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
          // case 1 : wepy.navigateTo({
          //   url: '../pages/klb'
          // }); break
        }
        var self = this;
        var index = e.currentTarget.id;
        _wepy2.default.navigateTo({
          url: './kla?pic=' + _fresh2.default[index].pic + '&title=' + _fresh2.default[index].title + '&price=' + _fresh2.default[index].price
        });
        console.log(self.fresh[index], '111111');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Fresh, [{
    key: 'onLoad',
    value: function onLoad() {
      _wepy2.default.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 1000
      });
      var self = this;
      self.fresh = _fresh2.default;
      console.log(self.fresh, 'aaaaaaaaaa');
    }
  }]);

  return Fresh;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Fresh , 'pages/fresh'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyZXNoLmpzIl0sIm5hbWVzIjpbIkZyZXNoIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJub3Rjb2xsZWN0IiwibGFjb2xsZWN0IiwiYWNvbGxlY3QiLCJmcmVzaCIsIm1ldGhvZHMiLCJjb2xsZWN0IiwiZSIsInNlbGYiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImZfbnVtYmVyIiwibGFnb29kcyIsIml0ZW0iLCJkYXRhc2V0IiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwaWMiLCJ0aXRsZSIsInByaWNlIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsa0JBQVksd0JBRFA7QUFFTEMsaUJBQVcsS0FGTjtBQUdMQyxnQkFBVSxLQUhMO0FBSUxDLGFBQU87O0FBSkYsSyxRQU9QQyxPLEdBQVU7QUFDUkMsYUFEUSxtQkFDQUMsQ0FEQSxFQUNHO0FBQ1QsWUFBSUMsT0FBTyxJQUFYO0FBQ0EsWUFBSUMsUUFBUUYsRUFBRUcsYUFBRixDQUFnQkMsRUFBNUI7QUFDQUgsYUFBS0osS0FBTCxDQUFXSyxLQUFYLEVBQWtCTixRQUFsQixHQUE2QixDQUFDSyxLQUFLSixLQUFMLENBQVdLLEtBQVgsRUFBa0JOLFFBQWhEO0FBQ0EsWUFBSUssS0FBS0osS0FBTCxDQUFXSyxLQUFYLEVBQWtCTixRQUF0QixFQUFnQztBQUM5QkssZUFBS0osS0FBTCxDQUFXSyxLQUFYLEVBQWtCRyxRQUFsQjtBQUNELFNBRkQsTUFFTztBQUNMSixlQUFLSixLQUFMLENBQVdLLEtBQVgsRUFBa0JHLFFBQWxCO0FBQ0Q7QUFDRixPQVZPO0FBV1JDLGFBWFEsbUJBV0FOLENBWEEsRUFXRztBQUNULFlBQUlPLE9BQU9QLEVBQUVHLGFBQUYsQ0FBZ0JLLE9BQWhCLENBQXdCTixLQUFuQztBQUNBTyxnQkFBUUMsR0FBUixDQUFZVixDQUFaLEVBQWUsTUFBZjtBQUNBLGdCQUFRTyxJQUFSO0FBQ0UsZUFBSyxDQUFMO0FBQVMsMkJBQUtJLFVBQUwsQ0FBZ0I7QUFDdkJDLG1CQUFLO0FBRGtCLGFBQWhCLEVBRUw7QUFDSjtBQUNBO0FBQ0E7QUFORjtBQVFBLFlBQUlYLE9BQU8sSUFBWDtBQUNBLFlBQU1DLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTlCO0FBQ0EsdUJBQUtPLFVBQUwsQ0FBZ0I7QUFDZEMsOEJBQWtCLGdCQUFNVixLQUFOLEVBQWFXLEdBQS9CLGVBQTRDLGdCQUFNWCxLQUFOLEVBQWFZLEtBQXpELGVBQXdFLGdCQUFNWixLQUFOLEVBQWFhO0FBRHZFLFNBQWhCO0FBR0FOLGdCQUFRQyxHQUFSLENBQVlULEtBQUtKLEtBQUwsQ0FBV0ssS0FBWCxDQUFaLEVBQStCLFFBQS9CO0FBQ0Q7QUE1Qk8sSzs7Ozs7NkJBOEJEO0FBQ1AscUJBQUtjLFNBQUwsQ0FBZTtBQUNiRixlQUFPLEtBRE07QUFFYkcsY0FBTSxTQUZPO0FBR2JDLGtCQUFVO0FBSEcsT0FBZjtBQUtBLFVBQUlqQixPQUFPLElBQVg7QUFDQUEsV0FBS0osS0FBTDtBQUNBWSxjQUFRQyxHQUFSLENBQVlULEtBQUtKLEtBQWpCLEVBQXdCLFlBQXhCO0FBQ0Q7Ozs7RUFsRGdDLGVBQUtzQixJOztrQkFBbkI3QixLIiwiZmlsZSI6ImZyZXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgZnJlc2ggZnJvbSAnLi4vZGF0YS9mcmVzaC5qcydcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGcmVzaCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5bCP5riF5paw5ama57qxL3dlZGRpbmcnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBub3Rjb2xsZWN0OiAnLi4vaW1hZ2VzL2Fjb2xsZWN0LnBuZycsXG4gICAgbGFjb2xsZWN0OiBmYWxzZSxcbiAgICBhY29sbGVjdDogZmFsc2UsXG4gICAgZnJlc2g6IFtdXG5cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGNvbGxlY3QoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIHNlbGYuZnJlc2hbaW5kZXhdLmFjb2xsZWN0ID0gIXNlbGYuZnJlc2hbaW5kZXhdLmFjb2xsZWN0XG4gICAgICBpZiAoc2VsZi5mcmVzaFtpbmRleF0uYWNvbGxlY3QpIHtcbiAgICAgICAgc2VsZi5mcmVzaFtpbmRleF0uZl9udW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5mcmVzaFtpbmRleF0uZl9udW1iZXItLVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFnb29kcyhlKSB7XG4gICAgICB2YXIgaXRlbSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBjb25zb2xlLmxvZyhlLCAnaXRlbScpXG4gICAgICBzd2l0Y2ggKGl0ZW0pIHtcbiAgICAgICAgY2FzZSAwIDogd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9wYWdlcy9rbGEnXG4gICAgICAgIH0pOyBicmVha1xuICAgICAgICAvLyBjYXNlIDEgOiB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAvLyAgIHVybDogJy4uL3BhZ2VzL2tsYidcbiAgICAgICAgLy8gfSk7IGJyZWFrXG4gICAgICB9XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL2tsYT9waWM9JHtmcmVzaFtpbmRleF0ucGljfSZ0aXRsZT0ke2ZyZXNoW2luZGV4XS50aXRsZX0mcHJpY2U9JHtmcmVzaFtpbmRleF0ucHJpY2V9YFxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuZnJlc2hbaW5kZXhdLCAnMTExMTExJylcbiAgICB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcbiAgICAgIGljb246ICdsb2FkaW5nJyxcbiAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgfSlcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmZyZXNoID0gZnJlc2hcbiAgICBjb25zb2xlLmxvZyhzZWxmLmZyZXNoLCAnYWFhYWFhYWFhYScpXG4gIH1cbn1cbiJdfQ==