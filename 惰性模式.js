/*
例如一个函数里面有多个分支的判断，
用来解决函数执行的时候代码的重复判断
例如前面写的添加事件的外观模式*/

/*第一种方案，加载的时候损失性能*/
A.on=function (dom,type,fn) {
    if(document.addEventListener){
        return function (dom,type,on) {
        }
    }else if(document.attachEvent){

    }else{

    }
}()

/*第二种方案,第一次运行时产生性能的消耗*/
A.on=function (dom,type,on) {
    if(document.addEventListener){
        A.on=function (dom,type,on) {
        ...
        }
    }else if(document.attachEvent){

    }else{

    }
    A.on(dom.type,on)
}

/*
此方法尤其用在创建XHR的对象上面*/
function createXHR() {
    if(typeof XMLHttpRequest !='undefined'){
        return new XMLHttpRequest();
    }else if(typeof ActiveXObject !='undefined'){
        return new XMLHttpRequest();
    }else{

    }
}
