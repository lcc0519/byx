/*!
 * ======================================================
 * FeedBack Template For MUI (http://dev.dcloud.net.cn/mui)
 * =======================================================
 * @version:1.0.0
 * @author:cuihongbao@dcloud.io
 */
(function() {
	var index = 1;
	var size = null;
	var imageIndexIdNum = 0;
	var user_obj=eval(app.getDatas(PREFERENCE_USER));
	var public_obj = eval(app.getDatas(PUBLIC_USER));
	var user = new Object();
	user.xiaoqu = public_obj.xiaoqu_prefix;
	user.houseno = public_obj.house_no;
	user.id = user_obj.id;
			
	var feedback = {
		fee: document.getElementById('jiage'), 
		contact: document.getElementById('contact'), 
		contact_tel:document.getElementById('tel'), 
		imageList: document.getElementById('image-list'),
		submitBtn: document.getElementById('submit')
	};
	//var url = 'https://service.dcloud.net.cn/feedback';
	feedback.files = [];
	feedback.uploader = null;  
	feedback.deviceInfo = null; 
	mui.plusReady(function() {
		//设备信息，无需修改
		feedback.deviceInfo = {
			appid: plus.runtime.appid, 
			imei: plus.device.imei, //设备标识
			images: feedback.files, //图片文件
			p: mui.os.android ? 'a' : 'i', //平台类型，i表示iOS平台，a表示Android平台。
			md: plus.device.model, //设备型号
			app_version: plus.runtime.version,
			plus_version: plus.runtime.innerVersion, //基座版本号
			os:  mui.os.version,
			net: ''+plus.networkinfo.getCurrentType()
		}
	});
	/**
	 *提交成功之后，恢复表单项 
	 */
	feedback.clearForm = function() {
		feedback.fee.value = '';
		feedback.contact.value = '';
		feedback.contact_tel.value = '';
		feedback.imageList.innerHTML = '';
		feedback.newPlaceholder();
		feedback.files = [];
		index = 0;
		size = 0;
		imageIndexIdNum = 0;
	};
	feedback.getFileInputArray = function() {
		return [].slice.call(feedback.imageList.querySelectorAll('.file'));
	};
	feedback.addFile = function(path) {
		feedback.files.push({name:"images"+index,path:path,id:"img-"+index});
		index++;
	};
	/**
	 * 初始化图片域占位
	 */
	feedback.newPlaceholder = function() {
		
		var fileInputArray = feedback.getFileInputArray();
		if (fileInputArray &&
			fileInputArray.length > 0 &&
			fileInputArray[fileInputArray.length - 1].parentNode.classList.contains('space')) {
			return;
		};
		imageIndexIdNum++;
		var placeholder = document.createElement('div');
		placeholder.setAttribute('class', 'image-item space');
		var up = document.createElement("div");
		up.setAttribute('class','image-up')
		//删除图片
		var closeButton = document.createElement('div');
		closeButton.setAttribute('class', 'image-close');
		closeButton.innerHTML = 'X';
		closeButton.id = "img-"+index;
		//小X的点击事件
		closeButton.addEventListener('tap', function(event) {
			setTimeout(function() {
				for(var temp=0;temp<feedback.files.length;temp++){
					if(feedback.files[temp].id==closeButton.id){
						feedback.files.splice(temp,1);//删除一个图片文件
					}
				}
				feedback.imageList.removeChild(placeholder);//删除一个图片域占位
			}, 0);
			return false;
		}, false);
		
		//
		var fileInput = document.createElement('div');
		fileInput.setAttribute('class', 'file');
		fileInput.setAttribute('id', 'image-' + imageIndexIdNum);
		fileInput.addEventListener('tap', function(event) {
			var self = this;
			var index = (this.id).substr(-1);
			
			plus.gallery.pick(function(e) {
//				console.log("event:"+e);
				var name = e.substr(e.lastIndexOf('/') + 1);
				console.log("name:"+name);
					
				plus.zip.compressImage({
					src: e,
					//dst: '_doc/' + name,
					dst :e,
					overwrite: true,
					quality: 50
				}, function(zip) {
					size += zip.size  
					console.log("filesize:"+zip.size+",totalsize:"+size);
					if (size > (10*1024*1024)) {
						return mui.toast('图片总大小超过10M无法上传,请重新选择');
					}
					console.log("------------------1---------------");
					if (!self.parentNode.classList.contains('space')) { //已有图片
						console.log("------------------2---------------");
						feedback.files.splice(index-1,1,{name:"images"+index,path:e});
					} else { //加号
						console.log("------------------3---------------");
						placeholder.classList.remove('space');
						feedback.addFile(zip.target);
						feedback.newPlaceholder();
					}
					console.log("------------------4---------------");
					up.classList.remove('image-up');
					placeholder.style.backgroundImage = 'url(' + zip.target + ')';
				}, function(zipe) {
					mui.toast('压缩失败！')
				});

			}, function(e) {
				mui.toast(e.message);
			},{});
		}, false);
		placeholder.appendChild(closeButton);
		placeholder.appendChild(up);
		placeholder.appendChild(fileInput);
		feedback.imageList.appendChild(placeholder);
		console.log("------------------5---------------");
	};
	
	feedback.newPlaceholder();
	feedback.submitBtn.addEventListener('tap', function(event) {
		
		user.jiage = feedback.fee.value.trim();
		user.name = feedback.contact.value.trim();
		user.tel = feedback.contact_tel.value.trim();

		if(user.jiage=="" || user.jiage==null){
			plus.nativeUI.alert("请填写价格！");
			return;
		}	
			
		if(user.name=="" || user.name==null){
			plus.nativeUI.alert("请填写联系人！");
			return;
		}
		
		if(user.tel=="" || user.tel==null){
			plus.nativeUI.alert("请填写联系电话！");
			return;
		}
					
		var subTypeId = "";
		
		var radio = document.getElementsByName("maintype");    
		for (i=0; i<radio.length; i++) {    
		    if (radio[i].checked) {    
		        subTypeId = radio[i].value;  
		    }    
		}

		var unit;
		if (subTypeId==1) {
			unit = '月';
		} else if(subTypeId==2){
			unit = '套';
		} else{
			plus.nativeUI.alert("请选择托管方式！");
			return;				
		}
			
//		if (feedback.question.value == '' ||
//			(feedback.contact.value != '' &&
//				feedback.contact.value.search(/^(\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+)|([1-9]\d{4,9})$/) != 0)) {
//			return mui.toast('信息填写不符合规范');
//		}
//		if (feedback.question.value.length > 200 || feedback.contact.value.length > 200) {
//			return mui.toast('信息超长,请重新填写~')
//		}

		//判断网络连接
		if(plus.networkinfo.getCurrentType()==plus.networkinfo.CONNECTION_NONE){
			return mui.toast("连接网络失败，请稍后再试");
		}
		
		feedback.send(mui.extend({}, feedback.deviceInfo, {
			xiaoqu: user.xiaoqu,
			houseNo: user.houseno,
			creater: user.id,
			fee: user.jiage,
			contact: user.name,
			contact_tel: user.tel,
			type:subTypeId,
			unit:unit,
			images: feedback.files
		})) 
	}, false);
	
	feedback.send = function(content) {
		feedback.uploader = plus.uploader.createUpload(Insert_Fangwutuoguan_URL, {
			method: 'POST',
			timeout: 10000
		}, function(upload, status) {
//			plus.nativeUI.closeWaiting()
			console.log("upload cb:"+upload.responseText);
			if(status==200){
				var data = JSON.parse(upload.responseText);
				if (data.success==1) {
					console.log("submit success");
					mui.toast("托管成功");									
					mui.back();													
				} else{
					mui.toast(data.errorMsg);									
				}	
				//上传成功，重置表单
//				if (data.ret === 0 && data.desc === 'Success') {
////					mui.toast('反馈成功~')                   
//					console.log("upload success");
////					feedback.clearForm();
//				}
			}else{
				console.log("upload fail");
				mui.toast("网络异常");
			}
			
		});
		//添加上传数据
		mui.each(content, function(index, element) {
			if (index !== 'images') {
				console.log("addData:"+index+","+element);
//				console.log(index);
				feedback.uploader.addData(index, element)
			} 
		});
		//添加上传文件
		mui.each(feedback.files, function(index, element) {
			var f = feedback.files[index];
			console.log("addFile:"+JSON.stringify(f));
			var keyname = "pic"+index;
			console.log("addFile:"+keyname);
			feedback.uploader.addFile(f.path, {
				//key: f.name
				key: keyname
			});
		});
		//开始上传任务
		feedback.uploader.start();
//		mui.alert("感谢反馈，点击确定关闭","问题反馈","确定",function () {
//			feedback.clearForm();
//			mui.back();
//		});
//		plus.nativeUI.showWaiting();
	};
	
  	
})();
