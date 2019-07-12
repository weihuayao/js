function HashTable() { //可能出现 hash值相同导致覆盖数据的情况  分离链接
    var table = [];
    var loseloseHashCode = function (key) {
        var hash = 0; //{1}
        for (var i = 0; i < key.length; i++) { //{2}
            hash += key.charCodeAt(i); //{3}
        }
        return hash % 37; //{4}
    };
    this.put = function (key, value) {
        var position = loseloseHashCode(key); //{5}
        console.log(position + ' - ' + key); //{6}
        table[position] = value; //{7}
    };
    this.get = function (key) {
        return table[loseloseHashCode(key)];
    };
    this.remove = function (key) {
        table[loseloseHashCode(key)] = undefined;
    };
}