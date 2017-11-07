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
        // self.lacollect = '../images/收藏-选中.png'
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
          case 1:
            _wepy2.default.navigateTo({
              url: '../pages/klb'
            });break;
        }
        var self = this;
        var index = e.currentTarget.id;
        _wepy2.default.navigateTo({
          url: './kla?image=' + _fresh2.default[index].f_pic + '&title=' + _fresh2.default[index].f_int + '&price=' + _fresh2.default[index].f_price
        });
        console.log(self.fresh[index], '111111');
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
      self.fresh = _fresh2.default;
      console.log(self.fresh, 'aaaaaaaaaa');
    }
  }]);

  return Korean;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Korean , 'pages/fresh'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyZXNoLmpzIl0sIm5hbWVzIjpbIktvcmVhbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibm90Y29sbGVjdCIsImxhY29sbGVjdCIsImFjb2xsZWN0IiwiZnJlc2giLCJtZXRob2RzIiwiY29sbGVjdCIsImUiLCJzZWxmIiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCJmX251bWJlciIsImxhZ29vZHMiLCJpdGVtIiwiZGF0YXNldCIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZl9waWMiLCJmX2ludCIsImZfcHJpY2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3NMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxrQkFBWSx3QkFEUDtBQUVMQyxpQkFBVyxLQUZOO0FBR0xDLGdCQUFVLEtBSEw7QUFJTEMsYUFBTzs7QUFKRixLLFFBT1BDLE8sR0FBVTtBQUNSQyxhQURRLG1CQUNBQyxDQURBLEVBQ0c7QUFDVCxZQUFJQyxPQUFPLElBQVg7QUFDQSxZQUFJQyxRQUFRRixFQUFFRyxhQUFGLENBQWdCQyxFQUE1QjtBQUNBSCxhQUFLSixLQUFMLENBQVdLLEtBQVgsRUFBa0JOLFFBQWxCLEdBQTZCLENBQUNLLEtBQUtKLEtBQUwsQ0FBV0ssS0FBWCxFQUFrQk4sUUFBaEQ7QUFDQTtBQUNBLFlBQUlLLEtBQUtKLEtBQUwsQ0FBV0ssS0FBWCxFQUFrQk4sUUFBdEIsRUFBZ0M7QUFDOUJLLGVBQUtKLEtBQUwsQ0FBV0ssS0FBWCxFQUFrQkcsUUFBbEI7QUFDRCxTQUZELE1BRU87QUFDTEosZUFBS0osS0FBTCxDQUFXSyxLQUFYLEVBQWtCRyxRQUFsQjtBQUNEO0FBQ0YsT0FYTztBQVlSQyxhQVpRLG1CQVlBTixDQVpBLEVBWUc7QUFDVCxZQUFJTyxPQUFPUCxFQUFFRyxhQUFGLENBQWdCSyxPQUFoQixDQUF3Qk4sS0FBbkM7QUFDQU8sZ0JBQVFDLEdBQVIsQ0FBWVYsQ0FBWixFQUFlLE1BQWY7QUFDQSxnQkFBUU8sSUFBUjtBQUNFLGVBQUssQ0FBTDtBQUFTLDJCQUFLSSxVQUFMLENBQWdCO0FBQ3ZCQyxtQkFBSztBQURrQixhQUFoQixFQUVMO0FBQ0osZUFBSyxDQUFMO0FBQVMsMkJBQUtELFVBQUwsQ0FBZ0I7QUFDdkJDLG1CQUFLO0FBRGtCLGFBQWhCLEVBRUw7QUFOTjtBQVFBLFlBQUlYLE9BQU8sSUFBWDtBQUNBLFlBQU1DLFFBQVFGLEVBQUVHLGFBQUYsQ0FBZ0JDLEVBQTlCO0FBQ0EsdUJBQUtPLFVBQUwsQ0FBZ0I7QUFDZEMsZ0NBQW9CLGdCQUFNVixLQUFOLEVBQWFXLEtBQWpDLGVBQWdELGdCQUFNWCxLQUFOLEVBQWFZLEtBQTdELGVBQTRFLGdCQUFNWixLQUFOLEVBQWFhO0FBRDNFLFNBQWhCO0FBR0FOLGdCQUFRQyxHQUFSLENBQVlULEtBQUtKLEtBQUwsQ0FBV0ssS0FBWCxDQUFaLEVBQStCLFFBQS9CO0FBQ0Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXJDUSxLOzs7Ozs2QkF1Q0Q7QUFDUCxVQUFJRCxPQUFPLElBQVg7QUFDQUEsV0FBS0osS0FBTDtBQUNBWSxjQUFRQyxHQUFSLENBQVlULEtBQUtKLEtBQWpCLEVBQXdCLFlBQXhCO0FBQ0Q7Ozs7RUF0RGlDLGVBQUttQixJOztrQkFBcEIxQixNIiwiZmlsZSI6ImZyZXNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgZnJlc2ggZnJvbSAnLi4vZGF0YS9mcmVzaC5qcydcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLb3JlYW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+Wwj+a4heaWsOWpmue6sS93ZWRkaW5nJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgbm90Y29sbGVjdDogJy4uL2ltYWdlcy9hY29sbGVjdC5wbmcnLFxuICAgIGxhY29sbGVjdDogZmFsc2UsXG4gICAgYWNvbGxlY3Q6IGZhbHNlLFxuICAgIGZyZXNoOiBbXVxuXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBjb2xsZWN0KGUpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgbGV0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gICAgICBzZWxmLmZyZXNoW2luZGV4XS5hY29sbGVjdCA9ICFzZWxmLmZyZXNoW2luZGV4XS5hY29sbGVjdFxuICAgICAgLy8gc2VsZi5sYWNvbGxlY3QgPSAnLi4vaW1hZ2VzL+aUtuiXjy3pgInkuK0ucG5nJ1xuICAgICAgaWYgKHNlbGYuZnJlc2hbaW5kZXhdLmFjb2xsZWN0KSB7XG4gICAgICAgIHNlbGYuZnJlc2hbaW5kZXhdLmZfbnVtYmVyKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuZnJlc2hbaW5kZXhdLmZfbnVtYmVyLS1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxhZ29vZHMoZSkge1xuICAgICAgdmFyIGl0ZW0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgY29uc29sZS5sb2coZSwgJ2l0ZW0nKVxuICAgICAgc3dpdGNoIChpdGVtKSB7XG4gICAgICAgIGNhc2UgMCA6IHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vcGFnZXMva2xhJ1xuICAgICAgICB9KTsgYnJlYWtcbiAgICAgICAgY2FzZSAxIDogd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9wYWdlcy9rbGInXG4gICAgICAgIH0pOyBicmVha1xuICAgICAgfVxuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiBgLi9rbGE/aW1hZ2U9JHtmcmVzaFtpbmRleF0uZl9waWN9JnRpdGxlPSR7ZnJlc2hbaW5kZXhdLmZfaW50fSZwcmljZT0ke2ZyZXNoW2luZGV4XS5mX3ByaWNlfWBcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhzZWxmLmZyZXNoW2luZGV4XSwgJzExMTExMScpXG4gICAgfVxuICAgIC8vIGxhZ29vZHMoZSkge1xuICAgIC8vICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgLy8gICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgIC8vICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAvLyAgICAgdXJsOiBgLi9rbGFgXG4gICAgLy8gICB9KVxuICAgIC8vICAgY29uc29sZS5sb2coc2VsZi5rb3JlYW5baW5kZXhdLCAnMTExMTExJylcbiAgICAvLyB9XG4gIH1cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuZnJlc2ggPSBmcmVzaFxuICAgIGNvbnNvbGUubG9nKHNlbGYuZnJlc2gsICdhYWFhYWFhYWFhJylcbiAgfVxufVxuIl19