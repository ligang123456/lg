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
      navigationBarTitleText: 'music'
    }, _this.data = {
      // src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      // src: 'http://music.163.com/song/media/outer/url?id=476592630.mp3',亡
      // src: 'http://music.163.com/song/media/outer/url?id=26662115.mp3',战
      // src: 'http://music.163.com/song/media/outer/url?id=483671599.mp3',光
      // pic: 'http://img5.imgtn.bdimg.com/it/u=3435509739,602925644&fm=27&gp=0.jpg',
      src: '',
      pic: '',
      apic: '../images/play.png',
      copic: '../images/collect.png',
      title: '',
      music: [],
      play: false,
      collect: false,
      id: 0,
      pauseStatus: false
      // index: ''
    }, _this.methods = {
      collect: function collect() {
        var self = this;
        self.collect = !self.collect;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onRead',
    value: function onRead(e) {
      var self = this;
      // const index = e.currentTarget.id
      // console.log(, 'id') // id
      self.play = !self.play;
      if (self.play) {
        // 使用 wx.createAudioContext 获取 audio 上下文 context
        this.audioCtx = _wepy2.default.createAudioContext('myAudio');
        // this.audioCtx.setSrc('http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46')
        this.audioCtx.play();
        // self.src = music[index].src // 音乐链接地址
        self.pauseStatus = false;
      } else {
        this.audioCtx = _wepy2.default.createAudioContext('myAudio');
        this.audioCtx.pause();
        self.pauseStatus = true;
      }
    }
  }, {
    key: 'onLoad',
    value: function onLoad(data) {
      var self = this;
      self.pauseStatus = true;
      setTimeout(function () {
        self.pauseStatus = false;
        self.setData({ pauseStatus: false });
      }, 3000);
      self.title = data.title; // 歌名
      self.pic = data.pic; // 专辑图片
      var id = data.id;
      console.log(id, 'ID');
      self.music = _list2.default;
      self.music = self.music;
      self.src = self.music[id].src;
      console.log(self.src, 'srccccccccccccccc');
      console.log(data.title, '歌名');
      console.log(self.pic, '专辑图片');
      // 获取系统信息(高度，宽度)
      _wepy2.default.getSystemInfo({
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/play'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXkuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsInBpYyIsImFwaWMiLCJjb3BpYyIsInRpdGxlIiwibXVzaWMiLCJwbGF5IiwiY29sbGVjdCIsImlkIiwicGF1c2VTdGF0dXMiLCJtZXRob2RzIiwic2VsZiIsImUiLCJhdWRpb0N0eCIsImNyZWF0ZUF1ZGlvQ29udGV4dCIsInBhdXNlIiwic2V0VGltZW91dCIsInNldERhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJoZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJ3aWR0aCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLFdBQUssRUFOQTtBQU9MQyxXQUFLLEVBUEE7QUFRTEMsWUFBTSxvQkFSRDtBQVNMQyxhQUFPLHVCQVRGO0FBVUxDLGFBQU8sRUFWRjtBQVdMQyxhQUFPLEVBWEY7QUFZTEMsWUFBTSxLQVpEO0FBYUxDLGVBQVMsS0FiSjtBQWNMQyxVQUFJLENBZEM7QUFlTEMsbUJBQWE7QUFDYjtBQWhCSyxLLFFBa0JQQyxPLEdBQVU7QUFDUkgsYUFEUSxxQkFDRTtBQUNSLFlBQUlJLE9BQU8sSUFBWDtBQUNBQSxhQUFLSixPQUFMLEdBQWUsQ0FBQ0ksS0FBS0osT0FBckI7QUFDRDtBQUpPLEs7Ozs7OzJCQU1ISyxDLEVBQUc7QUFDUixVQUFJRCxPQUFPLElBQVg7QUFDQTtBQUNBO0FBQ0FBLFdBQUtMLElBQUwsR0FBWSxDQUFDSyxLQUFLTCxJQUFsQjtBQUNBLFVBQUlLLEtBQUtMLElBQVQsRUFBZTtBQUNYO0FBQ0YsYUFBS08sUUFBTCxHQUFnQixlQUFLQyxrQkFBTCxDQUF3QixTQUF4QixDQUFoQjtBQUNBO0FBQ0EsYUFBS0QsUUFBTCxDQUFjUCxJQUFkO0FBQ0E7QUFDQUssYUFBS0YsV0FBTCxHQUFtQixLQUFuQjtBQUNELE9BUEQsTUFPTztBQUNMLGFBQUtJLFFBQUwsR0FBZ0IsZUFBS0Msa0JBQUwsQ0FBd0IsU0FBeEIsQ0FBaEI7QUFDQSxhQUFLRCxRQUFMLENBQWNFLEtBQWQ7QUFDQUosYUFBS0YsV0FBTCxHQUFtQixJQUFuQjtBQUNEO0FBQ0Y7OzsyQkFDTVYsSSxFQUFNO0FBQ1gsVUFBSVksT0FBTyxJQUFYO0FBQ0FBLFdBQUtGLFdBQUwsR0FBbUIsSUFBbkI7QUFDQU8saUJBQVcsWUFBVztBQUNwQkwsYUFBS0YsV0FBTCxHQUFtQixLQUFuQjtBQUNBRSxhQUFLTSxPQUFMLENBQWEsRUFBQ1IsYUFBYSxLQUFkLEVBQWI7QUFDRCxPQUhELEVBR0csSUFISDtBQUlBRSxXQUFLUCxLQUFMLEdBQWFMLEtBQUtLLEtBQWxCLENBUFcsQ0FPYTtBQUN4Qk8sV0FBS1YsR0FBTCxHQUFXRixLQUFLRSxHQUFoQixDQVJXLENBUVU7QUFDckIsVUFBSU8sS0FBS1QsS0FBS1MsRUFBZDtBQUNBVSxjQUFRQyxHQUFSLENBQVlYLEVBQVosRUFBZ0IsSUFBaEI7QUFDQUcsV0FBS04sS0FBTDtBQUNBTSxXQUFLTixLQUFMLEdBQWFNLEtBQUtOLEtBQWxCO0FBQ0FNLFdBQUtYLEdBQUwsR0FBV1csS0FBS04sS0FBTCxDQUFXRyxFQUFYLEVBQWVSLEdBQTFCO0FBQ0FrQixjQUFRQyxHQUFSLENBQVlSLEtBQUtYLEdBQWpCLEVBQXNCLG1CQUF0QjtBQUNBa0IsY0FBUUMsR0FBUixDQUFZcEIsS0FBS0ssS0FBakIsRUFBd0IsSUFBeEI7QUFDQWMsY0FBUUMsR0FBUixDQUFZUixLQUFLVixHQUFqQixFQUFzQixNQUF0QjtBQUNDO0FBQ0QscUJBQUttQixhQUFMLENBQW1CO0FBQ2pCQyxlQURpQixtQkFDVEMsR0FEUyxFQUNKO0FBQ1hYLGVBQUtZLE1BQUwsR0FBY0QsSUFBSUUsWUFBbEI7QUFDQWIsZUFBS2MsS0FBTCxHQUFhSCxJQUFJSSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUQ7Ozs7RUF0RWdDLGVBQUtDLEk7O2tCQUFuQi9CLEsiLCJmaWxlIjoicGxheS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IG11c2ljIGZyb20gJy4uL2RhdGEvbGlzdC5qcydcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnbXVzaWMnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICAvLyBzcmM6ICdodHRwOi8vd3Muc3RyZWFtLnFxbXVzaWMucXEuY29tL001MDAwMDFWZnZzSjIxeEZxYi5tcDM/Z3VpZD1mZmZmZmZmZjgyZGVmNGFmNGIxMmIzY2Q5MzM3ZDVlNyZ1aW49MzQ2ODk3MjIwJnZrZXk9NjI5MkY1MUUxRTM4NEUwNkRDQkRDOUFCN0M0OUZENzEzRDYzMkQzMTNBQzQ4NThCQUNCOERERDI5MDY3RDNDNjAxNDgxRDM2RTYyMDUzQkY4REZFQUY3NEMwQTVDQ0ZBREQ2NDcxMTYwQ0FGM0U2QSZmcm9tdGFnPTQ2JyxcbiAgICAvLyBzcmM6ICdodHRwOi8vbXVzaWMuMTYzLmNvbS9zb25nL21lZGlhL291dGVyL3VybD9pZD00NzY1OTI2MzAubXAzJyzkuqFcbiAgICAvLyBzcmM6ICdodHRwOi8vbXVzaWMuMTYzLmNvbS9zb25nL21lZGlhL291dGVyL3VybD9pZD0yNjY2MjExNS5tcDMnLOaImFxuICAgIC8vIHNyYzogJ2h0dHA6Ly9tdXNpYy4xNjMuY29tL3NvbmcvbWVkaWEvb3V0ZXIvdXJsP2lkPTQ4MzY3MTU5OS5tcDMnLOWFiVxuICAgIC8vIHBpYzogJ2h0dHA6Ly9pbWc1LmltZ3RuLmJkaW1nLmNvbS9pdC91PTM0MzU1MDk3MzksNjAyOTI1NjQ0JmZtPTI3JmdwPTAuanBnJyxcbiAgICBzcmM6ICcnLFxuICAgIHBpYzogJycsXG4gICAgYXBpYzogJy4uL2ltYWdlcy9wbGF5LnBuZycsXG4gICAgY29waWM6ICcuLi9pbWFnZXMvY29sbGVjdC5wbmcnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBtdXNpYzogW10sXG4gICAgcGxheTogZmFsc2UsXG4gICAgY29sbGVjdDogZmFsc2UsXG4gICAgaWQ6IDAsXG4gICAgcGF1c2VTdGF0dXM6IGZhbHNlXG4gICAgLy8gaW5kZXg6ICcnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBjb2xsZWN0KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbGxlY3QgPSAhc2VsZi5jb2xsZWN0XG4gICAgfVxuICB9XG4gIG9uUmVhZChlKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgLy8gY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAvLyBjb25zb2xlLmxvZygsICdpZCcpIC8vIGlkXG4gICAgc2VsZi5wbGF5ID0gIXNlbGYucGxheVxuICAgIGlmIChzZWxmLnBsYXkpIHtcbiAgICAgICAgLy8g5L2/55SoIHd4LmNyZWF0ZUF1ZGlvQ29udGV4dCDojrflj5YgYXVkaW8g5LiK5LiL5paHIGNvbnRleHRcbiAgICAgIHRoaXMuYXVkaW9DdHggPSB3ZXB5LmNyZWF0ZUF1ZGlvQ29udGV4dCgnbXlBdWRpbycpXG4gICAgICAvLyB0aGlzLmF1ZGlvQ3R4LnNldFNyYygnaHR0cDovL3dzLnN0cmVhbS5xcW11c2ljLnFxLmNvbS9NNTAwMDAxVmZ2c0oyMXhGcWIubXAzP2d1aWQ9ZmZmZmZmZmY4MmRlZjRhZjRiMTJiM2NkOTMzN2Q1ZTcmdWluPTM0Njg5NzIyMCZ2a2V5PTYyOTJGNTFFMUUzODRFMDZEQ0JEQzlBQjdDNDlGRDcxM0Q2MzJEMzEzQUM0ODU4QkFDQjhEREQyOTA2N0QzQzYwMTQ4MUQzNkU2MjA1M0JGOERGRUFGNzRDMEE1Q0NGQURENjQ3MTE2MENBRjNFNkEmZnJvbXRhZz00NicpXG4gICAgICB0aGlzLmF1ZGlvQ3R4LnBsYXkoKVxuICAgICAgLy8gc2VsZi5zcmMgPSBtdXNpY1tpbmRleF0uc3JjIC8vIOmfs+S5kOmTvuaOpeWcsOWdgFxuICAgICAgc2VsZi5wYXVzZVN0YXR1cyA9IGZhbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXVkaW9DdHggPSB3ZXB5LmNyZWF0ZUF1ZGlvQ29udGV4dCgnbXlBdWRpbycpXG4gICAgICB0aGlzLmF1ZGlvQ3R4LnBhdXNlKClcbiAgICAgIHNlbGYucGF1c2VTdGF0dXMgPSB0cnVlXG4gICAgfVxuICB9XG4gIG9uTG9hZChkYXRhKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5wYXVzZVN0YXR1cyA9IHRydWVcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5wYXVzZVN0YXR1cyA9IGZhbHNlXG4gICAgICBzZWxmLnNldERhdGEoe3BhdXNlU3RhdHVzOiBmYWxzZX0pXG4gICAgfSwgMzAwMClcbiAgICBzZWxmLnRpdGxlID0gZGF0YS50aXRsZSAvLyDmrYzlkI1cbiAgICBzZWxmLnBpYyA9IGRhdGEucGljICAvLyDkuJPovpHlm77niYdcbiAgICBsZXQgaWQgPSBkYXRhLmlkXG4gICAgY29uc29sZS5sb2coaWQsICdJRCcpXG4gICAgc2VsZi5tdXNpYyA9IG11c2ljXG4gICAgc2VsZi5tdXNpYyA9IHNlbGYubXVzaWNcbiAgICBzZWxmLnNyYyA9IHNlbGYubXVzaWNbaWRdLnNyY1xuICAgIGNvbnNvbGUubG9nKHNlbGYuc3JjLCAnc3JjY2NjY2NjY2NjY2NjY2MnKVxuICAgIGNvbnNvbGUubG9nKGRhdGEudGl0bGUsICfmrYzlkI0nKVxuICAgIGNvbnNvbGUubG9nKHNlbGYucGljLCAn5LiT6L6R5Zu+54mHJylcbiAgICAgLy8g6I635Y+W57O757uf5L+h5oGvKOmrmOW6pu+8jOWuveW6pilcbiAgICB3ZXB5LmdldFN5c3RlbUluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=