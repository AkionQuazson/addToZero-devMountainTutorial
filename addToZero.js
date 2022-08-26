// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
const addToZero = (arr) => {
    for (i = 0; i < arr.length; i++) { 
        for (j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                console.log(true);
                return;
            }
        }   
    }
    console.log(false);
}