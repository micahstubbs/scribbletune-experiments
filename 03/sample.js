const scribble = require('scribbletune');
const clip = scribble.clip({
  notes: ['c4'],
  pattern: 'x'.repeat(16),
  accentMap: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 127, 127, 127]
  // sizzle: true
});  

scribble.midi(clip, 'sample.mid');