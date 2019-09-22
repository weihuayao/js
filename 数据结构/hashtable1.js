function HashTable() {  //针对 hash值重复的不足。在当前位置上插入一个linklist
    var table = [];

    var ValuePair = function (key, value) {
        this.key = key;
        this.value = value;
        this.toString = function () {
            return '[' + this.key + ' - ' + this.value + ']';
        }
    };

    var loseloseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 37;
    }
    this.put = function (key, value) {
        var position = loseloseHashCode(key);
        if (table[position] === undefined) {
            table[position] = new LinkedList();
        }
        table[position].appen(new ValuePair(key, value))
    };

    this.remove = function (key) {
        var position = loseloseHashCode(key);
        if (table[position] !== undefined) {
            var current = table[position].getHead();
            while (current.next) {
                if (current.element.key === key) { //{11}
                    table[position].remove(current.element); //{12}
                    if (table[position].isEmpty()) { //{13}
                        table[position] = undefined; //{14}
                    }
                    return true; //{15}
                }
                current = current.next;
            }
            // 检查是否为第一个或最后一个元素
            if (current.element.key === key) { //{16}
                table[position].remove(current.element);
                if (table[position].isEmpty()) {
                    table[position] = undefined;
                }
                return true;
            }
        }
        return false; //{17}
    };

    this.get = function (key) {
        var position = loseloseHashCode(key)

        if (table[position] !== undefined) {
            var current = table[position].getAhead();
            while (current.next) {
                if (current.element.key === key) {
                    return current.element.value
                }
                current.next;
            }
            if (current.element.key === key) {
                return current.element.value;
            }
        }
        return undefined;
    };


}
var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');

console.log(hash.get('Gandalf'));
console.log(hash.get('Loiane'));
hash.remove('Gandalf');
console.log(hash.get('Gandalf'));