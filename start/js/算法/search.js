//顺序或线性搜索是最基本的搜索算法。它的机制是，将每一个数据结构中的元素和我们要找
//  的元素做比较。顺序搜索是最低效的一种搜索算法。
this.sequentialSearch = function (item) {
    for (var i = 0; i < array.length; i++) {
        if (item === array[i]) {
            return i;
        }
        return -1;
    }

};
// 二分法排序

this.binarySearch = function (item) {
    this.quickSort();
    var low = 0, 
        high = array.length - 1,
        mid, element;
    while (low <= high) { 
        mid = Math.floor((low + high) / 2); 
        element = array[mid]; 
        if (element < item) { 
            low = mid + 1; 
        } else if (element > item) { 
            high = mid - 1; 
        } else {
            return mid; 
        }
    }
    return -1; //{12}
};

A = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(A.sequentialSearch(2))