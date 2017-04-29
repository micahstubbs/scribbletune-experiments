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
  notes: ['c4'],
  pattern: 'x'.repeat(64),
  accentMap,
  // accentMap: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 127, 127, 127]
  // sizzle: true
});  

d3.range([])

scribble.midi(clip, 'sample.mid');