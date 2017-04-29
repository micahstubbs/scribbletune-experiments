const scribble = require('scribbletune');
const clip = scribble.clip({
    notes: ['F#m', 'C#m', 'Dmaj', 'Bm', 'Emaj', 'Amaj', 'Dmaj', 'C#m', 'Amaj'],
    pattern: 'x_x_--x_x_'.repeat(2),
    sizzle: true
});  

scribble.midi(clip, 'sample.mid');