function LinkedList() {
    var Node = function (element) { //  节点和指针
        this.element = element;
        this.next = null;
    };
    var length = 0; // {2}
    var head = null; // {3}
    this.append = function (element) { //添加新元素
        var node = new Node(element),
            current;

        if (head === null) {
            head = node;
        } else {
            current = head;
            while (current.next) {
                current = current.next;
            }
            current.next = head;
        }
        length++;
    };
    this.insert = function (position, element) { //特定位置增加一个元素

    };
    this.removeAt = function (position) { //从列表的特定位置移除一项
        //检查越界值
        if (position > -1 && position < length) { // {1}
            var current = head, // {2}
                previous, // {3}
                index = 0; // {4}
            //移除第一项
            if (position === 0) { // {5}
                head = current.next;
            } else {
                while (index++ < position) { // {6}
                    previous = current; // {7}
                    current = current.next; // {8}
                }
                //将previous与current的下一项链接起来：跳过current，从而移除它
                previous.next = current.next; // {9}
            }
            length--; // {10}
            return current.element;
        } else {
            return null; // {11}
        }
    };
    this.remove = function (element) { //从列表中移除一项。

    };
    this.indexOf = function (element) { //返回元素在列表中的索引。如果列表中没有该元素则返回-1

    };
    this.isEmpty = function () {

    };
    this.size = function () {};
    this.toString = function () {};
}

var list = new LinkedList();
list.append(15);
list.append(10);