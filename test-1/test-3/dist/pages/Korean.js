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
          url: './kla?image=' + _korean2.default[index].pic + '&title=' + _korean2.default[index].title + '&price=' + _korean2.default[index].price
        });
        console.log(self.korean[index], '111111');
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
        method: 'GET',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIktvcmVhbi5qcyJdLCJuYW1lcyI6WyJLb3JlYW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZW5hYmxlUHVsbERvd25SZWZyZXNoIiwiZGF0YSIsIm5vdGNvbGxlY3QiLCJsYWNvbGxlY3QiLCJhY29sbGVjdCIsImtvcmVhbiIsIm1ldGhvZHMiLCJjb2xsZWN0IiwiZSIsInNlbGYiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImtfbnVtYmVyIiwibGFnb29kcyIsIml0ZW0iLCJkYXRhc2V0IiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwaWMiLCJ0aXRsZSIsInByaWNlIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwicmVxdWVzdCIsIm1ldGhvZCIsInN1Y2Nlc3NzIiwicmVzIiwic2V0RGF0YSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7c0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLGNBRGpCO0FBRVBDLDZCQUF1QjtBQUZoQixLLFFBSVRDLEksR0FBTztBQUNMQyxrQkFBWSx3QkFEUDtBQUVMQyxpQkFBVyxLQUZOO0FBR0xDLGdCQUFVLEtBSEw7QUFJTEMsY0FBUTs7QUFKSCxLLFFBT1BDLE8sR0FBVTtBQUNSQyxhQURRLG1CQUNBQyxDQURBLEVBQ0c7QUFDVCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQyxRQUFRRixFQUFFRyxhQUFGLENBQWdCQyxFQUE1QjtBQUNBSCxhQUFLSixNQUFMLENBQVlLLEtBQVosRUFBbUJOLFFBQW5CLEdBQThCLENBQUNLLEtBQUtKLE1BQUwsQ0FBWUssS0FBWixFQUFtQk4sUUFBbEQ7QUFDQTtBQUNBLFlBQUlLLEtBQUtKLE1BQUwsQ0FBWUssS0FBWixFQUFtQk4sUUFBdkIsRUFBaUM7QUFDL0JLLGVBQUtKLE1BQUwsQ0FBWUssS0FBWixFQUFtQkcsUUFBbkI7QUFDRCxTQUZELE1BRU87QUFDTEosZUFBS0osTUFBTCxDQUFZSyxLQUFaLEVBQW1CRyxRQUFuQjtBQUNEO0FBQ0YsT0FYTztBQVlSQyxhQVpRLG1CQVlBTixDQVpBLEVBWUc7QUFDVCxZQUFJTyxPQUFPUCxFQUFFRyxhQUFGLENBQWdCSyxPQUFoQixDQUF3Qk4sS0FBbkM7QUFDQU8sZ0JBQVFDLEdBQVIsQ0FBWVYsQ0FBWixFQUFlLE1BQWY7QUFDQSxnQkFBUU8sSUFBUjtBQUNFLGVBQUssQ0FBTDtBQUFTLDJCQUFLSSxVQUFMLENBQWdCO0FBQ3ZCQyxtQkFBSztBQURrQixhQUFoQixFQUVMO0FBQ0osZUFBSyxDQUFMO0FBQVMsMkJBQUtELFVBQUwsQ0FBZ0I7QUFDdkJDLG1CQUFLO0FBRGtCLGFBQWhCLEVBRUw7QUFOTjtBQVFBLFlBQUlYLE9BQU8sSUFBWDtBQUNBLFlBQU1DLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTlCO0FBQ0EsdUJBQUtPLFVBQUwsQ0FBZ0I7QUFDZEMsZ0NBQW9CLGlCQUFPVixLQUFQLEVBQWNXLEdBQWxDLGVBQStDLGlCQUFPWCxLQUFQLEVBQWNZLEtBQTdELGVBQTRFLGlCQUFPWixLQUFQLEVBQWNhO0FBRDVFLFNBQWhCO0FBR0FOLGdCQUFRQyxHQUFSLENBQVlULEtBQUtKLE1BQUwsQ0FBWUssS0FBWixDQUFaLEVBQWdDLFFBQWhDO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXJDUSxLOzs7Ozs2QkF1Q0Q7QUFDUDtBQUNBLHFCQUFLYyxTQUFMLENBQWU7QUFDYkYsZUFBTyxLQURNO0FBRWJHLGNBQU0sU0FGTztBQUdiQyxrQkFBVTtBQUNWO0FBSmEsT0FBZjtBQU1BLFVBQUlqQixPQUFPLElBQVg7QUFDQUEsV0FBS0osTUFBTDtBQUNBLHFCQUFLc0IsT0FBTCxDQUFhO0FBQ1hQLGFBQUssOEJBRE07QUFFWFEsZ0JBQVEsS0FGRztBQUdYQyxrQkFBVSxrQkFBVUMsR0FBVixFQUFlO0FBQ3ZCckIsZUFBS0osTUFBTCxHQUFjeUIsSUFBSTdCLElBQWxCO0FBQ0FRLGVBQUtzQixPQUFMLENBQWE7QUFDWDFCLG9CQUFReUIsSUFBSTdCO0FBREQsV0FBYjtBQUdBZ0Isa0JBQVFDLEdBQVIsQ0FBWVksSUFBSTdCLElBQWhCO0FBQ0Q7QUFUVSxPQUFiO0FBV0Q7Ozs7RUF4RWlDLGVBQUsrQixJOztrQkFBcEJuQyxNIiwiZmlsZSI6IktvcmVhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGtvcmVhbiBmcm9tICcuLi9kYXRhL2tvcmVhbi5qcydcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLb3JlYW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mfqeW8j+Wpmue6sS93ZWRkaW5nJyxcbiAgICBlbmFibGVQdWxsRG93blJlZnJlc2g6IHRydWVcbiAgfVxuICBkYXRhID0ge1xuICAgIG5vdGNvbGxlY3Q6ICcuLi9pbWFnZXMvYWNvbGxlY3QucG5nJyxcbiAgICBsYWNvbGxlY3Q6IGZhbHNlLFxuICAgIGFjb2xsZWN0OiBmYWxzZSxcbiAgICBrb3JlYW46IFtdXG5cbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGNvbGxlY3QoZSkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBsZXQgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIHNlbGYua29yZWFuW2luZGV4XS5hY29sbGVjdCA9ICFzZWxmLmtvcmVhbltpbmRleF0uYWNvbGxlY3RcbiAgICAgIC8vIHNlbGYubGFjb2xsZWN0ID0gJy4uL2ltYWdlcy/mlLbol48t6YCJ5LitLnBuZydcbiAgICAgIGlmIChzZWxmLmtvcmVhbltpbmRleF0uYWNvbGxlY3QpIHtcbiAgICAgICAgc2VsZi5rb3JlYW5baW5kZXhdLmtfbnVtYmVyKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYua29yZWFuW2luZGV4XS5rX251bWJlci0tXG4gICAgICB9XG4gICAgfSxcbiAgICBsYWdvb2RzKGUpIHtcbiAgICAgIHZhciBpdGVtID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhcbiAgICAgIGNvbnNvbGUubG9nKGUsICdpdGVtJylcbiAgICAgIHN3aXRjaCAoaXRlbSkge1xuICAgICAgICBjYXNlIDAgOiB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3BhZ2VzL2tsYSdcbiAgICAgICAgfSk7IGJyZWFrXG4gICAgICAgIGNhc2UgMSA6IHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vcGFnZXMva2xiJ1xuICAgICAgICB9KTsgYnJlYWtcbiAgICAgIH1cbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogYC4va2xhP2ltYWdlPSR7a29yZWFuW2luZGV4XS5waWN9JnRpdGxlPSR7a29yZWFuW2luZGV4XS50aXRsZX0mcHJpY2U9JHtrb3JlYW5baW5kZXhdLnByaWNlfWBcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhzZWxmLmtvcmVhbltpbmRleF0sICcxMTExMTEnKVxuICAgIH1cbiAgICAvLyBsYWdvb2RzKGUpIHtcbiAgICAvLyAgIGxldCBzZWxmID0gdGhpc1xuICAgIC8vICAgY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAvLyAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgLy8gICAgIHVybDogYC4va2xhYFxuICAgIC8vICAgfSlcbiAgICAvLyAgIGNvbnNvbGUubG9nKHNlbGYua29yZWFuW2luZGV4XSwgJzExMTExMScpXG4gICAgLy8gfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICAvLyDliqDovb1cbiAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogJ+WKoOi9veS4rScsXG4gICAgICBpY29uOiAnbG9hZGluZycsXG4gICAgICBkdXJhdGlvbjogMTAwMFxuICAgICAgLy8gaW1hZ2U6ICcuLi9pbWFnZXMvYWhvbWUucG5nJ1xuICAgIH0pXG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5rb3JlYW4gPSBrb3JlYW5cbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiAnaHR0cDovLzEyNy4wLjAuMTo3MDAxL0tvcmVhbicsXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgc3VjY2Vzc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgc2VsZi5rb3JlYW4gPSByZXMuZGF0YVxuICAgICAgICBzZWxmLnNldERhdGEoe1xuICAgICAgICAgIGtvcmVhbjogcmVzLmRhdGFcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19