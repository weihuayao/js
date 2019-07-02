
var aa = [1,2,2,4,9,6,7,5,2,3,5,6,5];


//  indexOf 去重
function uniq(array){
    var temp = [] ;
    for( var i = 0; i<array.length;i++ ){
        if(temp.indexOf(array[i]) == -1){  //  判断 temp中是否有相同的数字
            temp.push(array[i])
        }
    }
    return temp;
}

// 先排序后去重
function uniq2(array){
    array.sort();
    var temp = [array[0]];
    for(var i = 1 ; i <array.length; i++){
        if(array[i] !== temp[temp.length-1]) //相邻的字符不相同
        temp.push(array[i]);
    }
    return temp;
}

//双重循环 
function uniq3(array){
    var temp = [];
    for(var i = 0 ; i<=array.length ; i++){
        for(var j = 0 ; j<= temp.length;i++){
            if (array[i] === temp[j]){
                break;
            }
        }
        if(j === temp.length){
            temp.push(array[i])
        }
    }
    return temp;

}
console.log(uniq3(aa));

