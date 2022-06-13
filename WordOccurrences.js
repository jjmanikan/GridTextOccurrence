//Justine Manikan
var grid = [["a","p","x","s","f"],
            ["y","e","u","s","r"],
            ["n","c","l","n","h"],
            ["q","g","n","o","k"],
            ["s","n","o","w","y"]];
            
var word = "snow";

//values to search in all 8 directions
let r = [-1, -1, -1, 0, 0, 1, 1, 1];
let c = [-1, 0, 1, -1, 1, -1, 0, 1];

//Function that searchs for word in all directions
function countWordOccurencesInGrid(word,grid){

    let count = 0;

    //grid validation
    for(let a = 0; a < grid.length - 1; a++){
        if(grid[a].length != grid[a + 1].length){
            console.log("Invalid grid");
            return;
        }
    }

    rowcount = grid.length;
    //if grid is valid, any value in grid should work for the number of columns
    colcount = grid[0].length;
    wordlen = word.length;

    //get potential starting points of word in grid
    //number of rows equals number of array objects in example
    for( let x = 0; x < rowcount; x++){

        //number of columns is determined by the length of array objects
        for(let y = 0; y < colcount; y++){

            //if first letter matches word in grid start searching, skips characters that do not match the first letter of word
            if (grid[x][y].toLowerCase() != word[0].toLowerCase())
                continue;
            

            //search in every direction
            for(let dir = 0; dir < 8; dir++){

                let i;
                rx = x + r[dir];
                cy = y + c[dir];

                //checking the for the rest of the word after the first character
                for(i = 1; i < word.length; i++){
                   
                    //checks if character is out of bounds of row and column length
                    if(rx >= rowcount || rx < 0 || cy >= colcount|| cy < 0)
                        break;

                    //if the next character does not match, break
                    if(grid[rx][cy].toLowerCase() != word[i].toLowerCase())
                        break;
                    
                    //will move in corresponding direction with r and dir variables
                    rx += r[dir];
                    cy += c[dir];

                }

                //if values are all matched length must be equal
                //add to count of words
                if(i == word.length){
                    count++;
                }

            }
        }
    }

    return count;

}

var count = countWordOccurencesInGrid(word,grid);
console.log("The word appears "+ count + " times in this grid");

