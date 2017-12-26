var visitor=(function (  ) {
	return {
		splice(){
			var args=Array.prototype.splice.call(arguments,1);
			return Array.prototype.splice.apply(arguments[0],args);
		},
		push(){
			// arguments[0]是此次push的对象
			var len=arguments[0].length||0;//储存原先的对象的长度，如果没有的话那么就设置为0；
			var args=Array.prototype.splice.call(arguments,1);
			arguments[0].length=len+arguments.length-1;
			return Array.prototype.push.apply(arguments[0],args);
			
		}
	}
})();
var obj={};
visitor.push(obj,1,2,3)
console.log(obj);

var check=function ( obj ) {
	return Object.prototype.toString.call(arguments[0]).slice(8,-1)
};
var arr=[];
console.log(check(arr))