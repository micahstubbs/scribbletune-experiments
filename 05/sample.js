const scribble = require('scribbletune');
const d3 = require('d3');

const accentScale = d3.scaleLinear()
  .domain([0, 64])
  .range([70, 127]);

const accentMap = d3.range(16).map(d =>  accentScale(d) * Math.random());
console.log('accentMap generated with d3.range()', accentMap);

// make the last note a downbeat
// do this by monkey-patching a small accent value
accentMap[accentMap.length - 1] = accentScale.range()[1];

const clip = scribble.clip({
  // notes: ['e4', 'b4', 'a#4'],
  notes: ['e4', 'b4', 'cMaj'],
  pattern: 'x-xxx-xx-'.repeat('16'),
  noteLength: '1/64',
  accentMap,
  sizzle: false
});  

d3.range([])

scribble.midi(clip, 'sample.mid');