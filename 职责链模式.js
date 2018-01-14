/*
职责链模式其实就是解决了请求的发送者和接受者之间的耦合*/
/*
1.请求的发送*/
var sendData=function (data,dealType,dom) {
    var xhr=new XMLHttpRequest(),
        url="getData.php?mod=userInfo";
    xhr.onstatechange(function (status) {
        if(status==200){
            dealData(xhr.responseText,dealType,dom)
        }
    })
    /*拼接请求的字符串*/
    for(var i in data){
        url+='&'+i+'='+data[i];
    }
    xhr.open('get',url,data);
    xhr.send(null);
}

/*处理数据*/
var dealData=function (data,dealType,dom) {
    var dataType=Object.prototype.toString.call(data);
    switch(dealType){
        case 'sug':
            if(dataType=='[object Array]'){
                return createSug(data,dom);
            }
            if(dataType=='[object Object]'){

            }
    }
}

/*
创建模块*/
function createSug(data,dom) {
    var i=0,
        len=data.length,
        html='';
    for(;i<len;i++){
        /**/拼接模板
    }
    /*添加html的模板到node节点里面*/
}