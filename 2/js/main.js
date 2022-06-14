function getRandomIntInclusive (min, max) {
  let result;
  if (min < 0 || max < 0 || max <= min) {
    result = 'Проверьте, пожалуйста, введенный диапазон чисел: диапазон может быть только положительный, включая ноль, а максимальное значение должно превышать минимальное.';
  } else {
    min = Math.ceil(min);
    max = Math.floor(max);
    result = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return result;
}
getRandomIntInclusive (0, 100);
// я не до конца понял ТЗ в части того, что должно стать результатом поведения функции при (min < 0 || max < 0 || max <= min), поэтому предварительно вывел сообщение о возникновении такого варианта в консоль.

function isStringLengthGood (testString, maxLengthString) {
  const result = testString.length <= maxLengthString;
  return result;
}
isStringLengthGood ('qqq', 5);
//мне кажется, что код тела этой функции можно уменьшить тернарным оператором, но пока сложно понять - как именно.
