$(function(){
    $("#pm-nav li a").click(function(){//作用域this,表示当前点击的对象
        //attr获取this(a)的属性comp的值
        var compEle = $(this).attr("comp"); //jquery先获取某个html对象，然后再做某个事情
        if(typeof(compEle)=="undefined" || compEle==""){
            return;
        }
        var htmlPath = compEle + ".html";
        var title = $(this).find("span").html();
        $("#childTitle").html(title);
        var pageh = $(this).attr("pageh");
        $("#swan").css({"height":pageh});
        $("#swan").attr({"src":htmlPath});
    });
});

//显示个人资料页面
function showProfile(){
    $("#childTitle").html("个人资料");;
    $("#swan").css({"height":"651px"});
    $("#swan").attr("src","profile.html");
}