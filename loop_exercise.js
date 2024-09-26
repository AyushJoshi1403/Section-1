// WAP to print a fibbonacci series

let [a, b] = [0, 1];

console.log(a);
console.log(b);

for(let i=0; i<8; i++){
    let c =a+b;
    console.log(c);
    [a, b] = [b, c]
}

console.log('-----');

let n = 234;
let sqrt = n**0.5
if(Number.isInteger(sqrt)){
    console.log("Perfect square");
}

// WAP to print all perfect squares in range of 50 to 1000;

for(let i=50; i<=1000; i++){
    let sqrt = i**0.5
    if(Number.isInteger(sqrt)){
        console.log(i);
    }
}

console.log('-----');

// WAP to print all prime numbers in range of 50 to 1000;

for(let num=50; num<=1000; num++){
    
    let prime = true;

    for(let i=2; i<num; i++){
        if(num % i === 0){
        // console.log('not prime');
        prime = false;
        break;
        }
    }

    if(prime) console.log(num);
}

console.log('-----');