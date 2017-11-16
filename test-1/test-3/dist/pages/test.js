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
        success: function success(res) {
          self.height = res.windowHeight;
          self.width = res.windowWidth;
        }
      });
      console.log(self.width, 'width');
      console.log(self.height, 'height');
      _wepy2.default.showLoading({
        title: '加载中',
        duration: 3000,
        image: '../images/ahome.png'
      });
      _wepy2.default.request({
        url: 'http://127.0.0.1:7001/user',
        method: 'GET',
        success: function success(res) {
          self.home = res.data;
          self.setData({
            home: res.data
          });
          console.log(res.data);
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/test'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImltZ1VybHMiLCJpbmRpY2F0b3JEb3RzIiwiYXV0b3BsYXkiLCJpbnRlcnZhbCIsImR1cmF0aW9uIiwic3BpYyIsImhvbWUiLCJoZWlnaHQiLCJ3aWR0aCIsIm1ldGhvZHMiLCJLb3JlYW4iLCJlIiwiaXRlbSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwibmF2aWdhdGVUbyIsInVybCIsInNlbGYiLCJnZXRTeXN0ZW1JbmZvIiwic3VjY2VzcyIsInJlcyIsIndpbmRvd0hlaWdodCIsIndpbmRvd1dpZHRoIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsImltYWdlIiwicmVxdWVzdCIsIm1ldGhvZCIsInNldERhdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxlQUFTLENBQ1AsdUVBRE8sRUFFUCwrRkFGTyxFQUdQLGdHQUhPLEVBSVAsK0ZBSk8sRUFLUCxnR0FMTyxFQU1QLGdHQU5PLEVBT1AsZ0dBUE8sRUFRUCxnR0FSTyxFQVNQLGdHQVRPLEVBVVAsOEZBVk8sRUFXUCxnR0FYTyxFQVlQLGdHQVpPLEVBYVAsK0ZBYk8sRUFjUCxnR0FkTyxFQWVQLGdHQWZPLEVBZ0JQLGdHQWhCTyxFQWlCUCwrRkFqQk8sRUFrQlAsZ0dBbEJPLEVBbUJQLGdHQW5CTyxFQW9CUCwrRkFwQk8sRUFxQlAsZ0dBckJPLEVBc0JQLGdHQXRCTyxFQXVCUCwrRkF2Qk8sRUF3QlAsZ0dBeEJPLEVBeUJQLGdHQXpCTyxFQTBCUCxnR0ExQk8sRUEyQlAsOEZBM0JPLEVBNEJQLDhGQTVCTyxFQTZCUCwrRkE3Qk8sRUE4QlAsK0ZBOUJPLEVBK0JQLGdHQS9CTyxFQWdDUCwrRkFoQ08sQ0FESjtBQW1DTEMscUJBQWUsSUFuQ1Y7QUFvQ0xDLGdCQUFVLElBcENMO0FBcUNMQyxnQkFBVSxNQXJDTDtBQXNDTEMsZ0JBQVUsS0F0Q0w7QUF1Q0xDLFlBQU0sc0JBdkNEO0FBd0NMQyxZQUFNLEVBeENEO0FBeUNMQyxjQUFRLENBekNIO0FBMENMQyxhQUFPO0FBMUNGLEssUUE0Q1BDLE8sR0FBVTtBQUNSQyxZQURRLGtCQUNEQyxDQURDLEVBQ0U7QUFDUixZQUFJQyxPQUFPRCxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3QkMsS0FBbkM7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWU4sQ0FBWixFQUFlLE1BQWY7QUFDQSxnQkFBUUMsSUFBUjtBQUNFLGVBQUssQ0FBTDtBQUFTLDJCQUFLTSxVQUFMLENBQWdCO0FBQ3ZCQyxtQkFBSztBQURrQixhQUFoQixFQUVMO0FBQ0osZUFBSyxDQUFMO0FBQVMsMkJBQUtELFVBQUwsQ0FBZ0I7QUFDdkJDLG1CQUFLO0FBRGtCLGFBQWhCLEVBRUw7QUFDSixlQUFLLENBQUw7QUFBUywyQkFBS0QsVUFBTCxDQUFnQjtBQUN2QkMsbUJBQUs7QUFEa0IsYUFBaEIsRUFFTDtBQUNKLGVBQUssQ0FBTDtBQUFTLDJCQUFLRCxVQUFMLENBQWdCO0FBQ3ZCQyxtQkFBSztBQURrQixhQUFoQixFQUVMO0FBWk47QUFjRDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFqQ1EsSzs7Ozs7NkJBbUNEO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0FBLFdBQUtkLElBQUw7QUFDQSxxQkFBS2UsYUFBTCxDQUFtQjtBQUNqQkMsZUFEaUIsbUJBQ1RDLEdBRFMsRUFDSjtBQUNYSCxlQUFLYixNQUFMLEdBQWNnQixJQUFJQyxZQUFsQjtBQUNBSixlQUFLWixLQUFMLEdBQWFlLElBQUlFLFdBQWpCO0FBQ0Q7QUFKZ0IsT0FBbkI7QUFNQVQsY0FBUUMsR0FBUixDQUFZRyxLQUFLWixLQUFqQixFQUF3QixPQUF4QjtBQUNBUSxjQUFRQyxHQUFSLENBQVlHLEtBQUtiLE1BQWpCLEVBQXlCLFFBQXpCO0FBQ0EscUJBQUttQixXQUFMLENBQWlCO0FBQ2ZDLGVBQU8sS0FEUTtBQUVmdkIsa0JBQVUsSUFGSztBQUdmd0IsZUFBTztBQUhRLE9BQWpCO0FBS0EscUJBQUtDLE9BQUwsQ0FBYTtBQUNYVixhQUFLLDRCQURNO0FBRVhXLGdCQUFRLEtBRkc7QUFHWFIsaUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQkgsZUFBS2QsSUFBTCxHQUFZaUIsSUFBSXhCLElBQWhCO0FBQ0FxQixlQUFLVyxPQUFMLENBQWE7QUFDWHpCLGtCQUFNaUIsSUFBSXhCO0FBREMsV0FBYjtBQUdBaUIsa0JBQVFDLEdBQVIsQ0FBWU0sSUFBSXhCLElBQWhCO0FBQ0Q7QUFUVSxPQUFiO0FBV0Q7Ozs7RUE5R2dDLGVBQUtpQyxJOztrQkFBbkJwQyxLIiwiZmlsZSI6InRlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBob21lIGZyb20gJy4uL2RhdGEvaG9tZS5qcydcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAnTUlMQU4g55WF5Lqr5bm456aPJ1xuICB9XG4gIGRhdGEgPSB7XG4gICAgaW1nVXJsczogW1xuICAgICAgJ2h0dHA6Ly9pbWcxLmltZ3RuLmJkaW1nLmNvbS9pdC91PTI1NTMzMjIzODEsMjkyNTMxMjc2MCZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczMuYmRzdGF0aWMuY29tLzcwY0Z2OFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTIyNjkxMTc5MDUsODgzMDA2NjkyJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnZYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MjY4NTIxMDAyOCwzNDU3MzcyMDc1JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnZYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTk0MzQzNTg2NSw4MDQ0MzAzNDgmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MzLmJkc3RhdGljLmNvbS83MGNGdjhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0zOTYwODc3MzgzLDEwNTE0ODQ4NjYmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MyLmJkc3RhdGljLmNvbS83MGNGdm5TaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xNDUzNTAyODQ5LDI3Mjc1OTk4ODkmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MyLmJkc3RhdGljLmNvbS83MGNGdm5TaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xMTYxODEzNTYzLDMwNjk1MTIzMzEmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdlhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yNjUwNzUzNjEwLDI3MjU2Nzc0NDEmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MzLmJkc3RhdGljLmNvbS83MGNGdjhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yNTYzMjEyMzAzLDIzODY3Nzc4NzAmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MzLmJkc3RhdGljLmNvbS83MGNGdjhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0zMDE2MzgyNjYsMTE4MTk1MjczJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnZIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTE5NTE5NTg3NywzNzMyMzA3MTAzJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnZYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9Mjk3NzEwODQxNyw0MDY2NDQ4MzA4JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnVYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MjgwODkyMTE0NCwzODM4NzAwMzkmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdUhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xNzEwMTE5OTk0LDE3ODU0MjIyMzYmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdVhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xMDM5NzIzMTQ5LDQxODA2ODkzNTQmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdkhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xNDQ0ODg4ODgwLDEwNDA3MTQ2MDImZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MzLmJkc3RhdGljLmNvbS83MGNGdjhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xMDUwODQ4MTI5LDY1MzU5MzMxMiZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczIuYmRzdGF0aWMuY29tLzcwY0Z2blNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTMwNjEyODkyNzMsMTg2Mjk0MDQ1MSZmbT0xMSZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z2WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTI3OTI5MjgwMjYsNDAzNTU2OTg3NyZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczMuYmRzdGF0aWMuY29tLzcwY0Z2OFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTQwMDYxOTE0NSwyODE2NjE2NzY4JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnVIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTg4Nzk3NjAxNywzMTM0ODI0NzUxJmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnZIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9NDEwOTE0MDI4OCw0MDQ1Njk4ODE2JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMS5iZHN0YXRpYy5jb20vNzBjRnVYU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9NjkxODUzOTA4LDM4MzUzNTM5OTUmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdkhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xNDYxNTMxOTc5LDMwOTAyMTk1MDEmZm09MTEmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdVhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0xMzMwMDYyOTkwLDQyNDU2OTYxODkmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdkhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT00MDY0MDM4MjcwLDE1OTU0MDAxMzImZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdkhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT04OTc3ODM2OTUsOTQyMTUwODI5JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnVIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9NjcyMjk4MTgsMTMzMzI4NDYxOCZmbT0yNyZncD0wLmpwZycsXG4gICAgICAnaHR0cHM6Ly9zczEuYmRzdGF0aWMuY29tLzcwY0Z2WFNoX1ExWW54R2twb1dLMUhGNmhoeS9pdC91PTMxNTU2MTAyMzAsNDM4NTI5NDM5JmZtPTI3JmdwPTAuanBnJyxcbiAgICAgICdodHRwczovL3NzMC5iZHN0YXRpYy5jb20vNzBjRnVIU2hfUTFZbnhHa3BvV0sxSEY2aGh5L2l0L3U9MTIyNzU3MjcxLDE0MzgyNTQyODUmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MxLmJkc3RhdGljLmNvbS83MGNGdlhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT0yMzcyOTYwOTYwLDM5NTk4MDg2MzMmZm09MjcmZ3A9MC5qcGcnLFxuICAgICAgJ2h0dHBzOi8vc3MwLmJkc3RhdGljLmNvbS83MGNGdUhTaF9RMVlueEdrcG9XSzFIRjZoaHkvaXQvdT05OTQxNTQ2MDQsMTM0Mjg4NzE3MiZmbT0yNyZncD0wLmpwZydcbiAgICBdLFxuICAgIGluZGljYXRvckRvdHM6IHRydWUsXG4gICAgYXV0b3BsYXk6IHRydWUsXG4gICAgaW50ZXJ2YWw6ICczMDAwJyxcbiAgICBkdXJhdGlvbjogJzMwMCcsXG4gICAgc3BpYzogJy4uL2ltYWdlcy9zZWFyY2gucG5nJyxcbiAgICBob21lOiAnJyxcbiAgICBoZWlnaHQ6IDAsXG4gICAgd2lkdGg6IDBcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIEtvcmVhbihlKSB7XG4gICAgICB2YXIgaXRlbSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XG4gICAgICBjb25zb2xlLmxvZyhlLCAnaXRlbScpXG4gICAgICBzd2l0Y2ggKGl0ZW0pIHtcbiAgICAgICAgY2FzZSAwIDogd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9wYWdlcy9Lb3JlYW4nXG4gICAgICAgIH0pOyBicmVha1xuICAgICAgICBjYXNlIDEgOiB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy4uL3BhZ2VzL2V1cmFtZXJpY2FuJ1xuICAgICAgICB9KTsgYnJlYWtcbiAgICAgICAgY2FzZSAyIDogd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcuLi9wYWdlcy9DaGluYSdcbiAgICAgICAgfSk7IGJyZWFrXG4gICAgICAgIGNhc2UgMyA6IHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnLi4vcGFnZXMvZnJlc2gnXG4gICAgICAgIH0pOyBicmVha1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBDaGluYSgpIHtcbiAgICAvLyAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgLy8gICAgIHVybDogJy4uL3BhZ2VzL0NoaW5hJ1xuICAgIC8vICAgfSlcbiAgICAvLyB9LFxuICAgIC8vIGV1cmFtZXJpY2FuKCkge1xuICAgIC8vICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAvLyAgICAgdXJsOiAnLi4vcGFnZXMvZXVyYW1lcmljYW4nXG4gICAgLy8gICB9KVxuICAgIC8vIH0sXG4gICAgLy8gZnJlc2goKSB7XG4gICAgLy8gICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgIC8vICAgICB1cmw6ICcuLi9wYWdlcy9mcmVzaCdcbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuICB9XG4gIG9uTG9hZCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICBzZWxmLmhvbWUgPSBob21lXG4gICAgd2VweS5nZXRTeXN0ZW1JbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHNlbGYuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodFxuICAgICAgICBzZWxmLndpZHRoID0gcmVzLndpbmRvd1dpZHRoXG4gICAgICB9XG4gICAgfSlcbiAgICBjb25zb2xlLmxvZyhzZWxmLndpZHRoLCAnd2lkdGgnKVxuICAgIGNvbnNvbGUubG9nKHNlbGYuaGVpZ2h0LCAnaGVpZ2h0JylcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcbiAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgaW1hZ2U6ICcuLi9pbWFnZXMvYWhvbWUucG5nJ1xuICAgIH0pXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogJ2h0dHA6Ly8xMjcuMC4wLjE6NzAwMS91c2VyJyxcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgc2VsZi5ob21lID0gcmVzLmRhdGFcbiAgICAgICAgc2VsZi5zZXREYXRhKHtcbiAgICAgICAgICBob21lOiByZXMuZGF0YVxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG4iXX0=