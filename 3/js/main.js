const COMMENT_DESCRIPTIONS = ['Пляж отеля', 'Go to the beach', 'Цвет моря', 'Подруга', 'Супчик', 'Макларен', 'Десерт', 'Вкусный напиток', 'Летают самолеты', 'Храним обувь', 'Путь к морю', 'Ауди', 'Ужин', 'Пункт меню', 'Отдыхаю', 'Лечу в отпуск', 'Концерт', 'Ретро-машина', 'Тапочки с подсветкой', 'Пальмы', 'Вилка', 'Закат', 'Краб', 'Руки на концерте', 'Бегемот',];
const COMMENT_NAMES = ['Дарья', 'Алексей', 'Иван', 'Наталья', 'Юлия', 'Андрей',];
const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',];
const SIMILAR_DESCRIPTIONS_COUNT = 25;
const MAX_COMMENT_COUNT = 4;
const idMessageArray = [];
const idDescriptionArray = [];
//объявляем функцию, генерирующую случайные числа из заданного диапазона
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
//объявляем функцию, выбирающую случайный элемент заданного массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length-1)];
//объявляем функцию, формирующую коммент из  одного или двух случайных значений массива MESSAGES
const getRandomMessage = () => getRandomPositiveInteger(1, 2) < 2 ? getRandomArrayElement(MESSAGES) : `${getRandomArrayElement(MESSAGES)  } ${  getRandomArrayElement(MESSAGES)}`;
//объявляем функцию, генерирующую случайный неповторяющийся id Message
function getRandomIdMessage() {
  let idM = getRandomPositiveInteger(1, 10**10);
  // eslint-disable-next-line no-unused-expressions
  idMessageArray.includes(idM) ? getRandomIdMessage() : idMessageArray.push(idM);
  // eslint-disable-next-line no-return-assign
  return idM = idMessageArray[idMessageArray.length - 1];
}
//создаем функцию генерации одного объекта будущего массива comments
function createComment() {
  return {
    id: getRandomIdMessage(),
    avatar: `img/avatar-${  getRandomPositiveInteger(1, COMMENT_NAMES.length)  }.svg` /*'img/avatar-6.svg'*/,
    message: getRandomMessage(),
    name: getRandomArrayElement(COMMENT_NAMES),
  };
}
//объявляем функцию, генерирующую случайный неповторяющийся id Description
function getRandomIdDescription() {
  let idM = getRandomPositiveInteger(1, 25);
  // eslint-disable-next-line no-unused-expressions
  idDescriptionArray.includes(idM) ? getRandomIdDescription() : idDescriptionArray.push(idM);
  // eslint-disable-next-line no-return-assign
  return idM = idDescriptionArray[idDescriptionArray.length - 1];
}
//создаем функцию генерации одного объекта будущего массива descriptions
function createDescription() {
  const RandomIdDescription = getRandomIdDescription();
  return {
    id: RandomIdDescription,
    url: `photos/${  RandomIdDescription  }.jpg`,
    description: COMMENT_DESCRIPTIONS[RandomIdDescription-1],
    likes: getRandomPositiveInteger(15, 200),
    comments: Array.from({length: getRandomPositiveInteger(1, MAX_COMMENT_COUNT)}, createComment),
  };
}
//Генерация объекта нужной длины SIMILAR_DESCRIPTIONS_COUNT из итоговой функции createDescription
// eslint-disable-next-line no-unused-vars
const similarDescription = Array.from({length: SIMILAR_DESCRIPTIONS_COUNT}, createDescription);
