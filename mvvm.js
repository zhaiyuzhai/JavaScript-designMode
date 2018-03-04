var vm=function (  ) {
	var methods={
		progressbar:function ( dom,data ) {
			var process=document.createElement('div');
			var param=data.data;
			process.style.width=(param.position || 100)+'%';
			dom.className=className+"ul-processbar";
			dom.appendChild(process);
		},
		slider:function (  ) {
		
		}
	}
}