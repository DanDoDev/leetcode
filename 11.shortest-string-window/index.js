/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 const minWindow = (s, t) => {
    const searchingFor = {};
    let leftPointer = 0;
    let rightPointer = 0;
    
    let bestString = null;
    let uniqueValues = 0;
    
    for(let i=0;i<t.length;i++){
        const valueNew = !searchingFor[t[i]];
        const qty = valueNew ? 1 : searchingFor[t[i]] + 1;
        searchingFor[t[i]] = qty;
        if(valueNew)uniqueValues ++;
    }
    
    while(rightPointer <= s.length  && leftPointer + t.length <= s.length  ){
        
        
        const stringLength = rightPointer - leftPointer + 1;
        const stringContainsChars = checkStringContainsChars(s, leftPointer, rightPointer, searchingFor, uniqueValues);
         if(stringContainsChars && (!bestString || stringLength < bestString[1] - bestString[0] + 1)){
            bestString = [leftPointer,rightPointer];
             
             if(bestString[1] - bestString[0] + 1 === t.length) break;
        }


        if(!stringContainsChars)rightPointer++;
        else leftPointer++;
        if(!stringContainsChars && rightPointer === s.length )break;
         
    
            
        
    }
    
    
    
    return bestString ? s.substring(bestString[0],bestString[1] + 1) : "";
    
};

const checkStringContainsChars = (string, leftPointer, rightPointer, searchingFor, uniqueValues) => {
    const foundItems = {};
    let remainingToFind = uniqueValues;
    
    
    for(let i=leftPointer;i<=rightPointer;i++){
        const char = string[i];
            
        if(searchingFor[string[i]] > 0){
            foundItems[string[i]] = !foundItems[string[i]] ? 1 : foundItems[string[i]] + 1;
            if(foundItems[string[i]] === searchingFor[string[i]]){
                remainingToFind--;
            }
        }
        if(remainingToFind.length <= 0) return true;
    }


    return remainingToFind <= 0;
}