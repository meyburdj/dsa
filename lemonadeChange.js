function lemonadeChange(nums) {
    let cashRegister = {
        5: 0,
        10: 0,
        20: 0
    };

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];

        if (curr === 5) cashRegister[5]++;
        if (curr === 10) {
            if (cashRegister[5] > 0) {
                cashRegister[5]--;
                cashRegister[10]++;
            } else return false;
        }
        if (curr === 20) {
            if (cashRegister[10] > 0 && cashRegister[5] > 0) {
                cashRegister[10]--;
                cashRegister[5] -= 2;
            } else if (cashRegister[5] > 2) {
                cashRegister[5] -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
}