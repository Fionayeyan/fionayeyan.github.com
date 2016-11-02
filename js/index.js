$(function(){
	var timer=null;
	var iNow = 0;
    $('#fullpage').fullpage({
        'verticalCentered': false,
        'css3': true,
		'sectionsColor': ['#fff', '#fff', '#fff', '#fff','#fff'],
        'anchors': ['section1', 'section2', 'section3', 'section4','section5'],
        'navigation': true,
        'navigationPosition': 'right',
		'afterRender':function(index){
				;(function(){
                   $('.Reaume').stop().animate({
						opacity:1
					},500);
                })();
				;(function(){
                   $('.Reaume_tit').stop().animate({
						opacity:1,
						left:-80
					},500);
                })();
			 
				;(function(){
						tagCloud();
				})();
				(function(){
					$('.sec4_bg2').stop().animate({bottom:-720},1000);
				})();
			
				
		},
		'afterLoad': function(anchorLink, index){
			clearInterval(timer);
			iNow=0;
            if(index==1){
               ;(function(){
                    var $arr1=$('.section1 .page1-bg1').attr('rel').split(',');
                    var $arr2=$('.section1 .page1-bg2').attr('rel').split(',');
                    var $arr3=$('.section1 .page1-bg3').attr('rel').split(',');
                    var $arr4=$('.section1 .page1-bg4').attr('rel').split(',');
                    var $arr5=$('.section1 .page1-bg5').attr('rel').split(',');
                    $('.section1 .page1-bg1').animate({
                        top:$arr1[1]+'px'
                    },500);
                    $('.section1 .page1-bg2').animate({
                        left:$arr2[1]+'px'
                    },500);
                    $('.section1 .page1-bg3').animate({
                        right:$arr3[1]+'px'
                    },500);
                    $('.section1 .page1-bg4').animate({
                        right:$arr4[1]+'px'
                    },500);
                    $('.section1 .page1-bg5').animate({
                        left:$arr5[1]+'px'
                    },500);
                })();
				 ;(function(){
                   $('.Reaume_tit').stop().animate({
						opacity:1,
						left:-80
					},500);
                })();
			}
			if(index==2){
				;(function(){
					$('.section2 .page1-bg1').animate({
						top:-75
					},500);
				})();
				;(function(){
					$('.section2 .page1-bg2').animate({
						bottom:-75
					},500);
				})();
				;(function(){
					var aPro=document.getElementsByClassName('projects');
					 for(var i=0; i<aPro.length; i++){
						 through(aPro[i]);
					}	
				})();
				(function(){
					$('.section2 .move_line').animate({top:79},500);	
				})();
				;(function(){
					$('.section2 .projects_list .projects').stop().animate({
                        opacity: 1,
						top:0
                    }, 800);
                    	
				})();
				
			}
			if(index==3){
				;(function(){
					$('.sec3_bg').animate({opacity:1},1000);
				})();
				;(function(){
					$('.lar').stop().animate({
						bottom:400,
					},1000);
					$('.tech_l_bg,.tech_r_bg').stop().animate({left:63},'slow');
				})();
				(function(){
					tagCloud();
				})();
			}
			if(index==4){
				autoPlay();
				function autoPlay(){
					var oBox = document.getElementById('box');
					var aLi = oBox.getElementsByTagName('li');
					var aWore_dec = oBox.getElementsByClassName('work_pic_dec');
					var conList = document.getElementById('sec4_con');
					var aInt = document.getElementsByClassName('con_list');
					var aIcon = document.getElementsByClassName('sec4_icon');
					var aLine = document.getElementsByClassName('line');
					
					
					 var w = 30;
					 //手风琴效果
					 for (var i = 1; i < aLi.length; i++) {
						aLi[i].style.left = oBox.offsetWidth - (aLi.length-i)*w + 'px';
					 }
					for (var i = 0; i < aLi.length; i++) {
						aLi[i].index = i;
						aLi[i].onmouseenter = function() {
							clearInterval(timer);
							for(var i = 0; i < aLi.length; i++){
								move(aWore_dec[this.index],{left:-300},{duration:3000});
								move(aInt[i],{opacity:0},{duration:1000});
								aIcon[i].className = 'sec4_icon fl';
								move(aLine[i],{left:-560},{duration:1000});
							}
							move(aInt[this.index],{opacity:1},{duration:1000});
							aIcon[this.index].className = 'sec4_icon fl active';
							move(aWore_dec[this.index],{left:0},{duration:3000});
							move(aLine[this.index],{left:-33},{duration:1000});
							for (var i = 0; i < aLi.length; i++) {
								if (i <= this.index) {
									move(aLi[i],{left:i*w},{duration:1000});
								} else {
									move(aLi[i],{left:oBox.offsetWidth - (aLi.length - i)*w},{duration:1000});
								}
							}
						};
						
					}
					tab_playAuto();
					function  tab_playAuto(){
						
						for(var i=0;i<aIcon.length;i++){
							aLi[i].onmouseleave = function() {
								clearInterval(timer);
								timer=setInterval(next,2000);
							}
							aIcon[i].index=i;
							function tab(){
								for(var i=0;i<aIcon.length;i++){
									aWore_dec[i].style.left = '-300px';
									 move(aInt[i],{opacity:0},{duration:1000});
									 aIcon[i].className = 'sec4_icon fl';
									 move(aLine[i],{left:-560},{duration:1000});
								}
								move(aInt[iNow],{opacity:1},{duration:1000});
								aIcon[iNow].className = 'sec4_icon fl active';
								move(aWore_dec[iNow],{left:00},{duration:3000});
								move(aLine[iNow],{left:-33},{duration:1000});
								for (var i = 0; i < aLi.length; i++) {
									if (i <= iNow) {
										move(aLi[i],{left:i*w},{duration:1000});
									} else {
										move(aLi[i],{left:oBox.offsetWidth - (aLi.length - i)*w},{duration:1000});
									}
								}
							}
							
							aIcon[i].onmouseover=function(){
								iNow=this.index;
								tab();
								
							};
						}
						function next(){
							iNow++;
							if(iNow==aIcon.length){
								iNow=0;	
							}
							tab();
						};
						
						timer=setInterval(next,2000);
							conList.onmouseover=function(){
							clearInterval(timer);
							};
							conList.onmouseout=function(){
								clearInterval(timer);
								timer=setInterval(next,2000);
							};
						}
					
				};
				(function(){
					$('.sec4_bg2').stop().animate({bottom:-70},1000);
				})();
			}
			
		},
		'onLeave': function(index, nextIndex, direction){
			clearInterval(timer);
			iNow=0;
            if(index==1){
                 ;(function(){
					  $('.Reaume_tit').stop().animate({
						 	opacity:0,
							left:-1115
						},500);            
				 })();
				;(function(){
					var $arr1=$('.section1 .page1-bg1').attr('rel').split(',');
					var $arr2=$('.section1 .page1-bg2').attr('rel').split(',');
					var $arr3=$('.section1 .page1-bg3').attr('rel').split(',');
					var $arr4=$('.section1 .page1-bg4').attr('rel').split(',');
					var $arr5=$('.section1 .page1-bg5').attr('rel').split(',');
					$('.section1 .page1-bg1').animate({
						top:$arr1[0]+'px'
					},500);
					$('.section1 .page1-bg2').animate({
						left:$arr2[0]+'px'
					},500);
					$('.section1 .page1-bg3').animate({
						right:$arr3[0]+'px'
					},500);
					$('.section1 .page1-bg4').animate({
						right:$arr4[0]+'px'
					},500);
					$('.section1 .page1-bg5').animate({
						left:$arr5[0]+'px'
					},500);
				 })(); 
            }
			if(index==2){
				;(function(){
					$('.section2 .page1-bg1').stop().animate({
						top:-360
					},1000);
				})();
				;(function(){
					$('.section2 .projects_list .projects').stop().animate({
                        opacity: 0,
						top:500
                    }, 500);
				})();
				(function(){
					$('.section2 .move_line').stop().animate({top:-26},500);	
				})();				
				;(function(){
					$('.section2 .page1-bg2').stop().animate({
						bottom:-360
					},500);
				})();
			}
			if(index==3){
				$('.sec3_bg').stop().animate({opacity:0},1000);
			}
			if(index==4){
				(function(){
					$('.sec4_bg2').stop().animate({bottom:-720},1000);
				})();
			}
		}
    });
});