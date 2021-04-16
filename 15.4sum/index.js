/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = (nums, target) => {
    const sets = new Set();   
    return recursiveSolution(nums, target, [0,1,2,3], 0, sets);
};

const recursiveSolution = (nums, target, locks, lockPosition, previousSets) => {
    if(lockPosition >= locks.length){
        let newSet = [nums[locks[0]], nums[locks[1]], nums[locks[2]], nums[locks[3]]];
        const sum = newSet.reduce((total,x) => total + x);
        if(sum === target){
            newSet = newSet.sort((a,b) => a-b);
            const stringSet = newSet.join(',');            
            if(!previousSets.has(stringSet)){
                previousSets.add(stringSet);
                return [newSet];
            }
        }
        return [];
    }
    let newVals = [];
    for(let i = locks[lockPosition]; i < nums.length - (3 - lockPosition);i++){
        locks[lockPosition] = i;
        for(let j=lockPosition + 1;j<locks.length;j++){
            if(locks[j] <= locks[j-1]){
                locks[j] = locks[j-1] + 1;
            }
        }
        newVals = newVals.concat(recursiveSolution(nums, target, [...locks], lockPosition + 1, previousSets));
    }
    return newVals;
 
    
}


