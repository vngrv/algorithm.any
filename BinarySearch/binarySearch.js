function binarySearch(array, target) {
    let start = 0;
    let stop = array.length - 1;
    let middle = Math.floor((start+stop)/2);
    
    while (array[middle] !== target && start < stop) {
        if(target < list[middle]) {
            stop = middle - 1;
        } else {
            start = middle + 1;
        }

        middle = Math.floor((start + stop) / 2)
    }
    
    return (list[middle] !== target) ? -1 : middle
}

const list = [2, 5, 8, 9, 13, 45, 67, 99]
console.log(binarySearch(list, 99)) // 7 -> returns the index of the item
