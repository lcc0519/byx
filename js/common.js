var BASE_URL = "http://120.192.167.83/baiyixin_wuye/";

//var BASE_URL =  "https://www.baiyixinkeji.com/baiyixin_wuye/";

var BASE_URL_SC = "http://120.192.167.83/publicAccount/";
var YIZHAN_BASE_URL = "http://120.192.167.83/baiyixinkeji_new/";
var Query_Shops_URL = YIZHAN_BASE_URL + "server/villageinfo.php";
var HOME_SHOP = BASE_URL + "server/sellerSelAll.php";
var HOME_GOODS = BASE_URL + "server/selfoodbyseller.php?sellerid=";
var HOME_SEND_ORDER = BASE_URL + "server/insertOrder.php";
var LOGIN_URL = BASE_URL + "server/login.php"; 
var LOGIN_URL_SC = BASE_URL_SC + "server/login.php";//allen add sc
var LOGIN_WUYE_URL_SC = BASE_URL_SC + "server/wuye_login.php";//allen add sc
var WUYE_ADVERTISEMENT_URL = BASE_URL + "server/advertSelAll.php";
var REGIST_URL = BASE_URL + "server/regist.php";
var REGIST_URL_SC = BASE_URL_SC + "server/regist.php";//allen add sc
var BIND_USERINFO_URL = BASE_URL + "server/regist_xiangxi.php";
var BIND_USERINFO_URL_SC = BASE_URL_SC + "server/regist_wuye.php";
var BIND_MENJIN_URL = BASE_URL + "server/damen_default.php";
var BIND_URL = BASE_URL + "server/youeryuanAdd.php";
var MODIFY_USER_URL = BASE_URL + "server/usermodify.php";
var ORDER_SEL_USER_URL = BASE_URL + "server/orderselbyuserid.php";
var ORDER_DETAILS_SEL_BY_ORDERID_URL = BASE_URL + "server/orderdetailselbyorderid.php";
var ALIPAY_SERVER_NOTIFY_URL = BASE_URL + "server/zhifubao/notice.php";
var ORDER_STATU_CHANGETO_CANCEL_URL = BASE_URL + "server/cancelorders.php";
var UPDATE_APP_URL = BASE_URL + "server/apkupdate.php";
var DELETE_ORDER_URL = BASE_URL + "server/delorders.php";
var SPLASH_URL = "http://210.203.20.70/elema/" + "server/advertSelAll_shouye.php";
var TOTAL_MONEY_USER_FOR_SHOP = BASE_URL + "server/tongjibyuserid.php";
var ALIPAYSERVER = BASE_URL + 'html5_zhifubao/alipay/index_supermarket.php';
//var ALIPAYSERVER = YIZHAN_BASE_URL + 'server/zhifubao/notice.php';//商超支付宝付款
var VIP_ALIPAYSERVER = BASE_URL + 'html5_zhifubao/alipay/index_huiyuanchongzhi.php'; //add by rocky on 20170717
var VIP_Apply_ALIPAYSERVER = BASE_URL + 'html5_zhifubao/alipay/index_vipCard.php'; //add by rocky on 20170718

