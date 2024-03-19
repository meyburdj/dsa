function palindromeNumber(num) {
    let rev = 0;

    let tempNum = num;

    while (tempNum > 0) {
        let remainder = tempNum % 10;
        rev = rev * 10 + remainder;

        tempNum = Math.floor(tempNum / 10);
    }
    return rev === num;
}