/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    if(!nums || nums.length < 2) return null;

    let rightOffset = 0;
    let finalVal = null;
    let checkedVals = new Set();
    
    for(let leftPointer=0;leftPointer<nums.length;leftPointer++){
        const leftNumber = nums[leftPointer];
        if(checkedVals.has(leftNumber)) continue;
        
        for(let rightPointer = leftPointer + 1; rightPointer < nums.length; rightPointer++){
            const rightNumber = nums[rightPointer];
            if(leftNumber + rightNumber === target){
                finalVal = [leftPointer, rightPointer];
                break;
            }
        }    
        
        if(finalVal)break;
        else checkedVals.add(nums[leftPointer]);
    }
    
    return finalVal;
};