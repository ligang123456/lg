'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
      navigationBarTitleText: '此时此刻'
    }, _this.data = {
      mpic: 'http://img5.imgtn.bdimg.com/it/u=869965892,773933343&fm=27&gp=0.jpg',
      name: '此时此刻',
      author: '许巍',
      src: '',
      pic: 'http://img5.imgtn.bdimg.com/it/u=3435509739,602925644&fm=27&gp=0.jpg',
      apic: '../images/播放.png',
      rpic: false
    }, _this.methods = {
      onReady: function onReady(e) {
        // 使用 wx.createAudioContext 获取 audio 上下文 context
        this.audioCtx = _wepy2.default.createAudioContext('myAudio');
        this.audioCtx.setSrc('http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46');
        this.audioCtx.play();
        var self = this;
        self.rpic = !self.rpic;
        // self.lacollect = '../images/收藏-选中.png'
        if (self.rpic) {
          this.audioCtx.play();
        } else {
          this.audioCtx.pause();
        }
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJtcGljIiwibmFtZSIsImF1dGhvciIsInNyYyIsInBpYyIsImFwaWMiLCJycGljIiwibWV0aG9kcyIsIm9uUmVhZHkiLCJlIiwiYXVkaW9DdHgiLCJjcmVhdGVBdWRpb0NvbnRleHQiLCJzZXRTcmMiLCJwbGF5Iiwic2VsZiIsInBhdXNlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxZQUFNLHFFQUREO0FBRUxDLFlBQU0sTUFGRDtBQUdMQyxjQUFRLElBSEg7QUFJTEMsV0FBSyxFQUpBO0FBS0xDLFdBQUssc0VBTEE7QUFNTEMsWUFBTSxrQkFORDtBQU9MQyxZQUFNO0FBUEQsSyxRQVNQQyxPLEdBQVU7QUFDUkMsYUFEUSxtQkFDQUMsQ0FEQSxFQUNHO0FBQ1Q7QUFDQSxhQUFLQyxRQUFMLEdBQWdCLGVBQUtDLGtCQUFMLENBQXdCLFNBQXhCLENBQWhCO0FBQ0EsYUFBS0QsUUFBTCxDQUFjRSxNQUFkLENBQXFCLDZPQUFyQjtBQUNBLGFBQUtGLFFBQUwsQ0FBY0csSUFBZDtBQUNBLFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLUixJQUFMLEdBQVksQ0FBQ1EsS0FBS1IsSUFBbEI7QUFDQTtBQUNBLFlBQUlRLEtBQUtSLElBQVQsRUFBZTtBQUNiLGVBQUtJLFFBQUwsQ0FBY0csSUFBZDtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtILFFBQUwsQ0FBY0ssS0FBZDtBQUNEO0FBQ0Y7QUFkTyxLOzs7O0VBYnVCLGVBQUtDLEk7O2tCQUFuQnBCLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5q2k5pe25q2k5Yi7J1xuICB9XG4gIGRhdGEgPSB7XG4gICAgbXBpYzogJ2h0dHA6Ly9pbWc1LmltZ3RuLmJkaW1nLmNvbS9pdC91PTg2OTk2NTg5Miw3NzM5MzMzNDMmZm09MjcmZ3A9MC5qcGcnLFxuICAgIG5hbWU6ICfmraTml7bmraTliLsnLFxuICAgIGF1dGhvcjogJ+iuuOW3jScsXG4gICAgc3JjOiAnJyxcbiAgICBwaWM6ICdodHRwOi8vaW1nNS5pbWd0bi5iZGltZy5jb20vaXQvdT0zNDM1NTA5NzM5LDYwMjkyNTY0NCZmbT0yNyZncD0wLmpwZycsXG4gICAgYXBpYzogJy4uL2ltYWdlcy/mkq3mlL4ucG5nJyxcbiAgICBycGljOiBmYWxzZVxuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgb25SZWFkeShlKSB7XG4gICAgICAvLyDkvb/nlKggd3guY3JlYXRlQXVkaW9Db250ZXh0IOiOt+WPliBhdWRpbyDkuIrkuIvmlocgY29udGV4dFxuICAgICAgdGhpcy5hdWRpb0N0eCA9IHdlcHkuY3JlYXRlQXVkaW9Db250ZXh0KCdteUF1ZGlvJylcbiAgICAgIHRoaXMuYXVkaW9DdHguc2V0U3JjKCdodHRwOi8vd3Muc3RyZWFtLnFxbXVzaWMucXEuY29tL001MDAwMDFWZnZzSjIxeEZxYi5tcDM/Z3VpZD1mZmZmZmZmZjgyZGVmNGFmNGIxMmIzY2Q5MzM3ZDVlNyZ1aW49MzQ2ODk3MjIwJnZrZXk9NjI5MkY1MUUxRTM4NEUwNkRDQkRDOUFCN0M0OUZENzEzRDYzMkQzMTNBQzQ4NThCQUNCOERERDI5MDY3RDNDNjAxNDgxRDM2RTYyMDUzQkY4REZFQUY3NEMwQTVDQ0ZBREQ2NDcxMTYwQ0FGM0U2QSZmcm9tdGFnPTQ2JylcbiAgICAgIHRoaXMuYXVkaW9DdHgucGxheSgpXG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYucnBpYyA9ICFzZWxmLnJwaWNcbiAgICAgIC8vIHNlbGYubGFjb2xsZWN0ID0gJy4uL2ltYWdlcy/mlLbol48t6YCJ5LitLnBuZydcbiAgICAgIGlmIChzZWxmLnJwaWMpIHtcbiAgICAgICAgdGhpcy5hdWRpb0N0eC5wbGF5KClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXVkaW9DdHgucGF1c2UoKVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19