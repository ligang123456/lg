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
      play: true,
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
    key: 'on',
    value: function on(e) {
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
      }, 2000);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsYXkuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsInNyYyIsInBpYyIsImFwaWMiLCJjb3BpYyIsInRpdGxlIiwibXVzaWMiLCJwbGF5IiwiY29sbGVjdCIsImlkIiwicGF1c2VTdGF0dXMiLCJtZXRob2RzIiwic2VsZiIsImUiLCJhdWRpb0N0eCIsImNyZWF0ZUF1ZGlvQ29udGV4dCIsInBhdXNlIiwic2V0VGltZW91dCIsInNldERhdGEiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3MiLCJyZXMiLCJoZWlnaHQiLCJ3aW5kb3dIZWlnaHQiLCJ3aWR0aCIsIndpbmRvd1dpZHRoIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLFdBQUssRUFOQTtBQU9MQyxXQUFLLEVBUEE7QUFRTEMsWUFBTSxvQkFSRDtBQVNMQyxhQUFPLHVCQVRGO0FBVUxDLGFBQU8sRUFWRjtBQVdMQyxhQUFPLEVBWEY7QUFZTEMsWUFBTSxJQVpEO0FBYUxDLGVBQVMsS0FiSjtBQWNMQyxVQUFJLENBZEM7QUFlTEMsbUJBQWE7QUFDYjtBQWhCSyxLLFFBa0JQQyxPLEdBQVU7QUFDUkgsYUFEUSxxQkFDRTtBQUNSLFlBQUlJLE9BQU8sSUFBWDtBQUNBQSxhQUFLSixPQUFMLEdBQWUsQ0FBQ0ksS0FBS0osT0FBckI7QUFDRDtBQUpPLEs7Ozs7O3VCQU1QSyxDLEVBQUc7QUFDSixVQUFJRCxPQUFPLElBQVg7QUFDQTtBQUNBO0FBQ0FBLFdBQUtMLElBQUwsR0FBWSxDQUFDSyxLQUFLTCxJQUFsQjtBQUNBLFVBQUlLLEtBQUtMLElBQVQsRUFBZTtBQUNYO0FBQ0YsYUFBS08sUUFBTCxHQUFnQixlQUFLQyxrQkFBTCxDQUF3QixTQUF4QixDQUFoQjtBQUNBO0FBQ0EsYUFBS0QsUUFBTCxDQUFjUCxJQUFkO0FBQ0E7QUFDQUssYUFBS0YsV0FBTCxHQUFtQixLQUFuQjtBQUNELE9BUEQsTUFPTztBQUNMLGFBQUtJLFFBQUwsQ0FBY0UsS0FBZDtBQUNBSixhQUFLRixXQUFMLEdBQW1CLElBQW5CO0FBQ0Q7QUFDRjs7OzJCQUNNVixJLEVBQU07QUFDWCxVQUFJWSxPQUFPLElBQVg7QUFDQUEsV0FBS0YsV0FBTCxHQUFtQixJQUFuQjtBQUNBTyxpQkFBVyxZQUFXO0FBQ3BCTCxhQUFLRixXQUFMLEdBQW1CLEtBQW5CO0FBQ0FFLGFBQUtNLE9BQUwsQ0FBYSxFQUFDUixhQUFhLEtBQWQsRUFBYjtBQUNELE9BSEQsRUFHRyxJQUhIO0FBSUFFLFdBQUtQLEtBQUwsR0FBYUwsS0FBS0ssS0FBbEIsQ0FQVyxDQU9hO0FBQ3hCTyxXQUFLVixHQUFMLEdBQVdGLEtBQUtFLEdBQWhCLENBUlcsQ0FRVTtBQUNyQixVQUFJTyxLQUFLVCxLQUFLUyxFQUFkO0FBQ0FVLGNBQVFDLEdBQVIsQ0FBWVgsRUFBWixFQUFnQixJQUFoQjtBQUNBRyxXQUFLTixLQUFMO0FBQ0FNLFdBQUtOLEtBQUwsR0FBYU0sS0FBS04sS0FBbEI7QUFDQU0sV0FBS1gsR0FBTCxHQUFXVyxLQUFLTixLQUFMLENBQVdHLEVBQVgsRUFBZVIsR0FBMUI7QUFDQWtCLGNBQVFDLEdBQVIsQ0FBWVIsS0FBS1gsR0FBakIsRUFBc0IsbUJBQXRCO0FBQ0FrQixjQUFRQyxHQUFSLENBQVlwQixLQUFLSyxLQUFqQixFQUF3QixJQUF4QjtBQUNBYyxjQUFRQyxHQUFSLENBQVlSLEtBQUtWLEdBQWpCLEVBQXNCLE1BQXRCO0FBQ0M7QUFDRCxxQkFBS21CLGFBQUwsQ0FBbUI7QUFDakJDLGVBRGlCLG1CQUNUQyxHQURTLEVBQ0o7QUFDWFgsZUFBS1ksTUFBTCxHQUFjRCxJQUFJRSxZQUFsQjtBQUNBYixlQUFLYyxLQUFMLEdBQWFILElBQUlJLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNRDs7OztFQXJFZ0MsZUFBS0MsSTs7a0JBQW5CL0IsSyIsImZpbGUiOiJwbGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgbXVzaWMgZnJvbSAnLi4vZGF0YS9saXN0LmpzJ1xuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdtdXNpYydcbiAgfVxuICBkYXRhID0ge1xuICAgIC8vIHNyYzogJ2h0dHA6Ly93cy5zdHJlYW0ucXFtdXNpYy5xcS5jb20vTTUwMDAwMVZmdnNKMjF4RnFiLm1wMz9ndWlkPWZmZmZmZmZmODJkZWY0YWY0YjEyYjNjZDkzMzdkNWU3JnVpbj0zNDY4OTcyMjAmdmtleT02MjkyRjUxRTFFMzg0RTA2RENCREM5QUI3QzQ5RkQ3MTNENjMyRDMxM0FDNDg1OEJBQ0I4REREMjkwNjdEM0M2MDE0ODFEMzZFNjIwNTNCRjhERkVBRjc0QzBBNUNDRkFERDY0NzExNjBDQUYzRTZBJmZyb210YWc9NDYnLFxuICAgIC8vIHNyYzogJ2h0dHA6Ly9tdXNpYy4xNjMuY29tL3NvbmcvbWVkaWEvb3V0ZXIvdXJsP2lkPTQ3NjU5MjYzMC5tcDMnLOS6oVxuICAgIC8vIHNyYzogJ2h0dHA6Ly9tdXNpYy4xNjMuY29tL3NvbmcvbWVkaWEvb3V0ZXIvdXJsP2lkPTI2NjYyMTE1Lm1wMycs5oiYXG4gICAgLy8gc3JjOiAnaHR0cDovL211c2ljLjE2My5jb20vc29uZy9tZWRpYS9vdXRlci91cmw/aWQ9NDgzNjcxNTk5Lm1wMycs5YWJXG4gICAgLy8gcGljOiAnaHR0cDovL2ltZzUuaW1ndG4uYmRpbWcuY29tL2l0L3U9MzQzNTUwOTczOSw2MDI5MjU2NDQmZm09MjcmZ3A9MC5qcGcnLFxuICAgIHNyYzogJycsXG4gICAgcGljOiAnJyxcbiAgICBhcGljOiAnLi4vaW1hZ2VzL3BsYXkucG5nJyxcbiAgICBjb3BpYzogJy4uL2ltYWdlcy9jb2xsZWN0LnBuZycsXG4gICAgdGl0bGU6ICcnLFxuICAgIG11c2ljOiBbXSxcbiAgICBwbGF5OiB0cnVlLFxuICAgIGNvbGxlY3Q6IGZhbHNlLFxuICAgIGlkOiAwLFxuICAgIHBhdXNlU3RhdHVzOiBmYWxzZVxuICAgIC8vIGluZGV4OiAnJ1xuICB9XG4gIG1ldGhvZHMgPSB7XG4gICAgY29sbGVjdCgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5jb2xsZWN0ID0gIXNlbGYuY29sbGVjdFxuICAgIH1cbiAgfVxuICBvbihlKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgLy8gY29uc3QgaW5kZXggPSBlLmN1cnJlbnRUYXJnZXQuaWRcbiAgICAvLyBjb25zb2xlLmxvZygsICdpZCcpIC8vIGlkXG4gICAgc2VsZi5wbGF5ID0gIXNlbGYucGxheVxuICAgIGlmIChzZWxmLnBsYXkpIHtcbiAgICAgICAgLy8g5L2/55SoIHd4LmNyZWF0ZUF1ZGlvQ29udGV4dCDojrflj5YgYXVkaW8g5LiK5LiL5paHIGNvbnRleHRcbiAgICAgIHRoaXMuYXVkaW9DdHggPSB3ZXB5LmNyZWF0ZUF1ZGlvQ29udGV4dCgnbXlBdWRpbycpXG4gICAgICAvLyB0aGlzLmF1ZGlvQ3R4LnNldFNyYygnaHR0cDovL3dzLnN0cmVhbS5xcW11c2ljLnFxLmNvbS9NNTAwMDAxVmZ2c0oyMXhGcWIubXAzP2d1aWQ9ZmZmZmZmZmY4MmRlZjRhZjRiMTJiM2NkOTMzN2Q1ZTcmdWluPTM0Njg5NzIyMCZ2a2V5PTYyOTJGNTFFMUUzODRFMDZEQ0JEQzlBQjdDNDlGRDcxM0Q2MzJEMzEzQUM0ODU4QkFDQjhEREQyOTA2N0QzQzYwMTQ4MUQzNkU2MjA1M0JGOERGRUFGNzRDMEE1Q0NGQURENjQ3MTE2MENBRjNFNkEmZnJvbXRhZz00NicpXG4gICAgICB0aGlzLmF1ZGlvQ3R4LnBsYXkoKVxuICAgICAgLy8gc2VsZi5zcmMgPSBtdXNpY1tpbmRleF0uc3JjIC8vIOmfs+S5kOmTvuaOpeWcsOWdgFxuICAgICAgc2VsZi5wYXVzZVN0YXR1cyA9IGZhbHNlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXVkaW9DdHgucGF1c2UoKVxuICAgICAgc2VsZi5wYXVzZVN0YXR1cyA9IHRydWVcbiAgICB9XG4gIH1cbiAgb25Mb2FkKGRhdGEpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLnBhdXNlU3RhdHVzID0gdHJ1ZVxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICBzZWxmLnBhdXNlU3RhdHVzID0gZmFsc2VcbiAgICAgIHNlbGYuc2V0RGF0YSh7cGF1c2VTdGF0dXM6IGZhbHNlfSlcbiAgICB9LCAyMDAwKVxuICAgIHNlbGYudGl0bGUgPSBkYXRhLnRpdGxlIC8vIOatjOWQjVxuICAgIHNlbGYucGljID0gZGF0YS5waWMgIC8vIOS4k+i+keWbvueJh1xuICAgIGxldCBpZCA9IGRhdGEuaWRcbiAgICBjb25zb2xlLmxvZyhpZCwgJ0lEJylcbiAgICBzZWxmLm11c2ljID0gbXVzaWNcbiAgICBzZWxmLm11c2ljID0gc2VsZi5tdXNpY1xuICAgIHNlbGYuc3JjID0gc2VsZi5tdXNpY1tpZF0uc3JjXG4gICAgY29uc29sZS5sb2coc2VsZi5zcmMsICdzcmNjY2NjY2NjY2NjY2NjYycpXG4gICAgY29uc29sZS5sb2coZGF0YS50aXRsZSwgJ+atjOWQjScpXG4gICAgY29uc29sZS5sb2coc2VsZi5waWMsICfkuJPovpHlm77niYcnKVxuICAgICAvLyDojrflj5bns7vnu5/kv6Hmga8o6auY5bqm77yM5a695bqmKVxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLmhlaWdodCA9IHJlcy53aW5kb3dIZWlnaHRcbiAgICAgICAgc2VsZi53aWR0aCA9IHJlcy53aW5kb3dXaWR0aFxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==