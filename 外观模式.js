/*
通过提供统一的接口，封装复杂的底层*/
function addEvent(dom,type,fn) {
    if(dom.addEventListener){
        dom.addEventListener(type,fn)
    }else if(dom.attachEvent){
        dom.attachEvent(type,fn)
    }else{
        dom["on"+type]=fn
    }
}
