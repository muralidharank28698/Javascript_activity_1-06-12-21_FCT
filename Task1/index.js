
// Question 1

function Minmax(arr) {
    return arr.reduce( (acc,val) => {
        if (val < acc[0]) {
         acc[0] = val;
        }
        if(val > acc[1]) {
            acc[1] = val;
        }
        return acc;
    },[Infinity, -Infinity]);
    
}

let arr = [1,2,3,4,5];

let minMax = Minmax(arr);
console.log(minMax);




// Question 2

function whichIsLarger(x, y) {
    if(x > y) {
        return "f";
    } else if(y > x) {
        return "g";
    } else {
        return "neither";
    }
}

let f = function() {
    return 505050;
}

let g = function() {
    return 505050   ;
}

let result = whichIsLarger(f(), g());
console.log(result);




// Question 3

// function arrayOne(arr1) {
//     let min = Infinity;
//     for(let i = 0; i < arr1.length; i++) {
//         if (arr1[i] < min) {
//             min = arr1[i];
//         }
//     }
//     return min;
// }
// let arr1 = [1,2,3,4];
// let res1 = arrayOne(arr1);

// function arrayTwo(arr2) {
//     let min = Infinity;
//     for(let i = 0; i < arr2.length; i++) {
//         if (arr2[i] < min) {
//             min = arr2[i];
//         }
//     }
//     return min;
// }
// let arr2 = [2,3];
// let res2 = arrayTwo(arr2);

// function canNest(res1, res2) {
//  if(res1 > res2) {
//      return true;
//  } else {
//      return false;
//  }
// }

// let result = canNest(res1,res2);
// console.log(result);

// or

function canNest(arr1, arr2) {
    if (Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2)) {
        return true;
      } else return false;
}
  
let arr1 = [1,2,3,4];
let arr2 = [0,6];
let result = canNest(arr1, arr2);
console.log(result);




// Question 4

// only keys

// function toArray(obj) {
//     let key = Object.keys(obj);
//     return key;
// }
// let result = toArray( {a: 1, b: 2} );
// console.log(result);


// key and values

function toArray(obj) {
    let sol = [];
    for (key of Object.keys(obj)) {
      sol.push([key, obj[key]]);
    }
    return sol;
}
let result = toArray( { shrimp: 15, tots: 12} );
console.log(result);



// Question 5


function keysAndValues(obj) {
    let sol = [];
    let a1 = [];
    let a2 = [];
    for (key of Object.keys(obj)) {
      a1.push(key);

    }
    for (key of Object.values(obj)) {
        a2.push(key);
    }
    console.log(a1.concat(a2));

    let arr1 = Object.keys(obj);
    let arr2 = Object.values(obj);
    let sorted = [arr1, arr2];
    return sorted;
}
let result = keysAndValues( { key1: true, key2: false, key3: undefined} );
console.log(result);
