//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(str,arr){
    //Your code goes here
    for (let i = 0; i < arr.length; i++) {
        
        if (str.includes(arr[i])){
            console.log(`Matched ${arr[i]}`)

        }else{
            console.log('No Matches')
        }
        
    }
};

//Call method here with parameters
console.log(findWords(dog_string, dog_names))

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
let Givenarr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i%2==0){
            arr.splice(i,1,"even_index")
        }
    }
    return arr
};console.log("==")

console.log(replaceEvens(Givenarr))
//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]



/**
 * Codewars Problem 1:
 * Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

Python Solution:
def summation(num):
    return sum([n for n in range(num+1)])
 */
//JavaScript Solution:
const summation = n => (n * (n + 1)) / 2;

/**
 * Codewars Problem 2:
 * Fix the function
I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

Can you help me fix the function?
 * 
 * Python Solution:
 * def add_five(num):
    total = num + 5
    return total
 */
//JavaScript Solution:
function addFive(num) {
    return num + 5;
  }

