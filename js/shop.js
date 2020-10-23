//------------篩選清單 ----------------
$(".shop_panel-title").click(function(){
    $(this).find(".shop_icon_down_b").toggleClass('shop_filter_rotate');
    $(this).find(".shop_icon_down_y").toggleClass('shop_filter_rotate');
  });
  $(".shop_panel-title_s").click(function(){
    $(this).find(".shop_icon_down_b").toggleClass('shop_filter_rotate');
    $(this).find(".shop_icon_down_y").toggleClass('shop_filter_rotate');
  });
  $("#shop_filter_open").click(function(){
    $(".shop_filter_menu_body").addClass('active');
    $(".shop_filter_black").addClass('active');
  });
  $("#shop_filter_close").click(function(){
    $(".shop_filter_menu_body").removeClass('active');
    $(".shop_filter_black").removeClass('active');
  });

  //------------彈出視窗 ----------------

  $(".shop_heartGroup").click(function(){
    $(".heart_window").addClass("active");
    
  });

  // $(".icon_heart_b").click(function(){
  //   $(".heart_window").addClass("active"); 
  // });
  $(".shopcar_botton").click(function(){
    $(".shopcar_window").addClass("active");
  });
  $(".shop_carGroup").click(function(){
    $(".shopcar_window").addClass("active");
  });
  $(".shopcar_heart_black").click(function(){
    $(this).removeClass("active");
    
  });
  // $(".shop_panel-title").hover(function(){
  //   $(this).find(".shop_icon_down:path").css('fill',"#B8926B");
  // });
// --------購物車/追蹤 變色---------- //
// $(".list_heart_b").click(function(){
//   $(this).find("path").css({ fill:"#B8926B"});

// });


// $(".heart_span_b"). hover(function(){
//   $(this).toggleClass("shop_icon_none");
//   $(this).siblings(".heart_span_y").toggleClass("shop_icon_none");
// }); 
// $(".shopcar_span_b"). hover(function(){
//   $(this).toggleClass("shop_icon_none");
//   $(this).siblings(".shopcar_span_y").toggleClass("shop_icon_none");
// }); 

$(".shop_heartGroup"). hover(function(){
  $(this).find(".heart_span_b").toggleClass("shop_icon_none");
  $(this).find(".heart_span_y").toggleClass("shop_icon_none");
}); 
$(".shop_carGroup"). hover(function(){
  $(this).find(".shopcar_span_b").toggleClass("shop_icon_none");
  $(this).find(".shopcar_span_y").toggleClass("shop_icon_none");
}); 




// --------上下箭頭 變色---------- //
$(".shop_panel-title").hover(function(){
  $(this).find(".shop_icon_down_b").toggleClass("shop_icon_none");
  $(this).find(".shop_icon_down_y").toggleClass("shop_icon_none");
});  
// --------svg變色---------- //
  jQuery('img.svg').each(function(){   
  var $img = jQuery(this);   
  var imgID = $img.attr('id');   
  var imgClass = $img.attr('class');   
  var imgURL = $img.attr('src');   

  jQuery.get(imgURL, function(data) {   
      // Get the SVG tag, ignore the rest   
      var $svg = jQuery(data).find('svg');   

      // Add replaced image's ID to the new SVG   
      if(typeof imgID !== 'undefined') {   
          $svg = $svg.attr('id', imgID);   
      }   
      // Add replaced image's classes to the new SVG   
      if(typeof imgClass !== 'undefined') {   
          $svg = $svg.attr('class', imgClass+' replaced-svg');   
      }   

      // Remove any invalid XML tags as per http://validator.w3.org   
      $svg = $svg.removeAttr('xmlns:a');   

      // Check if the viewport is set, if the viewport is not set the SVG wont't scale.   
      if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {   
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))   
      }   
      // Replace image with new SVG   
      $img.replaceWith($svg);   
  }, 'xml');   
});  


//------------價格拉霸 ----------------
  $('.slider-input').jRange({
    from: 50,
    to: 20000,
    step: 50,
    scale: [50,20000],
    format: '$NT.'+'%s',
    width: 270,
    showLabels: true,
    isRange : true
});

 //------------視差滾動 ----------------

 $(window).scroll(function(){
  let scrollTop = $(this).scrollTop();
  console.log(scrollTop)
  let ShopMainContentOffset =$(".shop_main_content").offset().top;

  if(scrollTop>ShopMainContentOffset-500){
      $(".shop_card").addClass("active")
     
    }
  // let ShopCardOffset =$(".shop_card").offset().top;
  // if(scrollTop>ShopCardOffset-450){
  //   $(".shop_card").addClass("active")
   
  // }

})