/*
* Main message: Undefined isn't null ;)
*/

var x;

console.log("var x; ... x == null? ", x == null);               // true
console.log("var x; ... x == undefined?, ", x == undefined);    // true
console.log("var x; ... x === null? ", x === null);             // false
console.log("var x; ... x === undefined? ", x === undefined);   // true

var y = null;

console.log("var y = null; ... y == null? ", y == null);               // true
console.log("var y = null; ... y == undefined? ", y == undefined);     // true
console.log("var y = null; ... y === null? ", y === null);             // true
console.log("var y = null; ... y === undefined? ", y === undefined);   // false

console.log("var x; ... typeof ", typeof x);                           // 'undefined'
console.log("var y; ... typeof ", typeof y);                           // 'object'

var z = { abc: null };

console.log("var z = {abc: null}; ... z.abc == null? ", z.abc == null);                 // true
console.log("var z = {abc: null}; ... z.abc == undefined? ", z.abc == undefined);       // true
console.log("var z = {abc: null}; ... z.abc === null? ", z.abc === null);               // true
console.log("var z = {abc: null}; ... z.abc === undefined? ", z.abc === undefined);     // false

console.log("z.xyz == null? ", z.xyz == null);              // true
console.log("z.xyz == undefined? ", z.xyz == undefined);    // true
console.log("z.xyz === null? ", z.xyz === null);            // false
console.log("z.xyz === undefined? ", z.xyz === undefined);  // true
