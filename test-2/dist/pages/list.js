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
      navigationBarTitleText: '歌单',
      navigationBarBackgroundColor: '#FFFAFA'
    }, _this.data = {
      src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      lpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      play: false,
      ppic: '../images/lplay.png',
      fpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      ptext: '播放全部'
    }, _this.methods = {
      play: function play() {
        _wepy2.default.navigateTo({
          url: '../pages/play'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'on',
    value: function on(e) {
      var self = this;
      self.play = !self.play;
      if (self.play) {
        // 使用 wx.createAudioContext 获取 audio 上下文 context
        this.audioCtx = _wepy2.default.createAudioContext('myAudio');
        // this.audioCtx.setSrc('http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46')
        this.audioCtx.play();
      } else {
        this.audioCtx.pause();
      }
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/list'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsImRhdGEiLCJzcmMiLCJscGljIiwicGxheSIsInBwaWMiLCJmcGljIiwicHRleHQiLCJtZXRob2RzIiwibmF2aWdhdGVUbyIsInVybCIsImUiLCJzZWxmIiwiYXVkaW9DdHgiLCJjcmVhdGVBdWRpb0NvbnRleHQiLCJwYXVzZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixJQURqQjtBQUVQQyxvQ0FBOEI7QUFGdkIsSyxRQUlUQyxJLEdBQU87QUFDTEMsV0FBSyw2T0FEQTtBQUVMQyxZQUNFLHdFQUhHO0FBSUxDLFlBQU0sS0FKRDtBQUtMQyxZQUFNLHFCQUxEO0FBTUxDLFlBQ0Usd0VBUEc7QUFRTEMsYUFBTztBQVJGLEssUUFVUEMsTyxHQUFVO0FBQ1JKLFVBRFEsa0JBQ0Q7QUFDTCx1QkFBS0ssVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7O3VCQVFQQyxDLEVBQUc7QUFDSixVQUFJQyxPQUFPLElBQVg7QUFDQUEsV0FBS1IsSUFBTCxHQUFZLENBQUNRLEtBQUtSLElBQWxCO0FBQ0EsVUFBSVEsS0FBS1IsSUFBVCxFQUFlO0FBQ1g7QUFDRixhQUFLUyxRQUFMLEdBQWdCLGVBQUtDLGtCQUFMLENBQXdCLFNBQXhCLENBQWhCO0FBQ0E7QUFDQSxhQUFLRCxRQUFMLENBQWNULElBQWQ7QUFDRCxPQUxELE1BS087QUFDTCxhQUFLUyxRQUFMLENBQWNFLEtBQWQ7QUFDRDtBQUNGOzs7O0VBbENnQyxlQUFLQyxJOztrQkFBbkJuQixLIiwiZmlsZSI6Imxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5q2M5Y2VJyxcbiAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnI0ZGRkFGQSdcbiAgfVxuICBkYXRhID0ge1xuICAgIHNyYzogJ2h0dHA6Ly93cy5zdHJlYW0ucXFtdXNpYy5xcS5jb20vTTUwMDAwMVZmdnNKMjF4RnFiLm1wMz9ndWlkPWZmZmZmZmZmODJkZWY0YWY0YjEyYjNjZDkzMzdkNWU3JnVpbj0zNDY4OTcyMjAmdmtleT02MjkyRjUxRTFFMzg0RTA2RENCREM5QUI3QzQ5RkQ3MTNENjMyRDMxM0FDNDg1OEJBQ0I4REREMjkwNjdEM0M2MDE0ODFEMzZFNjIwNTNCRjhERkVBRjc0QzBBNUNDRkFERDY0NzExNjBDQUYzRTZBJmZyb210YWc9NDYnLFxuICAgIGxwaWM6XG4gICAgICAnaHR0cDovL2ltZzQuaW1ndG4uYmRpbWcuY29tL2l0L3U9NDEwMTQwNDE0MiwzMDM2MzQzMDUyJmZtPTIwMCZncD0wLmpwZycsXG4gICAgcGxheTogZmFsc2UsXG4gICAgcHBpYzogJy4uL2ltYWdlcy9scGxheS5wbmcnLFxuICAgIGZwaWM6XG4gICAgICAnaHR0cDovL2ltZzQuaW1ndG4uYmRpbWcuY29tL2l0L3U9NDEwMTQwNDE0MiwzMDM2MzQzMDUyJmZtPTIwMCZncD0wLmpwZycsXG4gICAgcHRleHQ6ICfmkq3mlL7lhajpg6gnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBwbGF5KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvcGxheSdcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgb24oZSkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYucGxheSA9ICFzZWxmLnBsYXlcbiAgICBpZiAoc2VsZi5wbGF5KSB7XG4gICAgICAgIC8vIOS9v+eUqCB3eC5jcmVhdGVBdWRpb0NvbnRleHQg6I635Y+WIGF1ZGlvIOS4iuS4i+aWhyBjb250ZXh0XG4gICAgICB0aGlzLmF1ZGlvQ3R4ID0gd2VweS5jcmVhdGVBdWRpb0NvbnRleHQoJ215QXVkaW8nKVxuICAgICAgLy8gdGhpcy5hdWRpb0N0eC5zZXRTcmMoJ2h0dHA6Ly93cy5zdHJlYW0ucXFtdXNpYy5xcS5jb20vTTUwMDAwMVZmdnNKMjF4RnFiLm1wMz9ndWlkPWZmZmZmZmZmODJkZWY0YWY0YjEyYjNjZDkzMzdkNWU3JnVpbj0zNDY4OTcyMjAmdmtleT02MjkyRjUxRTFFMzg0RTA2RENCREM5QUI3QzQ5RkQ3MTNENjMyRDMxM0FDNDg1OEJBQ0I4REREMjkwNjdEM0M2MDE0ODFEMzZFNjIwNTNCRjhERkVBRjc0QzBBNUNDRkFERDY0NzExNjBDQUYzRTZBJmZyb210YWc9NDYnKVxuICAgICAgdGhpcy5hdWRpb0N0eC5wbGF5KClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hdWRpb0N0eC5wYXVzZSgpXG4gICAgfVxuICB9XG59XG4iXX0=