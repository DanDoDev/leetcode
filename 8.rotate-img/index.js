/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// rotate image without allocating space for another image.

const rotate = (matrix) => {
    if(matrix.length === 1) return matrix;
    if(matrix.length === 2) return ['this case needs to be handled'];
    const gridLength = matrix.length;
    
    for(let i=0; i < grid - 2; i++){
        // i acts as increment for inner squares;
        for(let j=0; j < grid -1; j++){
            // j keeps track of moves necessary to finish a ring 
            let positionInMemory = null;
            let secondPositionInMemory = null;
            for(let k=0; k < 4; k++){
                // k keeps tracks of moves necessary to finish moving a single piece all around
                switch(k){
                    case 0: 
                        positionInMemory = matrix[0][gridLength - 1];
                        matrix[0][gridLength - 1] = matrix[0][0];
                        break;
                    case 1:
                        secondPositionInMemory = matrix[gridLength - 1][gridLength - 1];
                        matrix[gridLength - 1][gridLength - 1] = positionInMemory;
                        break;
                    case 2:
                        positionInMemory = matrix[gridLength - 1][0];
                        matrix[gridLength - 1][0] = secondPositionInMemory;
                        break;
                    case 3:
                        matrix[0][0] = secondPositionInMemory;
                        break;
                }
            }
        }
    }
    
    
};