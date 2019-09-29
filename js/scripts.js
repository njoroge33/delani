$(document).ready(function () {
    $("#img1").click(function(){
        $("#dev").toggle();
    });

    $("#img2").click(function(){
        $("#pro").toggle();
    });

    $("#img3").click(function(){
        $("#des").toggle();
    });

    $(".img_wrap").hover(function () {
        $(this).find("div").toggleClass("img_description_show");
      });
});