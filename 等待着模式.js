var waiter=function (  ) {
	var dfd=[],
		doneArr=[],
		failArr=[],
		slice=Array.prototype.slice,
		that=this;
	var promise=function (  ) {
		this.resloved=false;
		this.rejected=false;
	}
	promise.prototype={
		resolve:function (  ) {
			this.resloved=true;
			if(!dfd.length)
				return;
			for(var i=dfd.length-1;i>=0;i--){
				if(dfd[i] && !dfd[i].resloved || dfd[i].rejected){
					return;
				}
				dfd.splice(i,1);
			}
			_exec(doneArr)
		},
		reject(){
			this.rejected=true;
			if(!dfd.length)
				return;
			dfd.splice(0);
			_exec(failArr);
		}
	}
	that.Deferred=function (  ) {
		return new promise();
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
	that.when=function (  ) {
		/*当调用when的函数的时候我们才开始将等待的对象压入dfd的数组里面*/
		dfd=slice.call(arguments);
		var i=dfd.length;
		for(--i;i>=0;i--){
			if(!dfd[i] || dfd[i].resloved || dfd[i].rejected || !dfd[i] instanceof Promise){
				dfd.splice(i,1);
			}
		}
		return that;
	}
	that.done=function (  ) {
		doneArr.concat(slice.call(arguments));
		return that;
	}
	that.fail=function (  ) {
		failArr.concat(slice.call(arguments));
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
		dtd.resolve()
	},1500)
	return dtd;
}()

waiter.when(first,second).done(function (  ) {
	console.log("success");
})