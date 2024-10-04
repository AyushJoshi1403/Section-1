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