var Query_Tongzhigonggao_All_URL = BASE_URL + "server/noticeList.php";
var Query_Tongzhigonggao_All_URL_SC = BASE_URL + "server/noticeList_public.php";
var Query_Bianminxinxi_My_URL = BASE_URL + "server/telList.php";
var Query_Tousujianyi_URL = BASE_URL + "server/hudongList.php";
var Query_Tousujianyi_URL_SC = BASE_URL + "server/hudongList_public.php";
var Query_Fangwutuoguan_URL = BASE_URL + "server/tuoguanList.php";
var Del_Tousujianyi_URL = BASE_URL + "server/hudongDel.php";
var Del_Fangwutuoguan__URL = BASE_URL + "server/tuoguanDel.php";
var Insert_Tousujianyi_URL = BASE_URL + "server/hudongAdd.php";
var Insert_Fangkejilu_URL = BASE_URL + "server/fangkeAdd.php";
var QUERY_CHEWEITU_URL = BASE_URL + "server/cheku_pic.php";
var QUERY_XIAOQFANG_URL = BASE_URL + "server/house_build_pic.php";
var QUERY_CHOUJIANG_URL = BASE_URL + "server/myjiangpin.php";
var QUERY_JIANGPIN_URL = BASE_URL + "server/choujiang.php";
var Insert_Qiandaojifen_URL = BASE_URL + "server/qiandao.php";
var Insert_Fangwutuoguan_URL = BASE_URL + "server/tuoguanAdd.php";
var Query_MyHouseInfo_URL = BASE_URL + "server/houseInfo.php";
var Change_Username_URL = BASE_URL + "server/changeName.php";
var Change_Password_URL_SC = BASE_URL_SC + "server/changePwd.php";
var Update_myinfo_URL_SC = BASE_URL_SC + "server/myInfoModify.php"; //修改电话号码
var Query_Xiaoquliebiao_URL = BASE_URL + "server/xiaoquList.php";
var Query_Address_URL = BASE_URL + "server/houseInfos.php";
var Query_Qiuzhu_All_URL = BASE_URL + "server/jinjiTel2.php";
var Query_Youeryuan_All_URL = BASE_URL + "server/youeryuanInfoAll.php";
var Query_Audit_All_URL = BASE_URL + "server/selaudit.php";
var Product_Type_URL = YIZHAN_BASE_URL + "server/commodity_type_SelAll.php";
var Query_Yizhan_Fenlei_All_URL = YIZHAN_BASE_URL + "server/ShangpinSelAll_byshangjiaId_fenlei.php";
var Query_Yizhan_Search_All_URL = YIZHAN_BASE_URL + "server/commoditySelM.php";
var Insert_Yizhan_Gouwuche_URL = YIZHAN_BASE_URL + "server/shopping_cart_insert.php";
var Delete_Yizhan_Gouwuche_URL = YIZHAN_BASE_URL + "server/shopping_cart_del.php";
var Query_Yizhan_Gouwuche_All_URL = YIZHAN_BASE_URL + "server/shopping_cartSelAll.php";
var Query_Yizhan_Kucun_All_URL = YIZHAN_BASE_URL + "server/get_inventory.php";
var Insert_Yizhan_Favorite_URL = YIZHAN_BASE_URL + "server/collection_insert.php";
var Delete_Yizhan_Shoucang_URL = YIZHAN_BASE_URL + "server/collection_del.php";
var Delete_Yizhan_Zuji_URL = YIZHAN_BASE_URL + "server/browse_del.php";
var Query_Yizhan_Wodeshoucang_All_URL = YIZHAN_BASE_URL + "server/collectionSelAll.php";
var Query_Yizhan_Wodezuji_All_URL = YIZHAN_BASE_URL + "server/browseSelAll.php";
var Query_Yizhan_Remencuxiao_All_URL = YIZHAN_BASE_URL + "server/promotion_FName.php";
var Query_Yizhan_OrderCount_URL = YIZHAN_BASE_URL + "server/ordercount.php";
//var Query_Yizhan_Remencuxiao_All_URL = YIZHAN_BASE_URL + "server/calc_prom.php";
var Query_Cuxiao_Fenlei_All_URL = YIZHAN_BASE_URL + "server/promotion_commoditySel.php";
//var Query_Cuxiao_CALC_PROM_URL = YIZHAN_BASE_URL + "server/calc_prom.php";
var Query_Cuxiao_CALC_PROM_URL = YIZHAN_BASE_URL + "server/promotioncal.php";
var Delete_Yizhan_Dizhi_URL = YIZHAN_BASE_URL + "server/shipping_address_del.php";
var Query_Yizhan_Wodedizhi_All_URL = YIZHAN_BASE_URL + "server/ShippingAddressSelAll.php";
var Query_Yizhan_Zhifufangshi_All_URL = YIZHAN_BASE_URL + "server/paymode_list.php";
var Query_Yizhan_Fenlei_One_URL = YIZHAN_BASE_URL + "server/ShangpinDetail_biaohao_shangjiaId.php";
var Query_Health_Report_URL = YIZHAN_BASE_URL + "server/pdfSel.php";
//var Query_Yizhan_Fenlei_One_URL = YIZHAN_BASE_URL + "server/collectionSelOne.php";
var Query_Yizhan_Wodehuiyuanka_All_URL = YIZHAN_BASE_URL + "server/member_Sync.php";
var Query_Pay_Result_All_URL = YIZHAN_BASE_URL + "server/zhifubao/notice_nopay.php";
var Query_Yizhan_Wodemendian_All_URL = YIZHAN_BASE_URL + "server/stationSelAllo.php";
var Query_Yizhan_Wodexiaoxi_All_URL = YIZHAN_BASE_URL + "server/messageSelAll.php";
var Insert_Yizhan_Dingdan_URL = YIZHAN_BASE_URL + "server/order_insert.php";
var Insert_Yizhan_Dingdan_URL_iOS = YIZHAN_BASE_URL + "server/order_insert_appstore.php"; //本地数据for appstore
var Update_Yizhan_Dingdan_URL = YIZHAN_BASE_URL + "server/order_Modify.php";
var PAY_WUYEFEI_NOTIFY_URL = BASE_URL + "server/zhifubao/notice.php";
var PAY_ZHEJIAYIZHAN_NOTIFY_URL = YIZHAN_BASE_URL + "server/zhifubao/notice.php";

//var Query_Yizhan_Wodedingdan_All_URL = YIZHAN_BASE_URL + "server/orderSelAllo.php";
var Query_Yizhan_Wodedingdan_All_URL = YIZHAN_BASE_URL + "server/orderSelAllcommodity.php";
var Delete_Yizhan_Wodedingdan_URL = YIZHAN_BASE_URL + "server/order_delete.php";

