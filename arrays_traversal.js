const nums = [3, 7, 9, 2, 1, 6, 8];

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
}

console.log('-----')

for(let n of nums){
    console.log(n);
}

console.log('-----')

nums.forEach((a,b) => { console.log(a,b); });

// WAP to print all even numbers from the array

for (let i = 0; i < nums.length; i++) {
    if (nums[i] %2 == 0)
    console.log(nums[i]);
}

//or

nums.forEach((a) => {
    if(a%2 === 0){
        console.log(a);
    }
});

console.log('-----')

//WAP to filter all odd numbers

const odds = [];
nums.forEach((a) => {
    if(a % 2 !== 0){
        // console.log(a);
        odds.push(a)     
    }
});

console.log(odds);

console.log('-----')

//WAP to store square of all nums in another array

const square = [];
nums.forEach((a) => {
    // (a ** 2)
    square.push(a**2)
})

console.log(square);

console.log('-----')

// Map Functions
const sqr = nums.map( (n) => { return n**2 } );
console.log(sqr);

console.log('-----')

const names = [ 'raju', 'ramu', 'pinki', 'kaliya', 'chutki' ];

console.log( 'sdsd'.toUpperCase() );

const upperNames = names.map( (n) => {return n.toUpperCase() } );
console.log(upperNames);

console.log('-----')

const prices = [ '$234.56', '$345.67', '$456.78', '$567.89', '$678.90' ];

//WAP to convert all prices to integer

const intPrices = prices.map( (p) => {return parseInt(p.slice(1)) } )
console.log(intPrices);

console.log('-----')

// [ 234, 345, 456, 567, 678 ]
// add 18% GST to all prices

const prices2 =[2400,340,890,430,12000,340];

const gstPrices = prices2.map( (p) => {return (p + p*0.18) } )
console.log(gstPrices);

console.log('-----');

const fullnames = [ 'Ayush Joshi', 'Ankit Singh', 'Shreyansh Saxena', 'Hamid Khan' ];

const firstNames = fullnames.map( (p) => {return p.split(' ')[0] } );
console.log(firstNames);

console.log('-----')
