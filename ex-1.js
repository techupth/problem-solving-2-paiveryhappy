//Exercise 1: Roman to Integer

const romanToInt = function (s) {
  const Alphabet = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    // เช็คว่าถ้าตัวถัดไปมีค่ามากกว่าตัวปัจจุบันหรือไม่
    if (i < s.length - 1 && Alphabet[s[i]] < Alphabet[s[i + 1]]) {
     
      // ถ้าใช่ ให้นำค่าของตัวปัจจุบันไปลบออกจากผลลัพธ์

      result = result-Alphabet[s[i]];
    } else {
      // ถ้าไม่ใช่ ให้นำค่าของตัวปัจจุบันเพิ่มเข้าไปในผลลัพธ์
      result += Alphabet[s[i]];
    }
  }

  return result;
};

const result1 = romanToInt("III"); // 3
const result2 = romanToInt("LVIII"); // 58
const result3 = romanToInt("MCMXCIV"); //1994

console.log(result1, result2, result3);
