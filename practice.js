let arr = [2, 3, 5, 56, 76, 56, 67, 4];

for(i=0; i<arr.length; i++){
    for(j=0; j<arr.length; j++){
        if(arr[j] > arr[j+1]){
            let newEl;
            newEl = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = newEl;
        }
        else if(arr[j] === arr[j+1]){
            delete arr[j];
        }
    }
}

console.log(arr.join(","));

console.log(arr[arr.length-1])
console.log(arr[3])
let max = arr[0];
// console.log(max)
for (i = 0; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log(max);

swaping

let a = 8;
let b = 18;
let c;

c = a;
a = b;
b = c;

[a,b] = [b,a]

a = a+b;
b = a-b;
a = a-b

console.log(a);
console.log(b)
console.log(c);

let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numArr.map(item => {
    // console.log(item)
    setTimeout(() => console.log(item), 2000)
})

for (let i = 0; i < numArr.length; i++) {
  setTimeout(() => console.log(i), 2000);
}


console.log(1);
setTimeout(() => {console.log(2)}, 1000);
setTimeout(() => {console.log(3)}, 0);
console.log(4)

console.log(1 == true)

console.log(1 === true)
