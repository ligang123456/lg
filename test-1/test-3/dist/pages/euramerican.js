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

var Euramerican = function (_wepy$page) {
  _inherits(Euramerican, _wepy$page);

  function Euramerican() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Euramerican);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Euramerican.__proto__ || Object.getPrototypeOf(Euramerican)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
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
          url: './kla?pic=' + _euramerican2.default[index].pic + '&title=' + _euramerican2.default[index].title + '&price=' + _euramerican2.default[index].price
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

  _createClass(Euramerican, [{
    key: 'onLoad',
    value: function onLoad() {
      _wepy2.default.showToast({
        title: '加载中',
        icon: 'loading',
        duration: 1000
        // image: '../images/ahome.png'
      });
      var self = this;
      self.euramerican = _euramerican2.default;
      console.log(self.euramerican, 'aaaaaaaaaa');
    }
  }]);

  return Euramerican;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Euramerican , 'pages/euramerican'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV1cmFtZXJpY2FuLmpzIl0sIm5hbWVzIjpbIkV1cmFtZXJpY2FuIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJub3Rjb2xsZWN0IiwibGFjb2xsZWN0IiwiYWNvbGxlY3QiLCJldXJhbWVyaWNhbiIsIm1ldGhvZHMiLCJjb2xsZWN0IiwiZSIsInNlbGYiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImVfbnVtYmVyIiwibGFnb29kcyIsIml0ZW0iLCJkYXRhc2V0IiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwaWMiLCJ0aXRsZSIsInByaWNlIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsa0JBQVksd0JBRFA7QUFFTEMsaUJBQVcsS0FGTjtBQUdMQyxnQkFBVSxLQUhMO0FBSUxDLG1CQUFhOztBQUpSLEssUUFPUEMsTyxHQUFVO0FBQ1JDLGFBRFEsbUJBQ0FDLENBREEsRUFDRztBQUNULFlBQUlDLE9BQU8sSUFBWDtBQUNBLFlBQUlDLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTVCO0FBQ0FILGFBQUtKLFdBQUwsQ0FBaUJLLEtBQWpCLEVBQXdCTixRQUF4QixHQUFtQyxDQUFDSyxLQUFLSixXQUFMLENBQWlCSyxLQUFqQixFQUF3Qk4sUUFBNUQ7QUFDQTtBQUNBLFlBQUlLLEtBQUtKLFdBQUwsQ0FBaUJLLEtBQWpCLEVBQXdCTixRQUE1QixFQUFzQztBQUNwQ0ssZUFBS0osV0FBTCxDQUFpQkssS0FBakIsRUFBd0JHLFFBQXhCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xKLGVBQUtKLFdBQUwsQ0FBaUJLLEtBQWpCLEVBQXdCRyxRQUF4QjtBQUNEO0FBQ0YsT0FYTztBQVlSQyxhQVpRLG1CQVlBTixDQVpBLEVBWUc7QUFDVCxZQUFJTyxPQUFPUCxFQUFFRyxhQUFGLENBQWdCSyxPQUFoQixDQUF3Qk4sS0FBbkM7QUFDQU8sZ0JBQVFDLEdBQVIsQ0FBWVYsQ0FBWixFQUFlLE1BQWY7QUFDQSxnQkFBUU8sSUFBUjtBQUNFLGVBQUssQ0FBTDtBQUFTLDJCQUFLSSxVQUFMLENBQWdCO0FBQ3ZCQyxtQkFBSztBQURrQixhQUFoQixFQUVMO0FBQ0osZUFBSyxDQUFMO0FBQVMsMkJBQUtELFVBQUwsQ0FBZ0I7QUFDdkJDLG1CQUFLO0FBRGtCLGFBQWhCLEVBRUw7QUFOTjtBQVFBLFlBQUlYLE9BQU8sSUFBWDtBQUNBLFlBQU1DLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTlCO0FBQ0EsdUJBQUtPLFVBQUwsQ0FBZ0I7QUFDZEMsOEJBQWtCLHNCQUFZVixLQUFaLEVBQW1CVyxHQUFyQyxlQUFrRCxzQkFBWVgsS0FBWixFQUFtQlksS0FBckUsZUFBb0Ysc0JBQVlaLEtBQVosRUFBbUJhO0FBRHpGLFNBQWhCO0FBR0FOLGdCQUFRQyxHQUFSLENBQVlULEtBQUtKLFdBQUwsQ0FBaUJLLEtBQWpCLENBQVosRUFBcUMsUUFBckM7QUFDRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBckNRLEs7Ozs7OzZCQXVDRDtBQUNQLHFCQUFLYyxTQUFMLENBQWU7QUFDYkYsZUFBTyxLQURNO0FBRWJHLGNBQU0sU0FGTztBQUdiQyxrQkFBVTtBQUNWO0FBSmEsT0FBZjtBQU1BLFVBQUlqQixPQUFPLElBQVg7QUFDQUEsV0FBS0osV0FBTDtBQUNBWSxjQUFRQyxHQUFSLENBQVlULEtBQUtKLFdBQWpCLEVBQThCLFlBQTlCO0FBQ0Q7Ozs7RUE1RHNDLGVBQUtzQixJOztrQkFBekI3QixXIiwiZmlsZSI6ImV1cmFtZXJpY2FuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgZXVyYW1lcmljYW4gZnJvbSAnLi4vZGF0YS9ldXJhbWVyaWNhbi5qcydcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdXJhbWVyaWNhbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5qyn5byP5ama57qxL3dlZGRpbmcnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBub3Rjb2xsZWN0OiAnLi4vaW1hZ2VzL2Fjb2xsZWN0LnBuZycsXG4gICAgbGFjb2xsZWN0OiBmYWxzZSxcbiAgICBhY29sbGVjdDogZmFsc2UsXG4gICAgZXVyYW1lcmljYW46IFtdXG5cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGNvbGxlY3QoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIHNlbGYuZXVyYW1lcmljYW5baW5kZXhdLmFjb2xsZWN0ID0gIXNlbGYuZXVyYW1lcmljYW5baW5kZXhdLmFjb2xsZWN0XG4gICAgICAvLyBzZWxmLmxhY29sbGVjdCA9ICcuLi9pbWFnZXMv5pS26JePLemAieS4rS5wbmcnXG4gICAgICBpZiAoc2VsZi5ldXJhbWVyaWNhbltpbmRleF0uYWNvbGxlY3QpIHtcbiAgICAgICAgc2VsZi5ldXJhbWVyaWNhbltpbmRleF0uZV9udW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5ldXJhbWVyaWNhbltpbmRleF0uZV9udW1iZXItLVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFnb29kcyhlKSB7XG4gICAgICB2YXIgaXRlbSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBjb25zb2xlLmxvZyhlLCAnaXRlbScpXG4gICAgICBzd2l0Y2ggKGl0ZW0pIHtcbiAgICAgICAgY2FzZSAwIDogd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9wYWdlcy9rbGEnXG4gICAgICAgIH0pOyBicmVha1xuICAgICAgICBjYXNlIDEgOiB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3BhZ2VzL2tsYidcbiAgICAgICAgfSk7IGJyZWFrXG4gICAgICB9XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6IGAuL2tsYT9waWM9JHtldXJhbWVyaWNhbltpbmRleF0ucGljfSZ0aXRsZT0ke2V1cmFtZXJpY2FuW2luZGV4XS50aXRsZX0mcHJpY2U9JHtldXJhbWVyaWNhbltpbmRleF0ucHJpY2V9YFxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuZXVyYW1lcmljYW5baW5kZXhdLCAnMTExMTExJylcbiAgICB9XG4gICAgLy8gbGFnb29kcyhlKSB7XG4gICAgLy8gICBsZXQgc2VsZiA9IHRoaXNcbiAgICAvLyAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgLy8gICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgIC8vICAgICB1cmw6IGAuL2tsYWBcbiAgICAvLyAgIH0pXG4gICAgLy8gICBjb25zb2xlLmxvZyhzZWxmLmtvcmVhbltpbmRleF0sICcxMTExMTEnKVxuICAgIC8vIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxuICAgICAgaWNvbjogJ2xvYWRpbmcnLFxuICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgIC8vIGltYWdlOiAnLi4vaW1hZ2VzL2Fob21lLnBuZydcbiAgICB9KVxuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuZXVyYW1lcmljYW4gPSBldXJhbWVyaWNhblxuICAgIGNvbnNvbGUubG9nKHNlbGYuZXVyYW1lcmljYW4sICdhYWFhYWFhYWFhJylcbiAgfVxufVxuIl19