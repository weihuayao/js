var button = function(buttonid){
    this.control = null;   //属性： 按钮对象的 自己
    this.id = null;          //按钮对象的 id
    this.value = null;    //按钮对象显示的值
    this.click = null;    // 点击事件

    // 初始化
    this.init = function(){
        this.id = buttonid; //页面传过来的id
        this.control = $("#" + buttonid) //通过id 绑定事件
        //这个是要插入 的 html文件
        var buttom_html = '<div href="#"  id="button_'+this.id+'"  class="button" > '
        + this.value + '</div>'; 
        this.control.after(buttom_html);    
        $("#button_"+this.id).unbind("click").bind("click",this.click); //添加绑定事件
        this.control.hide();  //隐藏 当前控件
    }
};
var button2 = function(buttonid){
    this.control = null;   //属性： 按钮对象的 自己
    this.id = null;          //按钮对象的 id
    this.value = null;    //按钮对象显示的值
    this.click = null;    // 点击事件

    // 初始化
    this.init = function(){
        this.id = buttonid; //页面传过来的id
        this.control = $("#" + buttonid) //通过id 绑定事件
        //这个是要插入 的 html文件
        var buttom_html = '<div href="#"  id="button_'+this.id+'"  class="button2" > '
        + this.value + '</div>'; 
        this.control.after(buttom_html);    
        $("#button_"+this.id).unbind("click").bind("click",this.click); //添加绑定事件
        this.control.hide();  //隐藏 当前控件
    }
};