var Query_Yizhan_Dingdan_Detail_All_URL = YIZHAN_BASE_URL + "server/orderSelAll.php";

var Insert_Wode_Dizhi_URL = YIZHAN_BASE_URL + "server/shipping_address_insert.php";
var Update_Wode_Dizhi_URL = YIZHAN_BASE_URL + "server/shipping_address_Modify.php";

var Select_Huiyuanka_URL = YIZHAN_BASE_URL + "server/member_MobilePhone_Query.php";
var Update_Huiyuanka_URL = YIZHAN_BASE_URL + "server/member_Account_Binding.php";
var Update_Huiyuanka_new_URL = YIZHAN_BASE_URL + "server/member_Account_Binding_new.php";//add on 20170826 会员卡绑定new

var Insert_Huiyuanka_URL = YIZHAN_BASE_URL + "server/member_Register.php";
var Insert_Order_C_URL = YIZHAN_BASE_URL + "server/order_c_insert.php";

//********add by ada***********
var MINSHENG_BASE_URL = "http://120.192.167.83/minsheng/server/";
var MINSHENG_PIC_URL = "http://120.192.167.83/minsheng/";
var Query_Goods_URL = MINSHENG_BASE_URL + "subBankuaiSelAll.php";
var Query_SubCategroy_URL = MINSHENG_BASE_URL + "bankuaiShangjiaSelAll.php";
var Query_SubCategroy_List_URL = MINSHENG_BASE_URL + "ShangpinSelAll_byshangjiaId.php";
var Query_Shangpin_Detail_URL = MINSHENG_BASE_URL + "ShangpinDetail_biaohao_shangjiaId.php";
var Query_Kucun_URL = MINSHENG_BASE_URL + "shangpinshuliang.php";
var Insert_Minsheng_Dingdan_URL = MINSHENG_BASE_URL + "zhijie_xiadan.php";
var Query_Minsheng_dingdan_All_URL = MINSHENG_BASE_URL + "chakan_dingdan.php";
var Delete_dingdan_URL = MINSHENG_BASE_URL + "delete_dingdan.php";
var Query_Minsheng_gowuche_URL = MINSHENG_BASE_URL + "chakanGouWuChe.php";   //add by rocky on 20170823

//*******************
var QUERY_ALL_HOUSE = BASE_URL_SC + "server/findFangchan.php";
var QUERY_ALL_INVITE = BASE_URL_SC + "server/InviteListByhouseNo.php";
var ADD_NEW_INVITE = BASE_URL_SC + "server/fangchanInvite.php";
var UPDATE_MY_INVITE = BASE_URL_SC + "server/updateInvite.php";
var QUERY_ALL_BE_INVITED = BASE_URL_SC + "server/invitedList.php";
var UPDATE_DEFAULT_HOUSE = BASE_URL_SC + "server/updateDefaultFangchan.php";
var ENTER_INVITED_HOUSE = BASE_URL_SC + "server/enterInviter.php";







//add by Rita
var Query_Wuyejiaofei_All_URL = BASE_URL + "server/jiaofeeList.php";
var Query_Tiexinfuwu_All_URL = BASE_URL + "server/tiexinList.php";
var Query_Wuyebaoxiu_All_URL = BASE_URL + "server/weixiuList.php";
var Query_Fangkejilu_All_URL = BASE_URL + "server/fangkeList.php";
var Insert_Wuyebaoxiu_All_URL = BASE_URL + "server/weixiuAdd.php";
var Delete_Wuyebaoxiu_All_URL = BASE_URL + "server/weixiuDel.php";
var Delete_Fangwutuoguan_All_URL = BASE_URL + "server/tuoguanDel.php";
var Insert_Commit_All_URL = BASE_URL + "shequserver/insertTieziInfo.php";
var Query_Commit_All_URL = BASE_URL + "shequserver/selecttieziAndHuifuByForumVillageAll.php";
var Insert_Reply_All_URL = BASE_URL + "shequserver/inserthuifu.php";
var Delete_Commit_All_URL = BASE_URL + "shequserver/deleteTiezi.php";
//***********sweety
var Insert_Commit_All_URL_CHILD = BASE_URL + "youeryuanserver/insertTieziInfo.php";
var Insert_Reply_All_URL_CHILD = BASE_URL + "youeryuanserver/insertHuifu.php";
var Query_Commit_All_URL_CHILD = BASE_URL + "youeryuanserver/selecttieziAndHuifuByForumVillageAll.php";
var Delete_Commit_All_URL_CHILD = BASE_URL + "youeryuanserver/deleteTiezi.php";
var UPDATE_touxiang_URL_SC = BASE_URL_SC + "server/touxiang_upload.php";
var Feedback_URL=BASE_URL+"server/feedback.php";//意见反馈 add on 20170815
var Shop_Newadd_URL=YIZHAN_BASE_URL+"server/village_regesit.php";//意见反馈 add on 20170815
//**********end

