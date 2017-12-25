/*装饰着模式可以将原先的事件保存，进而扩展已有的功能
1.假如一个输入框在不知道是否绑定了单击事件的时候采用装饰着模式*/
var decorater=function (input,fn) {
    var input=document.getElementById("input");
    if(typeof input.onclick==="function"){
        var old=input.onclick;
        input.onclick=function () {
            old();
            fn();
        }
    }else{
        input.onclick=fn;
    }
}