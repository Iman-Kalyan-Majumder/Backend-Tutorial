const _ = require('lodash');

const items = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];

const newItems = _.flattenDeep(items);

console.log(newItems);