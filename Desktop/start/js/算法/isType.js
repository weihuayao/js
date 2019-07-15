// Object.prototype.toString.call  call可以根据类型返回一个[object  xxx] 字符串 
var  isType=Object.prototype.toString
 
var  utility={
 
    isObj:function(o){
        if (isType.call(o)==="[object Object]")
        return true;
        else 
        return false
    },
 
     isArray:function(o){
        if(isType.call(o)==="[object Array]")
        return true;
        else 
        return false
     },
 
     isNULL:function(o){
        if (isType.call(o)==="[object Null]")
        {return true;}
        else 
        return false
 
    },
    isNumber:function(o){
        if (isType.call(o)==="[object Number]")
        {return true;}
        else 
        return false
    },
    isFunction:function(o){
        if (isType.call(o)==="[object Function]")
        {return true;}
        else 
        return false
    }
    ,
    isUndefine:function(o){
        if (isType.call(o)==="[object Undefine]")
        {return true;}
        else 
        return false
    },
    isString:function(o){
        if (isType.call(o)==="[object String]")
        {return true;}
        else 
        return false
    },
    isBoolen:function(o){
        if (isType.call(o)==="[object Boolen]")
        {return true;}
        else 
        return false
    },
    isSymbol:function(o){
        if (isType.call(o)==="[object Symbol]")
        {return true;}
        else 
        return false
    },
}
