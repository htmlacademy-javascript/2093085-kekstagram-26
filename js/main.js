const SIMILAR_DESCRIPTIONS_COUNT = 25;
const COMMENT_DESCRIPTIONS = ['Пляж отеля', 'Go to the beach', 'Цвет моря', 'Подруга', 'Супчик', 'Макларен', 'Десерт', 'Вкусный напиток', 'Летают самолеты', 'Храним обувь', 'Путь к морю', 'Ауди', 'Ужин', 'Пункт меню', 'Отдыхаю', 'Лечу в отпуск', 'Концерт', 'Ретро-машина', 'Тапочки с подсветкой', 'Пальмы', 'Вилка', 'Закат', 'Краб', 'Руки на концерте', 'Бегемот',];
const MIN_LIKES_COUNT = 15;
const MAX_LIKES_COUNT = 200;
const MIN_ID_DESCRIPTIONS_COUNT = 1;
const MAX_ID_DESCRIPTIONS_COUNT = 25;

const idDescriptionArray = [];

const MIN_COMMENT_COUNT = 1;
const MAX_COMMENT_COUNT = 4;
const COMMENT_NAMES = ['Дарья', 'Алексей', 'Иван', 'Наталья', 'Юлия', 'Андрей',];
const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',];

const idMessageArray = [];

//объявляем функцию, генерирующую случайные числа из заданного диапазона
const getRandomPositiveInteger = (a, b) => {
  const aAbs = Math.abs(a);
  const bAbs = Math.abs(b);
  const lower = Math.ceil(Math.min(aAbs, bAbs));
  const upper = Math.floor(Math.max(aAbs, bAbs));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};

//объявляем функцию, выбирающую случайный элемент заданного массива
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

//объявляем функцию, формирующую коммент из  одного или двух случайных значений массива MESSAGES
const getRandomMessage = () => getRandomPositiveInteger(1, 2) < 2 ? getRandomArrayElement(MESSAGES) : `${getRandomArrayElement(MESSAGES)  } ${  getRandomArrayElement(MESSAGES)}`;

//объявляем функцию, генерирующую случайный неповторяющийся id Message
function getRandomIdMessage() {
  const idM = getRandomPositiveInteger(MIN_COMMENT_COUNT, MAX_COMMENT_COUNT*SIMILAR_DESCRIPTIONS_COUNT);
  if (idMessageArray.includes(idM)) {
    getRandomIdMessage();
  } else {
    idMessageArray.push(idM);
  }

  return idMessageArray[idMessageArray.length - 1];
}

//создаем функцию генерации одного объекта будущего массива comments
function createComment() {
  return {
    id: getRandomIdMessage(),
    avatar: `img/avatar-${  getRandomPositiveInteger(MIN_COMMENT_COUNT, COMMENT_NAMES.length)  }.svg` /*'img/avatar-6.svg'*/,
    message: getRandomMessage(),
    name: getRandomArrayElement(COMMENT_NAMES),
  };
}

//объявляем функцию, генерирующую случайный неповторяющийся id Description
function getRandomIdDescription() {
  const idM = getRandomPositiveInteger(MIN_ID_DESCRIPTIONS_COUNT, MAX_ID_DESCRIPTIONS_COUNT);
  if (idDescriptionArray.includes(idM)) {
    getRandomIdDescription();
  } else {
    idDescriptionArray.push(idM);
  }

  return idDescriptionArray[idDescriptionArray.length - 1];
}

//создаем функцию генерации одного объекта будущего массива descriptions
function createDescription() {
  const randomIdDescription = getRandomIdDescription();

  return {
    id: randomIdDescription,
    url: `photos/${  randomIdDescription  }.jpg`,
    description: COMMENT_DESCRIPTIONS[randomIdDescription-1],
    likes: getRandomPositiveInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
    comments: Array.from({length: getRandomPositiveInteger(MIN_COMMENT_COUNT, MAX_COMMENT_COUNT)}, createComment),
  };
}

//Генерация объекта нужной длины SIMILAR_DESCRIPTIONS_COUNT из итоговой функции createDescription
// eslint-disable-next-line no-unused-vars
const similarDescription = Array.from({length: SIMILAR_DESCRIPTIONS_COUNT}, createDescription);
