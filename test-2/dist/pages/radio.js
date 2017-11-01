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
      indicatorDots: true,
      autoplay: true,
      interval: '5000',
      duration: '300',
      recommend: '个性推荐',
      newmusic: '外语世界',
      tmv: '美文读物',
      anchor: '脱口秀',
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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/radio'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvLmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwibXVzaWMiLCJ2aWRlbyIsInJhZGlvIiwiaW1nVXJscyIsImluZGljYXRvckRvdHMiLCJhdXRvcGxheSIsImludGVydmFsIiwiZHVyYXRpb24iLCJyZWNvbW1lbmQiLCJuZXdtdXNpYyIsInRtdiIsImFuY2hvciIsInBpYyIsInJ1bHBpYyIsInJ1bF90ZXh0IiwibWV0aG9kcyIsInBsYXlsaXN0IiwibmF2aWdhdGVUbyIsInVybCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyxvQ0FBOEIsUUFEdkI7QUFFUEMsOEJBQXdCO0FBRmpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLGFBQU8sSUFERjtBQUVMQyxhQUFPLElBRkY7QUFHTEMsYUFBTyxJQUhGO0FBSUxDLGVBQVMsQ0FDUCxzRUFETyxFQUVQLHNFQUZPLEVBR1Asc0VBSE8sRUFJUCx3RUFKTyxFQUtQLHNFQUxPLEVBTVAsdUVBTk8sRUFPUCx1RUFQTyxFQVFQLHNFQVJPLEVBU1Asc0VBVE8sRUFVUCx1RUFWTyxDQUpKO0FBZ0JMQyxxQkFBZSxJQWhCVjtBQWlCTEMsZ0JBQVUsSUFqQkw7QUFrQkxDLGdCQUFVLE1BbEJMO0FBbUJMQyxnQkFBVSxLQW5CTDtBQW9CTEMsaUJBQVcsTUFwQk47QUFxQkxDLGdCQUFVLE1BckJMO0FBc0JMQyxXQUFLLE1BdEJBO0FBdUJMQyxjQUFRLEtBdkJIO0FBd0JMQyxXQUFLLG9CQXhCQTtBQXlCTEMsY0FBUSx3RUF6Qkg7QUEwQkxDLGdCQUFVO0FBMUJMLEssUUE0QlBDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNHO0FBQ1QsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SbEIsV0FOUSxtQkFNQTtBQUNOLHVCQUFLaUIsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQVZPO0FBV1JqQixXQVhRLG1CQVdBO0FBQ04sdUJBQUtnQixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BZk87QUFnQlJoQixXQWhCUSxtQkFnQkE7QUFDTix1QkFBS2UsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQXBCTyxLOzs7O0VBakN1QixlQUFLQyxJOztrQkFBbkJ4QixLIiwiZmlsZSI6InJhZGlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJ3NpbHZlcicsXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mfs+S5kOermSdcbiAgfVxuICBkYXRhID0ge1xuICAgIG11c2ljOiAn6Z+z5LmQJyxcbiAgICB2aWRlbzogJ+inhumikScsXG4gICAgcmFkaW86ICfnlLXlj7AnLFxuICAgIGltZ1VybHM6IFtcbiAgICAgICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT0zNzgxNDk5MzUxLDkxMTQ1NDYzMyZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cDovL2ltZzMuaW1ndG4uYmRpbWcuY29tL2l0L3U9MzM3Nzk3NzUzNSw5NTQ4MTk0ODgmZm09MTEmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHA6Ly9pbWczLmltZ3RuLmJkaW1nLmNvbS9pdC91PTM5MjcxMjg3NzcsMjk3Nzc2NjQ0JmZtPTExJmdwPTAuanBnJyxcbiAgICAgICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICAgICdodHRwOi8vaW1nMC5pbWd0bi5iZGltZy5jb20vaXQvdT0zMjE2MzE5Njk2LDc2Njk0NjY5NiZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cDovL2ltZzIuaW1ndG4uYmRpbWcuY29tL2l0L3U9MjE1MjYyNzQwOCwxMDQ1MTc0MzcyJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwOi8vaW1nMy5pbWd0bi5iZGltZy5jb20vaXQvdT0zMDM4NTE5MTUwLDE4MjM2MzMwMzkmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHA6Ly9pbWc0LmltZ3RuLmJkaW1nLmNvbS9pdC91PTc5NDIyODcwOCwxNzYzNTQ2NzkyJmZtPTExJmdwPTAuanBnJyxcbiAgICAgICdodHRwOi8vaW1nMC5pbWd0bi5iZGltZy5jb20vaXQvdT0xNTY2MDk5NDI4LDgxNTc0OTg0NiZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cDovL2ltZzMuaW1ndG4uYmRpbWcuY29tL2l0L3U9MjAzMjU1MzkwNywyNjcyNzAzODc0JmZtPTExJmdwPTAuanBnJ1xuICAgIF0sXG4gICAgaW5kaWNhdG9yRG90czogdHJ1ZSxcbiAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICBpbnRlcnZhbDogJzUwMDAnLFxuICAgIGR1cmF0aW9uOiAnMzAwJyxcbiAgICByZWNvbW1lbmQ6ICfkuKrmgKfmjqjojZAnLFxuICAgIG5ld211c2ljOiAn5aSW6K+t5LiW55WMJyxcbiAgICB0bXY6ICfnvo7mlofor7vniaknLFxuICAgIGFuY2hvcjogJ+iEseWPo+engCcsXG4gICAgcGljOiAnLi4vaW1hZ2VzL21vcmUucG5nJyxcbiAgICBydWxwaWM6ICdodHRwOi8vaW1nNC5pbWd0bi5iZGltZy5jb20vaXQvdT00MTAxNDA0MTQyLDMwMzYzNDMwNTImZm09MjAwJmdwPTAuanBnJyxcbiAgICBydWxfdGV4dDogJydcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIHBsYXlsaXN0KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvcGxheSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBtdXNpYygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL211c2ljJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIHZpZGVvKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvdmlkZW8nXG4gICAgICB9KVxuICAgIH0sXG4gICAgcmFkaW8oKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9wYWdlcy9yYWRpbydcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIH1cbiJdfQ==