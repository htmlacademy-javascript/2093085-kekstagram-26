const getRandomPositiveInteger = (a, b) => { //генерируруем случайные числа из заданного диапазона
  const aAbs = Math.abs(a);
  const bAbs = Math.abs(b);
  const lower = Math.ceil(Math.min(aAbs, bAbs));
  const upper = Math.floor(Math.max(aAbs, bAbs));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)]; //выбираем случайный элемент заданного массива

const checkStringLength = (currentString, maxLength) => currentString.length <= maxLength; //проверка максимальной длины строки

export {getRandomArrayElement, getRandomPositiveInteger, checkStringLength};
