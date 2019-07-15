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
        item.push(elemet);
    }
    
    this.pop = function(elemet){
        return item.pop(elemet);
    }

    this.isEmpty = function(){
        return item.length() == 0 ;
    }

    this.peek = function(elemet){
        return item[elemet.length-1];
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