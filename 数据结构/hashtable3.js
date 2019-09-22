function HashTable() {
    var table = [];
    // 更换hashcode 重复更低的 产生hash值算法
    //  它包括初始化一个hash变量并赋值为一个质数（行{1}——大多数实现都使用5381），然后
    // 迭代参数key，将hash与33相乘（用来当作一个魔力数），并和当前迭代到的字符的ASCII
    // 码值相加。
    // 最后，我们将使用相加的和与另一个随机质数（比我们认为的散列表的大小要大——在本例
    // 中，我们认为散列表的大小为1000）相除的余数。
    var djb2HashCode = function (key) {
        var hash = 5381;
        for (var i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }
        return hash % 1013;
    };
    this.put = function (key, value) {
        var position = djb2HashCode(key);
        console.log(position + ' - ' + key);
        table[position] = value;
    };
    this.get = function (key) {
        return table[djb2HashCode(key)];
    };
    this.remove = function (key) {
        table[djb2HashCode(key)] = undefined;
    };
}

var hash = new HashTable();
hash.put('Gandalf', 'gandalf@email.com');
hash.put('John', 'johnsnow@email.com');
hash.put('Tyrion', 'tyrion@email.com');
hash.put('Aaron', 'aaron@email.com');
hash.put('Donnie', 'donnie@email.com');
hash.put('Ana', 'ana@email.com');
hash.put('Jonathan', 'jonathan@email.com');
hash.put('Jamie', 'jamie@email.com');
hash.put('Sue', 'sue@email.com');
hash.put('Mindy', 'mindy@email.com');
hash.put('Paul', 'paul@email.com');
hash.put('Nathan', 'nathan@email.com');