function tagCloud(){
	var radius = 90;
	var d = 200;
	var dtr = Math.PI / 180;
	var mcList = [];
	var lasta = 1;
	var lastb = 1;
	var distr = true;
	var tspeed = 11;
	var size = 200;
	var mouseX = 0;
	var mouseY = 10;
	var howElliptical = 1;
	var aA = null;
	var oDiv = null;
	window.onload=function (){
		var i=0;
		var oTag=null;
		oDiv=document.getElementById('tagscloud');
		aA=oDiv.getElementsByTagName('a');
	for(i=0;i<aA.length;i++){
		oTag={};
		aA[i].onmouseover = (function (obj) {
			return function () {
				obj.on = true;
				this.style.zIndex = 9999;
				this.style.color = '#fff';
				this.style.background = '#0099ff';
				this.style.padding = '5px 5px';
				this.style.filter = "alpha(opacity=100)";
				this.style.opacity = 1;
			}
		})(oTag);
		aA[i].onmouseout = (function (obj) {
			return function () {
				obj.on = false;
				this.style.zIndex = obj.zIndex;
				this.style.color = '#fff';
				this.style.background = '#9933FF';
				this.style.padding = '5px';
				this.style.filter = "alpha(opacity=" + 100 * obj.alpha + ")";
				this.style.opacity = obj.alpha;
				this.style.zIndex = obj.zIndex;
			}
		})(oTag);
		oTag.offsetWidth = aA[i].offsetWidth;
		oTag.offsetHeight = aA[i].offsetHeight;
		mcList.push(oTag);
	}
	sineCosine( 0,0,0 );
	positionAll();
	(function () {
		update();
		setTimeout(arguments.callee, 40);
	})();
	};
	function update(){
		var a, b, c = 0;
		a = (Math.min(Math.max(-mouseY, -size), size) / radius) * tspeed;
		b = (-Math.min(Math.max(-mouseX, -size), size) / radius) * tspeed;
		lasta = a;
		lastb = b;
		if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) {
			return;
		}
		sineCosine(a, b, c);
		for (var i = 0; i < mcList.length; i++) {
		if (mcList[i].on) {
			continue;
		}
		var rx1 = mcList[i].cx;
		var ry1 = mcList[i].cy * ca + mcList[i].cz * (-sa);
		var rz1 = mcList[i].cy * sa + mcList[i].cz * ca;
		var rx2 = rx1 * cb + rz1 * sb;
		var ry2 = ry1;
		var rz2 = rx1 * (-sb) + rz1 * cb;
		var rx3 = rx2 * cc + ry2 * (-sc);
		var ry3 = rx2 * sc + ry2 * cc;
		var rz3 = rz2;
		mcList[i].cx = rx3;
		mcList[i].cy = ry3;
		mcList[i].cz = rz3;
		per = d / (d + rz3);
		mcList[i].x = (howElliptical * rx3 * per) - (howElliptical * 2);
		mcList[i].y = ry3 * per;
		mcList[i].scale = per;
		var alpha = per;
		alpha = (alpha - 0.6) * (10 / 6);
		mcList[i].alpha = alpha * alpha * alpha - 0.2;
		mcList[i].zIndex = Math.ceil(100 - Math.floor(mcList[i].cz));
		}
		doPosition();
	}
	function depthSort(){
		var i=0;
		var aTmp=[];
		for(i=0;i<aA.length;i++){
			aTmp.push(aA[i]);
		}
		aTmp.sort(function (vItem1, vItem2){
			if(vItem1.cz>vItem2.cz){
				return -1;
			}else if(vItem1.cz<vItem2.cz){
				return 1;
			}else{
				return 0;
			}
		});
		for(i=0;i<aTmp.length;i++){
			aTmp[i].style.zIndex=i;
		}
	}
	function positionAll(){
		var phi = 0;
		var theta = 0;
		var max = mcList.length;
		for (var i = 0; i < max; i++) {
		if (distr) {
			phi = Math.acos(-1 + (2 * (i + 1) - 1) / max);
			theta = Math.sqrt(max * Math.PI) * phi;
		} else {
			phi = Math.random() * (Math.PI);
			theta = Math.random() * (2 * Math.PI);
		}
		//坐标变换
		mcList[i].cx = radius * Math.cos(theta) * Math.sin(phi);
		mcList[i].cy = radius * Math.sin(theta) * Math.sin(phi);
		mcList[i].cz = radius * Math.cos(phi);
		aA[i].style.left = mcList[i].cx + oDiv.offsetWidth / 2 - mcList[i].offsetWidth / 2 + 'px';
		aA[i].style.top = mcList[i].cy + oDiv.offsetHeight / 2 - mcList[i].offsetHeight / 2 + 'px';
		}
	}
	function doPosition(){
		var l = oDiv.offsetWidth / 2;
		var t = oDiv.offsetHeight / 2;
		for (var i = 0; i < mcList.length; i++) {
			if (mcList[i].on) {
			continue;
			}
		var aAs = aA[i].style;
		if (mcList[i].alpha > 0.1) {
			if (aAs.display != '')aAs.display = '';
		} else {
			if (aAs.display != 'none')aAs.display = 'none';
		continue;
		}
		aAs.left = mcList[i].cx + l - mcList[i].offsetWidth / 2 + 'px';
		aAs.top = mcList[i].cy + t - mcList[i].offsetHeight / 2 + 'px';
		aAs.filter = "alpha(opacity=" + 100 * mcList[i].alpha + ")";
		aAs.zIndex = mcList[i].zIndex;
		aAs.opacity = mcList[i].alpha;
		}
	}
	function sineCosine( a, b, c){
		sa = Math.sin(a * dtr);
		ca = Math.cos(a * dtr);
		sb = Math.sin(b * dtr);
		cb = Math.cos(b * dtr);
		sc = Math.sin(c * dtr);
		cc = Math.cos(c * dtr);
	}
}
function getStyle(obj,name){
	return (obj.currentStyle||getComputedStyle(obj,false))[name];
}
function move(obj,json,options){
	options=options||{};
	options.duration=options.durations||700;
	options.easing=options.easing||'ease-out';
	var start={};
	var dis={};
	for(var name in json){
		start[name]=parseFloat(getStyle(obj,name));
		dis[name]=json[name]-start[name];
	}
	var count=Math.floor(options.duration/30);
	var n=0;
	
	clearInterval(obj.timer);
	obj.timer=setInterval(function (){
		n++;
		for(var name in json){
			switch(options.easing){
				case 'linear':
					var cur=start[name]+dis[name]*n/count;
					break;
				case 'ease-in':
					var a=n/count;
					var cur=start[name]+dis[name]*Math.pow(a,3);
					break;
				case 'ease-out':
					var a=1-n/count;
					var cur=start[name]+dis[name]*(1-Math.pow(a,3));
					break;	
			}
			
			if(name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
			}else{
				obj.style[name]=cur+'px';
			}
		}
		
		if(n==count){
			clearInterval(obj.timer);
			options.complete&&options.complete();
		}
	},30);
}
function getDir(obj,ev){
	var x=obj.getBoundingClientRect().left+obj.offsetWidth/2-ev.clientX;
	var y=obj.getBoundingClientRect().top+obj.offsetHeight/2-ev.clientY;
	
	return Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;;
}
function through(obj){
	obj.onmouseenter=function (ev){
		var oLi=obj.children[0];
		var oEvent=ev||event;
		var dir=getDir(obj,oEvent);
		switch(dir){
			case 0:
				oLi.style.left=0;
				oLi.style.top='170px';
				break;
			case 1:
				oLi.style.left='-315px';
				oLi.style.top=0;
				break;
			case 2:
				
				oLi.style.left=0;
				oLi.style.top='-170px';
				break;
			case 3:
				oLi.style.left='315px';
				oLi.style.top=0;
				
				break;
		}
		move(oLi,{left:0,top:0})
	};
	obj.onmouseleave=function (ev){
		var oLi=obj.children[0];
		var oEvent=ev||event;
		var dir=getDir(obj,oEvent);
		switch(dir){
			case 0:
				move(oLi,{top:170,left:0});
				break;
			case 1:
				move(oLi,{top:0,left:-315});
				break;
			case 2:
				move(oLi,{top:-170,left:0});
				
				break;
			case 3:
				move(oLi,{top:0,left:315});
				break;
		}
	};
}
function getByClass(obj,sClass){
	if(obj.getElementsByClassName){
		return obj.getElementsByClassName(sClass);
	}
	var aResult=[];
	var aEle=obj.getElementsByTagName('*');
	var re=new RegExp('\\b'+sClass+'\\b');
	for(var i=0; i<aEle.length; i++){
		if(aEle[i].className.search(re)!=-1){
			aResult.push(aEle[i]);
		}
	}
	return aResult;
}