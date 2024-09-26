function addNums(a,b){
    var c = a+b;

    console.log(c);
}

addNums(34,21);

// console.log(c);

console.log('-----');

const getAvg = function(m1,m2,m3){
    var avg = (m1+m2+m3)/3;
    // console.log(avg);

    return avg;
}

const result = getAvg(782,353,782);

console.log(result);

console.log('-----');

const factorial = (n) => {
    let fact = 1;

    for(let i=1; i<=n; i++){
        fact = fact * i;
    }

    return fact;
}

const f1 = factorial(5);
console.log(f1);

console.log('-----');