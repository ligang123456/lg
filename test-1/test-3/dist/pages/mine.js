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
      mysaddress: function mysaddress() {
        _wepy2.default.navigateTo({
          url: '../pages/mysadderss'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvciIsImRhdGEiLCJhcGljIiwib3BpYyIsImNwaWMiLCJjb3BpYyIsImFkZHJlc3MiLCJvcmRlciIsImNhcnQiLCJjb2xsZWN0IiwiYWNvbG9yIiwib2NvbG9yIiwiY2NvbG9yIiwiY29jb2xvciIsIm1waWMiLCJuaWNrbmFtZSIsImNvZGUiLCJwYXkiLCJnb29kcyIsImFwcHJhaXNlIiwibmV3cyIsImZlZWRiYWNrIiwibXlucGljIiwibXljcGljIiwibXlwcGljIiwibXlncGljIiwibXlhcGljIiwibXluZXBpYyIsIm15ZnBpYyIsIm1wcGljIiwibWdwaWMiLCJtYXBpYyIsIm1uZXBpYyIsIm1mcGljIiwibWNwaWMiLCJtbmlja25hbWUiLCJtZXRob2RzIiwibXlzYWRkcmVzcyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJteWNvcmRlciIsIm15Y2FydCIsIm15Y29sbGVjdCIsIm15bmlja25hbWUiLCJteWNvZGUiLCJteXBheSIsIm15Z29vZHMiLCJteWFwcHJhaXNlIiwibXluZXdzIiwibXlmZWVkYmFjayIsInNlbGYiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsIm5pY2tOYW1lIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLElBRGpCO0FBRVBDLG9DQUE4QjtBQUZ2QixLLFFBSVRDLEksR0FBTztBQUNMQyxZQUFNLHVCQUREO0FBRUxDLFlBQU0sc0JBRkQ7QUFHTEMsWUFBTSxvQkFIRDtBQUlMQyxhQUFPLHVCQUpGO0FBS0xDLGVBQVMsTUFMSjtBQU1MQyxhQUFPLE1BTkY7QUFPTEMsWUFBTSxLQVBEO0FBUUxDLGVBQVMsSUFSSjtBQVNMQyxjQUFRLFNBVEg7QUFVTEMsY0FBUSxTQVZIO0FBV0xDLGNBQVEsU0FYSDtBQVlMQyxlQUFTLFNBWko7QUFhTEMsWUFBTSxxQkFiRDtBQWNMQyxnQkFBVSxJQWRMO0FBZUxDLFlBQU0sT0FmRDtBQWdCTEMsV0FBSyxLQWhCQTtBQWlCTEMsYUFBTyxLQWpCRjtBQWtCTEMsZ0JBQVUsS0FsQkw7QUFtQkxDLFlBQU0sTUFuQkQ7QUFvQkxDLGdCQUFVLE1BcEJMO0FBcUJMQyxjQUFRLHdCQXJCSDtBQXNCTEMsY0FBUSxxQkF0Qkg7QUF1QkxDLGNBQVEsbUJBdkJIO0FBd0JMQyxjQUFRLHFCQXhCSDtBQXlCTEMsY0FBUSx3QkF6Qkg7QUEwQkxDLGVBQVMsb0JBMUJKO0FBMkJMQyxjQUFRLHdCQTNCSDtBQTRCTEMsYUFBTyxvQkE1QkY7QUE2QkxDLGFBQU8sb0JBN0JGO0FBOEJMQyxhQUFPLG9CQTlCRjtBQStCTEMsY0FBUSxvQkEvQkg7QUFnQ0xDLGFBQU8sb0JBaENGO0FBaUNMQyxhQUFPLHdCQWpDRjtBQWtDTEMsaUJBQVc7QUFsQ04sSyxRQW9DUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHdCQUNLO0FBQ1gsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SQyxjQU5RLHNCQU1HO0FBQ1QsdUJBQUtGLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FWTztBQVdSRSxZQVhRLG9CQVdDO0FBQ1AsdUJBQUtILFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FmTztBQWdCUkcsZUFoQlEsdUJBZ0JJO0FBQ1YsdUJBQUtKLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FwQk87QUFxQlJJLGdCQXJCUSx3QkFxQks7QUFDWCx1QkFBS0wsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQXpCTztBQTBCUkssWUExQlEsb0JBMEJDO0FBQ1AsdUJBQUtOLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0E5Qk87QUErQlJNLFdBL0JRLG1CQStCQTtBQUNOLHVCQUFLUCxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BbkNPO0FBb0NSTyxhQXBDUSxxQkFvQ0U7QUFDUix1QkFBS1IsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQXhDTztBQXlDUlEsZ0JBekNRLHdCQXlDSztBQUNYLHVCQUFLVCxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdELE9BN0NPO0FBOENSUyxZQTlDUSxvQkE4Q0M7QUFDUCx1QkFBS1YsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQWxETztBQW1EUlUsZ0JBbkRRLHdCQW1ESztBQUNYLHVCQUFLWCxVQUFMLENBQWdCO0FBQ2RDLGVBQUs7QUFEUyxTQUFoQjtBQUdEO0FBdkRPLEs7Ozs7OzZCQTBERDtBQUNQLFVBQUlXLE9BQU8sSUFBWDtBQUNBQSxXQUFLZixTQUFMLEdBQWlCZSxLQUFLQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLFFBQXpDO0FBQ0Q7Ozs7RUF0R2dDLGVBQUtDLEk7O2tCQUFuQnpELEsiLCJmaWxlIjoibWluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuKrkuronLFxuICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICdzaWx2ZXInXG4gIH1cbiAgZGF0YSA9IHtcbiAgICBhcGljOiAnLi4vaW1hZ2VzL2FkZHJlc3MucG5nJyxcbiAgICBvcGljOiAnLi4vaW1hZ2VzL2NvcmRlci5wbmcnLFxuICAgIGNwaWM6ICcuLi9pbWFnZXMvY2FydC5wbmcnLFxuICAgIGNvcGljOiAnLi4vaW1hZ2VzL2NvbGxlY3QucG5nJyxcbiAgICBhZGRyZXNzOiAn5pS26LSn5Zyw5Z2AJyxcbiAgICBvcmRlcjogJ+aIkeeahOiuouWNlScsXG4gICAgY2FydDogJ+i0reeJqei9picsXG4gICAgY29sbGVjdDogJ+aUtuiXjycsXG4gICAgYWNvbG9yOiAnIzEzMjI3YScsXG4gICAgb2NvbG9yOiAnIzEzMjI3YScsXG4gICAgY2NvbG9yOiAnIzEzMjI3YScsXG4gICAgY29jb2xvcjogJyMxMzIyN2EnLFxuICAgIG1waWM6ICcuLi9pbWFnZXMvaGVhZC5qcGVnJyxcbiAgICBuaWNrbmFtZTogJ+aYteensCcsXG4gICAgY29kZTogJ+S6jOe7tOeggeWQjeeJhycsXG4gICAgcGF5OiAn5b6F5LuY5qy+JyxcbiAgICBnb29kczogJ+W+heaUtui0pycsXG4gICAgYXBwcmFpc2U6ICflvoXor4Tku7cnLFxuICAgIG5ld3M6ICfmiJHnmoTmtojmga8nLFxuICAgIGZlZWRiYWNrOiAn5oSP6KeB5Y+N6aaIJyxcbiAgICBteW5waWM6ICcuLi9pbWFnZXMvbmlja25hbWUucG5nJyxcbiAgICBteWNwaWM6ICcuLi9pbWFnZXMvcmNvZGUucG5nJyxcbiAgICBteXBwaWM6ICcuLi9pbWFnZXMvcGF5LnBuZycsXG4gICAgbXlncGljOiAnLi4vaW1hZ2VzL2dvb2RzLnBuZycsXG4gICAgbXlhcGljOiAnLi4vaW1hZ2VzL2FwcHJhaXNlLnBuZycsXG4gICAgbXluZXBpYzogJy4uL2ltYWdlcy9uZXdzLnBuZycsXG4gICAgbXlmcGljOiAnLi4vaW1hZ2VzL2ZlZWRiYWNrLnBuZycsXG4gICAgbXBwaWM6ICcuLi9pbWFnZXMvbW9yZS5wbmcnLFxuICAgIG1ncGljOiAnLi4vaW1hZ2VzL21vcmUucG5nJyxcbiAgICBtYXBpYzogJy4uL2ltYWdlcy9tb3JlLnBuZycsXG4gICAgbW5lcGljOiAnLi4vaW1hZ2VzL21vcmUucG5nJyxcbiAgICBtZnBpYzogJy4uL2ltYWdlcy9tb3JlLnBuZycsXG4gICAgbWNwaWM6ICcuLi9pbWFnZXMvV2VjaGF0MS5qcGVnJyxcbiAgICBtbmlja25hbWU6ICdCZWEnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBteXNhZGRyZXNzKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvbXlzYWRkZXJzcydcbiAgICAgIH0pXG4gICAgfSxcbiAgICBteWNvcmRlcigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL215Y29yZGVyJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIG15Y2FydCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL215Y2FydCdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBteWNvbGxlY3QoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9wYWdlcy9teWNvbGxlY3QnXG4gICAgICB9KVxuICAgIH0sXG4gICAgbXluaWNrbmFtZSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL215bmlja25hbWUnXG4gICAgICB9KVxuICAgIH0sXG4gICAgbXljb2RlKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvbXljb2RlJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIG15cGF5KCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvbXlwYXknXG4gICAgICB9KVxuICAgIH0sXG4gICAgbXlnb29kcygpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL215Z29vZHMnXG4gICAgICB9KVxuICAgIH0sXG4gICAgbXlhcHByYWlzZSgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy4uL3BhZ2VzL215YXBwcmFpc2UnXG4gICAgICB9KVxuICAgIH0sXG4gICAgbXluZXdzKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnLi4vcGFnZXMvbXluZXdzJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIG15ZmVlZGJhY2soKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcuLi9wYWdlcy9teWZlZWRiYWNrJ1xuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBvblNob3coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgc2VsZi5tbmlja25hbWUgPSBzZWxmLiRwYXJlbnQuZ2xvYmFsRGF0YS5uaWNrTmFtZVxuICB9XG59XG4iXX0=