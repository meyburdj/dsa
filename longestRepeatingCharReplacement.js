//you can either replace something in the middle or at the start/end

//do 3 sliding windows for whether the replacement is at start, middle, or end

function longestRepeatingCharReplacement(s, k) {

    let max3 = 1;
    let left3 = 0;
    let right3 = 1;
    while (right3 < s.length) {
        if (left3 === right3) {
            right3++;
            max3 = Math.max(max3, (right3 + 1) - (left3 + 1));
            continue;
        } else {
            left3++;
            right3 = left3 + 2;
        }
    }

    let max1 = 1;
    let left1 = 1;
    let right1 = 2;



    let max2 = 1;
    let left2 = 0;
    let right2 = 2;


}