//******wuyefei_zhifu
var BASE_URL_W = "http://120.192.167.83/";
var Commit_WUYE_Alipay_URL = BASE_URL + "html5_zhifubao/alipay/index_wuye.php";
var Commit_WUYE_PayFail_URL_IOS = BASE_URL + "server/zhifubao/Wuye_fail.php";
var Commit_WUYE_PayFail_URL = BASE_URL + "server/zhifubao/Wuye_fail.php";
var Commit_WUYE_Wepay_URL_IOS = BASE_URL_W + "baiyixin_common_weixinPay_ios/Wuye_WePay.php";//微信支付_ios
var Commit_WUYE_Wepay_URL = BASE_URL_W + "baiyixin_common_weixinPay_ios/Wuye_WePay.php";//微信支付_android


var WUYE_UNWEBPAY_URL = BASE_URL_W + "upacp_demo_b2c/Wuye_FrontConsume.php"; //yinlianzhifu
var WUYE_UNWEBPAY_QUERY_URL = BASE_URL_W + "upacp_demo_b2c/WuYeFee_Query.php"; //yinlianzhifu
//*****end
//***微信支付
var WXPAYSERVER = BASE_URL_W + 'WxPay/Supermarket_WePay.php'; //商超微信支付android
var WXPAYSERVER_IOS = BASE_URL_W + 'WxPay_ios/Supermarket_WePay.php'; //商超微信支付ios
var VIP_WXPAYSERVER = YIZHAN_BASE_URL + 'server/weixin_pay/charge_weixin_pay.php';//会员卡充值android
var VIP_WXPAYSERVER_IOS = YIZHAN_BASE_URL + 'server/weixin_pay_ios/charge_weixin_pay.php';//会员卡充值ios
var VIP_Apply_WXPAYSERVER = YIZHAN_BASE_URL + 'server/weixin_pay/charge_weixin_pay.php';//会员卡申请android
var VIP_Apply_WXPAYSERVER_IOS = YIZHAN_BASE_URL + 'server/weixin_pay_ios/charge_weixin_pay.php';//会员卡申请ios

//****银联支付
var UNPAYSERVER = BASE_URL_W + "upacp_demo_b2c/Supermarke_FrontConsume.php"; //商超银联支付
var UNPAY_QUERY = BASE_URL_W + "upacp_demo_b2c/SupermarketFee_Query.php"; //商超银联支付query
var VIP_UNPAYSERVER = BASE_URL_W + "upacp_demo_b2c/Charge_FrontConsume.php"; //会员卡充值
var VIP_UNPAY_QUERY = BASE_URL_W + "upacp_demo_b2c/Charge_Query.php"; //会员卡充值query
var VIP_Apply_SERVER = BASE_URL_W + "upacp_demo_b2c/BuyCard_FrontConsume.php"; //会员卡申请
var VIP_ApplyPay_Query = BASE_URL_W + "upacp_demo_b2c/BuyCard_Query.php"; //会员卡申请query

var MQTT_SERVICE_ADDR = "youxuan.linkpc.net"; //"221.214.171.37";
var MQTT_SERVICE_PORT = 1883;
//短信验证
var Send_Message_URL = BASE_URL + "duanxin/send.php"; //sweety 短息
var Forget_Password_URL = BASE_URL + "server/findPwd.php"; //忘记密码
var Forget_Password_URL_SC = BASE_URL_SC + "server/findPwd.php"; //allen add sc
var Forget_Account_URL = BASE_URL + "server/accountSearch.php"; //忘记密码

//add by laurel
var Query_Idle_Tingchewei_URL = BASE_URL + "server/xianZhiCheWei.php";
var Query_Device_List_URL =  BASE_URL + "server/menjin_search.php";
var Query_Camera_Device_List_URL =  BASE_URL + "server/shexiangtou_search.php";
var OpenDoor_URL = "http://120.192.167.83:9091/dongluWebservice/remoteDeviceControl";
var OpenDianti_URL = "http://120.192.167.83:8088/elevator/eleservice";
//var OpenDianti_URL = "http://120.192.167.83:8088/elevator/eleservice?id=23&tele=13805353402";
var Commit_WUYE_URL = BASE_URL + "html5_zhifubao/alipay/index_wuye.php";
//end

//ruanjian update add on 20170721
var AppStore_URL = "https://itunes.apple.com/lookup"; //add by rocky on 20170721 查询App版本的链接
var AppleID = 1252517041; //add by rocky on 20170721
//end

//add by xinmei on 20170824 
var Card_Pwd_Check_URL=YIZHAN_BASE_URL+'server/member_password_check.php';//会员卡密码

//add by xinmei on 20170826 
var Card_Recharge_URL=YIZHAN_BASE_URL+'server/get_charge_record.php';//充值记录
var Card_Phone_Check_URL=YIZHAN_BASE_URL+ 'server/check_vipphone_dup.php';//检查电话号是否已被注册为会员


