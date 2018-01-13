/*
通过格式化字符串来创建视图，避免通过创建节点来大量开销内存
*/
var A=A || {};
A.root=document.getElementById('container');
A.strategy={
    listPart:function (data) {
        var s=document.createElement("div"),
            ul='',
            ldata=data.data.li,
            tpl=[
                '<h2>{#h2#}</h2>',
                '<p>{#p#}</p>',
                '<ul>{#ul#}</ul>'
            ].join(''),
            litpl=[
                '<li>',
                '<strong>{#strong#}</strong>',
                '<span>{#span#}</span>',
                '</li>'
            ].join('');
        data.id && (s.id=data.id);
        /*遍历数据列表*/
        for(var i=0,len=ldata.length;i<len;i++){
            if(ldata[i].em && ldata[i].span){
                ul+=formateString(litpl,ldata[i]);
            }
        }
        data.data.ul=ul;
        s.innerHTML=formateString(tpl,data.data);
        A.root.appendChild(s);
    },
    codePart(){},
    onlyTitle(){},
    guide(){}
}
A.init=function (data) {
    this.strategy[data.type](data)
}
/*将字符串转化成html标签的函数*/
function formateString(str,data) {
    str.replace(/\{#(w+)#\}/ig,function (match,key) {
        return typeof data[key]==='undefined'?'':data[key];
    })
}
