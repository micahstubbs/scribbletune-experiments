const scribble = require('scribbletune');
const clip = scribble.clip({
    notes: ['F#m', 'C#m', 'Dmaj', 'Bm', 'Emaj', 'Amaj', 'Dmaj', 'C#m', 'Amaj'],
    pattern: 'x___x-'.repeat(1),
    // accentMap: 'x'
    sizzle: true
});  

scribble.midi(clip, 'sample.mid');