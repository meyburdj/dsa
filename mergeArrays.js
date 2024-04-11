function mergeArrays(a1, a2) {
    let a1Pointer = 0;
    let a2Pointer = 0;

    let finalArray = [];

    while (a1[a1Pointer] || a2[a2Pointer]) {
        let a1Curr = a1[a1Pointer];
        let a2Curr = a2[a2Pointer];
        if (!a1Curr) {
            finalArray.push(a2Curr);
            a2Pointer++;
            continue;
        } else if (!a2Curr) {
            finalArray.push(a1Curr);
            a1Pointer++;
            continue;

        }
        if (a1Curr < a2Curr) {
            finalArray.push(a1Curr);
            a1Pointer++;
            continue;

        } else {
            finalArray.push(a2Curr);
            a2Pointer++;
            continue;

        }
    }
    return finalArray;
}

let arrayOne = [1, 4, 5, 7];
let arrayTwo = [4, 4, 6, 10];

console.log(mergeArrays(arrayOne, arrayTwo));