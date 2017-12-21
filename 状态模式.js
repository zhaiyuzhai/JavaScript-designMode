var State=function () {
    var states={
        state3:function () {
            console.log(3)
        },
        state2:function () {
            console.log(2)
        },
        state1:function () {
            console.log(1)
        }
    }
    function show(result) {
        states["state"+result]&&states["state"+result]();
    }
    return {
        show:show
    }
}();
State.show(2)
