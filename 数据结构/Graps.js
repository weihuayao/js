function Dictionary() {
    var items = {};
    this.set = function (key, value) {
        items[key] = value;
    };

    this.remove = function (key) {
        if (this.has(key)) {
            delete items[key];
            return true;
        }
        return false;
    };

    this.has = function (key) {
        return key in items;
    };

    this.get = function (key) {
        return this.has(key) ? items[key] : undefined;
    };

    this.clear = function () {
        items = {};
    };

    this.size = function () {
        var count = 0;
        for (var prop in items) { //{5}
            if (items.hasOwnProperty(prop)) //{6}
                ++count; //{7}
        }
        return count;
    };

    this.keys = function () {
        var key = []
        for (var k in items) {
            if (this.has(k))
                key.push(k)
        }
        return key;
    };

    this.values = function () {
        var values = [];
        for (var k in items) {
            if (this.has(k)) {
                values.push(items[k]);
            }
        }
        return values;
    };

    this.getItems = function () {
        return items;
    }
}

function Graph() { //邻接表
    var vertices = [];
    var adjList = new Dictionary();

    this.addVertex = function (v) { //添加一个顶点
        vertices.push(v);
        adjList.set(v, []);
    };

    this.addEdge = function (v, w) { //添加一条边
        // 本次为无向图所以需要给 v w 都添加一条边
        adjList.get(v).push(w)
        adjList.get(w).push(v)
    }

    this.toString = function () {
        var s = '';
        for (var i = 0; i < vertices.length; i++) { //vertices数组列表，将顶点的名字加入字符串中
            s += vertices[i] + ' -> ';
            var neighbors = adjList.get(vertices[i]); //
            for (var j = 0; j < neighbors.length; j++) { //将相邻顶点加入我们的字符串
                s += neighbors[j] + ' ';
            }
            s += '\n';
        }
        return s;
    }
    /*当要标注已经访问过的顶点时，我们用三种颜色来反映它们的状态。
     白色：表示该顶点还没有被访问。
     灰色：表示该顶点被访问过，但并未被探索过。
     黑色：表示该顶点被访问过且被完全探索过
    完全探索一个顶点要求我们查看该顶点的每一条边。对于每一条边所连接的没有被访问过的
    顶点，将其标注为被发现的，并将其加进待访问顶点列表中。
    */
    var initializeColor = function () {
        var color = [];
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = 'white';
        }
        return color;
    };
    //    广度优先搜索
    this.bfs = function (v, callback) {
        var color = initializeColor(), //初始化颜色
            queue = new Queue();
        queue.enqueue(v);
        while (!queue.isEmpty()) { //
            //从队列中移除一个顶点，并取得一个包含其所有邻点的邻接表
            var u = queue.dequeue(), //{6}
                neighbors = adjList.get(u);
            color[u] = 'grey'; // {8}
            for (var i = 0; i < neighbors.length; i++) { // {9}
                var w = neighbors[i]; // {10}
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
            if (callback) {
                callback(u);
            }
        }
    };
    this.BFS = function (v) {
        var color = initializeColor(),
            queue = new Queue(),
            d = [], //{1}
            pred = []; //{2}
        queue.enqueue(v);
        for (var i = 0; i < vertices.length; i++) { //{3}
            d[vertices[i]] = 0; //{4}
            pred[vertices[i]] = null; //{5}
        }
        while (!queue.isEmpty()) {
            var u = queue.dequeue(),
                neighbors = adjList.get(u);
            color[u] = 'grey';
            for (i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    d[w] = d[u] + 1; //{6}
                    pred[w] = u; //{7}
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';
        }
        return { //{8}
            distances: d,
            predecessors: pred
        };
    };
    this.dfs = function (callback) {
        for (var i = 0; i < vertices.length; i++) { //{2}
            if (color[vertices[i]] === 'white') { //{3}
                dfsVisit(vertices[i], color, callback); //{4}
            }
        }
    };
    var dfsVisit = function (u, color, callback) {
        color[u] = 'grey'; //{5}
        if (callback) { //{6}
            callback(u);
        }
        var neighbors = adjList.get(u); //{7}
        for (var i = 0; i < neighbors.length; i++) { //{8}
            var w = neighbors[i]; //{9}
            if (color[w] === 'white') { //{10}
                dfsVisit(w, color, callback); //{11}
            }
        }
        color[u] = 'black'; //{12}
    };
    var time = 0; //{1}
    this.DFS = function () {
        var color = initializeColor(), //{2}
            d = [],
            f = [],
            p = [];
        time = 0;
        for (var i = 0; i < vertices.length; i++) { //{3}
            f[vertices[i]] = 0;
            d[vertices[i]] = 0;
            p[vertices[i]] = null;
        }
        for (i = 0; i < vertices.length; i++) {
            if (color[vertices[i]] === 'white') {
                DFSVisit(vertices[i], color, d, f, p);
            }
        }
        return { //{4}
            discovery: d,
            finished: f,
            predecessors: p
        };
    };
    var DFSVisit = function (u, color, d, f, p) {
        console.log('discovered ' + u);
        color[u] = 'grey';
        d[u] = ++time; //{5}
        var neighbors = adjList.get(u);
        for (var i = 0; i < neighbors.length; i++) {
            var w = neighbors[i];
            if (color[w] === 'white') {
                p[w] = u; // {6}
                DFSVisit(w, color, d, f, p);
            }
        }
        color[u] = 'black';
        f[u] = ++time; //{7}
        console.log('explored ' + u);
    };

}

var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log(graph.toString())