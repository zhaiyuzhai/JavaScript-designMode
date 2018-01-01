/*
委托模式其实就是关于DOM的冒泡的应用*/
var g=function (id) {
    return document.getElementById(id);
}
g("container").onclick=function (e) {
    var target=e.target || e.srcElement;
    if(target.id=="btn"){
        g('container').innerHeight="demo"
    }
}