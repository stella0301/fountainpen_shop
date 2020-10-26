$(".index_news_point li").eq(0).css("background","#9CA4A7");
$(".index_news_point li").hover(function(){
let slideIndex =$(this).index();
let slideMove=0-1280*slideIndex;
$(".index_news_slider").css("left", slideMove );
$(this).css("background", "#9CA4A7")
.siblings().css("background","none");
})

$(".index_shop_point li").eq(0).css("background","#9CA4A7");
$(".index_shop_point li").hover(function(){
    let slideIndex =$(this).index();
    let slideMove=0-365*slideIndex;
    $(".index_shop_slider").css("left",slideMove);
    $(this).css("background","#9CA4A7")
    .siblings().css("background","none");
})

let pageHeight= $(".index_body").height();
let widowHeight= $(window).height();
$(function(){
    let pageWidth =$(window).width();
    // console.log(pageWidth);
})
// console.log(pageHeight);
$(window).scroll(function(){
    let scrollTop = $(this).scrollTop();
    console.log(scrollTop)
    let indexHeaderOffset =$(".index_header").offset().top;
    let indexMenuOffset =$(".index_menu").offset().top;
    let indexAboutOffset =$(".index_about").offset().top;
    let indexShopContentOffset =$(".index_shop_content").offset().top;
    let indexNewsContentOffset =$(".index_news_content").offset().top;
    let indexAddressOffset =$(".index_address").offset().top;
    if(scrollTop>indexHeaderOffset+100){
        $(".index_pen")
        .css({
            transform: "rotate(30deg)", 
            // left:"35%",
            bottom:"40%",
             })
    }else{
        $(".index_pen")
        .css({
            transform: "rotate(0deg) translate(-50%)", 
            left:"50%",
            bottom:"30%"
             })  
    }
    if(scrollTop>indexHeaderOffset+200){
        $(".index_pen")
        .css({
            transform: "rotate(60deg)", 
            // left:"34%",
            bottom:"40%",
             })
             $(".index_pen_ph")
             .css({
                transform: "rotate(30deg)", 
               top:"70%"
                 })
    }else{
        $(".index_pen_ph")
        .css({ 
            transform: "rotate(0deg)", 
           top:"60%"
             })  
    }
    if(scrollTop>indexHeaderOffset+250){
        $(".index_pen")
        .css({
            transform: "rotate(90deg)", 
            // bottom:"30%",
             })
             $(".index_pen_ph")
             .css({ 
                 transform: "rotate(60deg)", 
                top:"80%"
                  })  
                }
     if(scrollTop>indexHeaderOffset+400){
        $(".index_pen")
        .css({
            bottom:"25%",
             })
             $(".index_pen_ph")
             .css({ 
                 transform: "rotate(90deg)", 
                top:"90%"
                  }) 
                }
    if(scrollTop>indexHeaderOffset+500){
        $(".index_pen")
        .css({
            transform: "rotate(90deg)", 
            bottom:"15%",
             })
             $(".index_pen_ph")
             .css({ 
                top:"100%"
                  }) 
                }     
    if(scrollTop>indexHeaderOffset+600){
        $(".index_pen")
        .css({
            bottom:"5%",
             })
             $(".index_pen_ph")
             .css({ 
                top:"120%"
                  }) 
    }
    if(scrollTop>indexHeaderOffset+700){
             $(".index_pen_ph")
             .css({ 
                top:"130%"
                  }) 
    }
    if(scrollTop>indexHeaderOffset+800){
        $(".index_pen")
        .css({
            transform: "rotate(90deg)", 
            bottom:"-10%",
             })
             $(".index_pen_ph")
             .css({ 
                top:"130%"
                  })
                 if(scrollTop>indexMenuOffset){
        $(".index_pen")
        .css({
            bottom:"-20%",
             })
                  $(".index_paper")
                  .css({
                 left:"85%",
                 top:"90%"
                 })
             $(".index_ink")
             .css({
                 left:"15%",
                 top:"75%",
                 }),
                 $(".index_other")
                 .css({
                     left:"15%",
                     top:"111%",
                     })    
    } 
    } else{
        $(".index_paper")
       .css({
          left:"50%",
          top:"40%",
           }),
           $(".index_ink")
           .css({
               left:"50%",
               top:"45%",
               })
               $(".index_other")
               .css({
                   left:"50%",
                   top:"45%",
                   })
                   $(" .index_pen_box")
                   .css({
                       top: "20%"
                   }) 
                }  
if(scrollTop>indexMenuOffset+50){
        $(".index_pen")
        .css({
            bottom:"-30%",
             })
            
    }
    if(scrollTop>indexMenuOffset+200){
        $(".index_pen")
        .css({
            bottom:"-45%",
             })
            
    }  if(scrollTop>indexMenuOffset+300){
        $(".index_pen")
        .css({
            bottom:"-55%",
             })    
    }
    if(scrollTop>indexAboutOffset-300){
        $(".index_about_text p").addClass("active")
        $(".index_about_pic").addClass("active")
        $(".index_about_text_ph p").addClass("active")
        $(".index_about_text_ph a").addClass("active")
    }
     if(scrollTop>indexAboutOffset-50){
        $(".index_about_content_pc img").addClass("active")
        $(".index_about_text_pc p").addClass("active")
       
     }
    if(scrollTop>indexAboutOffset+50){
     $(".index_shop_line p").addClass("active")
    }
     if(scrollTop>indexShopContentOffset-600){
        $(".index_shop_slider .index_shop_box").addClass("active")
     }
    if(scrollTop>indexNewsContentOffset-500){
        $(".index_news_slider img").addClass("active")
    }
    if(scrollTop>indexAddressOffset-500){
        $(".index_address_pic img").addClass("active")
        $(".index_address_text").addClass("active")
        // var indexH4 = document.getElementById("index_address_text_h4");
        // var indexH4afterStyle = window.getComputedStyle(indexH4, "::after")
        // (indexH4afterStyle).addClass("active");
    }
})