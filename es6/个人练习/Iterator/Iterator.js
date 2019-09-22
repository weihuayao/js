function myIterator(arr){
  let index = 0 ;
  return {
    next: function(){
      return {value:arr[index++],done:index <= arr.length ? false : true}
    }
  }
}

let arr = [1,2,3,4,5]
let iter = myIterator(arr)
console.log(iter.next())
