const arr = ['hello' , 345 , true];
console.log( typeof arr );
console.log( Array.isArray(arr) );

console.log('-----')

const movies = [ 'Stree2', 'Salaar', 'Pathan', 'John Wick', 'Spiderman' ];

console.log( movies.length ); //also works for strings

console.log('-----')

// indexing
console.log( movies[2] ); //also works for strings
console.log( movies.indexOf('Spiderman') ); //also works for strings

console.log( movies[-2] );
console.log( movies.at(-2) ); //also works for strings

console.log('-----')

movies[2] = 'James Bond';

console.log( movies );

console.log('-----')

// slicing

console.log(movies.slice(1,4)); //also works for strings
console.log(movies.slice(2));
console.log(movies.slice(-3));

console.log('-----')

// adding and removing elements

movies.push('Batman'); //adds at the end
movies.unshift('Superman'); // adds to the beginning

console.log(movies);

console.log('-----')

movies.pop(); // removes from the end
movies.shift(); // removes from the beginning

console.log(movies);

console.log('-----')

// movies.splice(2, 2,); //removes to elements starting from index 2
// movies.splice(2, 2, 'Flash', 'Arrow'); // replaces 2 elements starting from index 2
movies.splice(2, 0, 'Flash', 'Arrow'); // inserts 2 elements starting from index 2
console.log(movies);

console.log('-----')





