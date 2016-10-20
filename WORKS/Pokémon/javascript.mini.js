'user strict'
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
function act1Movein(sEv){
	//act1打字效果
	(function(){
		var oDiv = document.getElementById('actone');
		var oP = oDiv.getElementsByTagName('p')[0];
		var str = '真新镇里，有一位非常喜爱神奇宝贝的少年小智。为了让自己变的更强，他决心将图鉴资料全部收集完成，成为很厉害的神奇宝贝训练师。小智并朝着这个目标，展开了他的旅程。。。。';
		oP.innerHTML = '';
		if(sEv== 'onmouseout'){
			clearInterval(oP.timer);
			oP.innerHTML = '';
		}
		
		for (var i = 0; i < str.length; i++) {
			var oSpan = document.createElement('span');
			oSpan.innerHTML = str.charAt(i);
			oP.appendChild(oSpan);
		}
		var n = 0;
		var aSpan = oP.children;
		clearInterval(oP.timer);
		oP.timer = setInterval(function(){
			move(aSpan[n], {
				opacity: 1
			});
			n++;
			if (n == aSpan.length) {
				clearInterval(oP.timer);
			}
		},80);
	})(sEv);	
	//act1 PersonMove
	(function(){
		var oList = document.getElementById('person_list');
		var aImg = oList.getElementsByTagName('img');
		var n = 0;
		
		if( sEv== 'onmouseout'){
			clearInterval(aImg.timer);
			for(var i=0;i<aImg.length;i++){
				aImg[i].style.left = '-850px';
			}
		}
		clearInterval(aImg.timer);
		aImg.timer = setInterval(function(){
			domove(aImg[n],0);
			n++;
			if (n == aImg.length) {
				clearInterval(aImg.timer);
			}
		},800);
	})(sEv);
	
	//act1 MonMove
	(function(){
		var oList1 = document.getElementById('mon_list');
		var m=0;
		var Ftimer;
		if(sEv== 'onmouseout'){
			oList1.style.left = '-700px';
		}
		clearInterval(Ftimer);
		Ftimer = setInterval(function(){
			domove2(oList1,270);
			m++;
			if ( m== 1) {
				clearInterval(Ftimer);
			}
		},3600);
	})(sEv);
};

