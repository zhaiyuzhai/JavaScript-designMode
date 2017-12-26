/*
桥接模式的用法
例如：将元素的时间和逻辑代码相解耦
*/
var span=document.getElementsByTagName("span");
span[0].onclick=function (  ) {
	this.style.color="";
	this.backgroundColor="";
};
span[1].onclick=function (  ) {
	this.style.color=""
	this.backgroundColor="";
}

/*将公共的代码提取出来，实现桥接模式*/
function bridge ( dom ,color, bgcol ) {
	dom.style.color=color;
	dom.style.backgroundColor=bgcol;
}

