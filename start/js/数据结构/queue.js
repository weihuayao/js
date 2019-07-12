function Queue(){
    var item  = [] ;

    this.enqueue = function(element){ //添加元素
        item.push(element);
    }

    this.dequeue = function(){ //移除第一个
        return item.shift();
    }

    this.front = function(){
        return item[0];
    }

    this.isEmpty = function(){
        return item.length === 0;
    }
    
    this.clear = function(){
        item = [];
    }

    this.size = function(){
        return item.length;
    }

    this.print = function(){
        console.log(item.toString())
    }
}
var queue = new Queue();
queue.enqueue("John");
queue.enqueue("Jack");
queue.enqueue("Camila");
queue.print();