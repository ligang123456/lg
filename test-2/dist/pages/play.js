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
      navigationBarTitleText: 'music'
    }, _this.data = {
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      pic: 'http://img5.imgtn.bdimg.com/it/u=3435509739,602925644&fm=27&gp=0.jpg',
      apic: '../images/play.png',
      copic: '../images/collect.png',
      play: false,
      collect: false
    }, _this.methods = {
      collect: function collect() {
        var self = this;
        self.collect = !self.collect;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onReady',
    value: function onReady(e) {
      var self = this;
      self.play = !self.play;
      if (self.play) {
        // 使用 wx.createAudioContext 获取 audio 上下文 context
        this.audioCtx = _wepy2.default.createAudioContext('myAudio');
        // this.audioCtx.setSrc('http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46')
        this.audioCtx.play();
        self.pauseStatus = false;
      } else {
        this.audioCtx.pause();
        self.pauseStatus = true;
      }
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.pauseStatus = true;
      setTimeout(function () {
        self.pauseStatus = false;
        self.setData({ pauseStatus: false });
      }, 2000);
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/play'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXkuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsInBpYyIsImFwaWMiLCJjb3BpYyIsInBsYXkiLCJjb2xsZWN0IiwibWV0aG9kcyIsInNlbGYiLCJlIiwiYXVkaW9DdHgiLCJjcmVhdGVBdWRpb0NvbnRleHQiLCJwYXVzZVN0YXR1cyIsInBhdXNlIiwic2V0VGltZW91dCIsInNldERhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsV0FBSyw2T0FEQTtBQUVMQyxXQUFLLHNFQUZBO0FBR0xDLFlBQU0sb0JBSEQ7QUFJTEMsYUFBTyx1QkFKRjtBQUtMQyxZQUFNLEtBTEQ7QUFNTEMsZUFBUztBQU5KLEssUUFRUEMsTyxHQUFVO0FBQ1JELGFBRFEscUJBQ0U7QUFDUixZQUFJRSxPQUFPLElBQVg7QUFDQUEsYUFBS0YsT0FBTCxHQUFlLENBQUNFLEtBQUtGLE9BQXJCO0FBQ0Q7QUFKTyxLOzs7Ozs0QkFNRkcsQyxFQUFHO0FBQ1QsVUFBSUQsT0FBTyxJQUFYO0FBQ0FBLFdBQUtILElBQUwsR0FBWSxDQUFDRyxLQUFLSCxJQUFsQjtBQUNBLFVBQUlHLEtBQUtILElBQVQsRUFBZTtBQUNYO0FBQ0YsYUFBS0ssUUFBTCxHQUFnQixlQUFLQyxrQkFBTCxDQUF3QixTQUF4QixDQUFoQjtBQUNBO0FBQ0EsYUFBS0QsUUFBTCxDQUFjTCxJQUFkO0FBQ0FHLGFBQUtJLFdBQUwsR0FBbUIsS0FBbkI7QUFDRCxPQU5ELE1BTU87QUFDTCxhQUFLRixRQUFMLENBQWNHLEtBQWQ7QUFDQUwsYUFBS0ksV0FBTCxHQUFtQixJQUFuQjtBQUNEO0FBQ0Y7Ozs2QkFDUTtBQUNQLFVBQUlKLE9BQU8sSUFBWDtBQUNBQSxXQUFLSSxXQUFMLEdBQW1CLElBQW5CO0FBQ0FFLGlCQUFXLFlBQVc7QUFDcEJOLGFBQUtJLFdBQUwsR0FBbUIsS0FBbkI7QUFDQUosYUFBS08sT0FBTCxDQUFhLEVBQUNILGFBQWEsS0FBZCxFQUFiO0FBQ0QsT0FIRCxFQUdHLElBSEg7QUFJRDs7OztFQXZDZ0MsZUFBS0ksSTs7a0JBQW5CbkIsSyIsImZpbGUiOiJwbGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ211c2ljJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgc3JjOiAnaHR0cDovL3dzLnN0cmVhbS5xcW11c2ljLnFxLmNvbS9NNTAwMDAxVmZ2c0oyMXhGcWIubXAzP2d1aWQ9ZmZmZmZmZmY4MmRlZjRhZjRiMTJiM2NkOTMzN2Q1ZTcmdWluPTM0Njg5NzIyMCZ2a2V5PTYyOTJGNTFFMUUzODRFMDZEQ0JEQzlBQjdDNDlGRDcxM0Q2MzJEMzEzQUM0ODU4QkFDQjhEREQyOTA2N0QzQzYwMTQ4MUQzNkU2MjA1M0JGOERGRUFGNzRDMEE1Q0NGQURENjQ3MTE2MENBRjNFNkEmZnJvbXRhZz00NicsXG4gICAgcGljOiAnaHR0cDovL2ltZzUuaW1ndG4uYmRpbWcuY29tL2l0L3U9MzQzNTUwOTczOSw2MDI5MjU2NDQmZm09MjcmZ3A9MC5qcGcnLFxuICAgIGFwaWM6ICcuLi9pbWFnZXMvcGxheS5wbmcnLFxuICAgIGNvcGljOiAnLi4vaW1hZ2VzL2NvbGxlY3QucG5nJyxcbiAgICBwbGF5OiBmYWxzZSxcbiAgICBjb2xsZWN0OiBmYWxzZVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY29sbGVjdCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xsZWN0ID0gIXNlbGYuY29sbGVjdFxuICAgIH1cbiAgfVxuICBvblJlYWR5KGUpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnBsYXkgPSAhc2VsZi5wbGF5XG4gICAgaWYgKHNlbGYucGxheSkge1xuICAgICAgICAvLyDkvb/nlKggd3guY3JlYXRlQXVkaW9Db250ZXh0IOiOt+WPliBhdWRpbyDkuIrkuIvmlocgY29udGV4dFxuICAgICAgdGhpcy5hdWRpb0N0eCA9IHdlcHkuY3JlYXRlQXVkaW9Db250ZXh0KCdteUF1ZGlvJylcbiAgICAgIC8vIHRoaXMuYXVkaW9DdHguc2V0U3JjKCdodHRwOi8vd3Muc3RyZWFtLnFxbXVzaWMucXEuY29tL001MDAwMDFWZnZzSjIxeEZxYi5tcDM/Z3VpZD1mZmZmZmZmZjgyZGVmNGFmNGIxMmIzY2Q5MzM3ZDVlNyZ1aW49MzQ2ODk3MjIwJnZrZXk9NjI5MkY1MUUxRTM4NEUwNkRDQkRDOUFCN0M0OUZENzEzRDYzMkQzMTNBQzQ4NThCQUNCOERERDI5MDY3RDNDNjAxNDgxRDM2RTYyMDUzQkY4REZFQUY3NEMwQTVDQ0ZBREQ2NDcxMTYwQ0FGM0U2QSZmcm9tdGFnPTQ2JylcbiAgICAgIHRoaXMuYXVkaW9DdHgucGxheSgpXG4gICAgICBzZWxmLnBhdXNlU3RhdHVzID0gZmFsc2VcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdWRpb0N0eC5wYXVzZSgpXG4gICAgICBzZWxmLnBhdXNlU3RhdHVzID0gdHJ1ZVxuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5wYXVzZVN0YXR1cyA9IHRydWVcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgc2VsZi5wYXVzZVN0YXR1cyA9IGZhbHNlXG4gICAgICBzZWxmLnNldERhdGEoe3BhdXNlU3RhdHVzOiBmYWxzZX0pXG4gICAgfSwgMjAwMClcbiAgfVxufVxuIl19