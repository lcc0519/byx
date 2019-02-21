/* 代码整理：大头网 www.datouwang.com */
function menuFixed(id) {
	console.log("div=" + id)
	var obj = document.getElementById(id);
	var _getHeight = obj.offsetTop - 44;
	console.log("_getHeight=" + _getHeight)
	window.onscroll = function() {
		changePos(id, _getHeight);
	}
}

function changePos(id, height) {

	var obj = document.getElementById(id);
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	//console.log("scrollTop=" + scrollTop)
	if(scrollTop < height) {
		//	console.log("pppppp")
		obj.style.position = 'relative';
		obj.style.marginTop = "0px";
		document.getElementById("space").style.display = "none";
	} else {
		//	console.log("pppppp2222")
		obj.style.position = 'fixed';
		obj.style.top = 0;
		obj.style.marginTop = "44px";
		document.getElementById("space").style.display = "block";

	}
}
//Regional开始
$(document).ready(function() {

	$(".Regional").click(function() {

		if($('.grade-eject').hasClass('grade-w-roll')) {
			console.log("RegionalRegionalRegional")
			$('.grade-eject').removeClass('grade-w-roll');
		} else {
			$('.grade-eject').addClass('grade-w-roll');
		}
	});
});

//$(document).ready(function() {
//
//	$(".grade-w>li").click(function() {
//		console.log("111")
//		//		$(".grade-t")
//		//			.css("left", "50%")
//	});
//});

//Sort开始

$(document).ready(function() {
	$(".Sort").click(function() {
		console.log("sortsortsort")
		if($('.Sort-eject').hasClass('grade-w-roll')) {
			$('.Sort-eject').removeClass('grade-w-roll');
			openScroll();
		} else {
			closeScroll();
			$('.Sort-eject').addClass('grade-w-roll');
		}
	});
});

//判断页面是否有弹出

$(document).ready(function() {
	console.log("pppp888eesss")
	$(".Regional").click(function() {
		if($('.Sort-eject').hasClass('grade-w-roll')) {
			$('.Sort-eject').removeClass('grade-w-roll');
		};
	});
});

$(document).ready(function() {
	console.log("ooooooo")
	$(".grade-w-roll").click(function() {
		console.log("pppp888ee")
		if($('.grade-eject').hasClass('grade-w-roll')) {
			console.log("ppppsss")
			$('.grade-eject').removeClass('grade-w-roll');
		};
		if($('.grade-eject').hasClass('grade-w-roll')) {
			console.log("ppppsss")
			$('.grade-eject').removeClass('grade-w-roll');
		};

	});
});

$(document).ready(function() {

	$(".Sort").click(function() {
		console.log("pppp888ee")
		if($('.grade-eject').hasClass('grade-w-roll')) {
			console.log("ppppsss")
			$('.grade-eject').removeClass('grade-w-roll');
		};

	});
});

//js点击事件监听开始

function grade1(wbj) { //附近item点击事件

	var arr = document.getElementById("gradew").getElementsByTagName("li");
	for(var i = 0; i < arr.length; i++) {
		var a = arr[i];
		a.style.background = "";
	};
	wbj.style.background = "#eee"
	if($('.grade-eject').hasClass('grade-w-roll')) {
		$('.grade-eject').removeClass('grade-w-roll');
	};
}

function Sorts(sbj) {

	var arr = document.getElementById("Sort-Sort").getElementsByTagName("li");
	for(var i = 0; i < arr.length; i++) {
		var a = arr[i];
		a.style.background = "";
	};
	sbj.style.background = "#eee"
	if($('.Sort-eject').hasClass('grade-w-roll')) {
		$('.Sort-eject').removeClass('grade-w-roll');
	};
}

function closeScroll() {
	//	document.getElementById("header").style.background = "red"; //mui-bar-nav
	//	document.getElementById("header").style.position = "fixed"; //mui-bar-nav
	//	$('#header').addClass('mui-bar-nav');
	//	$('#header').css("top", "0");
	scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	//top = obj.offsetTop - 44;
	console.log("top===" + scrollTop)
	$('#content').css("top", -scrollTop + "px"); //给body一个负的top值；
	//$('#content').css("margin-top", "0px"); //给body一个负的top值；
	$('#content').addClass('add'); //给body增加一个类，position:fixed; 
	$('#content').addClass('mui-scroll'); //给body增加一个类，position:fixed;
}

function openScroll() {
	$('#content').removeClass('add'); //去掉给body的类
	$(window).scrollTop(scrollTop); //设置页面滚动的高度，如果不设置，关闭弹出层时页面会回到顶部。
}