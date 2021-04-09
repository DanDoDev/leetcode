/**
 * @param {string} digits
 * @return {string[]}
 */

 const numpad = {
    2: ['a','b','c'],
    3: ['d','e','f'],
    4: ['g','h','i'],
    5: ['j','k','l'],
    6: ['m','n','o'],
    7: ['p','q','r','s'],
    8: ['t','u','v'],
    9: ['w','x','y','z'],
}

const letterCombinations = (digits) => {
    if(!digits || digits === "") return[];
    return recursiveSolution(digits,Array(digits.length).fill(0), 0);
};

const recursiveSolution = (digits, locksArray, lockPosition) => {
    if(lockPosition >= digits.length){
        let newString = "";
        for(let i=0;i<locksArray.length;i++){
            const numPadBtn = digits[i];
            const digitLock = locksArray[i];
            newString += numpad[numPadBtn][digitLock];
        }
        return [newString];
    }
    const lockedLetters = numpad[digits[lockPosition]];
    let vals = [];
    for(let i=0;i<lockedLetters.length;i++){
        locksArray[lockPosition] = i;
        vals = vals.concat(recursiveSolution(digits, locksArray, lockPosition + 1));
    }
    
    return vals;
}