const {shuffleArray} = require('./utils')

describe('shuffleArray should return an array', () => {
    test('Should return an array', () => {
        let arr = [1, 2, 3, 4, 5]
        let result = shuffleArray(arr)
        expect(result).toHaveProperty('length')
    })
    
    test('Should return an array of same length', () => {
        let arr = [1, 2, 3, 4, 5]
        let result = shuffleArray(arr)
        expect(result.length).toEqual(arr.length)
    })
    
})