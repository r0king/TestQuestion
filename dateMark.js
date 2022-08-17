module.exports = function solutionD(D) {
    outPut = {}
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    days.forEach(
      (value, index, array) => {
        outPut[value] = 0
      })
    for (const [key, value] of Object.entries(D)) {
      const d = new Date(key);
      const dayName = days[d.getDay() == 0 ? 6 : d.getDay() - 1];
      outPut[dayName] = outPut[dayName] ? value : outPut[dayName] + value;
    }
    let i = 0
    for (const [key, value] of Object.entries(outPut)) {
  
      let top = 0, bottom = 0
      let total = 0
      if (value == 0) {
        for (j = i; j < 6; j++) {
          let nextIndex = days[j + 1];
          if (outPut[nextIndex]) {
            bottom = outPut[nextIndex]
            total += j - i
            break;
          }
        }
        for (j = i; j > 1; j--) {
          const prev = days[j - 1];
          if (outPut[prev]) {
            top = outPut[prev]
            total += i - j
            break;
          }
        }
        let thisDay = days[i]
        outPut[thisDay] = top + (bottom - top) / (total + 2)
  
      }
      i++;
    }
    return outPut;
  }