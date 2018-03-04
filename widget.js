/*
借用同步模块*/
F.module('lib/template',function (  ) {
	var _TplEngine=function (str,data  ) {
		if(data instanceof Array){
			var html='',
				i=0,
				len=data.length;
			for(;i<len;i++){
				html+=_getTpl(str)(data[i])
			}
			return html;
		}else{
			return _getTpl(str)(data)
		}
	},
		_getTpl=function (  ) {
			var ele=document.getElementById(str)
			if(ele){
				var html=/^(textarea|input)$/i.test(ele.nodeName)?ele.value:ele.innerHTML;
				return _compileTpl(html)
			}else{
				return _compileTpl(str);
			}
		},
		_dealTpl=function (  ) {
		
		},
		_compileTpl=function (  ) {
		
		};
	return _TplEngine;
	
})