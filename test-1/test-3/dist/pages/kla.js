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
      shopping_pic: 'http://i03.pictn.sogoucdn.com/33e697ad39393d3b',
      mapic: 'http://img1.imgtn.bdimg.com/it/u=2553322381,2925312760&fm=27&gp=0.jpg',
      ta: '加入购物车',
      tb: '立即购买',
      price: '',
      title: '',
      numbers: '数量',
      subtraction: '-',
      number: 1,
      add: '+',
      image: '',
      showLoading: true,
      check: false,
      // size_M: false,
      a_M_color: 'black',
      a_M_border: '1px solid silver',
      // size_M: false,
      M_color: 'black',
      M_border: '1px solid silver',
      a_color: 'black',
      a_border: '1px solid silver',
      color: 'black',
      border: '1px solid silver',
      stock: 0,
      a_scolor: '颜色',
      a_size: '尺寸',
      scolor: '颜色',
      size: '尺寸',
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
      confirm_a: function confirm_a() {
        // console.log('请选择商品规格')
        // wepy.showToast({
        //   title: '请选择商品规格',
        //   image: '../images/confirm.png'
        // })
        var self = this;
        if (self.a_scolor === '颜色' || self.a_size === '尺寸' || self.number === 0) {
          _wepy2.default.showToast({
            title: '请选择商品规格',
            image: '../images/confirm.png'
          });
        } else {
          _wepy2.default.showToast({
            title: '加入成功'
            // image: '../images/confirm.png'
          });
        }
      },
      confirm: function confirm() {
        // console.log('请选择商品规格')
        // wepy.showToast({
        //   title: '请选择商品规格',
        //   image: '../images/confirm.png'
        // })
        var self = this;
        if (self.scolor === '颜色' || self.size === '尺寸' || self.number === 0) {
          _wepy2.default.showToast({
            title: '请选择商品规格',
            image: '../images/confirm.png'
          });
        } else {
          _wepy2.default.showToast({
            title: '已选择',
            image: '../images/confirm.png'
          });
          _wepy2.default.navigateTo({
            url: '../pages/confirm'
          });
        }
      },
      color_a: function color_a() {
        var self = this;
        self.check = !self.check;
        if (self.check) {
          self.a_border = '1px solid red';
          self.a_color = 'red';
          self.a_scolor = '"白色"';
          // self.please = '已'
        } else {
          self.a_border = '1px solid sliver';
          self.a_color = 'black';
          self.a_scolor = '颜色';
          self.please = '请';
        }
      },
      size_M_a: function size_M_a() {
        var self = this;
        self.s_m = !self.s_m;
        if (self.s_m) {
          self.a_M_border = '1px solid red';
          self.a_M_color = 'red';
          self.a_size = '"M"';
          self.please = '已';
        } else {
          self.a_M_border = '1px solid sliver';
          self.a_M_color = 'black';
          self.a_size = '尺寸';
          self.please = '请';
        }
      },
      color: function color() {
        var self = this;
        self.check = !self.check;
        if (self.check) {
          self.border = '1px solid red';
          self.color = 'red';
          self.scolor = '"白色"';
          // self.please = '已'
        } else {
          self.border = '1px solid sliver';
          self.color = 'black';
          self.scolor = '颜色';
          self.please = '请';
        }
      },
      size_M: function size_M() {
        var self = this;
        self.s_m = !self.s_m;
        if (self.s_m) {
          self.M_border = '1px solid red';
          self.M_color = 'red';
          self.size = '"M"';
          self.please = '已';
        } else {
          self.M_border = '1px solid sliver';
          self.M_color = 'black';
          self.size = '尺寸';
          self.please = '请';
        }
      },
      showModal_a: function showModal_a() {
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
          showModalStatus_a: true
        });
        setTimeout(function () {
          animation.translateY(0).step();
          this.setData({
            animationData: animation.export()
          });
        }.bind(this), 200);
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
      console.log(self.title, '22222');
      console.log(self.image, '图片');
      console.log(self.price, '价格');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/kla'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtsYS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic2hvcHBpbmdfcGljIiwibWFwaWMiLCJ0YSIsInRiIiwicHJpY2UiLCJ0aXRsZSIsIm51bWJlcnMiLCJzdWJ0cmFjdGlvbiIsIm51bWJlciIsImFkZCIsImltYWdlIiwic2hvd0xvYWRpbmciLCJjaGVjayIsImFfTV9jb2xvciIsImFfTV9ib3JkZXIiLCJNX2NvbG9yIiwiTV9ib3JkZXIiLCJhX2NvbG9yIiwiYV9ib3JkZXIiLCJjb2xvciIsImJvcmRlciIsInN0b2NrIiwiYV9zY29sb3IiLCJhX3NpemUiLCJzY29sb3IiLCJzaXplIiwicGxlYXNlIiwibWV0aG9kcyIsInNlbGYiLCJjb25maXJtX2EiLCJzaG93VG9hc3QiLCJjb25maXJtIiwibmF2aWdhdGVUbyIsInVybCIsImNvbG9yX2EiLCJzaXplX01fYSIsInNfbSIsInNpemVfTSIsInNob3dNb2RhbF9hIiwiYW5pbWF0aW9uIiwiY3JlYXRlQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJ0aW1pbmdGdW5jdGlvbiIsImRlbGF5IiwidHJhbnNsYXRlWSIsInN0ZXAiLCJzZXREYXRhIiwiYW5pbWF0aW9uRGF0YSIsImV4cG9ydCIsInNob3dNb2RhbFN0YXR1c19hIiwic2V0VGltZW91dCIsImJpbmQiLCJzaG93TW9kYWwiLCJzaG93TW9kYWxTdGF0dXMiLCJoaWRlTW9kYWwiLCJwaWMiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLG9CQUFjLGdEQURUO0FBRUxDLGFBQU8sdUVBRkY7QUFHTEMsVUFBSSxPQUhDO0FBSUxDLFVBQUksTUFKQztBQUtMQyxhQUFPLEVBTEY7QUFNTEMsYUFB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LGNBQVFDLEdBQVIsQ0FBWTdCLEtBQUt4QixLQUFqQixFQUF3QixJQUF4QjtBQUNEOzs7O0VBMVBnQyxlQUFLc0QsSTs7a0JBQW5COUQsSyIsImZpbGUiOiJrbGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAna2xhJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc2hvcHBpbmdfcGljOiAnaHR0cDovL2kwMy5waWN0bi5zb2dvdWNkbi5jb20vMzNlNjk3YWQzOTM5M2QzYicsXG4gICAgbWFwaWM6ICdodHRwOi8vaW1nMS5pbWd0bi5iZGltZy5jb20vaXQvdT0yNTUzMzIyMzgxLDI5MjUzMTI3NjAmZm09MjcmZ3A9MC5qcGcnLFxuICAgIHRhOiAn5Yqg5YWl6LSt54mp6L2mJyxcbiAgICB0YjogJ+eri+WNs+i0reS5sCcsXG4gICAgcHJpY2U6ICcnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBudW1iZXJzOiAn5pWw6YePJyxcbiAgICBzdWJ0cmFjdGlvbjogJy0nLFxuICAgIG51bWJlcjogMSxcbiAgICBhZGQ6ICcrJyxcbiAgICBpbWFnZTogJycsXG4gICAgc2hvd0xvYWRpbmc6IHRydWUsXG4gICAgY2hlY2s6IGZhbHNlLFxuICAgIC8vIHNpemVfTTogZmFsc2UsXG4gICAgYV9NX2NvbG9yOiAnYmxhY2snLFxuICAgIGFfTV9ib3JkZXI6ICcxcHggc29saWQgc2lsdmVyJyxcbiAgICAvLyBzaXplX006IGZhbHNlLFxuICAgIE1fY29sb3I6ICdibGFjaycsXG4gICAgTV9ib3JkZXI6ICcxcHggc29saWQgc2lsdmVyJyxcbiAgICBhX2NvbG9yOiAnYmxhY2snLFxuICAgIGFfYm9yZGVyOiAnMXB4IHNvbGlkIHNpbHZlcicsXG4gICAgY29sb3I6ICdibGFjaycsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkIHNpbHZlcicsXG4gICAgc3RvY2s6IDAsXG4gICAgYV9zY29sb3I6ICfpopzoibInLFxuICAgIGFfc2l6ZTogJ+WwuuWvuCcsXG4gICAgc2NvbG9yOiAn6aKc6ImyJyxcbiAgICBzaXplOiAn5bC65a+4JyxcbiAgICBwbGVhc2U6ICfor7cnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBzdWJ0cmFjdGlvbigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgaWYgKHNlbGYubnVtYmVyID4gMSkge1xuICAgICAgICBzZWxmLm51bWJlci0tXG4gICAgICB9XG4gICAgfSxcbiAgICBhZGQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGlmIChzZWxmLmFkZCkge1xuICAgICAgICBzZWxmLm51bWJlcisrXG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBhZGRfY2FydCgpIHtcbiAgICAvLyAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAvLyAgICAgdGl0bGU6ICfliqDlhaXmiJDlip8nXG4gICAgLy8gICAgIC8vIGljb246ICdzdWNjZXNzJ1xuICAgIC8vICAgICAvLyBkdXJhdGlvbjogMjAwMFxuICAgIC8vICAgfSlcbiAgICAvLyB9LFxuICAgIGNvbmZpcm1fYSgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfor7fpgInmi6nllYblk4Hop4TmoLwnKVxuICAgICAgLy8gd2VweS5zaG93VG9hc3Qoe1xuICAgICAgLy8gICB0aXRsZTogJ+ivt+mAieaLqeWVhuWTgeinhOagvCcsXG4gICAgICAvLyAgIGltYWdlOiAnLi4vaW1hZ2VzL2NvbmZpcm0ucG5nJ1xuICAgICAgLy8gfSlcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgaWYgKHNlbGYuYV9zY29sb3IgPT09ICfpopzoibInIHx8IHNlbGYuYV9zaXplID09PSAn5bC65a+4JyB8fCBzZWxmLm51bWJlciA9PT0gMCkge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfor7fpgInmi6nllYblk4Hop4TmoLwnLFxuICAgICAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL2NvbmZpcm0ucG5nJ1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5Yqg5YWl5oiQ5YqfJ1xuICAgICAgICAgIC8vIGltYWdlOiAnLi4vaW1hZ2VzL2NvbmZpcm0ucG5nJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29uZmlybSgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfor7fpgInmi6nllYblk4Hop4TmoLwnKVxuICAgICAgLy8gd2VweS5zaG93VG9hc3Qoe1xuICAgICAgLy8gICB0aXRsZTogJ+ivt+mAieaLqeWVhuWTgeinhOagvCcsXG4gICAgICAvLyAgIGltYWdlOiAnLi4vaW1hZ2VzL2NvbmZpcm0ucG5nJ1xuICAgICAgLy8gfSlcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgaWYgKHNlbGYuc2NvbG9yID09PSAn6aKc6ImyJyB8fCBzZWxmLnNpemUgPT09ICflsLrlr7gnIHx8IHNlbGYubnVtYmVyID09PSAwKSB7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+ivt+mAieaLqeWVhuWTgeinhOagvCcsXG4gICAgICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvY29uZmlybS5wbmcnXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICflt7LpgInmi6knLFxuICAgICAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL2NvbmZpcm0ucG5nJ1xuICAgICAgICB9KVxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3BhZ2VzL2NvbmZpcm0nXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBjb2xvcl9hKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNoZWNrID0gIXNlbGYuY2hlY2tcbiAgICAgIGlmIChzZWxmLmNoZWNrKSB7XG4gICAgICAgIHNlbGYuYV9ib3JkZXIgPSAnMXB4IHNvbGlkIHJlZCdcbiAgICAgICAgc2VsZi5hX2NvbG9yID0gJ3JlZCdcbiAgICAgICAgc2VsZi5hX3Njb2xvciA9ICdcIueZveiJslwiJ1xuICAgICAgICAvLyBzZWxmLnBsZWFzZSA9ICflt7InXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmFfYm9yZGVyID0gJzFweCBzb2xpZCBzbGl2ZXInXG4gICAgICAgIHNlbGYuYV9jb2xvciA9ICdibGFjaydcbiAgICAgICAgc2VsZi5hX3Njb2xvciA9ICfpopzoibInXG4gICAgICAgIHNlbGYucGxlYXNlID0gJ+ivtydcbiAgICAgIH1cbiAgICB9LFxuICAgIHNpemVfTV9hKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnNfbSA9ICFzZWxmLnNfbVxuICAgICAgaWYgKHNlbGYuc19tKSB7XG4gICAgICAgIHNlbGYuYV9NX2JvcmRlciA9ICcxcHggc29saWQgcmVkJ1xuICAgICAgICBzZWxmLmFfTV9jb2xvciA9ICdyZWQnXG4gICAgICAgIHNlbGYuYV9zaXplID0gJ1wiTVwiJ1xuICAgICAgICBzZWxmLnBsZWFzZSA9ICflt7InXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmFfTV9ib3JkZXIgPSAnMXB4IHNvbGlkIHNsaXZlcidcbiAgICAgICAgc2VsZi5hX01fY29sb3IgPSAnYmxhY2snXG4gICAgICAgIHNlbGYuYV9zaXplID0gJ+WwuuWvuCdcbiAgICAgICAgc2VsZi5wbGVhc2UgPSAn6K+3J1xuICAgICAgfVxuICAgIH0sXG4gICAgY29sb3IoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY2hlY2sgPSAhc2VsZi5jaGVja1xuICAgICAgaWYgKHNlbGYuY2hlY2spIHtcbiAgICAgICAgc2VsZi5ib3JkZXIgPSAnMXB4IHNvbGlkIHJlZCdcbiAgICAgICAgc2VsZi5jb2xvciA9ICdyZWQnXG4gICAgICAgIHNlbGYuc2NvbG9yID0gJ1wi55m96ImyXCInXG4gICAgICAgIC8vIHNlbGYucGxlYXNlID0gJ+W3sidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuYm9yZGVyID0gJzFweCBzb2xpZCBzbGl2ZXInXG4gICAgICAgIHNlbGYuY29sb3IgPSAnYmxhY2snXG4gICAgICAgIHNlbGYuc2NvbG9yID0gJ+minOiJsidcbiAgICAgICAgc2VsZi5wbGVhc2UgPSAn6K+3J1xuICAgICAgfVxuICAgIH0sXG4gICAgc2l6ZV9NKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnNfbSA9ICFzZWxmLnNfbVxuICAgICAgaWYgKHNlbGYuc19tKSB7XG4gICAgICAgIHNlbGYuTV9ib3JkZXIgPSAnMXB4IHNvbGlkIHJlZCdcbiAgICAgICAgc2VsZi5NX2NvbG9yID0gJ3JlZCdcbiAgICAgICAgc2VsZi5zaXplID0gJ1wiTVwiJ1xuICAgICAgICBzZWxmLnBsZWFzZSA9ICflt7InXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLk1fYm9yZGVyID0gJzFweCBzb2xpZCBzbGl2ZXInXG4gICAgICAgIHNlbGYuTV9jb2xvciA9ICdibGFjaydcbiAgICAgICAgc2VsZi5zaXplID0gJ+WwuuWvuCdcbiAgICAgICAgc2VsZi5wbGVhc2UgPSAn6K+3J1xuICAgICAgfVxuICAgIH0sXG4gICAgc2hvd01vZGFsX2EoKSB7XG4gICAgLy8g5pi+56S66YGu572p5bGCXG4gICAgLy8g5a6e5L6L5YyW5LiA5Liq5Yqo55S7XG4gICAgICB2YXIgYW5pbWF0aW9uID0gd2VweS5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICBkdXJhdGlvbjogMjAwLCAvLyDliqjnlLvmjIHnu63ml7bpl7TvvIzljZXkvY1tc++8jOm7mOiupOWAvCA0MDBcbiAgICAgICAgdGltaW5nRnVuY3Rpb246ICdsaW5lYXInLCAvLyDliqjnlLvkuIDnm7TovoPkuLrlnYfljIBcbiAgICAgICAgZGVsYXk6IDBcbiAgICAgIH0pXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvblxuICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMzAwKS5zdGVwKClcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbi5leHBvcnQoKSxcbiAgICAgICAgc2hvd01vZGFsU3RhdHVzX2E6IHRydWVcbiAgICAgIH0pXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMCkuc3RlcCgpXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uLmV4cG9ydCgpXG4gICAgICAgIH0pXG4gICAgICB9LmJpbmQodGhpcyksIDIwMClcbiAgICB9LFxuICAgIHNob3dNb2RhbCgpIHtcbiAgICAvLyDmmL7npLrpga7nvanlsYJcbiAgICAvLyDlrp7kvovljJbkuIDkuKrliqjnlLtcbiAgICAgIHZhciBhbmltYXRpb24gPSB3ZXB5LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgIGR1cmF0aW9uOiAyMDAsIC8vIOWKqOeUu+aMgee7reaXtumXtO+8jOWNleS9jW1z77yM6buY6K6k5YC8IDQwMFxuICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsIC8vIOWKqOeUu+S4gOebtOi+g+S4uuWdh+WMgFxuICAgICAgICBkZWxheTogMFxuICAgICAgfSlcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uXG4gICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgzMDApLnN0ZXAoKVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uLmV4cG9ydCgpLFxuICAgICAgICBzaG93TW9kYWxTdGF0dXM6IHRydWVcbiAgICAgIH0pXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMCkuc3RlcCgpXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uLmV4cG9ydCgpXG4gICAgICAgIH0pXG4gICAgICB9LmJpbmQodGhpcyksIDIwMClcbiAgICB9LFxuICAgIGhpZGVNb2RhbCgpIHtcbiAgICAvLyDpmpDol4/pga7nvanlsYJcbiAgICAgIHZhciBhbmltYXRpb24gPSB3ZXB5LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJyxcbiAgICAgICAgZGVsYXk6IDBcbiAgICAgIH0pXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvblxuICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMzAwKS5zdGVwKClcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbi5leHBvcnQoKVxuICAgICAgfSlcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgwKS5zdGVwKClcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb24uZXhwb3J0KCksXG4gICAgICAgICAgc2hvd01vZGFsU3RhdHVzOiBmYWxzZVxuICAgICAgICB9KVxuICAgICAgfS5iaW5kKHRoaXMpLCAyMDApXG4gICAgfVxuICB9XG4gICAgLy8gc2hvd0xvYWRpbmcoKSB7XG4gICAgLy8gICB0aGlzLnNldERhdGEoe1xuICAgIC8vICAgICBzaG93TG9hZGluZzogZmFsc2VcbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuICAgIC8vIOaYvuekuuaTjeS9nOiPnOWNlVxuICAgIC8vIHBheSgpIHtcbiAgICAvLyAgIHdlcHkuc2hvd0FjdGlvblNoZWV0KHtcbiAgICAvLyAgICAgaXRlbUxpc3Q6IFsnQScsICdCJywgJ0MnXSxcbiAgICAvLyAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgLy8gICAgICAgaWYgKCFyZXMuY2FuY2VsKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFwSW5kZXgpXG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9KVxuICAgIC8vIH1cblxuICAgIC8vIOWKqOaAgeaUueWPmOW9k+WJjemhtemdouagh+mimFxuICAgIC8vIHBheSgpIHtcbiAgICAvLyAgIHdlcHkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcbiAgICAvLyAgICAgdGl0bGU6ICflvZPliY3pobXpnaInXG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgb25Mb2FkKGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnRpdGxlID0gZGF0YS50aXRsZVxuICAgIHNlbGYuaW1hZ2UgPSBkYXRhLnBpY1xuICAgIHNlbGYucHJpY2UgPSBkYXRhLnByaWNlXG4gICAgY29uc29sZS5sb2coc2VsZi50aXRsZSwgJzIyMjIyJylcbiAgICBjb25zb2xlLmxvZyhzZWxmLmltYWdlLCAn5Zu+54mHJylcbiAgICBjb25zb2xlLmxvZyhzZWxmLnByaWNlLCAn5Lu35qC8JylcbiAgfVxufVxuIl19