/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
 const minWindow = (s, t) => {
    const searchingFor = {};
    
    let rightPointer = 0;
    
    let bestString = null;
    
    let uniqueValues = 0;
    
    for(let i=0;i< t.length;i++){
        const valueNew = !searchingFor[t[i]];
        if(valueNew)uniqueValues ++;
        searchingFor[t[i]] = valueNew ? 1 : searchingFor[t[i]] + 1;
    }
    for(let leftPointer = 0; leftPointer < s.length; leftPointer++){
        const isSearchedFor = searchingFor[s[leftPointer]] > 0;
        
        if(isSearchedFor){
            searchingFor[s[leftPointer]]--;
            if(searchingFor[s[leftPointer]] === 0)uniqueValues--;
            console.log('left searched for', s[leftPointer], searchingFor[s[leftPointer]])
        }
        
        if(leftPointer > 0){
            const prevValueCount = searchingFor[s[leftPointer-1]];
            console.log('prev value count', s[leftPointer-1]);
            searchingFor[s[leftPointer -1]] = !searchingFor[s[leftPointer -1]] ? 1 : searchingFor[s[leftPointer -1]] + 1;
            console.log('prev value count', prevValueCount === 0, leftPointer, s.length);
            if(prevValueCount === 0)uniqueValues++;
        }
        
        
        while(uniqueValues > 0 && rightPointer < s.length){
            rightPointer++;
            const rightSearchedFor = searchingFor[s[rightPointer]];
            if(rightSearchedFor){
                console.log('rightSearchedFor', s[rightPointer])
                searchingFor[s[rightPointer]]--;
                if(searchingFor[s[rightPointer]] === 0)uniqueValues--;
            }
        }
        if(uniqueValues === 0 && (!bestString || bestString[1] - bestString[0] > rightPointer - leftPointer)){
            bestString = [leftPointer,rightPointer];
        }
    }
    
    return s.substring(bestString[0], bestString[1] + 1);
    
    
}