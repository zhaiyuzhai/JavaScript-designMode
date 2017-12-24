/*
创建一个弹出框的基础类*/
var alert=function (data) {
    if(!data){
        return;
    }
    /*创建内容
    创建面板
    创建子组件
    创建确定按钮
    创建取消按钮
    */
    this.content=data.content;
    this.panel=document.createElement("div");
    this.contentNode=document.createElement("p");
    this.confirmBtn=document.createElement("span");
    this.cancelBtn=document.createElement("span");
    this.panel.className="alert";
    this.cancelBtn.className="canael-btn";
    this.confirmBtn.className="confirm-btn";
    this.confirmBtn=data.confirm || "确认";
    this.contentNode.innerHTML=this.content;
    this.success=data.seccess || function () {

    };
    this.fail=data.fail || function () {

    }
}
alert.prototype={
    init () {
        this.panel.appendChild(this.cancelBtn);
        this.panel.appendChild(this.confirmBtn);
        this.panel.appendChild(this.contentNode);
        document.body.appendChild(this.panel);
        this.bindEvent();
        this.show();
    },
    bindEvent(){
      var me=this;
      this.cancelBtn.onclick=function () {
          me.fail();
          me.hide();
      };
      this.confirmBtn.onclick=function () {
          me.success();
          me.hide();
      }
    },
    hide(){
        this.panel.style.display="none";
    },
    show(){
        this.panel.style.display="block";
    }
}

/*创建一些子类，比如右侧弹出框*/
var rightAlert=function (data) {
    alert.call(this,data);
    this.confirmBtn.classList.add("right");
    /*...以及一些其他的你想要的功能*/
}
rightAlert.prototype=alert.prototype;

/*创建子类，比如标题弹出框之类的东西
但是注意，此类的弹出框需要一些额外的内容的增加*/
var titleAlert=function (data) {
    alert.call(this,data);
    this.title=this.title;
    this.titleNode=document.createElement("h2");
    this.titleNode.innerHTML=this.title;
}
titleAlert.prototype=new alert();
/*titleAlert.prototype.init=function () {
  错误的写法，此写法对alert的init的写法进行了重写
}*/
titleAlert.prototype.init=function () {
    this.panel.insertBefore(this.titleNode,this.panel.firstChild);
    alert.prototype.init.call(this);
}
