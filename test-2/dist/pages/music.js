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
      imgUrls: ['http://img4.imgtn.bdimg.com/it/u=3781499351,911454633&fm=27&gp=0.jpg', 'http://img3.imgtn.bdimg.com/it/u=3377977535,954819488&fm=11&gp=0.jpg', 'http://img3.imgtn.bdimg.com/it/u=3927128777,297776644&fm=11&gp=0.jpg', 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg', 'http://img0.imgtn.bdimg.com/it/u=3216319696,766946696&fm=27&gp=0.jpg', 'http://img2.imgtn.bdimg.com/it/u=2152627408,1045174372&fm=27&gp=0.jpg', 'http://img3.imgtn.bdimg.com/it/u=3038519150,1823633039&fm=27&gp=0.jpg', 'http://img4.imgtn.bdimg.com/it/u=794228708,1763546792&fm=11&gp=0.jpg', 'http://img0.imgtn.bdimg.com/it/u=1566099428,815749846&fm=27&gp=0.jpg', 'http://img3.imgtn.bdimg.com/it/u=2032553907,2672703874&fm=11&gp=0.jpg'],
      interval: '5000',
      duration: '300',
      ppic: 'http://img5.imgtn.bdimg.com/it/u=869965892,773933343&fm=27&gp=0.jpg',
      dpic: 'http://img2.imgtn.bdimg.com/it/u=3618124711,3011777981&fm=200&gp=0.jpg',
      lpic: 'http://img0.imgtn.bdimg.com/it/u=1394554330,752866532&fm=11&gp=0.jpg',
      bpic: 'http://img4.imgtn.bdimg.com/it/u=163844659,2212480365&fm=27&gp=0.jpg',
      personal: '精选',
      everyday: 'MV',
      playlist: '单曲',
      leaderboard: '更多',
      recommend: '推荐歌单',
      newmusic: '最新音乐',
      tmv: '推荐MV',
      anchor: '主播电台',
      pic: '../images/more.png',
      rulpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      rumpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      rurpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      rdlpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      rdmpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      rdrpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      nulpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      numpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      nurpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      ndlpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      ndmpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      ndrpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      mulpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      mumpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      murpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      mdlpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      mdmpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      mdrpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      aulpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      aumpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      aurpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      adlpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      admpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      adrpic: 'http://img4.imgtn.bdimg.com/it/u=4101404142,3036343052&fm=200&gp=0.jpg',
      rul_text: '今日推荐'
    }, _this.methods = {
      playlist: function playlist() {
        _wepy2.default.navigateTo({
          url: '../pages/list'
        });
      },
      music: function music() {
        _wepy2.default.navigateTo({
          url: '../pages/music'
        });
      },
      video: function video() {
        _wepy2.default.navigateTo({
          url: '../pages/video'
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/music'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11c2ljLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibXVzaWMiLCJ2aWRlbyIsInJhZGlvIiwiaW1nVXJscyIsImludGVydmFsIiwiZHVyYXRpb24iLCJwcGljIiwiZHBpYyIsImxwaWMiLCJicGljIiwicGVyc29uYWwiLCJldmVyeWRheSIsInBsYXlsaXN0IiwibGVhZGVyYm9hcmQiLCJyZWNvbW1lbmQiLCJuZXdtdXNpYyIsInRtdiIsImFuY2hvciIsInBpYyIsInJ1bHBpYyIsInJ1bXBpYyIsInJ1cnBpYyIsInJkbHBpYyIsInJkbXBpYyIsInJkcnBpYyIsIm51bHBpYyIsIm51bXBpYyIsIm51cnBpYyIsIm5kbHBpYyIsIm5kbXBpYyIsIm5kcnBpYyIsIm11bHBpYyIsIm11bXBpYyIsIm11cnBpYyIsIm1kbHBpYyIsIm1kbXBpYyIsIm1kcnBpYyIsImF1bHBpYyIsImF1bXBpYyIsImF1cnBpYyIsImFkbHBpYyIsImFkbXBpYyIsImFkcnBpYyIsInJ1bF90ZXh0IiwibWV0aG9kcyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsb0NBQThCLFFBRHZCO0FBRVBDLDhCQUF3QjtBQUZqQixLLFFBSVRDLEksR0FBTztBQUNMQyxhQUFPLElBREY7QUFFTEMsYUFBTyxJQUZGO0FBR0xDLGFBQU8sSUFIRjtBQUlMQyxlQUFTLENBQ1Asc0VBRE8sRUFFUCxzRUFGTyxFQUdQLHNFQUhPLEVBSVAsd0VBSk8sRUFLUCxzRUFMTyxFQU1QLHVFQU5PLEVBT1AsdUVBUE8sRUFRUCxzRUFSTyxFQVNQLHNFQVRPLEVBVVAsdUVBVk8sQ0FKSjtBQWdCTEMsZ0JBQVUsTUFoQkw7QUFpQkxDLGdCQUFVLEtBakJMO0FBa0JMQyxZQUFNLHFFQWxCRDtBQW1CTEMsWUFBTSx3RUFuQkQ7QUFvQkxDLFlBQU0sc0VBcEJEO0FBcUJMQyxZQUFNLHNFQXJCRDtBQXNCTEMsZ0JBQVUsSUF0Qkw7QUF1QkxDLGdCQUFVLElBdkJMO0FBd0JMQyxnQkFBVSxJQXhCTDtBQXlCTEMsbUJBQWEsSUF6QlI7QUEwQkxDLGlCQUFXLE1BMUJOO0FBMkJMQyxnQkFBVSxNQTNCTDtBQTRCTEMsV0FBSyxNQTVCQTtBQTZCTEMsY0FBUSxNQTdCSDtBQThCTEMsV0FBSyxvQkE5QkE7QUErQkxDLGNBQVEsd0VBL0JIO0FBZ0NMQyxjQUFRLHdFQWhDSDtBQWlDTEMsY0FBUSx3RUFqQ0g7QUFrQ0xDLGNBQVEsd0VBbENIO0FBbUNMQyxjQUFRLHdFQW5DSDtBQW9DTEMsY0FBUSx3RUFwQ0g7QUFxQ0xDLGNBQVEsd0VBckNIO0FBc0NMQyxjQUFRLHdFQXRDSDtBQXVDTEMsY0FBUSx3RUF2Q0g7QUF3Q0xDLGNBQVEsd0VBeENIO0FBeUNMQyxjQUFRLHdFQXpDSDtBQTBDTEMsY0FBUSx3RUExQ0g7QUEyQ0xDLGNBQVEsd0VBM0NIO0FBNENMQyxjQUFRLHdFQTVDSDtBQTZDTEMsY0FBUSx3RUE3Q0g7QUE4Q0xDLGNBQVEsd0VBOUNIO0FBK0NMQyxjQUFRLHdFQS9DSDtBQWdETEMsY0FBUSx3RUFoREg7QUFpRExDLGNBQVEsd0VBakRIO0FBa0RMQyxjQUFRLHdFQWxESDtBQW1ETEMsY0FBUSx3RUFuREg7QUFvRExDLGNBQVEsd0VBcERIO0FBcURMQyxjQUFRLHdFQXJESDtBQXNETEMsY0FBUSx3RUF0REg7QUF1RExDLGdCQUFVO0FBdkRMLEssUUF5RFBDLE8sR0FBVTtBQUNSaEMsY0FEUSxzQkFDRztBQUNULHVCQUFLaUMsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVI5QyxXQU5RLG1CQU1BO0FBQ04sdUJBQUs2QyxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BVk87QUFXUjdDLFdBWFEsbUJBV0E7QUFDTix1QkFBSzRDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FmTztBQWdCUjVDLFdBaEJRLG1CQWdCQTtBQUNOLHVCQUFLMkMsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQXBCTyxLOzs7O0VBOUR1QixlQUFLQyxJOztrQkFBbkJwRCxLIiwiZmlsZSI6Im11c2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJ3NpbHZlcicsXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mfs+S5kOermSdcbiAgfVxuICBkYXRhID0ge1xuICAgIG11c2ljOiAn6Z+z5LmQJyxcbiAgICB2aWRlbzogJ+inhumikScsXG4gICAgcmFkaW86ICfnlLXlj7AnLFxuICAgIGltZ1VybHM6IFtcbiAgICAgICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT0zNzgxNDk5MzUxLDkxMTQ1NDYzMyZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cDovL2ltZzMuaW1ndG4uYmRpbWcuY29tL2l0L3U9MzM3Nzk3NzUzNSw5NTQ4MTk0ODgmZm09MTEmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHA6Ly9pbWczLmltZ3RuLmJkaW1nLmNvbS9pdC91PTM5MjcxMjg3NzcsMjk3Nzc2NjQ0JmZtPTExJmdwPTAuanBnJyxcbiAgICAgICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICAgICdodHRwOi8vaW1nMC5pbWd0bi5iZGltZy5jb20vaXQvdT0zMjE2MzE5Njk2LDc2Njk0NjY5NiZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cDovL2ltZzIuaW1ndG4uYmRpbWcuY29tL2l0L3U9MjE1MjYyNzQwOCwxMDQ1MTc0MzcyJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwOi8vaW1nMy5pbWd0bi5iZGltZy5jb20vaXQvdT0zMDM4NTE5MTUwLDE4MjM2MzMwMzkmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHA6Ly9pbWc0LmltZ3RuLmJkaW1nLmNvbS9pdC91PTc5NDIyODcwOCwxNzYzNTQ2NzkyJmZtPTExJmdwPTAuanBnJyxcbiAgICAgICdodHRwOi8vaW1nMC5pbWd0bi5iZGltZy5jb20vaXQvdT0xNTY2MDk5NDI4LDgxNTc0OTg0NiZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cDovL2ltZzMuaW1ndG4uYmRpbWcuY29tL2l0L3U9MjAzMjU1MzkwNywyNjcyNzAzODc0JmZtPTExJmdwPTAuanBnJ1xuICAgIF0sXG4gICAgaW50ZXJ2YWw6ICc1MDAwJyxcbiAgICBkdXJhdGlvbjogJzMwMCcsXG4gICAgcHBpYzogJ2h0dHA6Ly9pbWc1LmltZ3RuLmJkaW1nLmNvbS9pdC91PTg2OTk2NTg5Miw3NzM5MzMzNDMmZm09MjcmZ3A9MC5qcGcnLFxuICAgIGRwaWM6ICdodHRwOi8vaW1nMi5pbWd0bi5iZGltZy5jb20vaXQvdT0zNjE4MTI0NzExLDMwMTE3Nzc5ODEmZm09MjAwJmdwPTAuanBnJyxcbiAgICBscGljOiAnaHR0cDovL2ltZzAuaW1ndG4uYmRpbWcuY29tL2l0L3U9MTM5NDU1NDMzMCw3NTI4NjY1MzImZm09MTEmZ3A9MC5qcGcnLFxuICAgIGJwaWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT0xNjM4NDQ2NTksMjIxMjQ4MDM2NSZmbT0yNyZncD0wLmpwZycsXG4gICAgcGVyc29uYWw6ICfnsr7pgIknLFxuICAgIGV2ZXJ5ZGF5OiAnTVYnLFxuICAgIHBsYXlsaXN0OiAn5Y2V5puyJyxcbiAgICBsZWFkZXJib2FyZDogJ+abtOWkmicsXG4gICAgcmVjb21tZW5kOiAn5o6o6I2Q5q2M5Y2VJyxcbiAgICBuZXdtdXNpYzogJ+acgOaWsOmfs+S5kCcsXG4gICAgdG12OiAn5o6o6I2QTVYnLFxuICAgIGFuY2hvcjogJ+S4u+aSreeUteWPsCcsXG4gICAgcGljOiAnLi4vaW1hZ2VzL21vcmUucG5nJyxcbiAgICBydWxwaWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBydW1waWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBydXJwaWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICByZGxwaWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICByZG1waWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICByZHJwaWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBudWxwaWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBudW1waWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBudXJwaWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBuZGxwaWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBuZG1waWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBuZHJwaWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBtdWxwaWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBtdW1waWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBtdXJwaWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBtZGxwaWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBtZG1waWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBtZHJwaWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBhdWxwaWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBhdW1waWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBhdXJwaWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBhZGxwaWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBhZG1waWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBhZHJwaWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBydWxfdGV4dDogJ+S7iuaXpeaOqOiNkCdcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHBsYXlsaXN0KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvbGlzdCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBtdXNpYygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL211c2ljJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHZpZGVvKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvdmlkZW8nXG4gICAgICB9KVxuICAgIH0sXG4gICAgcmFkaW8oKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9wYWdlcy9yYWRpbydcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIH1cbiJdfQ==