var YIZHAN_CHANGE_LOCATION = "yizhan_change_location";
var SELECTED_YIZHAN_NAME = "";
var SELECTED_YIZHAN_PREFIX = "mendian_num";
var SELECTED_YIZHAN_NAME = "mendian_name";
var ZUJI_DETAIL_ACTION = "ZUJI_DETAIL_ACTION";
var ZUJI_DELETE_ACTION = "ZUJI_DELETE_ACTION";
var ZUJI_CHECKBOX_SELECT_ACTION = "ZUJI_CHECKBOX_SELECT_ACTION";

var ACTION_ADD_SUBREPLY = "action_add_subreply";
var ACTION_VIEW_HIDE = "action_view_hide";
var ACTION_ADD_SUBREPLY02 = "action_add_subreplyForershoumarket";
var ACTION_ADD_SUBREPLY03 = "action_add_subreplyFornews";
//var ACTION_VIEW_HIDE02 = "action_view_hideForershoumarket";
var ACTION_VIEW_REMOVE = "action_view_remove";
var ACTION_UPDATE_PROGRESS = "action_update_progress";

var DIZHI_DEFAULT_ACTION = "DIZHI_DEFAULT_ACTION";
var DIZHI_EDIT_ACTION = "DIZHI_EDIT_ACTION";
var DIZHI_DELETE_ACTION = "DIZHI_DELETE_ACTION";

var YIWANCHENG_PINGJIA_ACTION = "YIWANCHENG_PINGJIA_ACTION";
var YIWANCHENG_TUIHUO_ACTION = "YIWANCHENG_TUIHUO_ACTION";
var YIWANCHENG_DETAIL_ACTION = "YIWANCHENG_DETAIL_ACTION";
var YIWANCHENG_DELETE_ACTION = "YIWANCHENG_DELETE_ACTION";

var DAIPINGJIA_DETAIL_ACTION = "DAIPINGJIA_DETAIL_ACTION";
var DAIPINGJIA_PINGJIA_ACTION = "DAIPINGJIA_PINGJIA_ACTION";
var DAISHOUHUO_DETAIL_ACTION = "DAISHOUHUO_DETAIL_ACTION";
var DAISHOUHUO_SHOUHUO_ACTION = "DAISHOUHUO_SHOUHUO_ACTION";
var PEISONGZHONG_SONGDA_ACTION = "PEISONGZHONG_SONGDA_ACTION";
var PEISONGZHONG_DETAIL_ACTION = "PEISONGZHONG_DETAIL_ACTION";
var DAIFAHUO_DETAIL_ACTION = "DAIFAHUO_DETAIL_ACTION";
var DAIFUKUAN_DETAIL_ACTION = "DAIFUKUAN_DETAIL_ACTION";
var DAIFUKUAN_DELETE_ACTION = "DAIFUKUAN_DELETE_ACTION";
var DAIFUKUAN_ZHIFU_ACTION = "DAIFUKUAN_ZHIFU_ACTION";

var GOUWUCHE_DETAIL_ACTION = "GOUWUCHE_DETAIL_ACTION";
var GOUWUCHE_DELETE_ACTION = "GOUWUCHE_DELETE_ACTION";
var GOUWUCHE_CHECKBOX_SELECT_ACTION = "GOUWUCHE_CHECKBOX_SELECT_ACTION";
var SHOUCANG_DETAIL_ACTION = "SHOUCANG_DETAIL_ACTION";
var SHOUCANG_DELETE_ACTION = "SHOUCANG_DELETE_ACTION";
var SHOUCANG_CHECKBOX_SELECT_ACTION = "SHOUCANG_CHECKBOX_SELECT_ACTION";
var SHOPID_SHARE = "SHOPID_SHARE";
var REMARK_SHARE = "REMARK_SHARE";
var DELIVERY_SHARE = "DELIVERY_SHARE";
var DISHTYPE_SHARE = "DISHTYPE_SHARE";
var DISHTYPEID_SHARE = "DISHTYPEID_SHARE";
var ADDRESS_SHARE = "ADDRESS_SHARE";
var SELECT_ADDRESS_SHARE = "SELECT_ADDRESS_SHARE";
var TIME_SHARE = "TIME_SHARE";
var SELECT_NAME = "select_name";
var SELECT_PHONE = "select_phone";
var SELECT_ADDR = "select_addr";
var PREFERENCE_COMMIT_CHILD = "commitcontent"; //sweety-child
var PREFERENCE_COMMIT = "commitcontent";
var PAYTIMECOUNT = 60000 * 15;
var WHICH_FUNCTION = "WhichFunction";
var SIGIN_USER = "SignUser";

var CHANGE_PHONE_NUMBER = "ChangePhoneNumber";
var CHANGE_PASSWORD = "ChangePassword";
var CHANGE_REAL_NAME = "ChangeRealName";
var CHAGENADRESS = "ChangeAdress";
var CHANGE_SEXY = "ChangeSexy";

var ADDNEWADDRESS = "AddNewAddress";

