var waiter=function (  ) {
    /*创建等待者的存储数组*/
	var dfd=[],
        /*执行成功后的函数数组*/
		doneArr=[],
        /*失败的回调方法*/
		failArr=[],
		slice=Array.prototype.slice,
		that=this;
	var promises=function (  ) {
		this.resloved=false;
		this.rejected=false;
	}
	promises.prototype={
		resolve:function (  ) {

			this.resloved=true;
            console.log(this)
			if(!dfd.length)
				return;
            /*尤其注意是从最后一个开始遍历的*/
			for(var i=dfd.length-1;i>=0;i--){
			  /*  如果没有解决或者失败了的话就删除此事件*/
			    console.log(dfd[i]);
			    console.log(dfd[i] && !dfd[i].resloved || dfd[i].rejected)
				if(dfd[i] && !dfd[i].resloved || dfd[i].rejected){
					return;
				}
				dfd.splice(i,1);
			}
			console.log(doneArr)
            /*当所有的等待者都触发reslove的话才执行doneArr*/
			_exec(doneArr)
		},
		reject(){
			this.rejected=true;
			/*首先判断长度*/
			if(!dfd.length)
				return;
			/*一旦失败，将所有代办事宜全部删除*/
			dfd.splice(0);
			_exec(failArr);
		}
	}
	that.Deferred=function (  ) {
		return new promises();
	}
	function _exec ( arr ) {
		var i=0,
			len=arr.length;
		for(;i<len;i++){
			try{
				arr[i] && arr[i]();
			}catch(e){
			
			}
		}
	}
	/*when函数负责将等待者的对象加入到dfd中去*/
	that.when=function (  ) {
		/*当调用when的函数的时候我们才开始将等待的对象压入dfd的数组里面*/
		dfd=slice.call(arguments);
		var i=dfd.length;
		/*对dfd加入的对象进行筛选*/
		for(--i;i>=0;i--){
		    /*如果不存在监控对象，或者监控对象已经解决或者不是监控对象的话那么就删除了*/
			if(!dfd[i] || dfd[i].resloved || dfd[i].rejected || !dfd[i] instanceof Promise){
				dfd.splice(i,1);
			}
		}
		return that;
	}
	that.done=function (  ) {
	    /*将成功后要执行的函数加入到数组里面去*/
		doneArr=doneArr.concat(slice.call(arguments));
		return that;
	}
	that.fail=function (  ) {
		failArr=failArr.concat(slice.call(arguments));
		return that;
	}
}


var waiter=new waiter();
/*first为整个deferred的对象*/
var first=function (  ) {
	var dtd=waiter.Deferred();
	setTimeout(function (  ) {
		console.log("first");
		dtd.resolve()
	},500)
	return dtd;
}()

/*first为整个deferred的对象*/
var second=function (  ) {
	var dtd=waiter.Deferred();
	setTimeout(function (  ) {
		console.log("second");
		dtd.reject()
	},1500)
	return dtd;
}()

waiter.when(first,second).done(function (  ) {
	console.log("success");
}).fail(function () {
    console.log("err")
})