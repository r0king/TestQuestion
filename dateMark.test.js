
const dateMark = require('./dateMark');

const testDict1 = {
  '2020-01-01': 6,
  '2020-01-04': 12,
  '2020-01-05': 14,
  '2020-01-06': 8,
  '2020-01-07': 4
}
const testDict2 = {
  '2020-01-01': 3,
  '2020-01-02': 4,
  '2020-01-03': 6,
  '2020-01-04': 8,
  '2020-01-05': 2,
  '2020-01-06': -6,
  '2020-01-07': 2,
  '2020-01-08': -2
}
const testResult1 = { Mon: 8, Tue: 4, Wed: 6, Thu: 8, Fri: 10, Sat: 12, Sun: 14 }
const testResult2 = { Mon: -6, Tue: 2, Wed: -2, Thu: 4, Fri: 6, Sat: 8, Sun: 2 }
describe("Test date with marks", () => {
  test("Test (1) in form", () => {
    const result = dateMark(testDict1)
    expect(JSON.stringify(result)).toBe(JSON.stringify(testResult1));
  });
  test("Test (2) in form", () => {
    const result = dateMark(testDict2)
    console.log(result)
    expect(JSON.stringify(result)).toBe(JSON.stringify(testResult2));
  });
})