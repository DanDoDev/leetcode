/**
 * @param {number[]} tree
 * @return {number}
 */
const totalFruit = (tree) => {
    let highestCount = 0;
    let currentCount = 0;
    let fruitBasket = [];
    let currentIndex = 0;
    
    
    while(currentIndex < tree.length){
        const fruit = tree[currentIndex];
        const fruitBasketIndex = fruitBasket.findIndex(x => x.fruit === fruit);
        if(fruitBasket.length == 2 && fruitBasketIndex < 0){
            if(currentCount > highestCount) highestCount = currentCount;
            currentIndex = Math.min(fruitBasket[0].lastFoundIndex + 1, fruitBasket[1].lastFoundIndex + 1);
                        
            fruitBasket = [];
            currentCount = 0;
            continue;
            
        }
        if(fruitBasketIndex > -1){
            fruitBasket[fruitBasketIndex] = {...fruitBasket[fruitBasketIndex], lastFoundIndex: currentIndex}
        }else{
            fruitBasket.push({
                fruit,
                lastFoundIndex: currentIndex
            })
        }
        
        
        currentCount++;
        currentIndex++;
        
    }
    
    return Math.max(highestCount, currentCount);
    
};