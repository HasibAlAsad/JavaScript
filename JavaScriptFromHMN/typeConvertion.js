var str = '1000';
var n = 10;
console.log( str * n);        // it shows 10000 for vs code's impilicite func 
console.log(str + n );              // yellow color = Nmber ; white color = String
console.log( Number(str) * n);
console.log( Number.parseInt(str) * n );
console.log('for var n');

console.log(n.toString());

console.log(Number(Infinity));
console.log(String(Infinity));
console.log(Boolean(Infinity));



// ******* Boolean ****
    // Falsy Value 

    // ''
    // 0
    // null
    // undefined
    // NaN

console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(4213));
console.log(Boolean('ankldkqad'));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

// Boolean to string

console.log(true);
var x = true
console.log(x.toString())