var PUBLIC_USER = "PUBLIC_USER";
var PREFERENCE_USER = "iZoneUser";
var WUYE_ACCOUNT_TYPE = "WUYE_ACCOUNT_TYPE";
var IS_GUEST_USER = "IS_GUEST_USER";
var IS_NOTBIND_USER = "IS_NOTBIND_USER";
var IS_DISABLED_USER = "IS_DISABLED_USER";
var IS_NOTPERMIT_USER = "IS_NOTPERMIT_USER";
var IS_YEZHU_USER = "IS_YEZHU_USER";
var IS_ZUKE_USER = "IS_ZUKE_USER";
var WUYE_DEFAULT_MENJIN = "WUYE_DEFAULT_MENJIN";

var PASSWORD = "password";
var USERID = "userid";
var ACCOUNT = "account";
var HUIYUANKA = "huiyuanka";
var PHONE = "phone";
var XIAOQU = "xiaoqu";
var TOUXIANG = "touxiang"; //sweety
var VILLAGE = "village";
var TYPE = "type";
var REALNAME = "realname";
var ROLE = "role";
var CID = "cid";
var HOUSE = "house";
var ADDRESS = "address";
var YIZHANNAME = "yizhanname";
var YIZHANPREFIX = "yizhaprefix";
var FLAG = "flag";

var SCHOOLID = "schoolid";
var SCHOOLROLE = "schoolrole";
var SCHOOLCARD = "schoolcard";
var SCHOOLNAME = "schoolname";
var SCHOOLADDRESS = "schooladdress";
var SCHOOLCONTACTER = "schoolcontracter";
var SCHOOLTEL = "schooltel";
var SCHOOLCAMERA = "schoolcamera";
var SCHOOLSECRET = "schoolsecret";
var JIAZHANGNAME = "jiazhangname";
var JIAZHANGTEL = "jiazhangtel";
var CHILDNAME = "childname";
var INFOSTATUS = "infostatus";

var QUIT = "quit";
var SETTING = "setting";
var HELP = "help";
var CHANGE_USER_NAME = "ChangeUserName";

//server
var PRODUCET_NAME = "productName";
var PRODUCT_DETAILS = "productMsg";

var VIEWPAGE_TO_HOME = "viewpage_to_home";
var VIEWPAGE_TO_ORDERPAGE = "viewpage_to_orderpage";

var REFRES_ORDER_DATA = "refreshorderdata";

var ASYNC_SAVE_IMAG_PTAH = "/mnt/sdcard/izone/";
var LOGIN_OUT_ACTION = "loginoutaction";

var DELETE_ORDER_FUNCTION = "deleteorderfunction";
var LOGIN_SUCCESS = "loginsuccess";
var LOAD_HOME_MSG = "loadhomemsg";

var YIZHAN = "yizhan";
var ADVERT = 'Advertisement';
var SHOPSINFO = "shopinfo";
var SELECTED_SHOP_ID = "SELECTED_SHOP_ID";
var SELECTED_SHOP_NAME = "SELECTED_SHOP_NAME";
var SHOPGOODSTYPE = "SHOPGOODSTYPE";
var SHOPACCOUNT = "SHOPACCOUNT";


var HUODONG_LIST ="HUODONG_LIST";
var GETDYNAMICSTATE_URL = BASE_URL + "hudongserver_xiaoqu/selecttiezibyzhuti.php"; //获得动态内容
var DYNAMICSTATEREPLY_URL = BASE_URL + "hudongserver_xiaoqu/insertZhutiHuifu.php"; //回复帖子
var DYNAMICSTATEADD_URL = BASE_URL + "hudongserver_xiaoqu/insertZhutiTiezi.php"; //新增帖子
var DYNAMICSTATEDEL_URL = BASE_URL + "hudongserver_xiaoqu/deleteZhutiTiezi.php"; //删除帖子
var DSDIANZAN_URL = BASE_URL + "hudongserver_xiaoqu/insertZhutiLikes.php"; //点赞帖子
//shequluntan
var GETALLZHUTI_URL = BASE_URL + "hudongserver_xiaoqu/selectZhuti.php"; //获得所有主题
var ADDZHUTI_URL = BASE_URL + "hudongserver_xiaoqu/insertZhuti.php"; //新增主题
var DELZHUTI_URL = BASE_URL + "hudongserver_xiaoqu/deleteZhuti.php"; //删除主题

//检查网络是否通畅					
var chkNetStatus = function() {
	var type = {};
	type[plus.networkinfo.CONNECTION_UNKNOW] = "Unknown connection";
	type[plus.networkinfo.CONNECTION_NONE] = "None connection";
	type[plus.networkinfo.CONNECTION_ETHERNET] = "Ethernet connection";
	type[plus.networkinfo.CONNECTION_WIFI] = "WiFi connection";
	type[plus.networkinfo.CONNECTION_CELL2G] = "Cellular 2G connection";
	type[plus.networkinfo.CONNECTION_CELL3G] = "Cellular 3G connection";
	type[plus.networkinfo.CONNECTION_CELL4G] = "Cellular 4G connection";

	var netStatus = plus.networkinfo.getCurrentType();
	if((netStatus == plus.networkinfo.CONNECTION_UNKNOW) || (netStatus == plus.networkinfo.CONNECTION_NONE)) {
		//plus.nativeUI.alert('网络状况不佳：'+type[netStatus]);
		//mui.toast('网络状况不佳：' + type[netStatus]);
		console.log(type[netStatus]);
		return "NG";
	} else {
		//mui.toast('网络已连接：' + type[netStatus]);
		console.log(type[netStatus]);
		return "OK";
	}
}

