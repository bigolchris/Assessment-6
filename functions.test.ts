const {shuffleArray} = require('./utils')

test('shuffleArray should return an array', () => {
    expect(Array.isArray(shuffleArray)).toBe(true)
    
})