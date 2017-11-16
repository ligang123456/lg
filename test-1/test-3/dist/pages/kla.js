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
      shopping_pic: 'http://img1.imgtn.bdimg.com/it/u=2553322381,2925312760&fm=27&gp=0.jpg',
      mapic: 'http://img1.imgtn.bdimg.com/it/u=2553322381,2925312760&fm=27&gp=0.jpg',
      ta: '加入购物车',
      tb: '立即购买',
      price: '',
      title: '',
      numbers: '数量',
      subtraction: '-',
      number: 0,
      add: '+',
      image: '',
      showLoading: true,
      check: false,
      color: 'black',
      border: '1px solid silver',
      stock: 0,
      scolor: '颜色',
      size: '尺寸',
      please: '请'
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
      confirm: function confirm() {
        console.log('请选择商品规格');
        _wepy2.default.showToast({
          title: '请选择商品规格',
          image: '../images/confirm.png'
          // icon: ''
          // duration: 2000
        });
      },
      color: function color() {
        var self = this;
        self.check = !self.check;
        if (self.check) {
          self.border = '1px solid red';
          self.color = 'red';
          self.scolor = '"白色"';
          self.please = '已';
        } else {
          self.border = '1px solid sliver';
          self.color = 'black';
          self.scolor = '颜色';
          self.please = '请';
        }
      },
      showModal: function showModal() {
        // 显示遮罩层
        // 实例化一个动画
        var animation = _wepy2.default.createAnimation({
          duration: 200, // 动画持续时间，单位ms，默认值 400
          timingFunction: 'linear', // 动画一直较为均匀
          delay: 0
        });
        this.animation = animation;
        animation.translateY(300).step();
        this.setData({
          animationData: animation.export(),
          showModalStatus: true
        });
        setTimeout(function () {
          animation.translateY(0).step();
          this.setData({
            animationData: animation.export()
          });
        }.bind(this), 200);
      },
      hideModal: function hideModal() {
        // 隐藏遮罩层
        var animation = _wepy2.default.createAnimation({
          duration: 200,
          timingFunction: 'linear',
          delay: 0
        });
        this.animation = animation;
        animation.translateY(300).step();
        this.setData({
          animationData: animation.export()
        });
        setTimeout(function () {
          animation.translateY(0).step();
          this.setData({
            animationData: animation.export(),
            showModalStatus: false
          });
        }.bind(this), 200);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',

    // showLoading() {
    //   this.setData({
    //     showLoading: false
    //   })
    // }
    // 显示操作菜单
    // pay() {
    //   wepy.showActionSheet({
    //     itemList: ['A', 'B', 'C'],
    //     success: function(res) {
    //       if (!res.cancel) {
    //         console.log(res.tapIndex)
    //       }
    //     }
    //   })
    // }

    // 动态改变当前页面标题
    // pay() {
    //   wepy.setNavigationBarTitle({
    //     title: '当前页面'
    //   })
    // }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtsYS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic2hvcHBpbmdfcGljIiwibWFwaWMiLCJ0YSIsInRiIiwicHJpY2UiLCJ0aXRsZSIsIm51bWJlcnMiLCJzdWJ0cmFjdGlvbiIsIm51bWJlciIsImFkZCIsImltYWdlIiwic2hvd0xvYWRpbmciLCJjaGVjayIsImNvbG9yIiwiYm9yZGVyIiwic3RvY2siLCJzY29sb3IiLCJzaXplIiwicGxlYXNlIiwibWV0aG9kcyIsInNlbGYiLCJhZGRfY2FydCIsInNob3dUb2FzdCIsImNvbmZpcm0iLCJjb25zb2xlIiwibG9nIiwic2hvd01vZGFsIiwiYW5pbWF0aW9uIiwiY3JlYXRlQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJ0aW1pbmdGdW5jdGlvbiIsImRlbGF5IiwidHJhbnNsYXRlWSIsInN0ZXAiLCJzZXREYXRhIiwiYW5pbWF0aW9uRGF0YSIsImV4cG9ydCIsInNob3dNb2RhbFN0YXR1cyIsInNldFRpbWVvdXQiLCJiaW5kIiwiaGlkZU1vZGFsIiwia19pbnQiLCJrX3BpYyIsImtfcHJpY2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsb0JBQWMsdUVBRFQ7QUFFTEMsYUFBTyx1RUFGRjtBQUdMQyxVQUFJLE9BSEM7QUFJTEMsVUFBSSxNQUpDO0FBS0xDLGFBQU8sRUFMRjtBQU1MQyxhQUFPLEVBTkY7QUFPTEMsZUFBUyxJQVBKO0FBUUxDLG1CQUFhLEdBUlI7QUFTTEMsY0FBUSxDQVRIO0FBVUxDLFdBQUssR0FWQTtBQVdMQyxhQUFPLEVBWEY7QUFZTEMsbUJBQWEsSUFaUjtBQWFMQyxhQUFPLEtBYkY7QUFjTEMsYUFBTyxPQWRGO0FBZUxDLGNBQVEsa0JBZkg7QUFn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LENBTVRFLElBTlMsQ0FNSixJQU5JLENBQVgsRUFNYyxHQU5kO0FBT0Q7QUF4Rk8sSzs7Ozs7O0FBMEZSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsyQkFDS3hDLEksRUFBTTtBQUNYLFVBQUlxQixPQUFPLElBQVg7QUFDQUEsV0FBS2YsS0FBTCxHQUFhTixLQUFLTSxLQUFMLENBQVdvQyxLQUF4QjtBQUNBckIsV0FBS1YsS0FBTCxHQUFhWCxLQUFLTSxLQUFMLENBQVdxQyxLQUF4QjtBQUNBdEIsV0FBS2hCLEtBQUwsR0FBYUwsS0FBS00sS0FBTCxDQUFXc0MsT0FBeEI7QUFDQW5CLGNBQVFDLEdBQVIsQ0FBWTFCLEtBQUtNLEtBQWpCLEVBQXdCLE9BQXhCO0FBQ0FtQixjQUFRQyxHQUFSLENBQVkxQixLQUFLVyxLQUFqQixFQUF3QixJQUF4QjtBQUNBYyxjQUFRQyxHQUFSLENBQVkxQixLQUFLSyxLQUFqQixFQUF3QixJQUF4QjtBQUNEOzs7O0VBbEpnQyxlQUFLd0MsSTs7a0JBQW5CaEQsSyIsImZpbGUiOiJrbGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAna2xhJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc2hvcHBpbmdfcGljOiAnaHR0cDovL2ltZzEuaW1ndG4uYmRpbWcuY29tL2l0L3U9MjU1MzMyMjM4MSwyOTI1MzEyNzYwJmZtPTI3JmdwPTAuanBnJyxcbiAgICBtYXBpYzogJ2h0dHA6Ly9pbWcxLmltZ3RuLmJkaW1nLmNvbS9pdC91PTI1NTMzMjIzODEsMjkyNTMxMjc2MCZmbT0yNyZncD0wLmpwZycsXG4gICAgdGE6ICfliqDlhaXotK3nianovaYnLFxuICAgIHRiOiAn56uL5Y2z6LSt5LmwJyxcbiAgICBwcmljZTogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIG51bWJlcnM6ICfmlbDph48nLFxuICAgIHN1YnRyYWN0aW9uOiAnLScsXG4gICAgbnVtYmVyOiAwLFxuICAgIGFkZDogJysnLFxuICAgIGltYWdlOiAnJyxcbiAgICBzaG93TG9hZGluZzogdHJ1ZSxcbiAgICBjaGVjazogZmFsc2UsXG4gICAgY29sb3I6ICdibGFjaycsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkIHNpbHZlcicsXG4gICAgc3RvY2s6IDAsXG4gICAgc2NvbG9yOiAn6aKc6ImyJyxcbiAgICBzaXplOiAn5bC65a+4JyxcbiAgICBwbGVhc2U6ICfor7cnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBzdWJ0cmFjdGlvbigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgaWYgKHNlbGYubnVtYmVyKSB7XG4gICAgICAgIHNlbGYubnVtYmVyLS1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYubnVtYmVyID0gMFxuICAgICAgfVxuICAgIH0sXG4gICAgYWRkKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBpZiAoc2VsZi5hZGQpIHtcbiAgICAgICAgc2VsZi5udW1iZXIrK1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5udW1iZXIgPSAwXG4gICAgICB9XG4gICAgfSxcbiAgICBhZGRfY2FydCgpIHtcbiAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICfliqDlhaXmiJDlip8nXG4gICAgICAgIC8vIGljb246ICdzdWNjZXNzJ1xuICAgICAgICAvLyBkdXJhdGlvbjogMjAwMFxuICAgICAgfSlcbiAgICB9LFxuICAgIGNvbmZpcm0oKSB7XG4gICAgICBjb25zb2xlLmxvZygn6K+36YCJ5oup5ZWG5ZOB6KeE5qC8JylcbiAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICfor7fpgInmi6nllYblk4Hop4TmoLwnLFxuICAgICAgICBpbWFnZTogJy4uL2ltYWdlcy9jb25maXJtLnBuZydcbiAgICAgICAgLy8gaWNvbjogJydcbiAgICAgICAgLy8gZHVyYXRpb246IDIwMDBcbiAgICAgIH0pXG4gICAgfSxcbiAgICBjb2xvcigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jaGVjayA9ICFzZWxmLmNoZWNrXG4gICAgICBpZiAoc2VsZi5jaGVjaykge1xuICAgICAgICBzZWxmLmJvcmRlciA9ICcxcHggc29saWQgcmVkJ1xuICAgICAgICBzZWxmLmNvbG9yID0gJ3JlZCdcbiAgICAgICAgc2VsZi5zY29sb3IgPSAnXCLnmb3oibJcIidcbiAgICAgICAgc2VsZi5wbGVhc2UgPSAn5beyJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5ib3JkZXIgPSAnMXB4IHNvbGlkIHNsaXZlcidcbiAgICAgICAgc2VsZi5jb2xvciA9ICdibGFjaydcbiAgICAgICAgc2VsZi5zY29sb3IgPSAn6aKc6ImyJ1xuICAgICAgICBzZWxmLnBsZWFzZSA9ICfor7cnXG4gICAgICB9XG4gICAgfSxcbiAgICBzaG93TW9kYWwoKSB7XG4gICAgLy8g5pi+56S66YGu572p5bGCXG4gICAgLy8g5a6e5L6L5YyW5LiA5Liq5Yqo55S7XG4gICAgICB2YXIgYW5pbWF0aW9uID0gd2VweS5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICBkdXJhdGlvbjogMjAwLCAvLyDliqjnlLvmjIHnu63ml7bpl7TvvIzljZXkvY1tc++8jOm7mOiupOWAvCA0MDBcbiAgICAgICAgdGltaW5nRnVuY3Rpb246ICdsaW5lYXInLCAvLyDliqjnlLvkuIDnm7TovoPkuLrlnYfljIBcbiAgICAgICAgZGVsYXk6IDBcbiAgICAgIH0pXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvblxuICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMzAwKS5zdGVwKClcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbi5leHBvcnQoKSxcbiAgICAgICAgc2hvd01vZGFsU3RhdHVzOiB0cnVlXG4gICAgICB9KVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDApLnN0ZXAoKVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbi5leHBvcnQoKVxuICAgICAgICB9KVxuICAgICAgfS5iaW5kKHRoaXMpLCAyMDApXG4gICAgfSxcbiAgICBoaWRlTW9kYWwoKSB7XG4gICAgLy8g6ZqQ6JeP6YGu572p5bGCXG4gICAgICB2YXIgYW5pbWF0aW9uID0gd2VweS5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXG4gICAgICAgIGRlbGF5OiAwXG4gICAgICB9KVxuICAgICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb25cbiAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDMwMCkuc3RlcCgpXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgIH0pXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMCkuc3RlcCgpXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uLmV4cG9ydCgpLFxuICAgICAgICAgIHNob3dNb2RhbFN0YXR1czogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH0uYmluZCh0aGlzKSwgMjAwKVxuICAgIH1cbiAgfVxuICAgIC8vIHNob3dMb2FkaW5nKCkge1xuICAgIC8vICAgdGhpcy5zZXREYXRhKHtcbiAgICAvLyAgICAgc2hvd0xvYWRpbmc6IGZhbHNlXG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgICAvLyDmmL7npLrmk43kvZzoj5zljZVcbiAgICAvLyBwYXkoKSB7XG4gICAgLy8gICB3ZXB5LnNob3dBY3Rpb25TaGVldCh7XG4gICAgLy8gICAgIGl0ZW1MaXN0OiBbJ0EnLCAnQicsICdDJ10sXG4gICAgLy8gICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgIC8vICAgICAgIGlmICghcmVzLmNhbmNlbCkge1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzLnRhcEluZGV4KVxuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgfSlcbiAgICAvLyB9XG5cbiAgICAvLyDliqjmgIHmlLnlj5jlvZPliY3pobXpnaLmoIfpophcbiAgICAvLyBwYXkoKSB7XG4gICAgLy8gICB3ZXB5LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7XG4gICAgLy8gICAgIHRpdGxlOiAn5b2T5YmN6aG16Z2iJ1xuICAgIC8vICAgfSlcbiAgICAvLyB9XG4gIG9uTG9hZChkYXRhKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi50aXRsZSA9IGRhdGEudGl0bGUua19pbnRcbiAgICBzZWxmLmltYWdlID0gZGF0YS50aXRsZS5rX3BpY1xuICAgIHNlbGYucHJpY2UgPSBkYXRhLnRpdGxlLmtfcHJpY2VcbiAgICBjb25zb2xlLmxvZyhkYXRhLnRpdGxlLCAnMjIyMjInKVxuICAgIGNvbnNvbGUubG9nKGRhdGEuaW1hZ2UsICflm77niYcnKVxuICAgIGNvbnNvbGUubG9nKGRhdGEucHJpY2UsICfku7fmoLwnKVxuICB9XG59XG4iXX0=