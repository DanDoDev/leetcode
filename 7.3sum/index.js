/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    if(!Array.isArray(nums) || nums.length < 3) return [];
    
    nums = nums.sort((a,b) => a-b);
    
    const output = [];
    let prev = null;
    let set = new Set();
    
    for(let i=1;i<=nums.length-2;i++){
        
        const val = nums[i-1];
        if(val === prev) continue;
        prev = val;
        
        let leftOffset = 0;
        let rightOffset = 0;
        
        while(nums.length - 2 - i - leftOffset - rightOffset >= 0 ){
            
            const sum = val + nums[i + leftOffset] + nums[nums.length - 1 - rightOffset];
            
            if(sum === 0){
                const newArray = [val, nums[i+leftOffset], nums[nums.length - 1 - rightOffset]];
                const setString = `${val}-${nums[i+leftOffset]}-${nums[nums.length - 1 - rightOffset]}`;
                if(!set.has(setString)){
                    set.add(setString);
                    output.push(newArray);
                }
                leftOffset++;
                rightOffset++;
            }else if(sum < 0) leftOffset++;
            else rightOffset++;
        }
    }
    return output;
};