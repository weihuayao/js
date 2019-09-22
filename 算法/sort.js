var  friends = [
    {name : "jhon",age : 12 },
    {name : "Tim ",age : 15},
    {name : "xxx" ,age : 10}
]
function compareFriend(a , b){
    if(a.age < b.age){
        return -1;
    }
    if(a.age > b.age){
        return 1 ;
    }
    else
        return 0 ;
}
//sort 将数组内元素转化字符串进行比较 存在漏洞  给他传参 0 -1 ，1来纠正
console.log(friends.sort(compareFriend))