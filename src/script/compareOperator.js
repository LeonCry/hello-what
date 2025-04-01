// 比价运算符-两侧都是字符串
console.log('abc' > 'bcd'); // false 因为 a < b
console.log('123' > '1230'); // false 因为 0 > ''
console.log('------------');
// 比较运算符-两侧都是原始类型
console.log(1 > '2'); // false 因为 1 < Number('2')
console.log(true > false); // true 因为 Number(true) = 1 > Number(false) = 0
console.log(true > 1); // false 因为 Number(true) = 1 = Number(1)
console.log(true > 'abc'); // false 因为Number('abc') = NaN
console.log(undefined < null); // false 因为 Number(undefined) = NaN
console.log(null < 1); // true 因为 Number(null) = 0 < 1
// 比较运算符-有一侧是对象
console.log('------------');
console.log({} > '1'); // true 因为{}.valueOf() = {}  {}.toString() = [object Object] 因为'[' > '1'，所以是true
console.log({} > 1); // false 因为{}.valueOf() = {}
// {}.toString() = [object Object] 相当于字符串和数字比较，属于两侧都是原始类型，将转化为数字比较 Number({}) = NaN 所以是false