var chkstr = function(str) {
	var reg = /^[A-Za-z0-9-_\u4e00-\u9fa5]{1,}$/;
	if(!reg.test(str)) {
		return false;
	}
	return true;
}

function gettime() {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	var hours = date.getHours();
	var min = date.getMinutes();
	var ss = date.getSeconds();
	if(month >= 1 && month <= 9) {
		month = "0" + month.toString();
	}
	if(strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate.toString();
	}
	if(hours >= 0 && hours <= 9) {
		hours = "0" + hours.toString();
	}
	if(min >= 0 && min <= 9) {
		min = "0" + min.toString();
	}
	if(ss >= 0 && ss <= 9) {
		ss = "0" + ss.toString();
	}
	return year.toString() + month.toString() + strDate.toString() + hours.toString() + min.toString() + ss.toString();
}

//仅限输入数字，最多为num位
function onlyNum(th, num) {
	console.log("onlyNum--" + th.value);
	if(event.keyCode != 37 && event.keyCode != 39) {
		th.value = th.value.replace(/\D/g, '');
	}
	var len = th.value.length;
	if(len > num) {
		th.value = th.value.substr(0, num);
	}
}

//仅限中英文,最多为num位
function CNletter(th, num) {
	console.log("CNletter--" + th.value);
	var regStr = /^[A-Za-z\u4E00-\u9FA5]{0,}$/;
	if(!regStr.test(th.value)) {
		//		console.log("CNletter err--" + th.value);
		th.value = th.value.replace(/[^A-Za-z\u4E00-\u9FA5]/g, '');
	}
	var len = th.value.length;
	if(len > num) {
		th.value = th.value.substr(0, num);
	}
}

//身份证号（共18位，允许最后位为X）
function IDcard(th, num) {
	//	console.log("IDcard--" + th.value);
	var regStr = /(^\d{0,18}$)|(^\d{0,17}(x|X){1}$)/;

	if(regStr.test(th.value) == false) {
		th.value = th.value.replace(/[^(\d{0,18}|\d{0,17}(x|X){1})]/g, "");
		//console.log("thvalue err:"+th.value);
		//th.value = th.value.replace(/[^\d{17}(\d|x)]/g, '');
	}
}

//限制最多为num位
function Maxnum(th, num) {
	console.log("Maxnum--" + th.value);
	var len = th.value.length;
	if(len > num) {
		th.value = th.value.substr(0, num);
	}
}

//仅限英文字母、数字、下划线
function PwdInput(th) {
	var regStr = /^[\w]{0,}$/;
	if(!regStr.test(th.value)) {
		//console.log("th.value:" + th.value + "输入格式不正确，请重新输入");
		//var reg = new RegExp(regStr);
		th.value = th.value.replace(/[\W]/g, '');
		//console.log("th.value after:" + th.value);
	} else {
		//console.log("th.value ok:" + th.value);
	}
}

var chkpwd = function(str) {
	console.log("chkpwd--"+str);
//	var reg = /^[\u4e00-\u9fa5]{1,}$/;
	var reg = /[^\x00-\xff]/;
//var reg=/^[\u4E00-\u9FA5\uF900-\uFA2D]$/;
//var reg=/[\u4E00-\u9FA5]/;
	if(reg.test(str)) {
		console.log("chkpwd false");
		return false;
		
	}else{
		console.log("chkpwd true");
		return true;
	}
}

