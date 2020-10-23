// ----------------商品照片點選--------------------//

$(".product_smallgroup li").click(function(){
    $(this).addClass("active")
    .siblings().removeClass("active")
    let pic=$(this).find("img").attr("src")
    $("#mainpic").attr("src",pic)
    $("#prodImgZOOM").removeClass("active")
    $("#prodImgZOOMBig").removeClass("active")
})
$("#mainpic").click(function(){
let pic=$(this).attr("src")
    $("#prodImgZOOMInnerChange").attr("src",pic)
  
})
$("#prodImgZOOMBig").click(function(){
  $(this).addClass("active")
  $("#prodImgZOOM").addClass("active")
})
$("#prodImgZOOMBack").click(function(){
   $("#prodImgZOOM").removeClass("active")
   $("#prodImgZOOMBig").removeClass("active")
})
$(function() {
$( "#prodImgZOOMInnerChange" ).draggable({containment: '#prodImgZOOMInner'});
});


  //------------彈出視窗 ----------------

  $(".product_heartgroup").click(function(){
    $(".heart_window").addClass("active");
  });

  $(".product_shopcarBtn").click(function(){
    $(".shopcar_window").addClass("active");
  });
  $(".shop_carGroup").click(function(){
    $(".shopcar_window").addClass("active");
  });
  $(".shopcar_heart_black").click(function(){
    $(this).removeClass("active");
  });


 //------------購物數量 ----------------

  $(function() {
    // This button will increment the value
    $('.qtyplus').click(function(e) {
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($('input[name=' + fieldName + ']').val());
      // If is not undefined
      if (!isNaN(currentVal)) {
        // Increment
        $('input[name=' + fieldName + ']').val(currentVal + 1);
      } else {
        // Otherwise put a 0 there
        $('input[name=' + fieldName + ']').val(0);
      }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($('input[name=' + fieldName + ']').val());
      // If it isn't undefined or its greater than 0
      if (!isNaN(currentVal) && currentVal > 0) {
        // Decrement one
        $('input[name=' + fieldName + ']').val(currentVal - 1);
      } else {
        // Otherwise put a 0 there
        $('input[name=' + fieldName + ']').val(0);
      }
    });
  });
// --------購物車/追蹤 變色---------- //

$(".product_heartgroup"). hover(function(){
  $("#follow_black").toggleClass("product_icon_none");
  $("#follow_yellow").toggleClass("product_icon_none");
}); 


$(".product_gplusGroup"). hover(function(){
  $(this).find(".li_yellow").toggleClass("product_icon_none");
  $(this).find(".li_lightYellow").toggleClass("product_icon_none");
}); 


$(".product_twitterGroup"). hover(function(){
  $(this).find(".li_yellow").toggleClass("product_icon_none");
  $(this).find(".li_lightYellow").toggleClass("product_icon_none");
}); 

$(".product_facebookGroup"). hover(function(){
  $(this).find(".li_yellow").toggleClass("product_icon_none");
  $(this).find(".li_lightYellow").toggleClass("product_icon_none");
}); 

$(".product_igGroup"). hover(function(){
  $(this).find(".li_yellow").toggleClass("product_icon_none");
  $(this).find(".li_lightYellow").toggleClass("product_icon_none");
}); 

$(".product_plurkGroup"). hover(function(){
  $(this).find(".li_yellow").toggleClass("product_icon_none");
  $(this).find(".li_lightYellow").toggleClass("product_icon_none");
}); 





// ----------------slider---------------------//
var sliderIndex=0;
var sliderMove=0;
var sliderwidth=370;
var sliderCount=$(".product_sliderBox_pic li").length;
console .log("照片數量 "+sliderCount);
$(".product_sliderBox_pic").css("width",sliderwidth*sliderCount)


$(".page_one li").eq(0).css("background","#9CA4A7")
$(".page_one li").hover(function(){
sliderIndex= $(this).index() 
goSlide_one()
})
function goSlide_one(){
sliderMove=0-370*sliderIndex;
$(".product_sliderBox_pic").css("left",sliderMove)
$(".page_one li").eq(sliderIndex).css("background","#9CA4A7")
.siblings().css("background","transparent") 
} 


$(".page_two li").eq(0).css("background","#9CA4A7")
$(".page_two li").hover(function(){
sliderIndex= $(this).index() 
goSlide_two()
})
function goSlide_two(){
sliderMove=0-740*sliderIndex;
$(".product_sliderBox_pic").css("left",sliderMove)
$(".page_two li").eq(sliderIndex).css("background","#9CA4A7")
.siblings().css("background","transparent") 
}



$(".page_four li").eq(0).css("background","#9CA4A7")
$(".page_four li").hover(function(){
sliderIndex= $(this).index() 
goSlide()
})
function goSlide(){
console .log(sliderIndex)
sliderMove=0-370*sliderIndex;
$(".product_sliderBox_pic").css("left",sliderMove)
$(".page_four li").eq(sliderIndex).css("background","#9CA4A7")
.siblings().css("background","transparent") 
}


// ----------------slider---------------------//

//------------視差滾動 ----------------

$(window).scroll(function(){
  let scrollTop = $(this).scrollTop();
  console.log(scrollTop)
  let ProductDownGroupOffset =$(".product_introduce").offset().top;

  if(scrollTop>ProductDownGroupOffset-700){
      $(".product_introduce").addClass("active")
    }
  let productsliderBoxOffset =$(".product_downGroup_slider").offset().top;
    if(scrollTop>productsliderBoxOffset-850){
      $(".product_downGroup_slider").addClass("active")
    }
  // let ShopCardOffset =$(".shop_card").offset().top;
  // if(scrollTop>ShopCardOffset-450){
  //   $(".shop_card").addClass("active")
   
  // }

})