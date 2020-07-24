const inspirations = require('./inspirations.json').list;
const len = inspirations.length;


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

console.log('Three random options:');

for (var i = 0; i < 3; i++) {
  console.log('* ', inspirations[getRandomInt(len)]);
}