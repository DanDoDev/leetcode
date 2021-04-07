/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 const rotate = (matrix) => {
    if(matrix.length === 1) return matrix;
    if(matrix.length === 2){
        let memory = matrix[0][1];
        matrix[0][1] = matrix[0][0];
        let memory2 = matrix[1][1];
        matrix[1][1] = memory;
        memory = matrix[1][0];
        matrix[1][0] = memory2;
        matrix[0][0] = memory;
        return matrix;  
    };
    const gridLength = matrix.length;
    let currentGridLength = gridLength;
    
    for(let i=0; i < gridLength - 2; i++){
        // i acts as increment for inner squares;
    console.log('grid iter', currentGridLength - (2 * i))
        currentGridLength = currentGridLength - (2 * i);
        if(currentGridLength < 2)break;
        for(let j=0; j < currentGridLength - 1; j++){
            // j keeps track of moves necessary to finish a ring 
            let positionInMemory = null;
            let secondPositionInMemory = null;
            for(let k=0; k < 4; k++){
                // k keeps tracks of moves necessary to finish moving a single piece all around
                switch(k){
                    case 0: 
                        positionInMemory = matrix[0 + i + j][gridLength - 1 - i];
                        console.log('move1', positionInMemory, matrix[0 + i][0 + i + j]);
                        matrix[0 + i + j][gridLength - 1 - i] = matrix[0 + i][0 + i + j];
                        break;
                    case 1:
                        secondPositionInMemory = matrix[gridLength - 1 - i][gridLength - 1 - i - j];
                        console.log('move2', secondPositionInMemory, positionInMemory);
                        matrix[gridLength - 1 - i][gridLength - 1 - i - j] = positionInMemory;
                        break;
                    case 2:
                        positionInMemory = matrix[gridLength - 1 - i - j][0 + i];
                        console.log('move3', positionInMemory, secondPositionInMemory);
                        matrix[gridLength - 1 - i - j][0 + i] = secondPositionInMemory;
                        break;
                    case 3:
                        console.log('move4', matrix[0 + i][0 + i + j], positionInMemory);
                        matrix[0 + i][0 + i + j] = positionInMemory;
                        break;
                }
            }
        }
    }
    
    console.log(matrix)
    return matrix;
    
    
};



    // [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]
    // [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]
