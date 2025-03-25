const str = '𠮷';
console.log(str.length); // 2
const code = str.codePointAt();
console.log(code); // 134071
const afterStr = String.fromCodePoint(code);
console.log(afterStr); // 𠮷
