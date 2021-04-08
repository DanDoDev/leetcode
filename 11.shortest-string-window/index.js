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
    
    for(let i=0;i<t.length;i++){
        const qty = !searchingFor[t[i]] ? 1 : searchingFor[t[i]] + 1;
        searchingFor[t[i]] = qty;
    }
    
    while(rightPointer <= s.length && leftPointer + t.length <= s.length  ){
        const string = s.substring(leftPointer, rightPointer + 1);
        const stringLength = rightPointer + 1 - leftPointer;
        const stringContainsChars = checkStringContainsChars(string,searchingFor);
        if(!stringContainsChars)rightPointer++;
        else leftPointer++;
        
         if(stringContainsChars && (!bestString || stringLength < bestString.length)){
            bestString = string;
        }

            
        
    }
    
    
    
    return bestString ?? "";
    
};

const checkStringContainsChars = (string, searchingFor) => {
    const foundItems = {};
    let remainingToFind = Object.keys(searchingFor).length;
    
    for(let i=0;i<string.length;i++){
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