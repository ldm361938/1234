const template = require('art-template');
const path = require('path');
let m1 = path.join(__dirname, 'views', '1.art');
console.log(m1);

let h1 = template(m1, { name: '张三', age: 20 })
console.log(h1);