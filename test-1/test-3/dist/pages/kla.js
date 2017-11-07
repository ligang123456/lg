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
      navigationBarTitleText: 'kla'
    }, _this.data = {
      mapic: 'http://img1.imgtn.bdimg.com/it/u=2553322381,2925312760&fm=27&gp=0.jpg',
      ta: '加入购物车',
      tb: '立即购买',
      price: '',
      title: '',
      numbers: '数量',
      subtraction: '-',
      number: 0,
      add: '+',
      image: ''
    }, _this.methods = {
      subtraction: function subtraction() {
        var self = this;
        if (self.number) {
          self.number--;
        } else {
          self.number = 0;
        }
      },
      add: function add() {
        var self = this;
        if (self.add) {
          self.number++;
        } else {
          self.number = 0;
        }
      },
      add_cart: function add_cart() {
        _wepy2.default.showToast({
          title: '加入成功'
          // icon: 'success'
          // duration: 2000
        });
      },

      // 显示操作菜单
      pay: function pay() {
        _wepy2.default.showActionSheet({
          itemList: ['A', 'B', 'C'],
          success: function success(res) {
            if (!res.cancel) {
              console.log(res.tapIndex);
            }
          }
        });
      }
      // 动态改变当前页面标题
      // pay() {
      //   wepy.setNavigationBarTitle({
      //     title: '当前页面'
      //   })
      // }

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(data) {
      var self = this;
      self.title = data.title.k_int;
      self.image = data.title.k_pic;
      self.price = data.title.k_price;
      console.log(data.title, '22222');
      console.log(data.image, '图片');
      console.log(data.price, '价格');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/kla'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtsYS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibWFwaWMiLCJ0YSIsInRiIiwicHJpY2UiLCJ0aXRsZSIsIm51bWJlcnMiLCJzdWJ0cmFjdGlvbiIsIm51bWJlciIsImFkZCIsImltYWdlIiwibWV0aG9kcyIsInNlbGYiLCJhZGRfY2FydCIsInNob3dUb2FzdCIsInBheSIsInNob3dBY3Rpb25TaGVldCIsIml0ZW1MaXN0Iiwic3VjY2VzcyIsInJlcyIsImNhbmNlbCIsImNvbnNvbGUiLCJsb2ciLCJ0YXBJbmRleCIsImtfaW50Iiwia19waWMiLCJrX3ByaWNlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLGFBQU8sdUVBREY7QUFFTEMsVUFBSSxPQUZDO0FBR0xDLFVBQUksTUFIQztBQUlMQyxhQUFPLEVBSkY7QUFLTEMsYUFBTyxFQUxGO0FBTUxDLGVBQVMsSUFOSjtBQU9MQyxtQkFBYSxHQVBSO0FBUUxDLGNBQVEsQ0FSSDtBQVNMQyxXQUFLLEdBVEE7QUFVTEMsYUFBTztBQVZGLEssUUFZUEMsTyxHQUFVO0FBQ1JKLGlCQURRLHlCQUNNO0FBQ1osWUFBSUssT0FBTyxJQUFYO0FBQ0EsWUFBSUEsS0FBS0osTUFBVCxFQUFpQjtBQUNmSSxlQUFLSixNQUFMO0FBQ0QsU0FGRCxNQUVPO0FBQ0xJLGVBQUtKLE1BQUwsR0FBYyxDQUFkO0FBQ0Q7QUFDRixPQVJPO0FBU1JDLFNBVFEsaUJBU0Y7QUFDSixZQUFJRyxPQUFPLElBQVg7QUFDQSxZQUFJQSxLQUFLSCxHQUFULEVBQWM7QUFDWkcsZUFBS0osTUFBTDtBQUNELFNBRkQsTUFFTztBQUNMSSxlQUFLSixNQUFMLEdBQWMsQ0FBZDtBQUNEO0FBQ0YsT0FoQk87QUFpQlJLLGNBakJRLHNCQWlCRztBQUNULHVCQUFLQyxTQUFMLENBQWU7QUFDYlQsaUJBQU87QUFDUDtBQUNBO0FBSGEsU0FBZjtBQUtELE9BdkJPOztBQXdCUjtBQUNBVSxTQXpCUSxpQkF5QkY7QUFDSix1QkFBS0MsZUFBTCxDQUFxQjtBQUNuQkMsb0JBQVUsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FEUztBQUVuQkMsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixnQkFBSSxDQUFDQSxJQUFJQyxNQUFULEVBQWlCO0FBQ2ZDLHNCQUFRQyxHQUFSLENBQVlILElBQUlJLFFBQWhCO0FBQ0Q7QUFDRjtBQU5rQixTQUFyQjtBQVFEO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXhDUSxLOzs7OzsyQkEwQ0h2QixJLEVBQU07QUFDWCxVQUFJWSxPQUFPLElBQVg7QUFDQUEsV0FBS1AsS0FBTCxHQUFhTCxLQUFLSyxLQUFMLENBQVdtQixLQUF4QjtBQUNBWixXQUFLRixLQUFMLEdBQWFWLEtBQUtLLEtBQUwsQ0FBV29CLEtBQXhCO0FBQ0FiLFdBQUtSLEtBQUwsR0FBYUosS0FBS0ssS0FBTCxDQUFXcUIsT0FBeEI7QUFDQUwsY0FBUUMsR0FBUixDQUFZdEIsS0FBS0ssS0FBakIsRUFBd0IsT0FBeEI7QUFDQWdCLGNBQVFDLEdBQVIsQ0FBWXRCLEtBQUtVLEtBQWpCLEVBQXdCLElBQXhCO0FBQ0FXLGNBQVFDLEdBQVIsQ0FBWXRCLEtBQUtJLEtBQWpCLEVBQXdCLElBQXhCO0FBQ0Q7Ozs7RUFsRWdDLGVBQUt1QixJOztrQkFBbkI5QixLIiwiZmlsZSI6ImtsYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdrbGEnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBtYXBpYzogJ2h0dHA6Ly9pbWcxLmltZ3RuLmJkaW1nLmNvbS9pdC91PTI1NTMzMjIzODEsMjkyNTMxMjc2MCZmbT0yNyZncD0wLmpwZycsXG4gICAgdGE6ICfliqDlhaXotK3nianovaYnLFxuICAgIHRiOiAn56uL5Y2z6LSt5LmwJyxcbiAgICBwcmljZTogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIG51bWJlcnM6ICfmlbDph48nLFxuICAgIHN1YnRyYWN0aW9uOiAnLScsXG4gICAgbnVtYmVyOiAwLFxuICAgIGFkZDogJysnLFxuICAgIGltYWdlOiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgc3VidHJhY3Rpb24oKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGlmIChzZWxmLm51bWJlcikge1xuICAgICAgICBzZWxmLm51bWJlci0tXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLm51bWJlciA9IDBcbiAgICAgIH1cbiAgICB9LFxuICAgIGFkZCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgaWYgKHNlbGYuYWRkKSB7XG4gICAgICAgIHNlbGYubnVtYmVyKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYubnVtYmVyID0gMFxuICAgICAgfVxuICAgIH0sXG4gICAgYWRkX2NhcnQoKSB7XG4gICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn5Yqg5YWl5oiQ5YqfJ1xuICAgICAgICAvLyBpY29uOiAnc3VjY2VzcydcbiAgICAgICAgLy8gZHVyYXRpb246IDIwMDBcbiAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDmmL7npLrmk43kvZzoj5zljZVcbiAgICBwYXkoKSB7XG4gICAgICB3ZXB5LnNob3dBY3Rpb25TaGVldCh7XG4gICAgICAgIGl0ZW1MaXN0OiBbJ0EnLCAnQicsICdDJ10sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGlmICghcmVzLmNhbmNlbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcEluZGV4KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgLy8g5Yqo5oCB5pS55Y+Y5b2T5YmN6aG16Z2i5qCH6aKYXG4gICAgLy8gcGF5KCkge1xuICAgIC8vICAgd2VweS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgIC8vICAgICB0aXRsZTogJ+W9k+WJjemhtemdoidcbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuICB9XG4gIG9uTG9hZChkYXRhKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi50aXRsZSA9IGRhdGEudGl0bGUua19pbnRcbiAgICBzZWxmLmltYWdlID0gZGF0YS50aXRsZS5rX3BpY1xuICAgIHNlbGYucHJpY2UgPSBkYXRhLnRpdGxlLmtfcHJpY2VcbiAgICBjb25zb2xlLmxvZyhkYXRhLnRpdGxlLCAnMjIyMjInKVxuICAgIGNvbnNvbGUubG9nKGRhdGEuaW1hZ2UsICflm77niYcnKVxuICAgIGNvbnNvbGUubG9nKGRhdGEucHJpY2UsICfku7fmoLwnKVxuICB9XG59XG4iXX0=