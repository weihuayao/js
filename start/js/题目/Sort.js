//冒泡排序

this.modifiedBubbleSort = function () {
    var length = array.length;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(j, j + 1);
            }
        }
    }
};

// 选择排序
// 选择排序大致的思路是找到数据结构中的最小值并
// 将其放置在第一位，接着找到第二小的值并将其放在第二位，以此类推
this.selectionSort = function () {
    var length = array.length,
        indexMin;
    for (var i = 0; i < length - 1; i++) {
        indexMin = i;
        for (var j = i; j < length; j++) {
            if (array[indexMin] > array[j]) {
                indexMin = j;
            }
        }
        if (i !== indexMin) {
            swap(i, indexMin);
        }
    }
}

//插入排序   每次排一个数组项，以此方式构建最后的排序数组
this.insertionSort = function () {
    var length = array.length,
        j, temp;
    for (var i = 1; i < length; i++) {
        j = i;
        temp = array[i];
        while (j > 0 && array[j - 1] > temp) {
            array[j] = array[j - 1];
            j--;
        }
        array[j] = temp;
    }
};
// 归并排序
//归并排序是一种分治算法。其思想是将原始数组切分成较小的数组，直到每个小数组只有一
// 个位置，接着将小数组归并成较大的数组，直到最后只有一个排序完毕的大数组。
this.mergeSort = function () {
    array = mergeSortRec(array);
};
var mergeSortRec = function (array) {
    var length = array.length;
    if (length === 1) {
        return array;
    }
    var mid = Math.floor(length / 2),
        left = array.slice(0, mid),
        right = array.slice(mid, length);
    return merge(mergeSortRec(left), mergeSortRec(right));

};

var merge = function (left, right) {
    var result = [],
        il = 0,
        ir = 0;
    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }
    while (il < left.length) {
        result.push(left[il++]);
    }
    while (ir < right.length) {
        result.push(right[ir++]);
    }
    return result;
};

//快速排序也许是最常用的排序算法了。它的复杂度为O(nlogn)，且它的性能通常比其他的复
// 杂度为O(nlogn)的排序算法要好
this.quickSort = function () {
    quick(array, 0, array.length - 1)
}
var quick = function (array, left, right) {
    var index;
    if (array.length > 1) {
        index = partition(array, left, right);
        if (left < index - 1) {
            quick(array, left, index - 1);
        }
        if (index < right) {
            quick(array, index, right);
        }
    }
};

var partition = function (array, left, right) {
    var pivot = array[Math.floor((right + left) / 2)], 
        i = left, 
        j = right; 
    while (i <= j) { 
        while (array[i] < pivot) { 
            i++;
        }
        while (array[j] > pivot) { 
            j--;
        }
        if (i <= j) { 
            swapQuickStort(array, i, j); 
            i++;
            j--;
        }
    }
    return i; 
};
var swapQuickStort = function(array, index1, index2){
    var aux = array[index1];
    array[index1] = array[index2];
    array[index2] = aux;
    };