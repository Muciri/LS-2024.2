//map
const a = [1,3,5];
const b = a.map( (x) => 2*x );
//filter
const x = [1,3,6];
const y = x.filter( (x) => x%2===1 );
//reduce
const values = [1,2,3,4,5]
const sum = values.reduce( (acc,values) => values+acc, 0 );
//find
const investments = [ {symbol: 'AAPL', actions: 10000}, {symbol: 'GOOGLE', actions: 15000}, {symbol: 'Nintendo', actions: 12000} ]
const google = investments.find( (x) => x.symbol === 'GOOGLE' )
//testes
console.log(b)
console.log(y)
console.log(sum)
console.log(google)