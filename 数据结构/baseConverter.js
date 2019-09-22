function stack(){  // 栈的基本数据结构
    var item = [];
    // push();
    // pop();
    // isEmpty();
    // peek();
    // clear();
    // size();
    // print();
    this.push = function(elemet){
        return item.push(elemet);
    }
    
    this.pop = function(elemet){
        return item.pop(elemet);
    }

    this.isEmpty = function(){
        return item.length === 0 ;
    }

    this.peek = function(elemet){
        return item[elemet.length -1];
    }
    
    this.size = function(){
        return item.length;
    }
    
    this.clear = function(){
        return item=[];
    }
    
    this.print = function(){
        console.log(item.toString());
    }
}

function baseConverter(decNumber, base){
    var remStack = new stack(),
    rem,
    baseString = '',
    diagits = '01234456789ABCDF';

    while(decNumber > 0 ){
        rem = Math.floor(decNumber % base);
        remStack.push(rem);
        decNumber = Math.floor(decNumber / base);
    }

    while(!remStack.isEmpty()){
        baseString += diagits[remStack.pop()];
    }
    return baseString
}

console.log(baseConverter(4,2))