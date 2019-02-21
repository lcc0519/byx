
(function(owner) {	
	var like_time = 0;
	var obj_id;
	var parent_node;
	var childe_node;
	//更新页面视图
	owner.updateCardView = function (id) {
//				console.log("read data");				
				var info=eval(app.getDatas(id));
				var user = eval(app.getDatas(PREFERENCE_USER));
				var zan_num=0;
				var content_temp;
//				console.log(info.tiezi.length);
//				console.log(JSON.stringify(info));
				var card_root = document.getElementById("card_view_root");
				card_root.innerHTML="";
				for (var i = 0; i < info.tiezi.length; i++) {

//					console.log("1111" + info.tiezi[i].content);
					content_temp = info.tiezi[i].content;
					content_temp=content_temp.replace('||||||',"<br/>");
//					console.log("22222" + content_temp);
					do{
						content_temp=content_temp.replace('|||',"<br/>");
//						console.log("33333" + content_temp);
					}while((content_temp.indexOf('|||') > 0));
//					console.log(i);
					var div_index = document.createElement("div");
					var div_header = document.createElement("div");
					var div_content = document.createElement("div");
					var div_footer = document.createElement("div");
					var div_praise = document.createElement("div");
					var div_comment = document.createElement("div");
					div_index.id = i;
					div_index.className = 'mui-card mui-row';
					div_index.title = info.tiezi[i].tid;
					div_index.creater = info.tiezi[i].created_username;
					div_header.className = 'mui-card-header mui-card-media';
					div_content.className = 'mui-card-content mui-col-sm-12 mui-col-xs-12';
					div_content.style = 'float: right;';
					div_footer.className = 'mui-card-footer mui-col-sm-10 mui-col-xs-10';
					div_footer.style = 'float: right;';
					div_praise.className = 'praises-total mui-col-sm-10 mui-col-xs-10';
					div_praise.style = 'display: inline-block;float: right;';
					div_comment.className = 'comment-list mui-col-sm-10 mui-col-xs-10';
					div_comment.style = 'float: right;';
					//创建cardView Header
					var header_img = document.createElement("img");
					
					var touxiang_return = info.tiezi[i].created_touxiang;
					if(touxiang_return==""||touxiang_return==null||touxiang_return=="undefined"){
						
						header_img.src = '../images/logo.png';	
//						if (user.touxiang == "") {
//							console.log("头像为空");
//							header_img.src = '../images/logo.png';						
//						} else{
//							header_img.src = BASE_URL + user.touxiang.substring(3);
//							console.log("头像：" + header_img.src);
//						}
					}
					else{
						header_img.src = BASE_URL + touxiang_return.substring(3);
					}
					
					var div_header_body = document.createElement("div");
					div_header_body.className = 'mui-media-body';
					var header_body_span = document.createElement("span");
					header_body_span.id = 'account';
					header_body_span.innerHTML = info.tiezi[i].created_username;
					var header_body_p = document.createElement("p");
					header_body_p.innerHTML = content_temp;//info.tiezi[i].content;
					div_header.appendChild(header_img);
					div_header_body.appendChild(header_body_span);
					div_header_body.appendChild(header_body_p);
//					div_header.appendChild(div_header_body); //test del
//					div_index.appendChild(div_header); //test del
					//创建cardView content picture
					if ('pic' in info.tiezi[i]) {
//						qingjia.log("图片数："+info.tiezi[i].pic.length);		
						pic_num = info.tiezi[i].pic.length;
					} else {
						pic_num = 0;
					}
					var ul_content_grid = document.createElement("ul");
					ul_content_grid.className = 'mui-table-view mui-grid-view mui-grid-9';
					if (pic_num == 1) {
						for (var j = 0; j < pic_num; j++) {
							var pic_path = BASE_URL+info.tiezi[i].pic[j].path.substr(3);
							var li_content_grid_cell = document.createElement("li");
							li_content_grid_cell.className = 'mui-table-view-cell mui-media mui-col-xs-12 mui-col-sm-12';
							li_content_grid_cell.style.height = '200px';
							li_content_grid_cell.style.overflow= 'hidden';
							li_content_grid_cell.style.borderRadius = '0px';
							li_content_grid_cell.innerHTML = '<a href="#">\
											<img src="'+ pic_path +'" width="100%" height="100%" data-preview-src="" data-preview-group="'+ i + '" />\
									        </a>';
							ul_content_grid.appendChild(li_content_grid_cell);		        							
						}
					} else if(pic_num == 2){
						for (var j = 0; j < pic_num; j++) {
							var pic_path = BASE_URL+info.tiezi[i].pic[j].path.substr(3);
							var li_content_grid_cell = document.createElement("li");
							li_content_grid_cell.className = 'mui-table-view-cell mui-media mui-col-xs-6 mui-col-sm-6';
							li_content_grid_cell.style.height = '90px';
							li_content_grid_cell.style.overflow= 'hidden';
							li_content_grid_cell.style.borderRadius = '0px';
							li_content_grid_cell.style.marginBottom = "5px";
							li_content_grid_cell.innerHTML = '<a href="#">\
											<img src="'+ pic_path +'" width="100%" height="100%" data-preview-src="" data-preview-group="'+ i + '" />\
									        </a>';		
							ul_content_grid.appendChild(li_content_grid_cell);		        
						}
					}else if(pic_num >= 3){
						for (var j = 0; j < pic_num; j++) {
							var pic_path = BASE_URL+info.tiezi[i].pic[j].path.substr(3);
							var li_content_grid_cell = document.createElement("li");
							li_content_grid_cell.className = 'mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4';
							li_content_grid_cell.style.height = '90px';
							li_content_grid_cell.style.overflow= 'hidden';
							li_content_grid_cell.style.borderRadius = '0px';
							li_content_grid_cell.style.marginBottom = "5px";
							li_content_grid_cell.innerHTML = '<a href="#">\
											<img src="'+ pic_path +'" width="100%"  height="100%"  data-preview-src="" data-preview-group="'+ i + '" />\
									        </a>';
							ul_content_grid.appendChild(li_content_grid_cell);		
						}
					}
					div_content.appendChild(ul_content_grid);			
//					div_index.appendChild(div_content); //test del
					div_header_body.appendChild(div_content); //test add
					div_header.appendChild(div_header_body); //test add
					div_index.appendChild(div_header); //test add
					//创建cardView footer
					div_footer.innerHTML = '<span id="submit_time_'+ i +'">' + info.tiezi[i].created_time + '</span>\
								<a id="praise_'+ i +'" href="#" title="praise" class="mui-card-link iconfont icon-dianzan1" style="font-size: 1.2em;display: none;">赞</a>\
								<a id="msg_'+ i +'" href="#" title="msg" class="mui-card-link iconfont icon-pinglun" style="font-size: 1.2em;display: none;">评论</a>\
								<a id="commit_'+ i +'" href="#" title="commit" class="mui-card-link iconfont icon-pinglun1"></a>	';
					
					div_index.appendChild(div_footer);
					//创建点赞
//					div_praise.innerHTML = '<div class="mui-media-body">\
//									<span id="praise_content_'+ i +'" class="iconfont icon-dianzan">' + ' Rocky' + '</span>\
//									</div>';				
//					div_index.appendChild(div_praise);
					//创建点赞
					div_praise.id='praise_content_'+ i;
//					div_praise.my=0;
//					div_praise.total=0;
//					div_praise.innerHTML ='<span id="sp_praise_content_'+ i +'" class="iconfont icon-dianzan"></span>';
					if ('like' in info.tiezi[i]) {
//						console.log("##"+info.tiezi[i].tid+" like count:" +info.tiezi[i].like.length);
						div_praise.innerHTML ='<span id="sp_praise_content_'+ i +'" class="iconfont icon-dianzan"></span>';
						
						if(info.tiezi[i].like.length ==1){
//							if(info.tiezi[i].like[0].created_username == user.account){
//								div_praise.my=1;
//								div_praise.total=1;
//							}
							div_praise.innerHTML = div_praise.innerHTML +info.tiezi[i].like[0].created_username;
							div_index.appendChild(div_praise);
						}else if(info.tiezi[i].like.length>1){
							div_praise.innerHTML = div_praise.innerHTML +info.tiezi[i].like[0].created_username;
							
							for (var n = 1; n < info.tiezi[i].like.length; n++) {
//								if(info.tiezi[i].like[n].created_username == user.account){
//									div_praise.my=1;
//									div_praise.total=1;
//								}
//								console.log("##like------"+ n);
//								div_praise.innerHTML = div_praise.innerHTML +'<div class="mui-media-body">\
//										<span id="praise_content_'+ i +'" class="iconfont icon-dianzan">' + info.tiezi[i].like[n].created_username + '</span>\
//										</div>';
								div_praise.innerHTML = div_praise.innerHTML +', '+info.tiezi[i].like[n].created_username;
								div_index.appendChild(div_praise);
							}
						}
					} else {
						div_praise.innerHTML="";
						div_praise.style.display = 'none';
						div_index.appendChild(div_praise);	
					}
					
					//创建评论
					var reply_name;
					var re_reply_name;
					var div_comment_body = document.createElement("div");
					div_comment_body.id = 'comment_'+ i;
					div_comment_body.className = 'mui-media-body';

					if ('huifu' in info.tiezi[i]) {
//						console.log("回帖数："+info.tiezi[i].huifu.length);		
						for (var k = 0; k < info.tiezi[i].huifu.length; k++) {
							reply_name = info.tiezi[i].huifu[k].created_username +': ';
//							var reply_id = info.tiezi[i].huifu[k].rpid;
							var reply_pid = info.tiezi[i].huifu[k].pid;
							div_comment_body.innerHTML = div_comment_body.innerHTML + '<p title="comment-content" class="huifu" pid="' + reply_pid + '" style="line-height: 12px; width:100%"><span id="account">'+ reply_name +'</span>'+info.tiezi[i].huifu[k].content+'</p>';
							div_comment.appendChild(div_comment_body);						
						}
						if ('subhuifu' in info.tiezi[i]) {
//							console.log("再回帖数："+ info.tiezi[i].subhuifu.length);
							for (var l = 0; l < info.tiezi[i].subhuifu.length; l++) {
								reply_name = info.tiezi[i].subhuifu[l].created_username +': ';
								re_reply_name = info.tiezi[i].subhuifu[l].huifu_username;	
								var sub_reply_id = info.tiezi[i].subhuifu[l].rpid;
								var sub_reply_pid = info.tiezi[i].subhuifu[l].pid;
//								console.log("rpid: "+sub_reply_id)
								div_comment_body.innerHTML =div_comment_body.innerHTML +  '<p title="comment-content" class="subhuifu" pid="' + sub_reply_pid + '" style="line-height: 12px; width:100%"><span id="account">'+ re_reply_name +'<span style="color: #000000;">回复</span>'+reply_name +'</span>'+info.tiezi[i].subhuifu[l].content+'</p>';
//								console.log(div_comment_body.innerHTML);
								div_comment.appendChild(div_comment_body);
							}
						}
					} else {
						div_comment_body.innerHTML="";
						div_comment.appendChild(div_comment_body);	
					}		
					
					div_index.appendChild(div_comment);
					card_root.appendChild(div_index);
				}				
		
			}	
	
	owner.onload = function () {
	    var list = document.getElementById('card_view_root');
	    var boxs = list.children;
	    var timer;
//  	console.log(list.childElementCount+'children_num: '+boxs.length);
	    
	    //格式化日期
	    function formateDate(date) {
	        var y = date.getFullYear();
	        var m = date.getMonth() + 1;
	        var d = date.getDate();
	        var h = date.getHours();
	        var mi = date.getMinutes();
	        m = m > 9 ? m : '0' + m;
	        return y + '-' + m + '-' + d + ' ' + h + ':' + mi;
	    }
	
	    //删除节点
	    function removeNode(node) {
	        node.parentNode.removeChild(node);
	    }
	
		function showCommitBox (id) {
//			console.log("^^^^^^showcommitbox");
//			console.log('boxid:'+id);
			var p_style = document.getElementById("praise_"+id).style;
			var m_style = document.getElementById("msg_"+id).style;
			p_style.display = p_style.display == 'none'? 'inline-block':'none';
			m_style.display = m_style.display == 'none'? 'inline-block':'none';
			if (p_style.display=='inline-block'||m_style.display=='inline-block') {
				like_time = 1;
				obj_id = setTimeout(function () {
					m_style.display = 'none';
					p_style.display = 'none';		
					like_time = 0;
				},3000);
			}
		}

			
//			updateCardView();
	    /**
	     * 赞分享
	     * @param box 每个分享的div容器
	     * @param el 点击的元素
	     */
	    function praiseBox(box, el) {
//	    	console.log("^^^^^^praisebox");
//	        console.log('boxid:'+box.id);
	        var praises = document.getElementById("praise_content_"+box.id);
	        var user = eval(app.getDatas(PREFERENCE_USER));
	        var like_value = praises.innerHTML;
	        var null_string='<span class="iconfont icon-dianzan"></span>';
//	        console.log('###null_string.length:' + null_string.length);
//      	console.log(praises.innerHTML);
			if (praises.innerHTML ==''){
//				console.log("null null null！");
				praises.innerHTML ='<span class="iconfont icon-dianzan"></span>';
//				console.log('*****value.length:' +praises.innerHTML.length);
				praises.innerHTML = praises.innerHTML +user.account;
			}else if(praises.innerHTML.indexOf(', '+user.account ) > 0){
//				console.log("您已点赞11111！");
//				console.log('*****value.length:' +like_value.length);
				like_value=like_value.replace(', '+user.account,"");
				praises.innerHTML = like_value;
//				console.log('*****1111value.length:' +praises.innerHTML.length);
			}else if(praises.innerHTML.indexOf(user.account ) > 0){
//				console.log("您已点赞22222！");
//				console.log('*****value.length:' +like_value.length);
				if(praises.innerHTML.indexOf(user.account+ ', ' ) > 0){
					like_value=like_value.replace(user.account+', ',"");
				}else{
					like_value='';
				}				
				praises.innerHTML = like_value;
//				console.log('*****222222value.length:' +praises.innerHTML.length);
			}else{
//				console.log("not null");
//				console.log('*****value.length:' +praises.innerHTML.length);
				praises.innerHTML = praises.innerHTML +', '+user.account;
			}
//			if(praises.innerHTML.length==43){
//				console.log("set null");
//				praises.innerHTML = '';
//				praises.style.display='none';
//			}			
	       	praises.style.display='none'? 'inline-block':'none';
//			console.log(praises.innerHTML);
			showCommitBox(box.id);
			
	    }
		function openComment (box, el) {
//	        var index_page = plus.webview.getWebviewById('kinder_index.html');	
//			mui.fire(index_page,'goindex');
//			console.log("^^^^^^opencomment");
//			console.log('boxid:'+box.id);
			showCommitBox(box.id);
			tid = box.title;
//			console.log("tid:"+box.title);
			mui('#msgsheet').popover('toggle');
			document.getElementById("input_comment").focus();	
			edit_active=box.id;
		}
		
		function ReplyComment (box, el) {
//			console.log("^^^^^^replycomment");
//			console.log("########reply:"+el.firstChild.innerHTML);
//			console.log("tid:"+box.title);
			tid = box.title;
			huifu_name = el.firstChild.innerHTML.split('<')[0];
//			console.log('回复name：'+huifu_name);
			if (huifu_name.indexOf(': ')== -1) {
//				console.log(reply_name+"没有冒号");
				huifu_name = huifu_name +': ';
			} else{
//				console.log(reply_name+"有冒号");	
			}
			showCommitBox(box.id);
			mui('#msgsheet').popover('toggle');
			document.getElementById("input_comment").focus();		
			edit_active=box.id;
		}
		
		function sendReply (box,el, created_username, created_userid) {
//			console.log("zan tid:"+box.title);
			var user= eval(app.getDatas(PREFERENCE_USER));
			mui.ajax(DSDIANZAN_URL,{
				data:{
					zid:0,
					tid:box.title,
					created_username:created_username,
					created_userid:created_userid,
					xiaoqu_prefix:user.xiaoqu,
					xiaoqu:user.xiaoqu
				},
				dataType:'json',//服务器返回json格式数据
				type:'post',//HTTP请求类型
				timeout:10000,//超时时间设置为10秒；
//				headers:{'Content-Type':'application/json'},
				success:function (data){							
					var infor=JSON.stringify(data);
					var obj=eval(data);
//					console.log("info:"+infor);
					if (obj.success==1) {
//						console.log("sendreply success");
						praiseBox(el.parentNode.parentNode,el);
						
					} else{
						console.log("******network error");
						mui.toast(obj.errorMsg);									
					}								
				},							
				error:function(xhr,type,errorThrown){
					mui.toast("网络异常");
					console.log("******network error");
					//mui.toast("error type:"+type);
					console.log("error type:"+type);
					console.log(xhr.status);
					console.log(xhr.readyState);
					console.log(xhr.response);
				}
			});
		}
		
	    /**
	     * 发评论
	     * @param box 每个分享的div容器
	     * @param el 点击的元素
	     */
	    function reply(box, el) {
	        var commentList = box.getElementsByClassName('comment-list')[0];
	        var textarea = box.getElementsByClassName('comment')[0];
	        var commentBox = document.createElement('div');
	        commentBox.className = 'comment-box clearfix';
	        commentBox.setAttribute('user', 'self');
	        commentBox.innerHTML =
	            '<img class="myhead" src="images/my.jpg" alt=""/>' +
	                '<div class="comment-content">' +               
	                '<br/><p class="comment-text"><span class="user">我：</span>' + textarea.value + '</p>' +
	                '<p class="comment-time">' +
	                formateDate(new Date()) +                
	                '<a href="javascript:;" class="comment-praise" total="0" my="0" style="">赞</a>' +
	                '<a href="javascript:;" class="comment-operate">删除</a>' +
	                '</p>' +
	                '</div>'                
	        commentList.appendChild(commentBox);
	        textarea.value = '';
	        textarea.onblur();
	    }
	
	    /**
	     * 赞回复
	     * @param el 点击的元素
	     */
	    function praiseReply(el) {
//	    	console.log("^^^^^^praisereply");
	        var myPraise = parseInt(el.getAttribute('my'));
	        var oldTotal = parseInt(el.getAttribute('total'));
	        var newTotal;
	        if (myPraise == 0) {
	            newTotal = oldTotal + 1;
	            el.setAttribute('total', newTotal);
	            el.setAttribute('my', 1);
	            el.innerHTML = newTotal + ' 取消赞';
	        }
	        else {
	            newTotal = oldTotal - 1;
	            el.setAttribute('total', newTotal);
	            el.setAttribute('my', 0);
	            el.innerHTML = (newTotal == 0) ? '赞' : newTotal + ' 赞';
	        }
	        el.style.display = (newTotal == 0) ? '' : 'inline-block'
	    }
	
		function del_comment (tid) {
			var user= eval(app.getDatas(PREFERENCE_USER));
			mui.ajax(DYNAMICSTATEDEL_URL,{
				data:{
					tid:tid,
					xiaoqu:user.xiaoqu
				},
				dataType:'json',//服务器返回json格式数据
				type:'get',//HTTP请求类型
				timeout:10000,//超时时间设置为10秒；
//				headers:{'Content-Type':'application/json'},
				success:function (data){							
					var infor=JSON.stringify(data);
					var obj=eval(data);
//					console.log("info:"+infor);
					if (obj.success==1) {
						parent_node.removeChild(childe_node);
//						console.log('new PID：'+obj.pid);
//						//var go_main = plus.webview.getWebviewById('kinder_main.html');
//						//console.log("^^^^^^^delete dongtai then update kinder main:" + go_main);
//						//mui.fire(go_main, 'reload');

					} else{
						console.log("******network error");
						mui.toast(obj.errorMsg);									
					}								
				},							
				error:function(xhr,type,errorThrown){
					mui.toast("网络异常");
					console.log("******network error");
					//mui.toast("error type:"+type);
					console.log("error type:"+type);
					console.log(xhr.status);
					console.log(xhr.readyState);
					console.log(xhr.response);
				}
			});
		}
	    /**
	     * 操作留言
	     * @param el 点击的元素
	     */
	    function operate(el) {
//	    	console.log("^^^^^^operate");
	        var commentBox = el.parentNode.parentNode.parentNode;
	        var box = commentBox.parentNode.parentNode.parentNode;
	        var txt = el.innerHTML;
	        var user = commentBox.getElementsByClassName('user')[0].innerHTML;
	        var textarea = box.getElementsByClassName('comment')[0];
	        if (txt == '回复') {
	            textarea.focus();
	            textarea.value = '回复' + user;
	            textarea.onkeyup();
	        }
	        else {
	            removeNode(commentBox);
	        }
	    }
	
	    //把事件代理到每条分享div容器
	    for (var i = 0; i < boxs.length; i++) {
	        var tid_zan=boxs[i].title;
//	        console.log("for tid:" + tid_zan);
	        //点击
	        boxs[i].onclick = function (e) {
	        	var user= eval(app.getDatas(PREFERENCE_USER));
	            e = e || window.event;
	            var el = e.srcElement;
//	            console.log('##title:'+el.title+' id:'+el.id);
//				console.log(el.getAttribute("rpid"));
	            switch (el.title) {
					//展开评论
					case 'commit':
//						console.log("^^^^^^operate---commit");
						if (like_time == 1){
							clearTimeout(obj_id); 
							like_time = 0;
						}
						showCommitBox(el.parentNode.parentNode.id);
						break;	
					//点赞
					case 'praise':
//						console.log("^^^^^^operate---praise");
						sendReply (el.parentNode.parentNode,el,user.account, user.id); //apple add
//						praiseBox(el.parentNode.parentNode,el);
						break;
					//点赞
					case 'msg':  //添加新贴
//						console.log("^^^^^^operate---msg");
						rpid = 0;
						openComment(el.parentNode.parentNode,el);
						break;
					//回复评论	
					case 'comment-content':
//						console.log("^^^^^^operate---comment-content");
						console.log("pid:"+el.getAttribute("pid"));
						rpid = el.getAttribute("pid");
						ReplyComment(el.parentNode.parentNode.parentNode,el);
						break;					
	
	                //赞留言
	                case 'comment-praise':
//						console.log("^^^^^^operate---comment-praise");
	                    praiseReply(el);
	                    break;
	
	                //操作留言
	                case 'comment-operate':
//						console.log("^^^^^^operate---comment-operate");
	                    operate(el);
	                    break;
	            }
	        }
	
	    }
	    //长按图片删除帖子
	    mui(".mui-media-body").on('longtap','.mui-card-content',function (e) {
	    	var user= eval(app.getDatas(PREFERENCE_USER));
	    	console.log("now account:" + user.account);
	    	//add four parentNode
	    	console.log("tiezi account:" + e.srcElement.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.creater);
	    	if(user.account == e.srcElement.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.creater){
	    		//plus.nativeUI.alert("长按OK");
				var el = e.srcElement;
				console.log("###delid"+el.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.title);
//				var btnArray = [{title:"删除"},{title:"复制"}];
				var btnArray = [{title:"删除"}];
				plus.nativeUI.actionSheet( {
					title:"选择操作",
					cancel:"取消",
					buttons:btnArray
				}, function(e){
					var index = e.index;
//				var text = '你刚点击了,';
					switch (index){
						case 0:
//						text += "取消";
//						console.log(el.className);
							break;
						case 1:
//						text += "拍照或录像";
//						console.log(el.innerHTML);
							parent_node = el.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
							childe_node = el.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
							var temp_tid = el.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.title;					
							del_comment(temp_tid);
							//parent_node.removeChild(childe_node);
							break;
						case 2:
//						text += "选取现有的";
//						console.log(el.className);
							break;
					}
				});

	    	}else{
	    		mui.toast("只可以删除自己发的帖子哟!");
	    	}
		});
		//长按文字删除帖子
	    mui(".mui-media-body").on('longtap','p',function (e) {
	    	var user= eval(app.getDatas(PREFERENCE_USER));
	    	console.log("now account:" + user.account);
			var creater = e.srcElement.parentNode.parentNode.parentNode.creater;
			
			if(creater==null||creater=="undefined"||creater==""){
				return;
			}
			else{
				console.log("tiezi account:" + e.srcElement.parentNode.parentNode.parentNode.creater);
		    	if(user.account == e.srcElement.parentNode.parentNode.parentNode.creater){
		    		//plus.nativeUI.alert("长按OK");
					var el = e.srcElement;
					console.log("###delid"+el.parentNode.parentNode.parentNode.title);
	//				var btnArray = [{title:"删除"},{title:"复制"}];
					var btnArray = [{title:"删除"}];
					plus.nativeUI.actionSheet( {
						title:"选择操作",
						cancel:"取消",
						buttons:btnArray
					}, function(e){
						var index = e.index;
	//				var text = '你刚点击了,';
						switch (index){
							case 0:
	//						text += "取消";
	//						console.log(el.className);
								break;
							case 1:
	//						text += "拍照或录像";
	//						console.log(el.innerHTML);
								parent_node = el.parentNode.parentNode.parentNode.parentNode;
								childe_node = el.parentNode.parentNode.parentNode;
								var temp_tid = el.parentNode.parentNode.parentNode.title;					
								del_comment(temp_tid);
								//parent_node.removeChild(childe_node);
								
								break;
							case 2:
	//						text += "选取现有的";
	//						console.log(el.className);
								break;
						}
					});
	
		    	}else{
		    		mui.toast("只可以删除自己发的帖子哟!");
		    	}
			}
			
		});

	}

	
}(window.comment = {}));