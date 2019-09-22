function priorityQueue(){
    var item = [];
    
    function QueueElement(elemnt , priority){
        this.elemnt = elemnt;
        this.priority = priority;
    }

    this.enqueue = function(elemnt ,priority){
        var queueElement = new QueueElement(elemnt , priority);

        if(this.isEmpty()){
            item.push(queueElement);
        }else{
            var added = false;
            for(var i = 0 ; i < item.length ; i++){  // 优先级高的将其放在前面
                if(queueElement.priority < item[i].priority){
                    item.splice(i , 0 , queueElement)
                    added = true ;
                    break;
                }
            }
            if(!added){
                item.push(queueElement);
            }
        }
    }
    //其他方法和queue 一致
    this.print = function(){
        console.log(JSON.stringify(item))
    }

    this.isEmpty = function(){
        return item.length == 0;
    }
}
var priorityQueue1 = new priorityQueue();
priorityQueue1.enqueue("John", 2);
priorityQueue1.enqueue("Jack", 1);
priorityQueue1.enqueue("Camila", 1);
priorityQueue1.print();