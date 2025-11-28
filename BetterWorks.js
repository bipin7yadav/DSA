// Problem: Find the first non-repeating element in an array
// Approach:
// 1. Create a Map to store the frequency of each element in the array
// 2. Iterate through the array and update the frequency in the Map
// 3. Iterate through the keys of the Map and find the first element with frequency 1
// 4. If no such element is found, return -1
// 5. Else, return the index of the element
//
// Time Complexity: O(n)
// Space Complexity: O(n)
//
// Input: [1,2,3,4,1,2,3,4,8,8,7]
// Output: 7
//
// Input: [1,2,3,4,1,2,3,4,8,8]
// Output: -1
let array = [1,2,3,4,1,2,3,4,8,8,7]

let frequency = new Map()

for(let i=0;i<array.length;i++){
    if(frequency.has(array[i])){
        let pre = frequency.get(array[i])
        frequency.set(array[i],{count:pre.count+1,index:i})
    }else{
        frequency.set(array[i],{count:1,index:i})
    }
}

let keys = Array.from(frequency.keys())

console.log("keys :",keys,keys.length)
let output = array.length

for(let i=0;i<keys.length;i++){
    let obj = frequency.get(keys[i])
    console.log("obj :",obj)
    if(obj.count==1 && obj.index<output){
        output= obj.index
    }
}

if (output === array.length) {
    output = -1;
}

console.log(output)

// Problem: Find the first non-repeating element in an array

function firstNonRepeatingElement(arr) {
    const frequencyMap = new Map();

    // Step 1: Build the frequency map
    for (let i = 0; i < arr.length; i++) {
        if (frequencyMap.has(arr[i])) {
            frequencyMap.set(arr[i], frequencyMap.get(arr[i]) + 1);
        } else {
            frequencyMap.set(arr[i], 1);
        }
    }

    // Step 2: Find the first non-repeating element
    for (let i = 0; i < arr.length; i++) {
        if (frequencyMap.get(arr[i]) === 1) {
            return i; // Return the index of the first non-repeating element
        }
    }

    return -1; // If no non-repeating element is found
}

console.log(firstNonRepeatingElement([1,2,3,4,1,2,5,3,4,8,8,7])); // Output: 10
