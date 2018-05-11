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
        animation.translateY(3000).step();
        this.setData({
          animationData: animation.export()
        });
        setTimeout(function () {
          animation.translateY(0).step();
          this.setData({
            animationData: animation.export(),
            showModalStatus: false
          });
        }.bind(this), 20000);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImtsYS5qcyJdLCJuYW1lcyI6WyJJbmRleCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwic2hvcHBpbmdfcGljIiwibWFwaWMiLCJ0YSIsInRiIiwicHJpY2UiLCJ0aXRsZSIsIm51bWJlcnMiLCJzdWJ0cmFjdGlvbiIsIm51bWJlciIsImFkZCIsImltYWdlIiwic2hvd0xvYWRpbmciLCJjaGVjayIsImFfTV9jb2xvciIsImFfTV9ib3JkZXIiLCJNX2NvbG9yIiwiTV9ib3JkZXIiLCJhX2NvbG9yIiwiYV9ib3JkZXIiLCJjb2xvciIsImJvcmRlciIsInN0b2NrIiwiYV9zY29sb3IiLCJhX3NpemUiLCJzY29sb3IiLCJzaXplIiwicGxlYXNlIiwibWV0aG9kcyIsInNlbGYiLCJjb25maXJtX2EiLCJzaG93VG9hc3QiLCJjb25maXJtIiwibmF2aWdhdGVUbyIsInVybCIsImNvbG9yX2EiLCJzaXplX01fYSIsInNfbSIsInNpemVfTSIsInNob3dNb2RhbF9hIiwiYW5pbWF0aW9uIiwiY3JlYXRlQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJ0aW1pbmdGdW5jdGlvbiIsImRlbGF5IiwidHJhbnNsYXRlWSIsInN0ZXAiLCJzZXREYXRhIiwiYW5pbWF0aW9uRGF0YSIsImV4cG9ydCIsInNob3dNb2RhbFN0YXR1c19hIiwic2V0VGltZW91dCIsImJpbmQiLCJzaG93TW9kYWwiLCJzaG93TW9kYWxTdGF0dXMiLCJoaWRlTW9kYWwiLCJwaWMiLCJjb25zb2xlIiwibG9nIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsSSxHQUFPO0FBQ0xDLG9CQUFjLGdEQURUO0FBRUxDLGFBQU8sdUVBRkY7QUFHTEMsVUFBSSxPQUhDO0FBSUxDLFVBQUksTUFKQztBQUtMQyxhQUFPLEVBTEY7QUFNTEMsYUFB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R0FBUixDQUFZN0IsS0FBS3hCLEtBQWpCLEVBQXdCLElBQXhCO0FBQ0Q7Ozs7RUF6UGdDLGVBQUtzRCxJOztrQkFBbkI5RCxLIiwiZmlsZSI6ImtsYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdrbGEnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBzaG9wcGluZ19waWM6ICdodHRwOi8vaTAzLnBpY3RuLnNvZ291Y2RuLmNvbS8zM2U2OTdhZDM5MzkzZDNiJyxcbiAgICBtYXBpYzogJ2h0dHA6Ly9pbWcxLmltZ3RuLmJkaW1nLmNvbS9pdC91PTI1NTMzMjIzODEsMjkyNTMxMjc2MCZmbT0yNyZncD0wLmpwZycsXG4gICAgdGE6ICfliqDlhaXotK3nianovaYnLFxuICAgIHRiOiAn56uL5Y2z6LSt5LmwJyxcbiAgICBwcmljZTogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIG51bWJlcnM6ICfmlbDph48nLFxuICAgIHN1YnRyYWN0aW9uOiAnLScsXG4gICAgbnVtYmVyOiAxLFxuICAgIGFkZDogJysnLFxuICAgIGltYWdlOiAnJyxcbiAgICBzaG93TG9hZGluZzogdHJ1ZSxcbiAgICBjaGVjazogZmFsc2UsXG4gICAgYV9NX2NvbG9yOiAnYmxhY2snLFxuICAgIGFfTV9ib3JkZXI6ICcxcHggc29saWQgc2lsdmVyJyxcbiAgICAvLyBzaXplX006IGZhbHNlLFxuICAgIE1fY29sb3I6ICdibGFjaycsXG4gICAgTV9ib3JkZXI6ICcxcHggc29saWQgc2lsdmVyJyxcbiAgICBhX2NvbG9yOiAnYmxhY2snLFxuICAgIGFfYm9yZGVyOiAnMXB4IHNvbGlkIHNpbHZlcicsXG4gICAgY29sb3I6ICdibGFjaycsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkIHNpbHZlcicsXG4gICAgc3RvY2s6IDAsXG4gICAgYV9zY29sb3I6ICfpopzoibInLFxuICAgIGFfc2l6ZTogJ+WwuuWvuCcsXG4gICAgc2NvbG9yOiAn6aKc6ImyJyxcbiAgICBzaXplOiAn5bC65a+4JyxcbiAgICBwbGVhc2U6ICfor7cnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBzdWJ0cmFjdGlvbigpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgaWYgKHNlbGYubnVtYmVyID4gMSkge1xuICAgICAgICBzZWxmLm51bWJlci0tXG4gICAgICB9XG4gICAgfSxcbiAgICBhZGQoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIGlmIChzZWxmLmFkZCkge1xuICAgICAgICBzZWxmLm51bWJlcisrXG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBhZGRfY2FydCgpIHtcbiAgICAvLyAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAvLyAgICAgdGl0bGU6ICfliqDlhaXmiJDlip8nXG4gICAgLy8gICAgIC8vIGljb246ICdzdWNjZXNzJ1xuICAgIC8vICAgICAvLyBkdXJhdGlvbjogMjAwMFxuICAgIC8vICAgfSlcbiAgICAvLyB9LFxuICAgIGNvbmZpcm1fYSgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfor7fpgInmi6nllYblk4Hop4TmoLwnKVxuICAgICAgLy8gd2VweS5zaG93VG9hc3Qoe1xuICAgICAgLy8gICB0aXRsZTogJ+ivt+mAieaLqeWVhuWTgeinhOagvCcsXG4gICAgICAvLyAgIGltYWdlOiAnLi4vaW1hZ2VzL2NvbmZpcm0ucG5nJ1xuICAgICAgLy8gfSlcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgaWYgKHNlbGYuYV9zY29sb3IgPT09ICfpopzoibInIHx8IHNlbGYuYV9zaXplID09PSAn5bC65a+4JyB8fCBzZWxmLm51bWJlciA9PT0gMCkge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICfor7fpgInmi6nllYblk4Hop4TmoLwnLFxuICAgICAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL2NvbmZpcm0ucG5nJ1xuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5Yqg5YWl5oiQ5YqfJ1xuICAgICAgICAgIC8vIGltYWdlOiAnLi4vaW1hZ2VzL2NvbmZpcm0ucG5nJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG4gICAgY29uZmlybSgpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfor7fpgInmi6nllYblk4Hop4TmoLwnKVxuICAgICAgLy8gd2VweS5zaG93VG9hc3Qoe1xuICAgICAgLy8gICB0aXRsZTogJ+ivt+mAieaLqeWVhuWTgeinhOagvCcsXG4gICAgICAvLyAgIGltYWdlOiAnLi4vaW1hZ2VzL2NvbmZpcm0ucG5nJ1xuICAgICAgLy8gfSlcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgaWYgKHNlbGYuc2NvbG9yID09PSAn6aKc6ImyJyB8fCBzZWxmLnNpemUgPT09ICflsLrlr7gnIHx8IHNlbGYubnVtYmVyID09PSAwKSB7XG4gICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+ivt+mAieaLqeWVhuWTgeinhOagvCcsXG4gICAgICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvY29uZmlybS5wbmcnXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICflt7LpgInmi6knLFxuICAgICAgICAgIGltYWdlOiAnLi4vaW1hZ2VzL2NvbmZpcm0ucG5nJ1xuICAgICAgICB9KVxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3BhZ2VzL2NvbmZpcm0nXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSxcbiAgICBjb2xvcl9hKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNoZWNrID0gIXNlbGYuY2hlY2tcbiAgICAgIGlmIChzZWxmLmNoZWNrKSB7XG4gICAgICAgIHNlbGYuYV9ib3JkZXIgPSAnMXB4IHNvbGlkIHJlZCdcbiAgICAgICAgc2VsZi5hX2NvbG9yID0gJ3JlZCdcbiAgICAgICAgc2VsZi5hX3Njb2xvciA9ICdcIueZveiJslwiJ1xuICAgICAgICAvLyBzZWxmLnBsZWFzZSA9ICflt7InXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmFfYm9yZGVyID0gJzFweCBzb2xpZCBzbGl2ZXInXG4gICAgICAgIHNlbGYuYV9jb2xvciA9ICdibGFjaydcbiAgICAgICAgc2VsZi5hX3Njb2xvciA9ICfpopzoibInXG4gICAgICAgIHNlbGYucGxlYXNlID0gJ+ivtydcbiAgICAgIH1cbiAgICB9LFxuICAgIHNpemVfTV9hKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnNfbSA9ICFzZWxmLnNfbVxuICAgICAgaWYgKHNlbGYuc19tKSB7XG4gICAgICAgIHNlbGYuYV9NX2JvcmRlciA9ICcxcHggc29saWQgcmVkJ1xuICAgICAgICBzZWxmLmFfTV9jb2xvciA9ICdyZWQnXG4gICAgICAgIHNlbGYuYV9zaXplID0gJ1wiTVwiJ1xuICAgICAgICBzZWxmLnBsZWFzZSA9ICflt7InXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLmFfTV9ib3JkZXIgPSAnMXB4IHNvbGlkIHNsaXZlcidcbiAgICAgICAgc2VsZi5hX01fY29sb3IgPSAnYmxhY2snXG4gICAgICAgIHNlbGYuYV9zaXplID0gJ+WwuuWvuCdcbiAgICAgICAgc2VsZi5wbGVhc2UgPSAn6K+3J1xuICAgICAgfVxuICAgIH0sXG4gICAgY29sb3IoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuY2hlY2sgPSAhc2VsZi5jaGVja1xuICAgICAgaWYgKHNlbGYuY2hlY2spIHtcbiAgICAgICAgc2VsZi5ib3JkZXIgPSAnMXB4IHNvbGlkIHJlZCdcbiAgICAgICAgc2VsZi5jb2xvciA9ICdyZWQnXG4gICAgICAgIHNlbGYuc2NvbG9yID0gJ1wi55m96ImyXCInXG4gICAgICAgIC8vIHNlbGYucGxlYXNlID0gJ+W3sidcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuYm9yZGVyID0gJzFweCBzb2xpZCBzbGl2ZXInXG4gICAgICAgIHNlbGYuY29sb3IgPSAnYmxhY2snXG4gICAgICAgIHNlbGYuc2NvbG9yID0gJ+minOiJsidcbiAgICAgICAgc2VsZi5wbGVhc2UgPSAn6K+3J1xuICAgICAgfVxuICAgIH0sXG4gICAgc2l6ZV9NKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLnNfbSA9ICFzZWxmLnNfbVxuICAgICAgaWYgKHNlbGYuc19tKSB7XG4gICAgICAgIHNlbGYuTV9ib3JkZXIgPSAnMXB4IHNvbGlkIHJlZCdcbiAgICAgICAgc2VsZi5NX2NvbG9yID0gJ3JlZCdcbiAgICAgICAgc2VsZi5zaXplID0gJ1wiTVwiJ1xuICAgICAgICBzZWxmLnBsZWFzZSA9ICflt7InXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLk1fYm9yZGVyID0gJzFweCBzb2xpZCBzbGl2ZXInXG4gICAgICAgIHNlbGYuTV9jb2xvciA9ICdibGFjaydcbiAgICAgICAgc2VsZi5zaXplID0gJ+WwuuWvuCdcbiAgICAgICAgc2VsZi5wbGVhc2UgPSAn6K+3J1xuICAgICAgfVxuICAgIH0sXG4gICAgc2hvd01vZGFsX2EoKSB7XG4gICAgLy8g5pi+56S66YGu572p5bGCXG4gICAgLy8g5a6e5L6L5YyW5LiA5Liq5Yqo55S7XG4gICAgICB2YXIgYW5pbWF0aW9uID0gd2VweS5jcmVhdGVBbmltYXRpb24oe1xuICAgICAgICBkdXJhdGlvbjogMjAwLCAvLyDliqjnlLvmjIHnu63ml7bpl7TvvIzljZXkvY1tc++8jOm7mOiupOWAvCA0MDBcbiAgICAgICAgdGltaW5nRnVuY3Rpb246ICdsaW5lYXInLCAvLyDliqjnlLvkuIDnm7TovoPkuLrlnYfljIBcbiAgICAgICAgZGVsYXk6IDBcbiAgICAgIH0pXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvblxuICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMzAwKS5zdGVwKClcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbi5leHBvcnQoKSxcbiAgICAgICAgc2hvd01vZGFsU3RhdHVzX2E6IHRydWVcbiAgICAgIH0pXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMCkuc3RlcCgpXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uLmV4cG9ydCgpXG4gICAgICAgIH0pXG4gICAgICB9LmJpbmQodGhpcyksIDIwMClcbiAgICB9LFxuICAgIHNob3dNb2RhbCgpIHtcbiAgICAvLyDmmL7npLrpga7nvanlsYJcbiAgICAvLyDlrp7kvovljJbkuIDkuKrliqjnlLtcbiAgICAgIHZhciBhbmltYXRpb24gPSB3ZXB5LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgIGR1cmF0aW9uOiAyMDAsIC8vIOWKqOeUu+aMgee7reaXtumXtO+8jOWNleS9jW1z77yM6buY6K6k5YC8IDQwMFxuICAgICAgICB0aW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsIC8vIOWKqOeUu+S4gOebtOi+g+S4uuWdh+WMgFxuICAgICAgICBkZWxheTogMFxuICAgICAgfSlcbiAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uXG4gICAgICBhbmltYXRpb24udHJhbnNsYXRlWSgzMDApLnN0ZXAoKVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uLmV4cG9ydCgpLFxuICAgICAgICBzaG93TW9kYWxTdGF0dXM6IHRydWVcbiAgICAgIH0pXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMCkuc3RlcCgpXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uLmV4cG9ydCgpXG4gICAgICAgIH0pXG4gICAgICB9LmJpbmQodGhpcyksIDIwMClcbiAgICB9LFxuICAgIGhpZGVNb2RhbCgpIHtcbiAgICAvLyDpmpDol4/pga7nvanlsYJcbiAgICAgIHZhciBhbmltYXRpb24gPSB3ZXB5LmNyZWF0ZUFuaW1hdGlvbih7XG4gICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJyxcbiAgICAgICAgZGVsYXk6IDBcbiAgICAgIH0pXG4gICAgICB0aGlzLmFuaW1hdGlvbiA9IGFuaW1hdGlvblxuICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMzAwMCkuc3RlcCgpXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBhbmltYXRpb25EYXRhOiBhbmltYXRpb24uZXhwb3J0KClcbiAgICAgIH0pXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYW5pbWF0aW9uLnRyYW5zbGF0ZVkoMCkuc3RlcCgpXG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgYW5pbWF0aW9uRGF0YTogYW5pbWF0aW9uLmV4cG9ydCgpLFxuICAgICAgICAgIHNob3dNb2RhbFN0YXR1czogZmFsc2VcbiAgICAgICAgfSlcbiAgICAgIH0uYmluZCh0aGlzKSwgMjAwMDApXG4gICAgfVxuICB9XG4gICAgLy8gc2hvd0xvYWRpbmcoKSB7XG4gICAgLy8gICB0aGlzLnNldERhdGEoe1xuICAgIC8vICAgICBzaG93TG9hZGluZzogZmFsc2VcbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuICAgIC8vIOaYvuekuuaTjeS9nOiPnOWNlVxuICAgIC8vIHBheSgpIHtcbiAgICAvLyAgIHdlcHkuc2hvd0FjdGlvblNoZWV0KHtcbiAgICAvLyAgICAgaXRlbUxpc3Q6IFsnQScsICdCJywgJ0MnXSxcbiAgICAvLyAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgLy8gICAgICAgaWYgKCFyZXMuY2FuY2VsKSB7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXMudGFwSW5kZXgpXG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9KVxuICAgIC8vIH1cblxuICAgIC8vIOWKqOaAgeaUueWPmOW9k+WJjemhtemdouagh+mimFxuICAgIC8vIHBheSgpIHtcbiAgICAvLyAgIHdlcHkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHtcbiAgICAvLyAgICAgdGl0bGU6ICflvZPliY3pobXpnaInXG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgb25Mb2FkKGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnRpdGxlID0gZGF0YS50aXRsZVxuICAgIHNlbGYuaW1hZ2UgPSBkYXRhLnBpY1xuICAgIHNlbGYucHJpY2UgPSBkYXRhLnByaWNlXG4gICAgY29uc29sZS5sb2coc2VsZi50aXRsZSwgJzIyMjIyJylcbiAgICBjb25zb2xlLmxvZyhzZWxmLmltYWdlLCAn5Zu+54mHJylcbiAgICBjb25zb2xlLmxvZyhzZWxmLnByaWNlLCAn5Lu35qC8JylcbiAgfVxufVxuIl19