function Set() {
    var items = {};

    this.has = function (value) {
        return items.hasOwnProperty(value);
    };
    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value; //{1}
            return true;
        }
        return false;
    };
    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value]; //{2}
            return true;
        }
        return false;
    };
    this.clear = function () {
        items = {};
    };
    this.size = function () {
        // return Object.keys(items).length;
        var count = 0;
        for (var prop in items) { //{5}
            if (items.hasOwnProperty(prop)) //{6}
                ++count; //{7}
        }
        return count;
    };
    this.values = function () {
        // return Object.keys(items);
        var keys = [];
        for (var key in items) { //{7}
            keys.push(key); //{8}
        }
        return keys;
    };

    this.union = function (otherSet) { //并集
        var unionSet = new Set();

        var values = this.values(); // 获取当前集合的值
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }

        values = otherSet.values();
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }
        return unionSet;
    };
    this.intersectionSet = function (otherSet) { //交集
        var intersectionset = new setA(); //新建一个空集合

        var values = this.values();
        for (var i = 0; i < values.length; i++) { //遍历当前的set 将相同的值添加进 intersection
            if (otherSet.has(values[i])) {
                intersectionset.add(values[i]);
            }
        }
        return intersectionset;
    };
    this.difference = function (otherSet) {//差集
        var differenceSet = new Set(); //
        var values = this.values();
        for (var i = 0; i < values.length; i++) { 
            if (!otherSet.has(values[i])) { 
                differenceSet.add(values[i]); 
            }
        }
        return differenceSet;
    };
    this.subset = function(otherSet){//子集  A -> B的子集
        if(this.size>otherSet.size){
            return false;
        }else{
           var value = this.values();
           for(var i = 0 ; i < value.length ;i++){
               if(!otherSet.has(value[i])){
                   return false;
               }
           }
           return true;
        }
    };
}
var setA = new Set();
setA.add(1);
setA.add(2);
var setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);
var setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);
console.log(setA.subset(setB));
console.log(setA.subset(setC));