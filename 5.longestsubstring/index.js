/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let currentHighest = 0;
    let currentCount = 0;
    let currentChars = [];
    for(let i=0;i<s.length;i++){
        for(let y=i;y<s.length;y++){
            const char = s.substr(y,1);
            if(!currentChars.includes(char)){
                currentChars.push(char);
                currentCount++;
            }else{
                if(currentCount > currentHighest)currentHighest = currentCount;
                currentChars = [];
                currentCount = 0;
                break;
            }
        }
    }
    return Math.max(currentHighest, currentCount);
    
};