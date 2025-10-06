function map(arr, func){
    var newArr = [];
    if(arr.length === 0){
        return [];
    }
    for(var i=0; i<arr.length; i++){
        var element = arr[i];
        var index = i;
        var newElement = func(element, index, arr);
        newArr[i] = newElement;
    }

    return newArr;
}

function filter(arr, func){
    var newArr = [];
    if(arr.length === 0){
        return [];
    }
    for(var i=0; i<arr.length; i++){
        if(func(arr[i],i,arr)){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function reduceed(arr, func, initialValue){
    var accumulator;
    var startIndex;
    if(arr === 0){
        return "Enter Valid Value";
    }

  if(initialValue !== undefined){
    accumulator = initialValue;
    startIndex =0;
  }else{
    accumulator = arr[0];
    startIndex = 1
  }

    for(var i=0; i<arr.length; i++){
        accumulator = func(accumulator, arr[i], i, arr)
    }
    return accumulator;
}

module.exports = {map, filter, reduceed};