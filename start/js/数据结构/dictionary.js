function Dictionary() {
    var items = {};
    this.set = function(key ,value){
        items[key] = value;
    };

    this.remove = function(key){
        if(this.has(key)){
            delete items[key];
            return true;
        }
        return false;
    };

    this.has = function(key){
        return key in items;
    };

    this.get = function(key){
        return this.has(key) ? items[key] : undefined;
    };

    this.clear =function(){
         items={};
    };

    this.size = function(){
        var count = 0;
        for (var prop in items) { //{5}
            if (items.hasOwnProperty(prop)) //{6}
                ++count; //{7}
        }
        return count;
    };

    this.keys = function(){
        var key = []
        for(var k in items ){
            if(this.has(k))
                key.push(k)
        }
        return key;
    };

    this.values = function(){
        var values = [];
        for( var k in items){
            if(this.has(k)){
                values.push(items[k]);
            }
        }
        return values;
    };

    this.getItems = function(){
        return items;
    }
}
var dictionary = new Dictionary();
dictionary.set('Gandalf', 'gandalf@email.com');
dictionary.set('John', 'johnsnow@email.com');
dictionary.set('Tyrion', 'tyrion@email.com');
// console.log(dictionary.has('Gandalf'));

// console.log(dictionary.keys());
// console.log(dictionary.values());
// console.log(dictionary.get('Tyrion'));

dictionary.remove('John');

console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.getItems());