// instanceof 左边对象的__proto__的指向是否等于右边的prototype属性
 function myinstanceof(left ,right){
     let  prototype = right.prototype;
     let    props = left.__proto__ ;
     while(true){
         if(props === prototype){
             return true;
         }
         if(props === null){
             return false;
         }
        props = props.__proto__; 
     }
 }

 var a = [];
 console.log(myinstanceof(a,Array))