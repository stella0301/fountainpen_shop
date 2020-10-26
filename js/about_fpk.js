$(window).scroll(function(){
    let scrollTop = $(this).scrollTop();
    console.log(scrollTop)
    let AboutFpkContentOffset =$(".about_fpk_content").offset().top;
    let AboutFpkColumnCenterOffset =$(".about_fpk_column_center").offset().top;
    if(scrollTop>AboutFpkContentOffset-550){
       $(".about_fpk_text1").addClass("active")
       $(".about_fpk_content_pic1").addClass("active")
    }
    if(scrollTop>AboutFpkContentOffset-200){
        $(".about_fpk_column_center").addClass("active")
        $(".about_fpk_column_center_title").addClass("active")
        $(".about_fpk_column_center_text p").addClass("active")
    }
    if(scrollTop>AboutFpkContentOffset+250){
        $(".about_fpk_text2").addClass("active")
       $(".about_fpk_content_pic2").addClass("active")
       var aboutFpkColumn = document.getElementById("about_fpk_column");
       var aboutFpkColumnafterStyle = window.getComputedStyle(aboutFpkColumn, "::after");
       var aboutFpkColumnbeforeStyle = window.getComputedStyle(aboutFpkColumn, "::before");
       (aboutFpkColumnafterStyle).addClass("active");
       (aboutFpkColumnbeforeStyle).addClass("active");
    }
    if(scrollTop>AboutFpkContentOffset+200){
        $(".about_fpk_text3").addClass("active")
       $(".about_fpk_content_pic3").addClass("active")
    }
})