'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _home = require('./../data/home.js');

var _home2 = _interopRequireDefault(_home);

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
      navigationBarTitleText: 'MILAN 畅享幸福'
    }, _this.data = {
      imgUrls: ['http://img1.imgtn.bdimg.com/it/u=2553322381,2925312760&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2269117905,883006692&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2685210028,3457372075&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1943435865,804430348&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3960877383,1051484866&fm=27&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1453502849,2727599889&fm=27&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1161813563,3069512331&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2650753610,2725677441&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2563212303,2386777870&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=301638266,118195273&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1195195877,3732307103&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2977108417,4066448308&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2808921144,383870039&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1710119994,1785422236&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1039723149,4180689354&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1444888880,1040714602&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1050848129,653593312&fm=27&gp=0.jpg', 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3061289273,1862940451&fm=11&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2792928026,4035569877&fm=27&gp=0.jpg', 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=400619145,2816616768&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1887976017,3134824751&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4109140288,4045698816&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=691853908,3835353995&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1461531979,3090219501&fm=11&gp=0.jpg', 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1330062990,4245696189&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4064038270,1595400132&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=897783695,942150829&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=67229818,1333284618&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3155610230,438529439&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=122757271,1438254285&fm=27&gp=0.jpg', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2372960960,3959808633&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=994154604,1342887172&fm=27&gp=0.jpg'],
      indicatorDots: true,
      autoplay: true,
      interval: '3000',
      duration: '300',
      spic: '../images/search.png',
      home: '',
      height: 0,
      width: 0
    }, _this.methods = {
      Korean: function Korean(e) {
        var item = e.currentTarget.dataset.index;
        console.log(e, 'item');
        switch (item) {
          case 0:
            _wepy2.default.navigateTo({
              url: '../pages/Korean'
            });break;
          case 1:
            _wepy2.default.navigateTo({
              url: '../pages/euramerican'
            });break;
          case 2:
            _wepy2.default.navigateTo({
              url: '../pages/China'
            });break;
          case 3:
            _wepy2.default.navigateTo({
              url: '../pages/fresh'
            });break;
        }
      }
      // China() {
      //   wepy.navigateTo({
      //     url: '../pages/China'
      //   })
      // },
      // euramerican() {
      //   wepy.navigateTo({
      //     url: '../pages/euramerican'
      //   })
      // },
      // fresh() {
      //   wepy.navigateTo({
      //     url: '../pages/fresh'
      //   })
      // }

    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.home = _home2.default;
      _wepy2.default.getSystemInfo({
        successs: function successs(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
      console.log(self.width, 'width');
      console.log(self.height, 'height');
      // wepy.request({
      //   url: 'http://127.0.0.1/user',
      //   method: 'GET',
      //   successs: function(res){
      //     self.text = res.data
      //     self.setData({
      //       text res.data
      //     })
      //   }
      // })
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJpbWdVcmxzIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsInNwaWMiLCJob21lIiwiaGVpZ2h0Iiwid2lkdGgiLCJtZXRob2RzIiwiS29yZWFuIiwiZSIsIml0ZW0iLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4IiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzZWxmIiwiZ2V0U3lzdGVtSW5mbyIsInN1Y2Nlc3NzIiwicmVzIiwid2luZG93SGVpZ2h0Iiwid2luZG93V2lkdGgiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxlQUFTLENBQ1AsdUVBRE8sRUFFUCwrRkFGTyxFQUdQLGdHQUhPLEVBSVAsK0ZBSk8sRUFLUCxnR0FMTyxFQU1QLGdHQU5PLEVBT1AsZ0dBUE8sRUFRUCxnR0FSTyxFQVNQLGdHQVRPLEVBVVAsOEZBVk8sRUFXUCxnR0FYTyxFQVlQLGdHQVpPLEVBYVAsK0ZBYk8sRUFjUCxnR0FkTyxFQWVQLGdHQWZPLEVBZ0JQLGdHQWhCTyxFQWlCUCwrRkFqQk8sRUFrQlAsZ0dBbEJPLEVBbUJQLGdHQW5CTyxFQW9CUCwrRkFwQk8sRUFxQlAsZ0dBckJPLEVBc0JQLGdHQXRCTyxFQXVCUCwrRkF2Qk8sRUF3QlAsZ0dBeEJPLEVBeUJQLGdHQXpCTyxFQTBCUCxnR0ExQk8sRUEyQlAsOEZBM0JPLEVBNEJQLDhGQTVCTyxFQTZCUCwrRkE3Qk8sRUE4QlAsK0ZBOUJPLEVBK0JQLGdHQS9CTyxFQWdDUCwrRkFoQ08sQ0FESjtBQW1DTEMscUJBQWUsSUFuQ1Y7QUFvQ0xDLGdCQUFVLElBcENMO0FBcUNMQyxnQkFBVSxNQXJDTDtBQXNDTEMsZ0JBQVUsS0F0Q0w7QUF1Q0xDLFlBQU0sc0JBdkNEO0FBd0NMQyxZQUFNLEVBeENEO0FBeUNMQyxjQUFRLENBekNIO0FBMENMQyxhQUFPO0FBMUNGLEssUUE0Q1BDLE8sR0FBVTtBQUNSQyxZQURRLGtCQUNEQyxDQURDLEVBQ0U7QUFDUixZQUFJQyxPQUFPRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsS0FBbkM7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWU4sQ0FBWixFQUFlLE1BQWY7QUFDQSxnQkFBUUMsSUFBUjtBQUNFLGVBQUssQ0FBTDtBQUFTLDJCQUFLTSxVQUFMLENBQWdCO0FBQ3ZCQyxtQkFBSztBQURrQixhQUFoQixFQUVMO0FBQ0osZUFBSyxDQUFMO0FBQVMsMkJBQUtELFVBQUwsQ0FBZ0I7QUFDdkJDLG1CQUFLO0FBRGtCLGFBQWhCLEVBRUw7QUFDSixlQUFLLENBQUw7QUFBUywyQkFBS0QsVUFBTCxDQUFnQjtBQUN2QkMsbUJBQUs7QUFEa0IsYUFBaEIsRUFFTDtBQUNKLGVBQUssQ0FBTDtBQUFTLDJCQUFLRCxVQUFMLENBQWdCO0FBQ3ZCQyxtQkFBSztBQURrQixhQUFoQixFQUVMO0FBWk47QUFjRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFqQ1EsSzs7Ozs7NkJBbUNEO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0FBLFdBQUtkLElBQUw7QUFDQSxxQkFBS2UsYUFBTCxDQUFtQjtBQUNqQkMsZ0JBRGlCLG9CQUNSQyxHQURRLEVBQ0g7QUFDWkgsZUFBS2IsTUFBTCxHQUFjZ0IsSUFBSUMsWUFBbEI7QUFDQUosZUFBS1osS0FBTCxHQUFhZSxJQUFJRSxXQUFqQjtBQUNEO0FBSmdCLE9BQW5CO0FBTUFULGNBQVFDLEdBQVIsQ0FBWUcsS0FBS1osS0FBakIsRUFBd0IsT0FBeEI7QUFDQVEsY0FBUUMsR0FBUixDQUFZRyxLQUFLYixNQUFqQixFQUF5QixRQUF6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs7RUF4R2dDLGVBQUttQixJOztrQkFBbkI5QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgaG9tZSBmcm9tICcuLi9kYXRhL2hvbWUuanMnXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ01JTEFOIOeVheS6q+W5uOemjydcbiAgfVxuICBkYXRhID0ge1xuICAgIGltZ1VybHM6IFtcbiAgICAgICdodHRwOi8vaW1nMS5pbWd0bi5iZGltZy5jb20vaXQvdT0yNTUzMzIyMzgxLDI5MjUzMTI3NjAmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MzLmJkc3RhdGljLmNvbS83MGNGdjhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yMjY5MTE3OTA1LDg4MzAwNjY5MiZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z2WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTI2ODUyMTAwMjgsMzQ1NzM3MjA3NSZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z2WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTE5NDM0MzU4NjUsODA0NDMwMzQ4JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMy5iZHN0YXRpYy5jb20vNzBjRnY4U2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9Mzk2MDg3NzM4MywxMDUxNDg0ODY2JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMi5iZHN0YXRpYy5jb20vNzBjRnZuU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTQ1MzUwMjg0OSwyNzI3NTk5ODg5JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMi5iZHN0YXRpYy5jb20vNzBjRnZuU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTE2MTgxMzU2MywzMDY5NTEyMzMxJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnZYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MjY1MDc1MzYxMCwyNzI1Njc3NDQxJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMy5iZHN0YXRpYy5jb20vNzBjRnY4U2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MjU2MzIxMjMwMywyMzg2Nzc3ODcwJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMy5iZHN0YXRpYy5jb20vNzBjRnY4U2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MzAxNjM4MjY2LDExODE5NTI3MyZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z2SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTExOTUxOTU4NzcsMzczMjMwNzEwMyZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z2WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTI5NzcxMDg0MTcsNDA2NjQ0ODMwOCZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z1WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTI4MDg5MjExNDQsMzgzODcwMDM5JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnVIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTcxMDExOTk5NCwxNzg1NDIyMjM2JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnVYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTAzOTcyMzE0OSw0MTgwNjg5MzU0JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnZIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTQ0NDg4ODg4MCwxMDQwNzE0NjAyJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMy5iZHN0YXRpYy5jb20vNzBjRnY4U2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTA1MDg0ODEyOSw2NTM1OTMzMTImZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MyLmJkc3RhdGljLmNvbS83MGNGdm5TaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0zMDYxMjg5MjczLDE4NjI5NDA0NTEmZm09MTEmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdlhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yNzkyOTI4MDI2LDQwMzU1Njk4NzcmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MzLmJkc3RhdGljLmNvbS83MGNGdjhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT00MDA2MTkxNDUsMjgxNjYxNjc2OCZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z1SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTE4ODc5NzYwMTcsMzEzNDgyNDc1MSZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z2SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTQxMDkxNDAyODgsNDA0NTY5ODgxNiZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z1WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTY5MTg1MzkwOCwzODM1MzUzOTk1JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnZIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTQ2MTUzMTk3OSwzMDkwMjE5NTAxJmZtPTExJmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnVYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTMzMDA2Mjk5MCw0MjQ1Njk2MTg5JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnZIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9NDA2NDAzODI3MCwxNTk1NDAwMTMyJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnZIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9ODk3NzgzNjk1LDk0MjE1MDgyOSZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z1SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTY3MjI5ODE4LDEzMzMyODQ2MTgmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdlhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0zMTU1NjEwMjMwLDQzODUyOTQzOSZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczAuYmRzdGF0aWMuY29tLzcwY0Z1SFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTEyMjc1NzI3MSwxNDM4MjU0Mjg1JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnZYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MjM3Mjk2MDk2MCwzOTU5ODA4NjMzJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnVIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9OTk0MTU0NjA0LDEzNDI4ODcxNzImZm09MjcmZ3A9MC5qcGcnXG4gICAgXSxcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGludGVydmFsOiAnMzAwMCcsXG4gICAgZHVyYXRpb246ICczMDAnLFxuICAgIHNwaWM6ICcuLi9pbWFnZXMvc2VhcmNoLnBuZycsXG4gICAgaG9tZTogJycsXG4gICAgaGVpZ2h0OiAwLFxuICAgIHdpZHRoOiAwXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBLb3JlYW4oZSkge1xuICAgICAgdmFyIGl0ZW0gPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgY29uc29sZS5sb2coZSwgJ2l0ZW0nKVxuICAgICAgc3dpdGNoIChpdGVtKSB7XG4gICAgICAgIGNhc2UgMCA6IHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vcGFnZXMvS29yZWFuJ1xuICAgICAgICB9KTsgYnJlYWtcbiAgICAgICAgY2FzZSAxIDogd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9wYWdlcy9ldXJhbWVyaWNhbidcbiAgICAgICAgfSk7IGJyZWFrXG4gICAgICAgIGNhc2UgMiA6IHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vcGFnZXMvQ2hpbmEnXG4gICAgICAgIH0pOyBicmVha1xuICAgICAgICBjYXNlIDMgOiB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3BhZ2VzL2ZyZXNoJ1xuICAgICAgICB9KTsgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQ2hpbmEoKSB7XG4gICAgLy8gICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgIC8vICAgICB1cmw6ICcuLi9wYWdlcy9DaGluYSdcbiAgICAvLyAgIH0pXG4gICAgLy8gfSxcbiAgICAvLyBldXJhbWVyaWNhbigpIHtcbiAgICAvLyAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgLy8gICAgIHVybDogJy4uL3BhZ2VzL2V1cmFtZXJpY2FuJ1xuICAgIC8vICAgfSlcbiAgICAvLyB9LFxuICAgIC8vIGZyZXNoKCkge1xuICAgIC8vICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAvLyAgICAgdXJsOiAnLi4vcGFnZXMvZnJlc2gnXG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5ob21lID0gaG9tZVxuICAgIHdlcHkuZ2V0U3lzdGVtSW5mbyh7XG4gICAgICBzdWNjZXNzcyhyZXMpIHtcbiAgICAgICAgc2VsZi5oZWlnaHQgPSByZXMud2luZG93SGVpZ2h0XG4gICAgICAgIHNlbGYud2lkdGggPSByZXMud2luZG93V2lkdGhcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHNlbGYud2lkdGgsICd3aWR0aCcpXG4gICAgY29uc29sZS5sb2coc2VsZi5oZWlnaHQsICdoZWlnaHQnKVxuICAgIC8vIHdlcHkucmVxdWVzdCh7XG4gICAgLy8gICB1cmw6ICdodHRwOi8vMTI3LjAuMC4xL3VzZXInLFxuICAgIC8vICAgbWV0aG9kOiAnR0VUJyxcbiAgICAvLyAgIHN1Y2Nlc3NzOiBmdW5jdGlvbihyZXMpe1xuICAgIC8vICAgICBzZWxmLnRleHQgPSByZXMuZGF0YVxuICAgIC8vICAgICBzZWxmLnNldERhdGEoe1xuICAgIC8vICAgICAgIHRleHQgcmVzLmRhdGFcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuICB9XG59XG4iXX0=