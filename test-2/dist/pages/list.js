'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _list = require('./../data/list.js');

var _list2 = _interopRequireDefault(_list);

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
      navigationBarTitleText: '歌单',
      navigationBarBackgroundColor: '#FFFAFA'
    }, _this.data = {
      // src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      src: '',
      lpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      // play: false,
      // ppic: '../images/lplay.png',
      // pic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      // ptext: '播放全部',
      music: []
    }, _this.methods = {
      play: function play(e) {
        var index = e.currentTarget.id;
        console.log(index, 'list.wpy');
        _wepy2.default.navigateTo({
          // url: '../pages/play'
          url: './play?pic=' + _list2.default[index].pic + '&title=' + _list2.default[index].name + '&id=' + index
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',


    // onReady(e) {
    //   let self = this
    //   const index = e.currentTarget.id
    //   this.audioCtx = wepy.createAudioContext('myAudio')
    //     // this.audioCtx.setSrc('http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46')
    //   this.audioCtx.play()
    //   console.log(self.music, '111')
    //   wepy.navigateTo({
    //       // url: '../pages/play'
    //       url: `./play?pic=${music[index].pic}&title=${music[index].name}&src=${music[index].src}`
    //     })
    //   // let self = this
    //   // self.play = !self.play
    //   // if (self.play) {
    //   //     // 使用 wx.createAudioContext 获取 audio 上下文 context
    //   //   this.audioCtx = wepy.createAudioContext('myAudio')
    //   //   // this.audioCtx.setSrc('http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46')
    //   //   this.audioCtx.play()
    //   // } else {
    //   //   this.audioCtx.pause()
    //   // }
    //   // wepy.playBackgroundAudio({
    //   //   dataUrl: 'http://music.163.com/song/media/outer/url?id=26662115.mp3',
    //   //   title: 'The Dawn (亡灵序曲完美钢琴版) [Cover Dreamtale]',
    //   //   singer: 'Mike Zhou',
    //   //   // 图片地址地址
    //   //   coverImgUrl: 'http://pic.baike.soso.com/ugc/baikepic2/26301/20170823205318-1534206785_jpg_300_225_10953.jpg/300'
    //   // })
    // }
    value: function onLoad() {
      var self = this;
      self.music = _list2.default;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsImRhdGEiLCJzcmMiLCJscGljIiwibXVzaWMiLCJtZXRob2RzIiwicGxheSIsImUiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGljIiwibmFtZSIsInNlbGYiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixJQURqQjtBQUVQQyxvQ0FBOEI7QUFGdkIsSyxRQUlUQyxJLEdBQU87QUFDTDtBQUNBQyxXQUFLLEVBRkE7QUFHTEMsWUFBTSx3RUFIRDtBQUlMO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLGFBQU87QUFSRixLLFFBVVBDLE8sR0FBVTtBQUNSQyxVQURRLGdCQUNIQyxDQURHLEVBQ0E7QUFDTixZQUFNQyxRQUFRRCxFQUFFRSxhQUFGLENBQWdCQyxFQUE5QjtBQUNBQyxnQkFBUUMsR0FBUixDQUFZSixLQUFaLEVBQW1CLFVBQW5CO0FBQ0EsdUJBQUtLLFVBQUwsQ0FBZ0I7QUFDZDtBQUNBQywrQkFBbUIsZUFBTU4sS0FBTixFQUFhTyxHQUFoQyxlQUE2QyxlQUFNUCxLQUFOLEVBQWFRLElBQTFELFlBQXFFUjtBQUZ2RCxTQUFoQjtBQUlEO0FBUk8sSzs7Ozs7OztBQVdWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7NkJBQ1M7QUFDUCxVQUFJUyxPQUFPLElBQVg7QUFDQUEsV0FBS2IsS0FBTDtBQUNEOzs7O0VBMURnQyxlQUFLYyxJOztrQkFBbkJyQixLIiwiZmlsZSI6Imxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBtdXNpYyBmcm9tICcuLi9kYXRhL2xpc3QuanMnXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+atjOWNlScsXG4gICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNGRkZBRkEnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICAvLyBzcmM6ICdodHRwOi8vd3Muc3RyZWFtLnFxbXVzaWMucXEuY29tL001MDAwMDFWZnZzSjIxeEZxYi5tcDM/Z3VpZD1mZmZmZmZmZjgyZGVmNGFmNGIxMmIzY2Q5MzM3ZDVlNyZ1aW49MzQ2ODk3MjIwJnZrZXk9NjI5MkY1MUUxRTM4NEUwNkRDQkRDOUFCN0M0OUZENzEzRDYzMkQzMTNBQzQ4NThCQUNCOERERDI5MDY3RDNDNjAxNDgxRDM2RTYyMDUzQkY4REZFQUY3NEMwQTVDQ0ZBREQ2NDcxMTYwQ0FGM0U2QSZmcm9tdGFnPTQ2JyxcbiAgICBzcmM6ICcnLFxuICAgIGxwaWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICAvLyBwbGF5OiBmYWxzZSxcbiAgICAvLyBwcGljOiAnLi4vaW1hZ2VzL2xwbGF5LnBuZycsXG4gICAgLy8gcGljOiAnaHR0cDovL2ltZzQuaW1ndG4uYmRpbWcuY29tL2l0L3U9NDEwMTQwNDE0MiwzMDM2MzQzMDUyJmZtPTIwMCZncD0wLmpwZycsXG4gICAgLy8gcHRleHQ6ICfmkq3mlL7lhajpg6gnLFxuICAgIG11c2ljOiBbXVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgcGxheShlKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGUuY3VycmVudFRhcmdldC5pZFxuICAgICAgY29uc29sZS5sb2coaW5kZXgsICdsaXN0LndweScpXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAvLyB1cmw6ICcuLi9wYWdlcy9wbGF5J1xuICAgICAgICB1cmw6IGAuL3BsYXk/cGljPSR7bXVzaWNbaW5kZXhdLnBpY30mdGl0bGU9JHttdXNpY1tpbmRleF0ubmFtZX0maWQ9JHtpbmRleH1gXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIG9uUmVhZHkoZSkge1xuICAvLyAgIGxldCBzZWxmID0gdGhpc1xuICAvLyAgIGNvbnN0IGluZGV4ID0gZS5jdXJyZW50VGFyZ2V0LmlkXG4gIC8vICAgdGhpcy5hdWRpb0N0eCA9IHdlcHkuY3JlYXRlQXVkaW9Db250ZXh0KCdteUF1ZGlvJylcbiAgLy8gICAgIC8vIHRoaXMuYXVkaW9DdHguc2V0U3JjKCdodHRwOi8vd3Muc3RyZWFtLnFxbXVzaWMucXEuY29tL001MDAwMDFWZnZzSjIxeEZxYi5tcDM/Z3VpZD1mZmZmZmZmZjgyZGVmNGFmNGIxMmIzY2Q5MzM3ZDVlNyZ1aW49MzQ2ODk3MjIwJnZrZXk9NjI5MkY1MUUxRTM4NEUwNkRDQkRDOUFCN0M0OUZENzEzRDYzMkQzMTNBQzQ4NThCQUNCOERERDI5MDY3RDNDNjAxNDgxRDM2RTYyMDUzQkY4REZFQUY3NEMwQTVDQ0ZBREQ2NDcxMTYwQ0FGM0U2QSZmcm9tdGFnPTQ2JylcbiAgLy8gICB0aGlzLmF1ZGlvQ3R4LnBsYXkoKVxuICAvLyAgIGNvbnNvbGUubG9nKHNlbGYubXVzaWMsICcxMTEnKVxuICAvLyAgIHdlcHkubmF2aWdhdGVUbyh7XG4gIC8vICAgICAgIC8vIHVybDogJy4uL3BhZ2VzL3BsYXknXG4gIC8vICAgICAgIHVybDogYC4vcGxheT9waWM9JHttdXNpY1tpbmRleF0ucGljfSZ0aXRsZT0ke211c2ljW2luZGV4XS5uYW1lfSZzcmM9JHttdXNpY1tpbmRleF0uc3JjfWBcbiAgLy8gICAgIH0pXG4gIC8vICAgLy8gbGV0IHNlbGYgPSB0aGlzXG4gIC8vICAgLy8gc2VsZi5wbGF5ID0gIXNlbGYucGxheVxuICAvLyAgIC8vIGlmIChzZWxmLnBsYXkpIHtcbiAgLy8gICAvLyAgICAgLy8g5L2/55SoIHd4LmNyZWF0ZUF1ZGlvQ29udGV4dCDojrflj5YgYXVkaW8g5LiK5LiL5paHIGNvbnRleHRcbiAgLy8gICAvLyAgIHRoaXMuYXVkaW9DdHggPSB3ZXB5LmNyZWF0ZUF1ZGlvQ29udGV4dCgnbXlBdWRpbycpXG4gIC8vICAgLy8gICAvLyB0aGlzLmF1ZGlvQ3R4LnNldFNyYygnaHR0cDovL3dzLnN0cmVhbS5xcW11c2ljLnFxLmNvbS9NNTAwMDAxVmZ2c0oyMXhGcWIubXAzP2d1aWQ9ZmZmZmZmZmY4MmRlZjRhZjRiMTJiM2NkOTMzN2Q1ZTcmdWluPTM0Njg5NzIyMCZ2a2V5PTYyOTJGNTFFMUUzODRFMDZEQ0JEQzlBQjdDNDlGRDcxM0Q2MzJEMzEzQUM0ODU4QkFDQjhEREQyOTA2N0QzQzYwMTQ4MUQzNkU2MjA1M0JGOERGRUFGNzRDMEE1Q0NGQURENjQ3MTE2MENBRjNFNkEmZnJvbXRhZz00NicpXG4gIC8vICAgLy8gICB0aGlzLmF1ZGlvQ3R4LnBsYXkoKVxuICAvLyAgIC8vIH0gZWxzZSB7XG4gIC8vICAgLy8gICB0aGlzLmF1ZGlvQ3R4LnBhdXNlKClcbiAgLy8gICAvLyB9XG4gIC8vICAgLy8gd2VweS5wbGF5QmFja2dyb3VuZEF1ZGlvKHtcbiAgLy8gICAvLyAgIGRhdGFVcmw6ICdodHRwOi8vbXVzaWMuMTYzLmNvbS9zb25nL21lZGlhL291dGVyL3VybD9pZD0yNjY2MjExNS5tcDMnLFxuICAvLyAgIC8vICAgdGl0bGU6ICdUaGUgRGF3biAo5Lqh54G15bqP5puy5a6M576O6ZKi55C054mIKSBbQ292ZXIgRHJlYW10YWxlXScsXG4gIC8vICAgLy8gICBzaW5nZXI6ICdNaWtlIFpob3UnLFxuICAvLyAgIC8vICAgLy8g5Zu+54mH5Zyw5Z2A5Zyw5Z2AXG4gIC8vICAgLy8gICBjb3ZlckltZ1VybDogJ2h0dHA6Ly9waWMuYmFpa2Uuc29zby5jb20vdWdjL2JhaWtlcGljMi8yNjMwMS8yMDE3MDgyMzIwNTMxOC0xNTM0MjA2Nzg1X2pwZ18zMDBfMjI1XzEwOTUzLmpwZy8zMDAnXG4gIC8vICAgLy8gfSlcbiAgLy8gfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5tdXNpYyA9IG11c2ljXG4gIH1cbn1cbiJdfQ==