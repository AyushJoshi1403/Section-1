const user = {
    name: 'Raju',
    email: 'raju@mail.com',
    password: 'abc1234'
};

console.log(user);
console.log(user.name);
console.log(user['email']);

user.password = 'xyz1234';
console.log(user);
user.address = 'Lucknow';
console.log(user);

console.log( Object.keys(user) );
console.log( Object.values(user) );

console.log('-----');

const smartPhones = {
    brand : 'Samsung',
    model : 'Galaxy M31',
    price : 14999,
    colors : ['Black', 'Blue', 'Red']
};

// change the modelof phone to 'galaxy s24'
smartPhones.model = 'Galaxy s24'
console.log(smartPhones);

//access the second color
console.log(smartPhones.colors[1]);
// console.log(smartPhones);

//replace the first color with 'White
smartPhones.colors[0]= 'White'
console.log(smartPhones);

//add a new color 'Green'
smartPhones.colors.push('Green');
console.log(smartPhones);

console.log('-----');

const smartphoneArray = [
    {
        brand : 'Samsung',
        model : 'Galaxy M31',
        price : 13999,
        colors : ['Black', 'Blue', 'Red'],
    },
    {
        brand : 'OnePlus',
        model : '8T',
        price : 42999,
        colors : ['Black', 'Silver'],
    },
    {
        brand : 'Apple',
        model : 'iPhone 12',
        price : 79900,
        colors : ['Black', 'White', 'Green'],
    },
    {
        brand : 'Xiaomi',
        model : 'Redmi Note 9 Pro',
        price : 15999,
        colors : ['Black', 'Blue', 'Red'],
    },
    {
        brand : 'Realme',
        model : 'Narzo 20 Pro',
        price : 18999,
        colors : ['Black', 'White', 'Green'],
    },
];

console.log('-----');

console.log(smartphoneArray.length);

console.log('-----');

console.log(smartphoneArray[1].price);

console.log('-----');

// access 2nd color of third phone

console.log(smartphoneArray[2].colors[1]);

console.log('-----');

// replace the first color of 4th phone with 'Silver'

smartphoneArray[3].colors[0]= 'Silver'
console.log(smartphoneArray[3]);

console.log('-----');

//add a new color 'yellow' to 5th phone

smartphoneArray[4].colors.push('Yellow')
console.log(smartphoneArray[4]);

console.log('-----');

const budgetPhones = smartphoneArray.filter( ( phone ) => {return phone.price > 15000 && phone.price < 20000 } );
console.log(budgetPhones);

console.log('-----');

// display only brands

const brands = smartphoneArray.map((phone) => { return phone.brand })
console.log(brands);

console.log('-----');

// filter all phones having 'Black' color

const blackPhones = smartphoneArray.filter( (phone) => {return phone.colors.includes('Black') } )
console.log(blackPhones);

console.log('-----');

// filter all samsung phones

const samsungPhones = smartphoneArray.filter( (phone) => {return phone.brand.includes('Samsung') } )
console.log(samsungPhones);

console.log('-----');

const keyword = 'Sam';
const filteredPhones = smartphoneArray.filter((phone) => {
    return phone.brand.toLowerCase().includes(keyword.toLowerCase())
});
console.log(filteredPhones);

console.log('-----');
