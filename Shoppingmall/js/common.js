var SHOP_BASE_URL = "http://120.192.167.83/baiyixinkeji_new/server/";
var SHOP_PICTURE_URL = "http://120.192.167.83/baiyixinkeji_new/";
var SHOP_TYPE = SHOP_BASE_URL + "shangjiafenlei.php";
var SHOP_SUBPAGE_TYPE = SHOP_BASE_URL + "shangpinfenleiByshangjiafenlei.php";
var GOODS_LIST_URL = SHOP_BASE_URL + "ShangpinSelAll_byshangjiafenlei_byshangpinfenlei.php";
var GOODS_DETAIL_URL = SHOP_BASE_URL + "ShangpinDetail_biaohao_shangjiaId.php";
var QUERY_KUCUN_URL = SHOP_BASE_URL + "shangpinshuliang.php";
var ADD_CART_URL = SHOP_BASE_URL + "addGouWuChe.php";
var QUERY_CART_URL = SHOP_BASE_URL + "chakanGouWuChe.php";
var DELETE_CART_URL = SHOP_BASE_URL + "deleteGouWuChe.php";
var ADD_COLLECTION_URL = SHOP_BASE_URL + "addShouCang.php";
var QUERY_COLLECTION_URL = SHOP_BASE_URL + "chakanGouShouCang_byshangjia.php";
var DELETE_COLLECTION_URL = SHOP_BASE_URL + "deleteShouCange.php";
var QUERY_DINGDAN_URL = SHOP_BASE_URL + "chakan_dingdan.php";
var ALL_ADVERT_URL = SHOP_BASE_URL + "advertSelAll.php";
var SHANGJIA_ADVERT_URL = SHOP_BASE_URL + "advertSelAll_shangjia.php";
var TUIJIE_ADVERT_URL = SHOP_BASE_URL + "tuijie_villageinfo.php";
var FENLEI_ADVERT_URL = SHOP_BASE_URL + "Shangpin_tuijieSelAll_byshangjiafenlei.php";
var QUERY_ADDRESS_URL = SHOP_BASE_URL + "chakanaddress.php";
var ADD_ADDRESS_URL = SHOP_BASE_URL + "addaddress.php";
var UPDATE_ADDRESS_URL = SHOP_BASE_URL + "address_update.php";
var CART_XIADAN_URL = SHOP_BASE_URL + "gouwuche_xiadan.php";
var QUERY_COLLECT_URL = SHOP_BASE_URL + "chakanShouCang_bycreater.php";
var DELETE_CART_URL = SHOP_BASE_URL + "deleteGouWuChe.php";
var DELETE_ADDRESS_URL = SHOP_BASE_URL + "deleteaddress.php";
var ZHIJIE_XIADAN_URL = SHOP_BASE_URL + "zhijie_xiadan.php";
var DELETE_DINGDAN_URL = SHOP_BASE_URL + "delete_dingdan.php";
var QUERY_GOODS_COUNT_URL = SHOP_BASE_URL + "shangpinshuliang.php";
var ALIPAYSERVER = SHOP_PICTURE_URL + "html5_zhifubao/alipay/index_supermarket.php";
var QUERY_SHANGJIA_SHANGPIN = SHOP_BASE_URL + "ShangpinSelAll_byshangjiaId.php";
var QUERY_SHANGJIAREXIAO_SHANGPIN = SHOP_BASE_URL + "shangpin_xiaoshou_paiming_shangjiaId.php";
var QUERY_FENLEIREXIAO_SHANGPIN = SHOP_BASE_URL + "shangpin_xiaoshou_paiming_fenleiId.php";
var SEARCH_FROM_ALL = SHOP_BASE_URL + "ShangpinShaiXuan_fromAll.php";
var SEARCH_FROM_STORE = SHOP_BASE_URL + "ShangpinShaiXuan_fromShangJia.php";
var SEARCH_FROM_SHANGJIA_FENLEI = SHOP_BASE_URL + "ShangpinShaiXuan_fromShangJiaFenLei.php";
var SEARCH_FROM_SHANGPIN_FENLEI = SHOP_BASE_URL + "ShangpinShaiXuan_fromShangPinFenLei.php";
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
		//			    		plus.nativeUI.alert('网络状况不佳：'+type[netStatus]);
		//		mui.toast('网络状况不佳：' + type[netStatus]);
		console.log(type[netStatus]);
		return "NG";
	} else {
		//		mui.toast('网络已连接：' + type[netStatus]);
		console.log(type[netStatus]);
		return "OK";
	}
}

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

var chkstr = function(str) {
	var reg = /^[A-Za-z0-9-_\u4e00-\u9fa5]{1,}$/;
	if(!reg.test(str)) {
		return false;
	}
	return true;
}