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
      // src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      src: 'http://ac-5g9r20ds.clouddn.com/e54ad7f0a834b9c07ec6.mp3',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXkuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsInBpYyIsImFwaWMiLCJjb3BpYyIsInBsYXkiLCJjb2xsZWN0IiwibWV0aG9kcyIsInNlbGYiLCJlIiwiYXVkaW9DdHgiLCJjcmVhdGVBdWRpb0NvbnRleHQiLCJwYXVzZVN0YXR1cyIsInBhdXNlIiwic2V0VGltZW91dCIsInNldERhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTDtBQUNBQyxXQUFLLHlEQUZBO0FBR0xDLFdBQUssc0VBSEE7QUFJTEMsWUFBTSxvQkFKRDtBQUtMQyxhQUFPLHVCQUxGO0FBTUxDLFlBQU0sS0FORDtBQU9MQyxlQUFTO0FBUEosSyxRQVNQQyxPLEdBQVU7QUFDUkQsYUFEUSxxQkFDRTtBQUNSLFlBQUlFLE9BQU8sSUFBWDtBQUNBQSxhQUFLRixPQUFMLEdBQWUsQ0FBQ0UsS0FBS0YsT0FBckI7QUFDRDtBQUpPLEs7Ozs7OzRCQU1GRyxDLEVBQUc7QUFDVCxVQUFJRCxPQUFPLElBQVg7QUFDQUEsV0FBS0gsSUFBTCxHQUFZLENBQUNHLEtBQUtILElBQWxCO0FBQ0EsVUFBSUcsS0FBS0gsSUFBVCxFQUFlO0FBQ1g7QUFDRixhQUFLSyxRQUFMLEdBQWdCLGVBQUtDLGtCQUFMLENBQXdCLFNBQXhCLENBQWhCO0FBQ0E7QUFDQSxhQUFLRCxRQUFMLENBQWNMLElBQWQ7QUFDQUcsYUFBS0ksV0FBTCxHQUFtQixLQUFuQjtBQUNELE9BTkQsTUFNTztBQUNMLGFBQUtGLFFBQUwsQ0FBY0csS0FBZDtBQUNBTCxhQUFLSSxXQUFMLEdBQW1CLElBQW5CO0FBQ0Q7QUFDRjs7OzZCQUNRO0FBQ1AsVUFBSUosT0FBTyxJQUFYO0FBQ0FBLFdBQUtJLFdBQUwsR0FBbUIsSUFBbkI7QUFDQUUsaUJBQVcsWUFBVztBQUNwQk4sYUFBS0ksV0FBTCxHQUFtQixLQUFuQjtBQUNBSixhQUFLTyxPQUFMLENBQWEsRUFBQ0gsYUFBYSxLQUFkLEVBQWI7QUFDRCxPQUhELEVBR0csSUFISDtBQUlEOzs7O0VBeENnQyxlQUFLSSxJOztrQkFBbkJuQixLIiwiZmlsZSI6InBsYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnbXVzaWMnXG4gIH1cbiAgZGF0YSA9IHtcbiAgICAvLyBzcmM6ICdodHRwOi8vd3Muc3RyZWFtLnFxbXVzaWMucXEuY29tL001MDAwMDFWZnZzSjIxeEZxYi5tcDM/Z3VpZD1mZmZmZmZmZjgyZGVmNGFmNGIxMmIzY2Q5MzM3ZDVlNyZ1aW49MzQ2ODk3MjIwJnZrZXk9NjI5MkY1MUUxRTM4NEUwNkRDQkRDOUFCN0M0OUZENzEzRDYzMkQzMTNBQzQ4NThCQUNCOERERDI5MDY3RDNDNjAxNDgxRDM2RTYyMDUzQkY4REZFQUY3NEMwQTVDQ0ZBREQ2NDcxMTYwQ0FGM0U2QSZmcm9tdGFnPTQ2JyxcbiAgICBzcmM6ICdodHRwOi8vYWMtNWc5cjIwZHMuY2xvdWRkbi5jb20vZTU0YWQ3ZjBhODM0YjljMDdlYzYubXAzJyxcbiAgICBwaWM6ICdodHRwOi8vaW1nNS5pbWd0bi5iZGltZy5jb20vaXQvdT0zNDM1NTA5NzM5LDYwMjkyNTY0NCZmbT0yNyZncD0wLmpwZycsXG4gICAgYXBpYzogJy4uL2ltYWdlcy9wbGF5LnBuZycsXG4gICAgY29waWM6ICcuLi9pbWFnZXMvY29sbGVjdC5wbmcnLFxuICAgIHBsYXk6IGZhbHNlLFxuICAgIGNvbGxlY3Q6IGZhbHNlXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBjb2xsZWN0KCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNvbGxlY3QgPSAhc2VsZi5jb2xsZWN0XG4gICAgfVxuICB9XG4gIG9uUmVhZHkoZSkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYucGxheSA9ICFzZWxmLnBsYXlcbiAgICBpZiAoc2VsZi5wbGF5KSB7XG4gICAgICAgIC8vIOS9v+eUqCB3eC5jcmVhdGVBdWRpb0NvbnRleHQg6I635Y+WIGF1ZGlvIOS4iuS4i+aWhyBjb250ZXh0XG4gICAgICB0aGlzLmF1ZGlvQ3R4ID0gd2VweS5jcmVhdGVBdWRpb0NvbnRleHQoJ215QXVkaW8nKVxuICAgICAgLy8gdGhpcy5hdWRpb0N0eC5zZXRTcmMoJ2h0dHA6Ly93cy5zdHJlYW0ucXFtdXNpYy5xcS5jb20vTTUwMDAwMVZmdnNKMjF4RnFiLm1wMz9ndWlkPWZmZmZmZmZmODJkZWY0YWY0YjEyYjNjZDkzMzdkNWU3JnVpbj0zNDY4OTcyMjAmdmtleT02MjkyRjUxRTFFMzg0RTA2RENCREM5QUI3QzQ5RkQ3MTNENjMyRDMxM0FDNDg1OEJBQ0I4REREMjkwNjdEM0M2MDE0ODFEMzZFNjIwNTNCRjhERkVBRjc0QzBBNUNDRkFERDY0NzExNjBDQUYzRTZBJmZyb210YWc9NDYnKVxuICAgICAgdGhpcy5hdWRpb0N0eC5wbGF5KClcbiAgICAgIHNlbGYucGF1c2VTdGF0dXMgPSBmYWxzZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmF1ZGlvQ3R4LnBhdXNlKClcbiAgICAgIHNlbGYucGF1c2VTdGF0dXMgPSB0cnVlXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnBhdXNlU3RhdHVzID0gdHJ1ZVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLnBhdXNlU3RhdHVzID0gZmFsc2VcbiAgICAgIHNlbGYuc2V0RGF0YSh7cGF1c2VTdGF0dXM6IGZhbHNlfSlcbiAgICB9LCAyMDAwKVxuICB9XG59XG4iXX0=