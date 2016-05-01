$(function(){
    $('#pm-nav li a').click(function(){//作用域this,表示当前点击的对象
        //attr获取this(a)的属性comp的值
        var compEle = $(this).attr('comp'); //jquery先获取某个html对象，然后再做某个事情
        var middelComp = "";
        if(compEle=='dbComp'){
            middelComp = dbComp.init();
        }else if(compEle=='projectIntrComp'){
            $('#iframe').css({'height':'651px'});
            $('#iframe').attr('src','introduce.html');//把src的值设置成introduce.html
        }else if(compEle=='logComp'){
            $('#iframe').css({'height':'1160px'});
            $('#iframe').attr('src','log.html');
        }else if(compEle=='dbDetailComp'){
            $('#iframe').css({'height':'800px'});
            $('#iframe').attr('src','db.html');
        }else if(compEle=='projectDocumentComp'){
            $('#iframe').css({'height':'800px'});
            $('#iframe').attr('src','item.html');
        }else if(compEle=='needDocumentComp'){
            $('#iframe').css({'height':'900px'});
            $('#iframe').attr('src','need.html');
        }
        if(middelComp==''){
            return;
        }
        changeTitle(compEle);
        $('#middle-content').html(middelComp);
    });
});

function changeTitle(type){
    var title = {
        'projectIntrComp':'项目介绍',
        'dbComp':'数据库管理',
        'dbDetailComp':'数据表详情',
        'needDocumentComp':'需求文档',
        'designDocumentComp':'设计文档',
        'develorDocumentComp':'开发文档',
        'projectDocumentComp':'项目约束',
        'testDocumentComp':'测试文档',
        'logComp':'项目日常日志',
        'profile':'个人资料'
    };
    var childTitle = title[type];;
    $('#childTitle').html(childTitle);
}

//个人资料
function showProfile(){
    changeTitle('profile');
    var middelComp = $('<iframe style="border:0px;frameborder:0px;width:100%;height:651px;scrolling=no" src="profile.html"></iframe>');
    $('#middle-content').html(middelComp);
}