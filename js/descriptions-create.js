import {getRandomArrayElement, getRandomPositiveInteger} from './util.js';
import {SIMILAR_DESCRIPTIONS_COUNT, PHOTO_DESCRIPTIONS, MIN_LIKES_COUNT, MAX_LIKES_COUNT, MIN_ID_DESCRIPTIONS_COUNT, MAX_ID_DESCRIPTIONS_COUNT, MIN_COMMENT_COUNT, MAX_COMMENT_COUNT, USERS_NAMES, COMMENTS_VALUE} from './data.js';

const idDescriptionArray = [];

const idCommentArray = [];

//объявляем функцию, формирующую коммент из  одного или двух случайных значений массива COMMENTS_VALUE
const getRandomComment = () => getRandomPositiveInteger(1, 2) < 2 ? getRandomArrayElement(COMMENTS_VALUE) : `${getRandomArrayElement(COMMENTS_VALUE)  } ${  getRandomArrayElement(COMMENTS_VALUE)}`;

//объявляем функцию, генерирующую случайный неповторяющийся id Comment
function getRandomIdComment() {
  const idM = getRandomPositiveInteger(MIN_COMMENT_COUNT, MAX_COMMENT_COUNT * SIMILAR_DESCRIPTIONS_COUNT);
  if (idCommentArray.includes(idM)) {
    getRandomIdComment();
  } else {
    idCommentArray.push(idM);
  }

  return idCommentArray[idCommentArray.length - 1];
}

//создаем функцию генерации одного объекта будущего массива comments
function createComment() {
  return {
    id: getRandomIdComment(),
    avatar: `img/avatar-${  getRandomPositiveInteger(MIN_COMMENT_COUNT, USERS_NAMES.length)  }.svg` /*'img/avatar-6.svg'*/,
    message: getRandomComment(),
    name: getRandomArrayElement(USERS_NAMES),
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
    description: PHOTO_DESCRIPTIONS[randomIdDescription - 1],
    likes: getRandomPositiveInteger(MIN_LIKES_COUNT, MAX_LIKES_COUNT),
    comments: Array.from({length: getRandomPositiveInteger(MIN_COMMENT_COUNT, MAX_COMMENT_COUNT)}, createComment),
  };
}

//Генерация объекта нужной длины SIMILAR_DESCRIPTIONS_COUNT из итоговой функции createDescription
const createDescriptions = Array.from({length: SIMILAR_DESCRIPTIONS_COUNT}, createDescription);

export {createDescriptions};
