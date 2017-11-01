'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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
      navigationBarBackgroundColor: 'silver',
      navigationBarTitleText: '音乐站'
    }, _this.data = {
      music: '音乐',
      video: '视频',
      radio: '电台',
      ppic: 'http://img5.imgtn.bdimg.com/it/u=869965892,773933343&fm=27&gp=0.jpg',
      dpic: 'http://img2.imgtn.bdimg.com/it/u=3618124711,3011777981&fm=200&gp=0.jpg',
      lpic: 'http://img0.imgtn.bdimg.com/it/u=1394554330,752866532&fm=11&gp=0.jpg',
      bpic: 'http://img4.imgtn.bdimg.com/it/u=163844659,2212480365&fm=27&gp=0.jpg',
      personal: '私人珍藏',
      everyday: '每日推荐',
      playlist: '歌单',
      leaderboard: '排行榜',
      recommend: '推荐歌单',
      newmusic: '最新音乐',
      tmv: '推荐MV',
      anchor: '主播电台',
      pic: '../images/more.png',
      rulpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      rul_text: ''
    }, _this.methods = {
      playlist: function playlist() {
        _wepy2.default.navigateTo({
          url: '../pages/play'
        });
      },
      music: function music() {
        _wepy2.default.navigateTo({
          url: '../pages/music'
        });
      },
      video: function video() {
        _wepy2.default.navigateTo({
          url: '../pages/play'
        });
      },
      radio: function radio() {
        _wepy2.default.navigateTo({
          url: '../pages/radio'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/video'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibXVzaWMiLCJ2aWRlbyIsInJhZGlvIiwicHBpYyIsImRwaWMiLCJscGljIiwiYnBpYyIsInBlcnNvbmFsIiwiZXZlcnlkYXkiLCJwbGF5bGlzdCIsImxlYWRlcmJvYXJkIiwicmVjb21tZW5kIiwibmV3bXVzaWMiLCJ0bXYiLCJhbmNob3IiLCJwaWMiLCJydWxwaWMiLCJydWxfdGV4dCIsIm1ldGhvZHMiLCJuYXZpZ2F0ZVRvIiwidXJsIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLG9DQUE4QixRQUR2QjtBQUVQQyw4QkFBd0I7QUFGakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsYUFBTyxJQURGO0FBRUxDLGFBQU8sSUFGRjtBQUdMQyxhQUFPLElBSEY7QUFJTEMsWUFBTSxxRUFKRDtBQUtMQyxZQUFNLHdFQUxEO0FBTUxDLFlBQU0sc0VBTkQ7QUFPTEMsWUFBTSxzRUFQRDtBQVFMQyxnQkFBVSxNQVJMO0FBU0xDLGdCQUFVLE1BVEw7QUFVTEMsZ0JBQVUsSUFWTDtBQVdMQyxtQkFBYSxLQVhSO0FBWUxDLGlCQUFXLE1BWk47QUFhTEMsZ0JBQVUsTUFiTDtBQWNMQyxXQUFLLE1BZEE7QUFlTEMsY0FBUSxNQWZIO0FBZ0JMQyxXQUFLLG9CQWhCQTtBQWlCTEMsY0FBUSx3RUFqQkg7QUFrQkxDLGdCQUFVO0FBbEJMLEssUUFvQlBDLE8sR0FBVTtBQUNSVCxjQURRLHNCQUNHO0FBQ1QsdUJBQUtVLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1ScEIsV0FOUSxtQkFNQTtBQUNOLHVCQUFLbUIsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQVZPO0FBV1JuQixXQVhRLG1CQVdBO0FBQ04sdUJBQUtrQixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BZk87QUFnQlJsQixXQWhCUSxtQkFnQkE7QUFDTix1QkFBS2lCLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFwQk8sSzs7OztFQXpCdUIsZUFBS0MsSTs7a0JBQW5CMUIsSyIsImZpbGUiOiJ2aWRlby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICdzaWx2ZXInLFxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpn7PkuZDnq5knXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBtdXNpYzogJ+mfs+S5kCcsXG4gICAgdmlkZW86ICfop4bpopEnLFxuICAgIHJhZGlvOiAn55S15Y+wJyxcbiAgICBwcGljOiAnaHR0cDovL2ltZzUuaW1ndG4uYmRpbWcuY29tL2l0L3U9ODY5OTY1ODkyLDc3MzkzMzM0MyZmbT0yNyZncD0wLmpwZycsXG4gICAgZHBpYzogJ2h0dHA6Ly9pbWcyLmltZ3RuLmJkaW1nLmNvbS9pdC91PTM2MTgxMjQ3MTEsMzAxMTc3Nzk4MSZmbT0yMDAmZ3A9MC5qcGcnLFxuICAgIGxwaWM6ICdodHRwOi8vaW1nMC5pbWd0bi5iZGltZy5jb20vaXQvdT0xMzk0NTU0MzMwLDc1Mjg2NjUzMiZmbT0xMSZncD0wLmpwZycsXG4gICAgYnBpYzogJ2h0dHA6Ly9pbWc0LmltZ3RuLmJkaW1nLmNvbS9pdC91PTE2Mzg0NDY1OSwyMjEyNDgwMzY1JmZtPTI3JmdwPTAuanBnJyxcbiAgICBwZXJzb25hbDogJ+engeS6uuePjeiXjycsXG4gICAgZXZlcnlkYXk6ICfmr4/ml6XmjqjojZAnLFxuICAgIHBsYXlsaXN0OiAn5q2M5Y2VJyxcbiAgICBsZWFkZXJib2FyZDogJ+aOkuihjOamnCcsXG4gICAgcmVjb21tZW5kOiAn5o6o6I2Q5q2M5Y2VJyxcbiAgICBuZXdtdXNpYzogJ+acgOaWsOmfs+S5kCcsXG4gICAgdG12OiAn5o6o6I2QTVYnLFxuICAgIGFuY2hvcjogJ+S4u+aSreeUteWPsCcsXG4gICAgcGljOiAnLi4vaW1hZ2VzL21vcmUucG5nJyxcbiAgICBydWxwaWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBydWxfdGV4dDogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHBsYXlsaXN0KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvcGxheSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBtdXNpYygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL211c2ljJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHZpZGVvKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvcGxheSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICByYWRpbygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL3JhZGlvJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgfVxuIl19