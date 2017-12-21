var observe=(function () {
    var _msg={}
    return {
        regist(type,fn) {
            if(!_msg.hasOwnProperty(type)){
                _msg[type]=[fn]
            }else{
                _msg[type].push(fn
                )
            }
        },
        fire(type,args){
            if(!_msg[type]){
                return
            }else{
                var events={
                    type,
                    args:args||{}
                }
                for(var i=0,len=_msg[type].length;i<len;i++){
                    _msg[type][i].call(this,events )
                }
            }
        },
        delete(){

        }
    }
})