/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
    for(let i=digits.length - 1;i >= 0; i--){
        const isRollover = digits[i] === 9;
        digits[i] = isRollover ? 0 : digits[i] + 1;
        if(!isRollover) break;
        if(i===0)digits.unshift(1);
    }
    return digits;  
};