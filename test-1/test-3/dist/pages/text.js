'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
      a_number: 1,
      add: '+',
      image: '',
      showLoading: true,
      check: false,
      size_M: false,
      M_color: 'black',
      M_border: '1px solid silver',
      a_color: 'black',
      a_border: '1px solid silver',
      stock: 0,
      a_scolor: '颜色',
      a_size: '尺寸',
      please: '请'
    }, _this.methods = {
      subtraction: function subtraction() {
        var self = this;
        if (self.number > 1) {
          self.number--;
        }
      },
      add: function add() {
        var self = this;
        if (self.add) {
          self.number++;
        }
      },

      // add_cart() {
      //   wepy.showToast({
      //     title: '加入成功'
      //     // icon: 'success'
      //     // duration: 2000
      //   })
      // },
      confirm: function confirm() {
        // console.log('请选择商品规格')
        // wepy.showToast({
        //   title: '请选择商品规格',
        //   image: '../images/confirm.png'
        // })
        var self = this;
        if (self.a_scolor === '颜色' || self.a_size === '尺寸') {
          _wepy2.default.showToast({
            title: '请选择商品规格',
            image: '../images/confirm.png'
          });
        } else {
          _wepy2.default.showToast({
            title: '已选择',
            image: '../images/confirm.png'
          });
        }
      },
      color: function color() {
        var self = this;
        self.check = !self.check;
        if (self.check) {
          self.a_border = '1px solid red';
          self.a_color = 'red';
          self.a_scolor = '"白色"';
          self.please = '已';
        } else {
          self.a_border = '1px solid sliver';
          self.a_color = 'black';
          self.a_scolor = '颜色';
          self.please = '请';
        }
      },
      size_M: function size_M() {
        var self = this;
        self.s_m = !self.s_m;
        if (self.s_m) {
          self.M_border = '1px solid red';
          self.M_color = 'red';
          self.a_size = '"M"';
          self.please = '已';
        } else {
          self.M_border = '1px solid sliver';
          self.M_color = 'black';
          self.a_size = '尺寸';
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
      self.title = data.title;
      self.image = data.pic;
      self.price = data.price;
      console.log(data.title, '22222');
      console.log(data.image, '图片');
      console.log(data.price, '价格');
    }
  }]);

  return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRleHQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNob3BwaW5nX3BpYyIsIm1hcGljIiwidGEiLCJ0YiIsInByaWNlIiwidGl0bGUiLCJudW1iZXJzIiwic3VidHJhY3Rpb24iLCJhX251bWJlciIsImFkZCIsImltYWdlIiwic2hvd0xvYWRpbmciLCJjaGVjayIsInNpemVfTSIsIk1fY29sb3IiLCJNX2JvcmRlciIsImFfY29sb3IiLCJhX2JvcmRlciIsInN0b2NrIiwiYV9zY29sb3IiLCJhX3NpemUiLCJwbGVhc2UiLCJtZXRob2RzIiwic2VsZiIsIm51bWJlciIsImNvbmZpcm0iLCJzaG93VG9hc3QiLCJjb2xvciIsInNfbSIsInNob3dNb2RhbCIsImFuaW1hdGlvbiIsImNyZWF0ZUFuaW1hdGlvbiIsImR1cmF0aW9uIiwidGltaW5nRnVuY3Rpb24iLCJkZWxheSIsInRyYW5zbGF0ZVkiLCJzdGVwIiwic2V0RGF0YSIsImFuaW1hdGlvbkRhdGEiLCJleHBvcnQiLCJzaG93TW9kYWxTdGF0dXMiLCJzZXRUaW1lb3V0IiwiYmluZCIsImhpZGVNb2RhbCIsInBpYyIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsb0JBQWMsdUVBRFQ7QUFFTEMsYUFBTyx1RUFGRjtBQUdMQyxVQUFJLE9BSEM7QUFJTEMsVUFBSSxNQUpDO0FBS0xDLGFBQU8sRUFMRjtBQU1MQyxhQUFPLEVBTkY7QUFPTEMsZUFBUyxJQVBKO0FBUUxDLG1CQUFhLEdBUlI7QUFTTEMsZ0JBQVUsQ0FUTDtBQVVMQyxXQUFLLEdBVkE7QUFXTEMsYUFBTyxFQVhGO0FBWUxDLG1CQUFhLElBWlI7QUFhTEMsYUFBTyxLQWJGO0FB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QUF3QixJQUF4QjtBQUNBbUMsY0FBUUMsR0FBUixDQUFZL0MsS0FBS0ssS0FBakIsRUFBd0IsSUFBeEI7QUFDRDs7OztFQTFLZ0MsZUFBSzJDLEk7O2tCQUFuQm5ELEsiLCJmaWxlIjoidGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdrbGEnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzaG9wcGluZ19waWM6ICdodHRwOi8vaW1nMS5pbWd0bi5iZGltZy5jb20vaXQvdT0yNTUzMzIyMzgxLDI5MjUzMTI3NjAmZm09MjcmZ3A9MC5qcGcnLFxuICAgIG1hcGljOiAnaHR0cDovL2ltZzEuaW1ndG4uYmRpbWcuY29tL2l0L3U9MjU1MzMyMjM4MSwyOTI1MzEyNzYwJmZtPTI3JmdwPTAuanBnJyxcbiAgICB0YTogJ+WKoOWFpei0reeJqei9picsXG4gICAgdGI6ICfnq4vljbPotK3kubAnLFxuICAgIHByaWNlOiAnJyxcbiAgICB0aXRsZTogJycsXG4gICAgbnVtYmVyczogJ+aVsOmHjycsXG4gICAgc3VidHJhY3Rpb246ICctJyxcbiAgICBhX251bWJlcjogMSxcbiAgICBhZGQ6ICcrJyxcbiAgICBpbWFnZTogJycsXG4gICAgc2hvd0xvYWRpbmc6IHRydWUsXG4gICAgY2hlY2s6IGZhbHNlLFxuICAgIHNpemVfTTogZmFsc2UsXG4gICAgTV9jb2xvcjogJ2JsYWNrJyxcbiAgICBNX2JvcmRlcjogJzFweCBzb2xpZCBzaWx2ZXInLFxuICAgIGFfY29sb3I6ICdibGFjaycsXG4gICAgYV9ib3JkZXI6ICcxcHggc29saWQgc2lsdmVyJyxcbiAgICBzdG9jazogMCxcbiAgICBhX3Njb2xvcjogJ+minOiJsicsXG4gICAgYV9zaXplOiAn5bC65a+4JyxcbiAgICBwbGVhc2U6ICfor7cnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBzdWJ0cmFjdGlvbigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgaWYgKHNlbGYubnVtYmVyID4gMSkge1xuICAgICAgICBzZWxmLm51bWJlci0tXG4gICAgICB9XG4gICAgfSxcbiAgICBhZGQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGlmIChzZWxmLmFkZCkge1xuICAgICAgICBzZWxmLm51bWJlcisrXG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBhZGRfY2FydCgpIHtcbiAgICAvLyAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAvLyAgICAgdGl0bGU6ICfliqDlhaXmiJDlip8nXG4gICAgLy8gICAgIC8vIGljb246ICdzdWNjZXNzJ1xuICAgIC8vICAgICAvLyBkdXJhdGlvbjogMjAwMFxuICAgIC8vICAgfSlcbiAgICAvLyB9LFxuICAgIGNvbmZpcm0oKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygn6K+36YCJ5oup5ZWG5ZOB6KeE5qC8JylcbiAgICAgIC8vIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgIC8vICAgdGl0bGU6ICfor7fpgInmi6nllYblk4Hop4TmoLwnLFxuICAgICAgLy8gICBpbWFnZTogJy4uL2ltYWdlcy9jb25maXJtLnBuZydcbiAgICAgIC8vIH0pXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGlmIChzZWxmLmFfc2NvbG9yID09PSAn6aKc6ImyJyB8fCBzZWxmLmFfc2l6ZSA9PT0gJ+WwuuWvuCcpIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn6K+36YCJ5oup5ZWG5ZOB6KeE5qC8JyxcbiAgICAgICAgICBpbWFnZTogJy4uL2ltYWdlcy9jb25maXJtLnBuZydcbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+W3sumAieaLqScsXG4gICAgICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvY29uZmlybS5wbmcnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBjb2xvcigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jaGVjayA9ICFzZWxmLmNoZWNrXG4gICAgICBpZiAoc2VsZi5jaGVjaykge1xuICAgICAgICBzZWxmLmFfYm9yZGVyID0gJzFweCBzb2xpZCByZWQnXG4gICAgICAgIHNlbGYuYV9jb2xvciA9ICdyZWQnXG4gICAgICAgIHNlbGYuYV9zY29sb3IgPSAnXCLnmb3oibJcIidcbiAgICAgICAgc2VsZi5wbGVhc2UgPSAn5beyJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5hX2JvcmRlciA9ICcxcHggc29saWQgc2xpdmVyJ1xuICAgICAgICBzZWxmLmFfY29sb3IgPSAnYmxhY2snXG4gICAgICAgIHNlbGYuYV9zY29sb3IgPSAn6aKc6ImyJ1xuICAgICAgICBzZWxmLnBsZWFzZSA9ICfor7cnXG4gICAgICB9XG4gICAgfSxcbiAgICBzaXplX00oKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuc19tID0gIXNlbGYuc19tXG4gICAgICBpZiAoc2VsZi5zX20pIHtcbiAgICAgICAgc2VsZi5NX2JvcmRlciA9ICcxcHggc29saWQgcmVkJ1xuICAgICAgICBzZWxmLk1fY29sb3IgPSAncmVkJ1xuICAgICAgICBzZWxmLmFfc2l6ZSA9ICdcIk1cIidcbiAgICAgICAgc2VsZi5wbGVhc2UgPSAn5beyJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5NX2JvcmRlciA9ICcxcHggc29saWQgc2xpdmVyJ1xuICAgICAgICBzZWxmLk1fY29sb3IgPSAnYmxhY2snXG4gICAgICAgIHNlbGYuYV9zaXplID0gJ+WwuuWvuCdcbiAgICAgICAgc2VsZi5wbGVhc2UgPSAn6K+3J1xuICAgICAgfVxuICAgIH0sXG4gICAgc2hvd01vZGFsKCkge1xuICAgIC8vIOaYvuekuumBrue9qeWxglxuICAgIC8vIOWunuS+i+WMluS4gOS4quWKqOeUu1xuICAgICAgdmFyIGFuaW1hdGlvbiA9IHdlcHkuY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgZHVyYXRpb246IDIwMCwgLy8g5Yqo55S75oyB57ut5pe26Ze077yM5Y2V5L2NbXPvvIzpu5jorqTlgLwgNDAwXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJywgLy8g5Yqo55S75LiA55u06L6D5Li65Z2H5YyAXG4gICAgICAgIGRlbGF5OiAwXG4gICAgICB9KVxuICAgICAgdGhpcy5hbmltYXRpb24gPSBhbmltYXRpb25cbiAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDMwMCkuc3RlcCgpXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb24uZXhwb3J0KCksXG4gICAgICAgIHNob3dNb2RhbFN0YXR1czogdHJ1ZVxuICAgICAgfSlcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgwKS5zdGVwKClcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgICAgfSlcbiAgICAgIH0uYmluZCh0aGlzKSwgMjAwKVxuICAgIH0sXG4gICAgaGlkZU1vZGFsKCkge1xuICAgIC8vIOmakOiXj+mBrue9qeWxglxuICAgICAgdmFyIGFuaW1hdGlvbiA9IHdlcHkuY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgdGltaW5nRnVuY3Rpb246ICdsaW5lYXInLFxuICAgICAgICBkZWxheTogMFxuICAgICAgfSlcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uXG4gICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgzMDApLnN0ZXAoKVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uLmV4cG9ydCgpXG4gICAgICB9KVxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGFuaW1hdGlvbi50cmFuc2xhdGVZKDApLnN0ZXAoKVxuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbi5leHBvcnQoKSxcbiAgICAgICAgICBzaG93TW9kYWxTdGF0dXM6IGZhbHNlXG4gICAgICAgIH0pXG4gICAgICB9LmJpbmQodGhpcyksIDIwMClcbiAgICB9XG4gIH1cbiAgICAvLyBzaG93TG9hZGluZygpIHtcbiAgICAvLyAgIHRoaXMuc2V0RGF0YSh7XG4gICAgLy8gICAgIHNob3dMb2FkaW5nOiBmYWxzZVxuICAgIC8vICAgfSlcbiAgICAvLyB9XG4gICAgLy8g5pi+56S65pON5L2c6I+c5Y2VXG4gICAgLy8gcGF5KCkge1xuICAgIC8vICAgd2VweS5zaG93QWN0aW9uU2hlZXQoe1xuICAgIC8vICAgICBpdGVtTGlzdDogWydBJywgJ0InLCAnQyddLFxuICAgIC8vICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAvLyAgICAgICBpZiAoIXJlcy5jYW5jZWwpIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHJlcy50YXBJbmRleClcbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuXG4gICAgLy8g5Yqo5oCB5pS55Y+Y5b2T5YmN6aG16Z2i5qCH6aKYXG4gICAgLy8gcGF5KCkge1xuICAgIC8vICAgd2VweS5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoe1xuICAgIC8vICAgICB0aXRsZTogJ+W9k+WJjemhtemdoidcbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuICBvbkxvYWQoZGF0YSkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYudGl0bGUgPSBkYXRhLnRpdGxlXG4gICAgc2VsZi5pbWFnZSA9IGRhdGEucGljXG4gICAgc2VsZi5wcmljZSA9IGRhdGEucHJpY2VcbiAgICBjb25zb2xlLmxvZyhkYXRhLnRpdGxlLCAnMjIyMjInKVxuICAgIGNvbnNvbGUubG9nKGRhdGEuaW1hZ2UsICflm77niYcnKVxuICAgIGNvbnNvbGUubG9nKGRhdGEucHJpY2UsICfku7fmoLwnKVxuICB9XG59XG4iXX0=