const text = 'world';
const template = `Hello,\n ${text}!`;
console.log(template.length); // 14
const raw = String.raw`Hello,\n\t ${text}!`;
console.log(raw); // Hello,\n\t world!
console.log(raw.length); // 17
const raw2 = String.raw({ raw: ['Hello', '\n\t', 'ok'] }, 'world', 'I am');
console.log(raw2); // Hello(换行)world I amok
console.log(raw2.length); // 18
