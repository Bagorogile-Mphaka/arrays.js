/*
const steve= ("male","35 years old","husband","software engineer");

console.log(steve[0]);
*/

const steve= ['Tall','35 years old',];
console.log(steve[0]);

steve.push('software engineer');
console.log(steve)

steve.unshift('long hair');
console.log(steve);


steve.pop();
console.log(steve);

steve.shift();
console.log(steve);
console.log(steve.includes('nice'));

steve[2]=('funny');
console.log(steve);

console.log(steve.length);
