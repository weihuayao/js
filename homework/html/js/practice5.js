/*
 * 实现事件兼容的方法
 */
var EventUtil = {
    addHandler: function(element, type, handler){
        // 待补充的代码
        if(element.addEventListener){
            element.addEventListener(type,handler,false)
        }else if(element.attachEvent){
             element.attachEvent('on'+type,handler);
        }else{
            element['on'+type]=handler;
        }
    },
    removeHandler: function(element, type, handler){
        // 待补充的代码

    if(element.removeEventListener){
        element.removeEventListener(type,handler,false);
      }else if(element.detachEvent){
        element.detachEvent('on'+type,handler);
      }else{
        element['on'+type]=null;
    }
    },
    getEvent: function(event){
        // 待补充的代码
        return event?event:window.event;
    },
    getTarget: function(event){
        // 待补充的代码   
        return event.type;
    },
    preventDefault: function(event){//阻止事件冒泡
        // 待补充的代码
        if(event.stopPropagation){
            event.stopPropagation();
        }else{
            event.cancelBubble=true;
        }
      
    },
    stopPropagation: function(event){//阻止时间默认醒我
        // 待补充的代码
    if(event.preventDefault){
        event.preventDefault();
    }else{
        event.returnValue=false;
    }
  
    }
};
