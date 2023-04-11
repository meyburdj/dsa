/**
 * A product of an array except that index means it's the product of all number 
 * values to the left and right of that index. Create 2 arrays of array.length length.
 * In one capture all the values to the left of that number, in the other capture 
 * all values to the right. Multiple both
 */

function productExceptSelf(arr) {
    const leftProducts = new Array(arr.length);
    const rightProducts = new Array(arr.length);

    //establish leftProducts
    leftProducts[0] = 1;
    for (let i = 1; i < leftProducts.length; i++) {
        leftProducts[i] = leftProducts[i - 1] * arr[i - 1];
    }

    //establish rightProducts
    rightProducts[arr.length - 1] = 1;
    for (let i = arr.length - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * arr[i + 1];
    }

    let finalArray = new Array(arr.length);

    for (let i = 0; i < arr.length; i++) {
        finalArray[i] = leftProducts[i] * rightProducts[i];
    }
    return finalArray;
}