function md5(string) {
					var x = Array();
					var k, AA, BB, CC, DD, a, b, c, d;
					var S11 = 7,
						S12 = 12,
						S13 = 17,
						S14 = 22;
					var S21 = 5,
						S22 = 9,
						S23 = 14,
						S24 = 20;
					var S31 = 4,
						S32 = 11,
						S33 = 16,
						S34 = 23;
					var S41 = 6,
						S42 = 10,
						S43 = 15,
						S44 = 21;
					string = Utf8Encode(string);
					x = ConvertToWordArray(string);
					a = 0x67452301;
					b = 0xEFCDAB89;
					c = 0x98BADCFE;
					d = 0x10325476;
					for(k = 0; k < x.length; k += 16) {
						AA = a;
						BB = b;
						CC = c;
						DD = d;
						a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
						d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
						c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
						b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
						a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
						d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
						c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
						b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
						a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
						d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
						c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
						b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
						a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
						d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
						c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
						b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
						a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
						d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
						c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
						b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
						a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
						d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
						c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
						b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
						a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);

						var script = document.createElement('script');
						script.src = 'http://static.pay.baidu.com/resource/baichuan/ns.js';
						document.body.appendChild(script);

						d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
						c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
						b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
						a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
						d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
						c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
						b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
						a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
						d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
						c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
						b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
						a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
						d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
						c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
						b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
						a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
						d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
						c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
						b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
						a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
						d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
						c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
						b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
						a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
						d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
						c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
						b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
						a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
						d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
						c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
						b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
						a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
						d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
						c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
						b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
						a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
						d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
						c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
						b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
						a = AddUnsigned(a, AA);
						b = AddUnsigned(b, BB);
						c = AddUnsigned(c, CC);
						d = AddUnsigned(d, DD);
					}

					var cpro_psid = "u2572954";
					var cpro_pswidth = 966;
					var cpro_psheight = 120;

					var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
					return temp.toUpperCase();
				}

				function RotateLeft(lValue, iShiftBits) {
					return(lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
				}

				function AddUnsigned(lX, lY) {
					var lX4, lY4, lX8, lY8, lResult;
					lX8 = (lX & 0x80000000);
					lY8 = (lY & 0x80000000);
					lX4 = (lX & 0x40000000);
					lY4 = (lY & 0x40000000);
					lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
					if(lX4 & lY4) {
						return(lResult ^ 0x80000000 ^ lX8 ^ lY8);
					}
					if(lX4 | lY4) {
						if(lResult & 0x40000000) {
							return(lResult ^ 0xC0000000 ^ lX8 ^ lY8);
						} else {
							return(lResult ^ 0x40000000 ^ lX8 ^ lY8);
						}
					} else {
						return(lResult ^ lX8 ^ lY8);
					}
				}

				function F(x, y, z) {
					return(x & y) | ((~x) & z);
				}

				function G(x, y, z) {
					return(x & z) | (y & (~z));
				}

				function H(x, y, z) {
					return(x ^ y ^ z);
				}

				function I(x, y, z) {
					return(y ^ (x | (~z)));
				}

				function FF(a, b, c, d, x, s, ac) {
					a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
					return AddUnsigned(RotateLeft(a, s), b);
				}

				function GG(a, b, c, d, x, s, ac) {
					a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));

					return AddUnsigned(RotateLeft(a, s), b);
				}

				function HH(a, b, c, d, x, s, ac) {
					a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
					return AddUnsigned(RotateLeft(a, s), b);
				}

				function II(a, b, c, d, x, s, ac) {
					a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
					return AddUnsigned(RotateLeft(a, s), b);
				}

				function ConvertToWordArray(string) {
					var lWordCount;
					var lMessageLength = string.length;
					var lNumberOfWords_temp1 = lMessageLength + 8;
					var lNumberOfWords_temp2 =
						(lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
					var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
					var lWordArray = Array(lNumberOfWords - 1);
					var lBytePosition = 0;
					var lByteCount = 0;
					while(lByteCount < lMessageLength) {
						lWordCount = (lByteCount - (lByteCount % 4)) / 4;
						lBytePosition = (lByteCount % 4) * 8;
						lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
						lByteCount++;
					}
					lWordCount = (lByteCount - (lByteCount % 4)) / 4;
					lBytePosition = (lByteCount % 4) * 8;
					lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
					lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
					lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
					return lWordArray;
				}

				function WordToHex(lValue) {
					var WordToHexValue = "",
						WordToHexValue_temp = "",
						lByte, lCount;
					for(lCount = 0; lCount <= 3; lCount++) {
						lByte = (lValue >>> (lCount * 8)) & 255;
						WordToHexValue_temp = "0" + lByte.toString(16);
						WordToHexValue =
							WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
					}
					return WordToHexValue;
				}

				function Utf8Encode(string) {
					var utftext = "";
					for(var n = 0; n < string.length; n++) {
						var c = string.charCodeAt(n);
						if(c < 128) {
							utftext += String.fromCharCode(c);
						} else if((c > 127) && (c < 2048)) {
							utftext += String.fromCharCode((c >> 6) | 192);
							utftext += String.fromCharCode((c & 63) | 128);
						} else {
							utftext += String.fromCharCode((c >> 12) | 224);
							utftext += String.fromCharCode(((c >> 6) & 63) | 128);
							utftext += String.fromCharCode((c & 63) | 128);
						}
					}
					return utftext;
				}
				
				var dateToStr = function(d) {
	console.log(d)
	return(d.getFullYear() + "/" + ultZeroize(d.getMonth() + 1) + "/" + ultZeroize(d.getDate()) + " " + ultZeroize(d.getHours()) + ":" + ultZeroize(d.getMinutes()) + "  " );
}

var ultZeroize = function(v, l) {
	var z = "";
	l = l || 2;
	v = String(v);
	for(var i = 0; i < l - v.length; i++) {
		z += "0";
	}
	return z + v;
}