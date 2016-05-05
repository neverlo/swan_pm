$(function(){
    $("#pm-nav li a").click(function(){//作用域this,表示当前点击的对象
        //attr获取this(a)的属性comp的值
        var compEle = $(this).attr("comp"); //jquery先获取某个html对象，然后再做某个事情
        var htmlPath = compEle + ".html";
        var title = $(this).find("span").html();
        if(typeof(compEle)=="undefined" || compEle==""){
            if(title=="项目资料"){//展开菜单
                $("#dblist").hide();
                if($("#projectlist").is(":hidden")){
                    $("#projectlist").show();
                }else{
                    $("#projectlist").hide();
                }
            }else if(title=="数据&amp;数据库"){
                $("#projectlist").hide();
                if($("#dblist").is(":hidden")){
                    $("#dblist").show();
                }else{
                    $("#dblist").hide();
                }
            }
            return;
        }else if(compEle=="log" || compEle=="introduce"){
            $("#dblist").hide();
            $("#projectlist").hide();
        }
        $("#childTitle").html(title);
        var pageh = $(this).attr("pageh");
        $("#swan").css({"height":pageh});
        $("#swan").attr({"src":htmlPath});
    });
});

//显示个人资料页面
function showProfile(){
    $("#dblist").hide();
    $("#projectlist").hide();
    $("#user").hide();
    $("#childTitle").html("个人资料");;
    $("#swan").css({"height":"651px"});
    $("#swan").attr("src","profile.html");
}

//显示系统消息
function showMsg(){
    if($("#msg").is(":hidden")){
        $("#msg").show();
    }else{
        $("#msg").hide();
    }
}

//显示个人操作面板
function showUser(){
    if($("#user").is(":hidden")){
        $("#user").show();
    }else{
        $("#user").hide();
    }
}