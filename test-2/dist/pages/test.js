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
      navigationBarTitleText: '歌单',
      navigationBarBackgroundColor: '#FFFAFA'
    }, _this.methods = {
      // var app = getApp()
      // 播放
      listenerButtonPlay: function listenerButtonPlay() {
        _wepy2.default.playBackgroundAudio({
          dataUrl: 'http://ws.stream.qqmusic.qq.com/5106429.m4a?fromtag=46',
          title: '薛之谦',
          // 图片地址地址
          coverImgUrl: 'http://i.gtimg.cn/music/photo/mid_album_90/a/F/000QgFcm0v8WaF.jpg'
        });
      },

      // 监听button暂停按钮
      listenerButtonPause: function listenerButtonPause() {
        _wepy2.default.pauseBackgroundAudio({});
        console.log('暂停播放');
      },

      /**
       * 播放状态
       */
      listenerButtonGetPlayState: function listenerButtonGetPlayState() {
        _wepy2.default.getBackgroundAudioPlayerState({
          success: function success(res) {
            // success
            // duration  选定音频的长度（单位：s），只有在当前有音乐播放时返回
            console.log('duration:' + res.duration);
            console.log('currentPosition:' + res.currentPosition);
            // status    播放状态（2：没有音乐在播放，1：播放中，0：暂停中
            console.log('status:' + res.status);
            console.log('downloadPercent:' + res.downloadPercent);
            // dataUrl   歌曲数据链接，只有在当前有音乐播放时返回
            console.log('dataUrl:' + res.dataUrl);
          },
          fail: function fail() {
            // fail
          },
          complete: function complete() {
            // complete
          }
        });
      },

      /**
       * 设置进度
       */
      listenerButtonSeek: function listenerButtonSeek() {
        _wepy2.default.seekBackgroundAudio({
          position: 40
        });
      },

      /**
       * 停止播放
       */
      listenerButtonStop: function listenerButtonStop() {
        _wepy2.default.stopBackgroundAudio({});
        console.log('停止播放');
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad(options) {
      // 页面初始化 options为页面跳转所带来的参数
      /**
       * 监听音乐播放
       */
      _wepy2.default.onBackgroundAudioPlay(function () {
        // callback
        console.log('onBackgroundAudioPlay');
      });
      /**
       * 监听音乐暂停
       */
      _wepy2.default.onBackgroundAudioPause(function () {
        // callback
        console.log('onBackgroundAudioPause');
      });
      /**
       * 监听音乐停止
       */
      _wepy2.default.onBackgroundAudioStop(function () {
        // callback
        console.log('onBackgroundAudioStop');
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm1ldGhvZHMiLCJsaXN0ZW5lckJ1dHRvblBsYXkiLCJwbGF5QmFja2dyb3VuZEF1ZGlvIiwiZGF0YVVybCIsInRpdGxlIiwiY292ZXJJbWdVcmwiLCJsaXN0ZW5lckJ1dHRvblBhdXNlIiwicGF1c2VCYWNrZ3JvdW5kQXVkaW8iLCJjb25zb2xlIiwibG9nIiwibGlzdGVuZXJCdXR0b25HZXRQbGF5U3RhdGUiLCJnZXRCYWNrZ3JvdW5kQXVkaW9QbGF5ZXJTdGF0ZSIsInN1Y2Nlc3MiLCJyZXMiLCJkdXJhdGlvbiIsImN1cnJlbnRQb3NpdGlvbiIsInN0YXR1cyIsImRvd25sb2FkUGVyY2VudCIsImZhaWwiLCJjb21wbGV0ZSIsImxpc3RlbmVyQnV0dG9uU2VlayIsInNlZWtCYWNrZ3JvdW5kQXVkaW8iLCJwb3NpdGlvbiIsImxpc3RlbmVyQnV0dG9uU3RvcCIsInN0b3BCYWNrZ3JvdW5kQXVkaW8iLCJvcHRpb25zIiwib25CYWNrZ3JvdW5kQXVkaW9QbGF5Iiwib25CYWNrZ3JvdW5kQXVkaW9QYXVzZSIsIm9uQmFja2dyb3VuZEF1ZGlvU3RvcCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixJQURqQjtBQUVQQyxvQ0FBOEI7QUFGdkIsSyxRQUlUQyxPLEdBQVU7QUFDUjtBQUNBO0FBQ0FDLHdCQUhRLGdDQUdhO0FBQ25CLHVCQUFLQyxtQkFBTCxDQUF5QjtBQUN2QkMsbUJBQVMsd0RBRGM7QUFFdkJDLGlCQUFPLEtBRmdCO0FBR3ZCO0FBQ0FDLHVCQUFhO0FBSlUsU0FBekI7QUFNRCxPQVZPOztBQVdSO0FBQ0FDLHlCQVpRLGlDQVljO0FBQ3BCLHVCQUFLQyxvQkFBTCxDQUEwQixFQUExQjtBQUVBQyxnQkFBUUMsR0FBUixDQUFZLE1BQVo7QUFDRCxPQWhCTzs7QUFpQlI7OztBQUdBQyxnQ0FwQlEsd0NBb0JxQjtBQUMzQix1QkFBS0MsNkJBQUwsQ0FBbUM7QUFDakNDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckI7QUFDQTtBQUNBTCxvQkFBUUMsR0FBUixDQUFZLGNBQWNJLElBQUlDLFFBQTlCO0FBQ0FOLG9CQUFRQyxHQUFSLENBQVkscUJBQXFCSSxJQUFJRSxlQUFyQztBQUNBO0FBQ0FQLG9CQUFRQyxHQUFSLENBQVksWUFBWUksSUFBSUcsTUFBNUI7QUFDQVIsb0JBQVFDLEdBQVIsQ0FBWSxxQkFBcUJJLElBQUlJLGVBQXJDO0FBQ0E7QUFDQVQsb0JBQVFDLEdBQVIsQ0FBWSxhQUFhSSxJQUFJVixPQUE3QjtBQUNELFdBWGdDO0FBWWpDZSxjQVppQyxrQkFZMUI7QUFDTDtBQUNELFdBZGdDO0FBZWpDQyxrQkFmaUMsc0JBZXRCO0FBQ1Q7QUFDRDtBQWpCZ0MsU0FBbkM7QUFtQkQsT0F4Q087O0FBeUNSOzs7QUFHQUMsd0JBNUNRLGdDQTRDYTtBQUNuQix1QkFBS0MsbUJBQUwsQ0FBeUI7QUFDdkJDLG9CQUFVO0FBRGEsU0FBekI7QUFHRCxPQWhETzs7QUFpRFI7OztBQUdBQyx3QkFwRFEsZ0NBb0RhO0FBQ25CLHVCQUFLQyxtQkFBTCxDQUF5QixFQUF6QjtBQUVBaEIsZ0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0Q7QUF4RE8sSzs7Ozs7MkJBMERIZ0IsTyxFQUFTO0FBQ2Q7QUFDQTs7O0FBR0EscUJBQUtDLHFCQUFMLENBQTJCLFlBQVc7QUFDcEM7QUFDQWxCLGdCQUFRQyxHQUFSLENBQVksdUJBQVo7QUFDRCxPQUhEO0FBSUE7OztBQUdBLHFCQUFLa0Isc0JBQUwsQ0FBNEIsWUFBVztBQUNyQztBQUNBbkIsZ0JBQVFDLEdBQVIsQ0FBWSx3QkFBWjtBQUNELE9BSEQ7QUFJQTs7O0FBR0EscUJBQUttQixxQkFBTCxDQUEyQixZQUFXO0FBQ3BDO0FBQ0FwQixnQkFBUUMsR0FBUixDQUFZLHVCQUFaO0FBQ0QsT0FIRDtBQUlEOzs7O0VBdEZnQyxlQUFLb0IsSTs7a0JBQW5CakMsSyIsImZpbGUiOiJ0ZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+atjOWNlScsXG4gICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNGRkZBRkEnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICAvLyB2YXIgYXBwID0gZ2V0QXBwKClcbiAgICAvLyDmkq3mlL5cbiAgICBsaXN0ZW5lckJ1dHRvblBsYXkoKSB7XG4gICAgICB3ZXB5LnBsYXlCYWNrZ3JvdW5kQXVkaW8oe1xuICAgICAgICBkYXRhVXJsOiAnaHR0cDovL3dzLnN0cmVhbS5xcW11c2ljLnFxLmNvbS81MTA2NDI5Lm00YT9mcm9tdGFnPTQ2JyxcbiAgICAgICAgdGl0bGU6ICfolpvkuYvosKYnLFxuICAgICAgICAvLyDlm77niYflnLDlnYDlnLDlnYBcbiAgICAgICAgY292ZXJJbWdVcmw6ICdodHRwOi8vaS5ndGltZy5jbi9tdXNpYy9waG90by9taWRfYWxidW1fOTAvYS9GLzAwMFFnRmNtMHY4V2FGLmpwZydcbiAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDnm5HlkKxidXR0b27mmoLlgZzmjInpkq5cbiAgICBsaXN0ZW5lckJ1dHRvblBhdXNlKCkge1xuICAgICAgd2VweS5wYXVzZUJhY2tncm91bmRBdWRpbyh7XG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2coJ+aaguWBnOaSreaUvicpXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmkq3mlL7nirbmgIFcbiAgICAgKi9cbiAgICBsaXN0ZW5lckJ1dHRvbkdldFBsYXlTdGF0ZSgpIHtcbiAgICAgIHdlcHkuZ2V0QmFja2dyb3VuZEF1ZGlvUGxheWVyU3RhdGUoe1xuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAvLyBzdWNjZXNzXG4gICAgICAgICAgLy8gZHVyYXRpb24gIOmAieWumumfs+mikeeahOmVv+W6pu+8iOWNleS9je+8mnPvvInvvIzlj6rmnInlnKjlvZPliY3mnInpn7PkuZDmkq3mlL7ml7bov5Tlm55cbiAgICAgICAgICBjb25zb2xlLmxvZygnZHVyYXRpb246JyArIHJlcy5kdXJhdGlvbilcbiAgICAgICAgICBjb25zb2xlLmxvZygnY3VycmVudFBvc2l0aW9uOicgKyByZXMuY3VycmVudFBvc2l0aW9uKVxuICAgICAgICAgIC8vIHN0YXR1cyAgICDmkq3mlL7nirbmgIHvvIgy77ya5rKh5pyJ6Z+z5LmQ5Zyo5pKt5pS+77yMMe+8muaSreaUvuS4re+8jDDvvJrmmoLlgZzkuK1cbiAgICAgICAgICBjb25zb2xlLmxvZygnc3RhdHVzOicgKyByZXMuc3RhdHVzKVxuICAgICAgICAgIGNvbnNvbGUubG9nKCdkb3dubG9hZFBlcmNlbnQ6JyArIHJlcy5kb3dubG9hZFBlcmNlbnQpXG4gICAgICAgICAgLy8gZGF0YVVybCAgIOatjOabsuaVsOaNrumTvuaOpe+8jOWPquacieWcqOW9k+WJjeaciemfs+S5kOaSreaUvuaXtui/lOWbnlxuICAgICAgICAgIGNvbnNvbGUubG9nKCdkYXRhVXJsOicgKyByZXMuZGF0YVVybClcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbCgpIHtcbiAgICAgICAgICAvLyBmYWlsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlKCkge1xuICAgICAgICAgIC8vIGNvbXBsZXRlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDorr7nva7ov5vluqZcbiAgICAgKi9cbiAgICBsaXN0ZW5lckJ1dHRvblNlZWsoKSB7XG4gICAgICB3ZXB5LnNlZWtCYWNrZ3JvdW5kQXVkaW8oe1xuICAgICAgICBwb3NpdGlvbjogNDBcbiAgICAgIH0pXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDlgZzmraLmkq3mlL5cbiAgICAgKi9cbiAgICBsaXN0ZW5lckJ1dHRvblN0b3AoKSB7XG4gICAgICB3ZXB5LnN0b3BCYWNrZ3JvdW5kQXVkaW8oe1xuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKCflgZzmraLmkq3mlL4nKVxuICAgIH1cbiAgfVxuICBvbkxvYWQob3B0aW9ucykge1xuICAgIC8vIOmhtemdouWIneWni+WMliBvcHRpb25z5Li66aG16Z2i6Lez6L2s5omA5bim5p2l55qE5Y+C5pWwXG4gICAgLyoqXG4gICAgICog55uR5ZCs6Z+z5LmQ5pKt5pS+XG4gICAgICovXG4gICAgd2VweS5vbkJhY2tncm91bmRBdWRpb1BsYXkoZnVuY3Rpb24oKSB7XG4gICAgICAvLyBjYWxsYmFja1xuICAgICAgY29uc29sZS5sb2coJ29uQmFja2dyb3VuZEF1ZGlvUGxheScpXG4gICAgfSlcbiAgICAvKipcbiAgICAgKiDnm5HlkKzpn7PkuZDmmoLlgZxcbiAgICAgKi9cbiAgICB3ZXB5Lm9uQmFja2dyb3VuZEF1ZGlvUGF1c2UoZnVuY3Rpb24oKSB7XG4gICAgICAvLyBjYWxsYmFja1xuICAgICAgY29uc29sZS5sb2coJ29uQmFja2dyb3VuZEF1ZGlvUGF1c2UnKVxuICAgIH0pXG4gICAgLyoqXG4gICAgICog55uR5ZCs6Z+z5LmQ5YGc5q2iXG4gICAgICovXG4gICAgd2VweS5vbkJhY2tncm91bmRBdWRpb1N0b3AoZnVuY3Rpb24oKSB7XG4gICAgICAvLyBjYWxsYmFja1xuICAgICAgY29uc29sZS5sb2coJ29uQmFja2dyb3VuZEF1ZGlvU3RvcCcpXG4gICAgfSlcbiAgfVxufVxuIl19