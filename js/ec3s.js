/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2014-12-19 15:56:06
 * @version $Id$
 */
 $(function(){
    $("#dowebok-Wrap").fullpage({
        verticalCentered: false,//内容是否垂直居中
        navigation: true,//是否显示项目导航
        //navigationTooltips: ["首页", "优势", "发展", "服务", "IT系统", "合作","联系我们"],
		//页面初始化完成后的回调函数
        afterRender: function(index){
            $('.section1 .turndown').click(function(){
                $('.section').each(function(){
                    $(this).removeClass('active');
                });
                $('.section').eq(1).addClass('active');
                $('#fp-nav li a').each(function(){
                    $(this).removeClass('active');
                });
                $('#fp-nav li a').eq(1).addClass('active');
                $('#dowebok-Wrap').animate({
                   top:-parseInt($('.section').eq(0).css('height'))*1+'px'
                },500,function(){
                    ;(function(){
                        var $rel = $('.page2 li').eq(0).attr('rel');
                        var $arr = $rel.split(',');
                        $('.page2 li').eq(0).animate({
                            top: $arr[1] + 'px'
                        }, 300);
                        $('.page2 li').eq(1).delay(150).animate({
                            top: $arr[1] + 'px'
                        }, 300);
                        $('.page2 li').eq(2).delay(300).animate({
                            top: $arr[1] + 'px'
                        }, 300);
                        $('.page2 li').eq(3).delay(450).animate({
                            top: $arr[1] + 'px'
                        }, 300);
                    })();
                })
                
            });
            ;(function(){
                var $num=0;
                var timer=null;
                $('.section1 .dots li').each(function(){
                    $(this).click(function(){
                        $num=$(this).index();
                        $('.section1 .imgplayer').animate({
                            left:-$num*980+'px'
                        },500);
                        $('.section1 .dots li').each(function(){
                            $(this).removeClass('active');
                        });
                        $('.section1 .dots li').eq($num).addClass('active');
                    });
                     $(this).mouseover(function(){
                        clearInterval(timer);
                     }).mouseout(function(){
                        timer=setInterval(function(){
                            $num++;
                            if($num>1){
                                $num=0;
                            }
                            $('.section1 .imgplayer').animate({
                                 left:-$num*980+'px'
                            },500);
                            $('.section1 .dots li').each(function(){
                                $(this).removeClass('active');
                            });
                            $('.section1 .dots li').eq($num).addClass('active');
                        },6000);
                     });
                });
               timer=setInterval(function(){
                    $num++;
                    if($num>1){
                        $num=0;
                    }
                    $('.section1 .imgplayer').animate({
                         left:-$num*980+'px'
                    },500);
                    $('.section1 .dots li').each(function(){
                        $(this).removeClass('active');
                    });
                    $('.section1 .dots li').eq($num).addClass('active');
                },6000); 

                
            })();
            ;(function(){
                $('.page3 .timeflag').css({'display':'block'});
                $('.page3 .timenum li').each(function(){
                    $('.page3 .timeflag li .sign').each(function(){
                        $(this).animate({
                            width:0+'px'
                        },300)
                    });
                    $('.page3 .timeflag li .develop').each(function(){
                        $(this).fadeOut();
                    })
                });
                $('.page3 .timeflag li .sign').eq(0).animate({
                     width:80+'px'
                },300);
                $('.page3 .timeflag li .develop').eq(0).fadeIn();
            })();
            ;(function(){
                var arr=['#0ba7ed','#f6f6f6','#5ccb89','#0370a2','#f6f6f6','#4c4d4f','#323436'];
                $('.section').each(function(i){
                    $('.section').eq(i).css({"background-color":arr[i]});
               });
            })();//这个函数是添加背景

            ;(function(){
                    var iNow=0;
                    var $logoicon=$('#logoList #logoicon');
                    var $dots=$('#logoList p span');
                    var timer=null;
                    timer = setInterval(function () {
                        iNow++;
                        iNow%=4;
                        move();
                    }, 3000);
                    $dots.each(function(){
                        $(this).click(function(){
                            iNow = $(this).index();
                            move();
                        })
                        $(this).mouseover(function(){
                            clearInterval(timer);
                        }).mouseout(function(){
                            timer=setInterval(function(){
                                iNow++;
                                iNow%=4;
                                move();
                            },3000)
                        })
                    });
                    $logoicon.mouseover(function(){
                        clearInterval(timer)
                    }).mouseout(function(){
                            timer=setInterval(function(){
                                iNow++;
                                iNow%=4;
                                move();
                            },3000)
                    })
                    function move(){
                        $logoicon.animate({
                          left: -iNow*980 + 'px'
                        }, 300);
                        $dots.each(function(index, element) {
                            $dots.eq(index).removeClass('active');
                        });
                        $dots.eq(iNow).addClass('active');  
                    };
            })();//这个函数是第6屏轮播图自动播放 

            ;(function(){
                $('#header h1').click(function(){
                    $('.section').each(function(){
                        $(this).removeClass('active');
                    });
                    $('.section').eq(0).addClass('active');
                    $('#fp-nav li a').each(function(){
                        $(this).removeClass('active');
                    });
                    $('#fp-nav li a').eq(0).addClass('active');
                    $('#dowebok-Wrap').animate({
                        top:0+'px'
                    },500)

                });
                $('#header li').eq(0).click(function(){
                    $('#header li').each(function(){
                        $(this).removeClass('active');
                    });
                    $(this).addClass('active');
                    $('.section').each(function(){
                        $(this).removeClass('active');
                    });
                    $('.section').eq(0).addClass('active');
                    $('#fp-nav li a').each(function(){
                        $(this).removeClass('active');
                    });
                    $('#fp-nav li a').eq(0).addClass('active');
                    $('#dowebok-Wrap').animate({
                        top:0+'px'
                    },500)

                });
                $('#header li').eq(1).click(function(){
                    $('#header li').each(function(){
                        $(this).removeClass('active');
                    });
                    $(this).addClass('active');
                    $('.section').each(function(){
                        $(this).removeClass('active');
                    });
                    $('.section').eq(3).addClass('active');
                    $('#fp-nav li a').each(function(){
                        $(this).removeClass('active');
                    });
                    $('#fp-nav li a').eq(3).addClass('active');
                    $('#dowebok-Wrap').animate({
                        top:-parseInt($('.section').eq(0).css('height'))*3+'px'
                    },500)

                });
                $('#header li').eq(2).click(function(){
                    $('#header li').each(function(){
                        $(this).removeClass('active');
                    });
                    $(this).addClass('active');
                    $('.section').each(function(){
                        $(this).removeClass('active');
                    });
                    $('.section').eq(6).addClass('active');
                    $('#fp-nav li a').each(function(){
                        $(this).removeClass('active');
                    });
                    $('#fp-nav li a').eq(5).addClass('active');
                    $('#dowebok-Wrap').animate({
                        top:-parseInt($('.section').eq(0).css('height'))*5+'px'
                    },500)
                });
            })();//这个函数是导航菜单点击跳到指定的第几屏;

            $('.page2 li').each(function(){
                var $rel = $(this).attr('rel');
                var $arr = $rel.split(',');
                $(this).animate({
                    top: $arr[0] + 'px'
                }, {});
            });
            
            
            ;(function(){
                var $num=0;
                $('.section4 .pop a.close').click(function(){
                    $('.section4 .pop').css({'display':'none'});
                });
                $('.section4 .pop .prev').click(function(){
                   $num--;
                   if($num<0){
                    $num=5;
                   }
                   $('.section4 .pop .dialog').each(function(i){
                    if ( i != $num) {
                     $('.section4 .pop .dialog').eq(i).fadeOut().css('zIndex', 1);
                    }else{
                        $('.section4 .pop .dialog').eq($num).fadeIn().css('zIndex', 2);
                    }
                   });
                });
                $('.section4 .pop .next').click(function(){
                   $num++;
                   if($num>5){
                    $num=0;
                   }
                   $('.section4 .pop .dialog').each(function(i){
                    if ( i != $num) {
                     $('.section4 .pop .dialog').eq(i).fadeOut().css('zIndex', 1);
                    }else{
                        $('.section4 .pop .dialog').eq($num).fadeIn().css('zIndex', 2);
                    }
                   });               
                });
                $('.page4 li').each(function(){
                    $(this).click(function(){
                       $('.section4 .pop').css({'display':'block'});
                       $num=$(this).index();
                       $('.section4 .pop .dialog').each(function(i){
                        if ( i != $num) {
                         $('.section4 .pop .dialog').eq(i).fadeOut().css('zIndex', 1);
                        }else{
                            $('.section4 .pop .dialog').eq($num).fadeIn().css('zIndex', 2);
                        }
                       });   
                    })  
                });
            })(); //这行折叠的代码是第4屏里面的弹窗淡入淡出效果
            ;(function(){
                $('.page5 .it li').each(function(){
                    var $arr=$(this).attr('rel').split(',');
                    $(this).animate({
                        left:360+'px'
                    },500)
                })
            })()
              
        },
		//滚动到某一屏后的回调函数，接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
        afterLoad: function(anchorLink, index){
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
                        left:$arr1[1]+'px'
                    },500);
                    $('.section1 .page1-bg3').animate({
                        right:$arr1[1]+'px'
                    },500);
                    $('.section1 .page1-bg4').animate({
                        right:$arr1[1]+'px'
                    },500);
                    $('.section1 .page1-bg5').animate({
                        left:$arr1[1]+'px'
                    },500);
                })();

            }
            
            ;(function(){
              var iNow=0;
              $('#logoList p span').click(function(){
                  iNow = $(this).index();
                  $('#logoList ul').animate({
                      left:-iNow*980+'px'
                      },500);
                  $('#logoList p span').each(function(index, element) {
                      $('#logoList p span').eq(index).removeClass('active');
                  });
                  $('#logoList p span').eq(iNow).addClass('active');
              });
            })();             

              if(index==1){
                $('#header li').each(function(){
                    $(this).removeClass('active');
                })
                $('#header li').eq(0).addClass('active');
              };

              if(index==2){
                ;(function(){
                    var $rel = $('.page2 li').eq(0).attr('rel');
                    var $arr = $rel.split(',');
                    $('.page2 li').eq(0).animate({
                        top: $arr[1] + 'px'
                    }, 300);
                    $('.page2 li').eq(1).delay(150).animate({
                        top: $arr[1] + 'px'
                    }, 300);
                    $('.page2 li').eq(2).delay(300).animate({
                        top: $arr[1] + 'px'
                    }, 300);
                    $('.page2 li').eq(3).delay(450).animate({
                        top: $arr[1] + 'px'
                    }, 300);
                })();
              };
              if(index==3){
                ;(function(){
                     $('.page3 .timenum li').each(function(){
                        $(this).mouseover(function(){
                            var $num=$(this).index();
                             $('.page3 .timenum').css({'backgroundPosition':'left '+(-$num*60)+'px'})
                            $('.page3 .timeflag li .sign').each(function(){
                                $(this).stop().animate({
                                    width:0+'px'
                                },500);
                            });
                            $('.page3 .timeflag li .develop').each(function(){
                                $(this).stop().fadeOut();
                            });
                            $('.page3 .timeflag li .sign').eq($num).stop().animate({
                                width:80+'px'
                            },500);
                            $('.page3 .timeflag li .develop').eq($num).stop().delay(500).fadeIn(500);

                            $('.page3 .time-line .square').stop().animate({
                                left:80+$num*100+'px'
                            },500)
                       });
                    });
                })();
              }
              if(index==1|index==2|index==3){
                $('#header li').each(function(){
                    $(this).removeClass('active');
                })
                $('#header li').eq(0).addClass('active');
              }
              if(index==4){
                $('#header li').each(function(){
                    $(this).removeClass('active');
                })
                $('#header li').eq(1).addClass('active');
              };
              if(index==5){
                ;(function(){
                    $('.page5 .it li').each(function(){
                        var $arr=$(this).attr('rel').split(',');
                        $(this).animate({
                            left:$arr[0]+'px'
                        },500)
                    })
                 })();
              }
              if(index==6){
                $('#header li').each(function(){
                    $(this).removeClass('active');
                });
                $('#header li').eq(2).addClass('active');
              }
        },
		//滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：
		//index 是离开的“页面”的序号，从1开始计算；
		//nextIndex 是滚动到的“页面”的序号，从1开始计算；
		//direction 判断往上滚动还是往下滚动，值是 up 或 down。
        onLeave: function(index, nextIndex, direction){
            if(index==1){
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
                    left:$arr1[0]+'px'
                },500);
                $('.section1 .page1-bg3').animate({
                    right:$arr1[0]+'px'
                },500);
                $('.section1 .page1-bg4').animate({
                    right:$arr1[0]+'px'
                },500);
                $('.section1 .page1-bg5').animate({
                    left:$arr1[0]+'px'
                },500);
            })();
            }
            if(index==2){
                ;(function(){
                    var $rel = $('.page2 li').eq(0).attr('rel');
                    var $arr = $rel.split(',');
                    $('.page2 li').each(function(){
                       $(this).animate({
                            top: $arr[0]+'px'
                        },300); 
                   });
                })();
            }
            if(index==4){
                $('.section4 .pop').css({'display':'none'});
                $('#header li').each(function(){
                    $(this).removeClass('active');
                })
            }
            if(index==5){
                $('.page5 .it li').each(function(){
                    $(this).animate({
                        left:360+'px'
                    },500)
                })
              }
          if(index==6){
            $('#header li').each(function(){
                $(this).removeClass('active');
            });
          }
        }
    });

});

