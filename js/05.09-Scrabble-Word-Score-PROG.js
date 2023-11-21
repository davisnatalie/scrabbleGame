// First things first: Figure out the Algorithm:

// To begin, inspect the datasets carefully. 
//How is the data organized and what does that mean for your code? 

    //dictionary is an array
    //letter-values is an object

// What does your program need to do, step-by-step

    //read word from input box
    const input = document.querySelector("input");
    const scrabbleScore = document.querySelector("h2");
    //have search run calcScore function
    input.addEventListener("search", calcScore);

    function calcScore(){
           //check if word is in the dictionary
        let score = 0;
        let word = input.value;
        if (scrabbleDictionaryArr.includes(word)) {

            // console.log(word, `is in the dictionary`);
            //change string to an array
            word = word.toUpperCase();
            let lettersArr = word.split("");
            console.log('letters array:', lettersArr);
            //find value of each letter in the word and add values together
            for(let i = 0; i < lettersArr.length; i++) {
                const letter = lettersArr[i];
                score += letterValuesObj[letter];
            }
            console.log('score', score);

            scrabbleScore.textContent = score;
        } else {
            console.log(word, `is not in dictionary`);
            scrabbleScore.textContent = `${word} is not in dictionary - try again`;
        }
    //show scrabble score

    }
// Make notes / write comments, then code along w the comments
