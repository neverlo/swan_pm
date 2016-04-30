$(function(){
    var iframHtml = $('<iframe style="border:0px;frameborder:0px;width:100%;height:651px;scrolling=no" src="profile.html"></iframe>');
    $('#pm-nav li a').click(function(){
        var compEle = $(this).attr('comp');
        var middelComp = "";
        switch (compEle){
            case 'dbComp'://数据库SQL脚本组件
                middelComp = dbComp.init();
                break;
            case 'projectIntrComp':
                $(iframHtml).css({'height':'651px'});
                $(iframHtml).attr('src','introduce.html');
                middelComp = iframHtml;
                break;
            case 'logComp':
                $(iframHtml).css({'height':'1160px'});
                $(iframHtml).attr('src','log.html');
                middelComp = iframHtml;
                break;
            case 'dbDetailComp':
                 $(iframHtml).css({'height':'800px'});
                $(iframHtml).attr('src','db.html');
                middelComp = iframHtml;
                break;
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