function act2Movein(sEv){
	//act2打字效果
	(function (sEv){
		var oDiv = document.getElementById('acttwo');
		var oP = oDiv.getElementsByTagName('p')[0];
		
		var str = '既然你诚心诚意的请教了,我们就大发慈悲的告诉你,为了防止世界被破坏,为了守护世界的和平,贯彻爱与真实的邪恶,可爱又迷人的反派角色：武藏,小次郎。我们是穿梭在银河的火箭队,白洞,白色的明天在等着我们。就是这样，喵';
		oP.innerHTML = '';
		if(sEv== 'onmouseout'){
			clearInterval(oP.timer);
			oP.innerHTML = '';
		}
		for (var i = 0; i < str.length; i++) {
			var oSpan = document.createElement('span');
			oSpan.innerHTML = str.charAt(i);
			oP.appendChild(oSpan);
		}
		var a = 0;
		var aSpan = oP.children;
		
		clearInterval(oP.timer);
		oP.timer = setInterval(function(){
			move(aSpan[a], {
				opacity: 1
			});
			a++;
			if ( a == aSpan.length) {
				clearInterval(oP.timer);
			}
		},80);
	})(sEv);
	//act2 pic1
	(function(){
		var oActtwo = document.getElementById('acttwo');
		var oPic1 = getByClass(oActtwo,'acttwo_pic1')[0];
		var n=0;
		var Ftimer;
		
		if(sEv == 'onmouseout'){
			Ftimer = null;
			oPic1.style.left= '-1200px';
		}
		clearInterval(Ftimer);
		Ftimer = setInterval(function(){
			domove2(oPic1,0);
			n++;
			if(n==1){
				clearInterval(Ftimer);
			}
		},800);
	})(sEv);
	//act2 pic2
	(function(){
		var oActtwo = document.getElementById('acttwo');
		var oPic1 = getByClass(oActtwo,'acttwo_pic1')[0];
		var oPic2 = getByClass(oActtwo,'acttwo_pic2')[0];
		var oBg = getByClass(oActtwo,'acttwo_bg')[0];
		var n=0;
		var Ptimer;
		
		if(sEv == 'onmouseout'){
			clearInterval(Ptimer);
			oPic1.style.opacity= 1;
			oPic2.style.opacity= 0;
			oBg.style.background = 'linear-gradient(-45deg,#000,#ccc)';
			
		}
		clearInterval(Ptimer);
		Ptimer = setInterval(function(){
			move(oPic1,{opacity:0},{duration:500});
			move(oPic2,{opacity:1},{duration:500});
			oBg.style.background = 'linear-gradient(-45deg,#009688,#E91E63)';
			n++;
			if(n==1){
				clearInterval(Ptimer);
			}
		},1600);
	})(sEv);
}
function act3Movein(sEv){
	(function(){
		var oThree = document.getElementById('actthree');
		var oDiv = getByClass(actthree,'xz_pic')[0];
		var n=0;
		var Ptimer;
		
		if(sEv == 'onmouseout'){
			clearInterval(Ptimer);
			oDiv.style.opacity= 0;
		}
		clearInterval(Ptimer);
		Ptimer = setInterval(function(){
			move(oDiv,{opacity:1},{duration:500});
			n++;
			if(n==1){
				clearInterval(Ptimer);
			}
		},800);
	})(sEv);
	(function(){
		var oThree = document.getElementById('actthree');
		var oDiv = getByClass(actthree,'fire')[0];
		var oImg = oDiv.getElementsByTagName('img')[0];
		var n=0;
		var Ptimer;
		
		if(sEv == 'onmouseout'){
			clearInterval(Ptimer);
			oImg.style.width= '290px';
		}
		clearInterval(Ptimer);
		Ptimer = setInterval(function(){
			move(oImg,{width:690},{duration:1600});
			n++;
			if(n==1){
				clearInterval(Ptimer);
			}
		},1800);
	})(sEv);
	(function(){
		var oThree = document.getElementById('actthree');
		var oBg = getByClass(actthree,'bg_t_bg2')[0];
		var n=0;
		var Ptimer;
		
		if(sEv == 'onmouseout'){
			clearInterval(Ptimer);
			oBg.style.opacity= 0;
		}
		clearInterval(Ptimer);
		Ptimer = setInterval(function(){
			move(oBg,{opacity:1},{duration:2000});
			n++;
			if(n==1){
				clearInterval(Ptimer);
			}
		},2000);
	})(sEv);
	(function(){
		var oThree = document.getElementById('actthree');
		var oTalk = getByClass(actthree,'hjd_talk')[0];
		var n=0;
		var Ptimer;
		
		if(sEv == 'onmouseout'){
			clearInterval(Ptimer);
			oTalk.style.left= '-610px';
		}
		clearInterval(Ptimer);
		Ptimer = setInterval(function(){
			domove2(oTalk,115);
			n++;
			if(n==1){
				clearInterval(Ptimer);
			}
		},2400);
	})(sEv);
}
function act4Movein(sEv){
	var oFour = document.getElementById('actfour');
	var aPKQ = getByClass(oFour,'act4_pkq');
	
		
	if(sEv == 'onmouseout'){
		aPKQ[0].style.top = '265px';
		aPKQ[1].style.top = '50px';
		aPKQ[2].style.left = '640px';
		aPKQ[3].style.left = '395px';
	}
	
	move(aPKQ[0],{top:35,opacity:1},{duration:1000,complete:function(){
		move(aPKQ[3],{left:761},{duration:1000,complete:function(){
			move(aPKQ[1],{top:390,opacity:1},{duration:1000,complete:function(){
				move(aPKQ[2],{left:175,opacity:1},{duration:1000});
			}});
		}});
	}});

	var aOpc=null;
	var l=0;
	var t=0;
	var lastX=0;
	var lastY=0;
	var iSpeedX=0;
	var iSpeedY=0;
	
	//设置拖拽
	function drag(obj,aOpc){
	  obj.onmousedown=function(ev){
		var oEvent=ev||event;
		var disX=oEvent.clientX-obj.offsetLeft;
		var disY=oEvent.clientY-obj.offsetTop;
		
		if(obj.setCapture){
		  obj.onmousemove=fnMove;
		  obj.onmouseup=fnUp;
		  obj.setCapture();
		}
		else{
		  document.onmousemove=fnMove;
		  document.onmouseup=fnUp;
		}
		
		clearInterval(obj.timer);
		return false;
		
		function fnMove(ev){
		  var oEvent=ev||event;
		  var x=oEvent.clientX-disX;
		  var y=oEvent.clientY-disY;
		  var windowWidth=document.documentElement.clientWidth;
		  var windowHeight=document.documentElement.clientHeight;
		  
		  if(x<0){x=0};
		  if(x>windowWidth-obj.offsetWidth){x=windowWidth-obj.offsetWidth};
		  if(y<0){y=0};
		  if(y>windowHeight-obj.offsetHeight){y=windowHeight-obj.offsetHeight};
		  
		  gensui(obj,aOpc,x,y);
	
		  iSpeedX=x-lastX;
		  iSpeedY=y-lastY;
		  
		  lastX=x;
		  lastY=y;
		}
		
		function fnUp(){
		  this.onmousemove=null;
		  this.onmouseup=null;
		  if(this.releaseCapture){
			this.releaseCapture();
		  }
		  startMove(obj);
		}
	  }
	}
	
	function gensui(oParent,aChildren,left,top){
	  for (var i=aChildren.length-1;i>0;i--){  
		 aChildren[i].style.left=aChildren[i-1].offsetLeft+'px';
		 aChildren[i].style.top=aChildren[i-1].offsetTop+'px';
	  }
	  aChildren[0].style.left=oParent.style.left=left+'px';
	  aChildren[0].style.top=oParent.style.top=top+'px';
	}
	
	function startMove(obj){
	  clearInterval(obj.timer);
	  obj.timer=setInterval(function(){
		 iSpeedY+=3;
		 l=obj.offsetLeft+iSpeedX;
		 t=obj.offsetTop+iSpeedY;
		 
		 if(l<0){
		   iSpeedX*=-0.7;
		   l=0;
		 } else if(l>document.documentElement.clientWidth-obj.offsetWidth){
		   iSpeedX*=-0.7;
		   l=document.documentElement.clientWidth-obj.offsetWidth;
		 }else if(t<0){
		   iSpeedY*=-0.7;
		   iSpeedX*=0.7;
		   t=0;
		 }else if(t>document.documentElement.clientHeight-obj.offsetHeight){
		   iSpeedY*=-0.7;
		   iSpeedX*=0.7;
		   t=document.documentElement.clientHeight-obj.offsetHeight;
		 }
		 
		 if(Math.abs(iSpeedX)<1){
		   iSpeedX=0;
		 }
		 
		 if(Math.abs(iSpeedY)<1){
		   iSpeedY=0;
		 }
		 
		 if(iSpeedX==0&&iSpeedY==0&&t==document.documentElement.clientHeight-obj.offsetHeight){
		   clearInterval(obj.timer);
		 }
		 else{
		   obj.style.left=l+"px";
		   obj.style.top=t+'px';
		   gensui(obj,aOpc,l,t);
		 }
		},30)
	}
	(function(){
		var oWrap = document.getElementById('wrap');
		var oDiv=document.getElementById("div1");
		aOpc=document.getElementById("div2").getElementsByTagName("div");
			if(sEv == 'onmouseout'){
				clearInterval(oDiv.timer);
				oDiv.style.top = '0px';
				oDiv.style.left = '48%';
				 for (var i=0;i<aOpc.length;i++){
					aOpc[i].style.top = '0px';
					aOpc[i].style.left = '48%';
				  }
			}
		  for (var i=0;i<aOpc.length;i++){
			aOpc[i].style.opacity=(10-i)*7/100;
			aOpc[i].style.filter="alpha(opacity="+(10-i)*7+")";
		  }
			drag(oDiv,aOpc);
			startMove(oDiv);
	})();
}