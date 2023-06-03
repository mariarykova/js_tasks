// create a function which convert roman numbers to arabic

const romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToArabic(num) {
  const romanArr = num.toUpperCase().split("");

  return romanArr.reduce((accumulator, currentValue, index) => {
    const currentValueNum = romanNumerals[currentValue];
    const nextValueNum = romanNumerals[romanArr[index + 1]];

    nextValueNum && currentValueNum < nextValueNum
      ? (accumulator -= currentValueNum)
      : (accumulator += currentValueNum);

    return accumulator;
  }, 0);
}

console.log(romanToArabic("XXIV")); // Output: 24
console.log(romanToArabic("IV")); // Output: 4
console.log(romanToArabic("LXIX")); // Output: 69
console.log(romanToArabic("III")); // Output: 3
