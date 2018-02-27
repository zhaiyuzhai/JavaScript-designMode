var F=F || {};
F.define=function ( str, fn ) {
	var parts=str.split('.'),
		old=parent=this,
		i=len=0;
	if(parts[0]==="F"){
		parts=parts.slice(1);
	}
	if(parts[0]==="define" || parts[0]==="module"){
		return;
	}
	for(len=parts.length;i<len;i++){
		if(typeof parent[parts[i]]==="undefined"){
			parent[parts[i]]={}
		}
		old=parent;
		parent=parent[parts[i]];
	}
	if(fn){
		old[parts[--i]]=fn();
	}
	return this;
}
/*F里面的函数是高阶函数，所以需要被执行*/
F.define('String',function (  ) {
	return {
		trim:function (  ) {
			return str.replace(/^\s+|\s+$/g,'');
		}
	}
});
/*
调用模块的方法*/
F.module=function (  ) {
	var args=[].slice.call(arguments),
		fn=args.pop(),
		parts=args[0] && args[0] instanceof Array ? args[0] : args,
		modules=[],
		modIDs='',
		i=0,
		ilen=parts.length,
		parent,j,jlen;
	while(i<ilen){
		if(typeof parts[i]==='string'){
			parent=this;
			modIDs=parts[i].replace(/^F./,'').split('.');
			for(j=0,jlen=modIDs.length;j<jlen;j++){
				parent=parent[modIDs[j]] || false;
			}
			modules.push(parent);
		}else{
			modules.push(parts[i])
		}
		i++;
	}
	fn.apply(null,modules);
};
F.module('dom','string',function ( dom, string ) {
	
})