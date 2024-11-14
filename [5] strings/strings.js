import * as lib from './lib.js'

console.log(lib.createlist_num(8, 'texto'));

let ieee = ['maçã', 'banana', 'uva']

console.log(lib.createlist_list(ieee))

let ieee2 = 'maçã banana uva'

console.log(lib.createlist_list(ieee2.split(' ')))