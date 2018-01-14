/*参与者的模式：
1.想要给点击事件传递参数
function addArgs(dom,args) {
    dom.addEventListener("click",function () {
        fn.call(this,args)
    })
};
可是同时带来一个问题就是无法再删除绑定的函数了
dom.removeEventListener("click",listener );此时需要有一个函数的名称，而明显的上面的方式采用了匿名函数的写法；
所以可以采用参与者模式*/
/*

只能绑定，无法传参
function bind(fn,cont) {
    return function () {
        return fn.apply(cont,arguments);//提供返回值
    }
}
其实原生的就可以使用：
var bindFn=demoFn.bind(obj);*/

/*运用函数的柯里化*/

function bind(fn,cont) {
    var slice=[].slice,
    args=slice.call(arguments,2);
    return function () {
        var addArgs=slice.call(arguments),
        allArgs=args.concat(addArgs);
        return fn.apply(cont,allArgs);
    }
}
