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

module.exports = map;