
const dateMark = require('./dateMark');
const testDict = {
    '2020-01-01': 6,
    '2020-01-02': 0,
    '2020-01-03': 0,
    '2020-01-04': 12,
    '2020-01-05': 14,
    '2020-01-06': 8,
    '2020-01-07': 4
}
// console.log(dateMark)
const result = dateMark(testDict)
console.log(result)