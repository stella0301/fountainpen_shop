$(".nav_menu").click(function(){
$(".nav_menu_content").toggleClass("active")
$(".nav_side").toggleClass("active")
$(".nav_menu_text li a").toggleClass("active")
$(".nav_account_inside_box").removeClass("active")
//    $(".nav_account .nav_triangle2").removeClass("active")
//    $(".nav_account_inside_box ul li a").removeClass("active")
//    $(".nav_triangle") .removeClass("active")
   $(".nav_search_inside_box") .removeClass("active")
   $(".nav_triangle_position") .removeClass("active")
   $(".nav_triangle_position2") .removeClass("active")
//    $(".nav_search_inside_box form input") .removeClass("active")
})
$(".nav_off").click(function(){
    $(".nav_menu_content").toggleClass("active")
    $(".nav_side").toggleClass("active")
    $(".nav_menu_text li a").toggleClass("active")
})
$(".nav_side_icon").click(function(){
   $(".nav_triangle_position") .toggleClass("active")
   $(".nav_search_inside_box") .toggleClass("active")
//    $(".nav_triangle") .toggleClass("active")
//    $(".nav_search_inside_box form input") .toggleClass("active")
   $(".nav_account_inside_box").removeClass("active")
   $(".nav_triangle_position2") .removeClass("active")
//    $(".nav_account .nav_triangle2").removeClass("active")
//    $(".nav_account_inside_box ul li a").removeClass("active")
})
$(".nav_search_icon").click(function(){
    $(".nav_triangle_position2") .toggleClass("active")
    $(".nav_account_inside_box").toggleClass("active")
    // $(".nav_account .nav_triangle2").toggleClass("active")
    // $(".nav_account_inside_box ul li a").toggleClass("active")
    // $(".nav_triangle") .removeClass("active")
   $(".nav_search_inside_box") .removeClass("active")
   $(".nav_triangle_position") .removeClass("active")
//    $(".nav_search_inside_box form input") .removeClass("active")
})


