/**
 * @param {number[]} nums
 * @return {boolean}
 */

 let previouslyReachedDestinations = [];


 const canJump = (nums) => {
     previouslyReachedDestinations = Array(nums.length).fill(-1);
         
     if(recursivelyHopToTheFinish(nums, 0)){ 
             previouslyReachedDestinations = [];        
             return true;
     }
     
     previouslyReachedDestinations = [];
     return false;
 };
 
 const recursivelyHopToTheFinish = (nums, startingPosition) => {
     const hopsAllowed = nums[startingPosition];
     // console.log('recursive enter', nums,startingPosition, hopsAllowed);
     if(hopsAllowed + startingPosition >= nums.length - 1 || nums.length <= 1) return true;
         for(let j=1;j <= hopsAllowed;j++){
             
             if(previouslyReachedDestinations[startingPosition + j] === -99)continue;
             // console.log('check allowedHop',);
             if(recursivelyHopToTheFinish(nums, startingPosition + j)) return true;
             previouslyReachedDestinations[startingPosition + j] = -99;
         }
     return false;
 }