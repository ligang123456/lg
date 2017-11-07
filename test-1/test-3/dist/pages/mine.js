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
      navigationBarTitleText: '个人',
      navigationBarBackgroundColor: 'silver'
    }, _this.data = {
      apic: '../images/address.png',
      opic: '../images/corder.png',
      cpic: '../images/cart.png',
      copic: '../images/collect.png',
      address: '收货地址',
      order: '我的订单',
      cart: '购物车',
      collect: '收藏',
      acolor: '#13227a',
      ocolor: '#13227a',
      ccolor: '#13227a',
      cocolor: '#13227a',
      mpic: '../images/head.jpeg',
      nickname: '昵称',
      code: '二维码名片',
      pay: '待付款',
      goods: '待收货',
      appraise: '待评价',
      news: '我的消息',
      feedback: '意见反馈',
      mynpic: '../images/nickname.png',
      mycpic: '../images/rcode.png',
      myppic: '../images/pay.png',
      mygpic: '../images/goods.png',
      myapic: '../images/appraise.png',
      mynepic: '../images/news.png',
      myfpic: '../images/feedback.png',
      mppic: '../images/more.png',
      mgpic: '../images/more.png',
      mapic: '../images/more.png',
      mnepic: '../images/more.png',
      mfpic: '../images/more.png',
      mcpic: '../images/Wechat1.jpeg',
      mnickname: 'Bea'
    }, _this.methods = {
      mpic: function mpic() {
        _wepy2.default.showModal({
          title: '提示',
          content: '是否授权？',
          success: function success(res) {
            if (res.confirm) {
              console.log('用户点击确定');
            }
          }
        });
      },
      mysaddress: function mysaddress() {
        _wepy2.default.navigateTo({
          url: '../pages/myadderss'
        });
      },
      mycorder: function mycorder() {
        _wepy2.default.navigateTo({
          url: '../pages/mycorder'
        });
      },
      mycart: function mycart() {
        _wepy2.default.navigateTo({
          url: '../pages/mycart'
        });
      },
      mycollect: function mycollect() {
        _wepy2.default.navigateTo({
          url: '../pages/mycollect'
        });
      },
      mynickname: function mynickname() {
        _wepy2.default.navigateTo({
          url: '../pages/mynickname'
        });
      },
      mycode: function mycode() {
        _wepy2.default.navigateTo({
          url: '../pages/mycode'
        });
      },
      mypay: function mypay() {
        _wepy2.default.navigateTo({
          url: '../pages/mypay'
        });
      },
      mygoods: function mygoods() {
        _wepy2.default.navigateTo({
          url: '../pages/mygoods'
        });
      },
      myappraise: function myappraise() {
        _wepy2.default.navigateTo({
          url: '../pages/myappraise'
        });
      },
      mynews: function mynews() {
        _wepy2.default.navigateTo({
          url: '../pages/mynews'
        });
      },
      myfeedback: function myfeedback() {
        _wepy2.default.navigateTo({
          url: '../pages/myfeedback'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onShow',
    value: function onShow() {
      var self = this;
      self.mnickname = self.$parent.globalData.nickName;
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/mine'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsImRhdGEiLCJhcGljIiwib3BpYyIsImNwaWMiLCJjb3BpYyIsImFkZHJlc3MiLCJvcmRlciIsImNhcnQiLCJjb2xsZWN0IiwiYWNvbG9yIiwib2NvbG9yIiwiY2NvbG9yIiwiY29jb2xvciIsIm1waWMiLCJuaWNrbmFtZSIsImNvZGUiLCJwYXkiLCJnb29kcyIsImFwcHJhaXNlIiwibmV3cyIsImZlZWRiYWNrIiwibXlucGljIiwibXljcGljIiwibXlwcGljIiwibXlncGljIiwibXlhcGljIiwibXluZXBpYyIsIm15ZnBpYyIsIm1wcGljIiwibWdwaWMiLCJtYXBpYyIsIm1uZXBpYyIsIm1mcGljIiwibWNwaWMiLCJtbmlja25hbWUiLCJtZXRob2RzIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50Iiwic3VjY2VzcyIsInJlcyIsImNvbmZpcm0iLCJjb25zb2xlIiwibG9nIiwibXlzYWRkcmVzcyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJteWNvcmRlciIsIm15Y2FydCIsIm15Y29sbGVjdCIsIm15bmlja25hbWUiLCJteWNvZGUiLCJteXBheSIsIm15Z29vZHMiLCJteWFwcHJhaXNlIiwibXluZXdzIiwibXlmZWVkYmFjayIsInNlbGYiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsIm5pY2tOYW1lIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLElBRGpCO0FBRVBDLG9DQUE4QjtBQUZ2QixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLHVCQUREO0FBRUxDLFlBQU0sc0JBRkQ7QUFHTEMsWUFBTSxvQkFIRDtBQUlMQyxhQUFPLHVCQUpGO0FBS0xDLGVBQVMsTUFMSjtBQU1MQyxhQUFPLE1BTkY7QUFPTEMsWUFBTSxLQVBEO0FBUUxDLGVBQVMsSUFSSjtBQVNMQyxjQUFRLFNBVEg7QUFVTEMsY0FBUSxTQVZIO0FBV0xDLGNBQVEsU0FYSDtBQVlMQyxlQUFTLFNBWko7QUFhTEMsWUFBTSxxQkFiRDtBQWNMQyxnQkFBVSxJQWRMO0FBZUxDLFlBQU0sT0FmRDtBQWdCTEMsV0FBSyxLQWhCQTtBQWlCTEMsYUFBTyxLQWpCRjtBQWtCTEMsZ0JBQVUsS0FsQkw7QUFtQkxDLFlBQU0sTUFuQkQ7QUFvQkxDLGdCQUFVLE1BcEJMO0FBcUJMQyxjQUFRLHdCQXJCSDtBQXNCTEMsY0FBUSxxQkF0Qkg7QUF1QkxDLGNBQVEsbUJBdkJIO0FBd0JMQyxjQUFRLHFCQXhCSDtBQXlCTEMsY0FBUSx3QkF6Qkg7QUEwQkxDLGVBQVMsb0JBMUJKO0FBMkJMQyxjQUFRLHdCQTNCSDtBQTRCTEMsYUFBTyxvQkE1QkY7QUE2QkxDLGFBQU8sb0JBN0JGO0FBOEJMQyxhQUFPLG9CQTlCRjtBQStCTEMsY0FBUSxvQkEvQkg7QUFnQ0xDLGFBQU8sb0JBaENGO0FBaUNMQyxhQUFPLHdCQWpDRjtBQWtDTEMsaUJBQVc7QUFsQ04sSyxRQW9DUEMsTyxHQUFVO0FBQ1J0QixVQURRLGtCQUNEO0FBQ0wsdUJBQUt1QixTQUFMLENBQWU7QUFDYkMsaUJBQU8sSUFETTtBQUViQyxtQkFBUyxPQUZJO0FBR2JDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsZ0JBQUlBLElBQUlDLE9BQVIsRUFBaUI7QUFDZkMsc0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7QUFDRjtBQVBZLFNBQWY7QUFTRCxPQVhPO0FBWVJDLGdCQVpRLHdCQVlLO0FBQ1gsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FoQk87QUFpQlJDLGNBakJRLHNCQWlCRztBQUNULHVCQUFLRixVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BckJPO0FBc0JSRSxZQXRCUSxvQkFzQkM7QUFDUCx1QkFBS0gsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQTFCTztBQTJCUkcsZUEzQlEsdUJBMkJJO0FBQ1YsdUJBQUtKLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0EvQk87QUFnQ1JJLGdCQWhDUSx3QkFnQ0s7QUFDWCx1QkFBS0wsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQXBDTztBQXFDUkssWUFyQ1Esb0JBcUNDO0FBQ1AsdUJBQUtOLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0F6Q087QUEwQ1JNLFdBMUNRLG1CQTBDQTtBQUNOLHVCQUFLUCxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BOUNPO0FBK0NSTyxhQS9DUSxxQkErQ0U7QUFDUix1QkFBS1IsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQW5ETztBQW9EUlEsZ0JBcERRLHdCQW9ESztBQUNYLHVCQUFLVCxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BeERPO0FBeURSUyxZQXpEUSxvQkF5REM7QUFDUCx1QkFBS1YsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQTdETztBQThEUlUsZ0JBOURRLHdCQThESztBQUNYLHVCQUFLWCxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBbEVPLEs7Ozs7OzZCQXFFRDtBQUNQLFVBQUlXLE9BQU8sSUFBWDtBQUNBQSxXQUFLdkIsU0FBTCxHQUFpQnVCLEtBQUtDLE9BQUwsQ0FBYUMsVUFBYixDQUF3QkMsUUFBekM7QUFDRDs7OztFQWpIZ0MsZUFBS0MsSTs7a0JBQW5CakUsSyIsImZpbGUiOiJtaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+S4quS6uicsXG4gICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJ3NpbHZlcidcbiAgfVxuICBkYXRhID0ge1xuICAgIGFwaWM6ICcuLi9pbWFnZXMvYWRkcmVzcy5wbmcnLFxuICAgIG9waWM6ICcuLi9pbWFnZXMvY29yZGVyLnBuZycsXG4gICAgY3BpYzogJy4uL2ltYWdlcy9jYXJ0LnBuZycsXG4gICAgY29waWM6ICcuLi9pbWFnZXMvY29sbGVjdC5wbmcnLFxuICAgIGFkZHJlc3M6ICfmlLbotKflnLDlnYAnLFxuICAgIG9yZGVyOiAn5oiR55qE6K6i5Y2VJyxcbiAgICBjYXJ0OiAn6LSt54mp6L2mJyxcbiAgICBjb2xsZWN0OiAn5pS26JePJyxcbiAgICBhY29sb3I6ICcjMTMyMjdhJyxcbiAgICBvY29sb3I6ICcjMTMyMjdhJyxcbiAgICBjY29sb3I6ICcjMTMyMjdhJyxcbiAgICBjb2NvbG9yOiAnIzEzMjI3YScsXG4gICAgbXBpYzogJy4uL2ltYWdlcy9oZWFkLmpwZWcnLFxuICAgIG5pY2tuYW1lOiAn5pi156ewJyxcbiAgICBjb2RlOiAn5LqM57u056CB5ZCN54mHJyxcbiAgICBwYXk6ICflvoXku5jmrL4nLFxuICAgIGdvb2RzOiAn5b6F5pS26LSnJyxcbiAgICBhcHByYWlzZTogJ+W+heivhOS7tycsXG4gICAgbmV3czogJ+aIkeeahOa2iOaBrycsXG4gICAgZmVlZGJhY2s6ICfmhI/op4Hlj43ppognLFxuICAgIG15bnBpYzogJy4uL2ltYWdlcy9uaWNrbmFtZS5wbmcnLFxuICAgIG15Y3BpYzogJy4uL2ltYWdlcy9yY29kZS5wbmcnLFxuICAgIG15cHBpYzogJy4uL2ltYWdlcy9wYXkucG5nJyxcbiAgICBteWdwaWM6ICcuLi9pbWFnZXMvZ29vZHMucG5nJyxcbiAgICBteWFwaWM6ICcuLi9pbWFnZXMvYXBwcmFpc2UucG5nJyxcbiAgICBteW5lcGljOiAnLi4vaW1hZ2VzL25ld3MucG5nJyxcbiAgICBteWZwaWM6ICcuLi9pbWFnZXMvZmVlZGJhY2sucG5nJyxcbiAgICBtcHBpYzogJy4uL2ltYWdlcy9tb3JlLnBuZycsXG4gICAgbWdwaWM6ICcuLi9pbWFnZXMvbW9yZS5wbmcnLFxuICAgIG1hcGljOiAnLi4vaW1hZ2VzL21vcmUucG5nJyxcbiAgICBtbmVwaWM6ICcuLi9pbWFnZXMvbW9yZS5wbmcnLFxuICAgIG1mcGljOiAnLi4vaW1hZ2VzL21vcmUucG5nJyxcbiAgICBtY3BpYzogJy4uL2ltYWdlcy9XZWNoYXQxLmpwZWcnLFxuICAgIG1uaWNrbmFtZTogJ0JlYSdcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIG1waWMoKSB7XG4gICAgICB3ZXB5LnNob3dNb2RhbCh7XG4gICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgY29udGVudDogJ+aYr+WQpuaOiOadg++8nycsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgbXlzYWRkcmVzcygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL215YWRkZXJzcydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBteWNvcmRlcigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL215Y29yZGVyJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIG15Y2FydCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL215Y2FydCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBteWNvbGxlY3QoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9wYWdlcy9teWNvbGxlY3QnXG4gICAgICB9KVxuICAgIH0sXG4gICAgbXluaWNrbmFtZSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL215bmlja25hbWUnXG4gICAgICB9KVxuICAgIH0sXG4gICAgbXljb2RlKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvbXljb2RlJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIG15cGF5KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvbXlwYXknXG4gICAgICB9KVxuICAgIH0sXG4gICAgbXlnb29kcygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL215Z29vZHMnXG4gICAgICB9KVxuICAgIH0sXG4gICAgbXlhcHByYWlzZSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL215YXBwcmFpc2UnXG4gICAgICB9KVxuICAgIH0sXG4gICAgbXluZXdzKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvbXluZXdzJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIG15ZmVlZGJhY2soKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9wYWdlcy9teWZlZWRiYWNrJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvblNob3coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5tbmlja25hbWUgPSBzZWxmLiRwYXJlbnQuZ2xvYmFsRGF0YS5uaWNrTmFtZVxuICB9XG59XG4iXX0=