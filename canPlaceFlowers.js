/**
 * if !index && !(index -1) && !(index + 1) then turn that index into a 1. try to
 * do it n times
 */

function canPlaceFlowers(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
            flowerbed[i] = 1;
            n -= 1;
        }
    }
    return n <= 0;
};