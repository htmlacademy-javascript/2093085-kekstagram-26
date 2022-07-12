import {createDescriptions} from './descriptions-create.js';
const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');
const listFragment = document.createDocumentFragment();

createDescriptions.forEach((description) => {
  const thumbnailElement = thumbnailTemplate.cloneNode(true);
  thumbnailElement.querySelector('.picture__img').src = description.url;
  thumbnailElement.querySelector('.picture__likes').textContent = description.likes;
  thumbnailElement.querySelector('.picture__comments').textContent = description.comments.length;
  listFragment.appendChild(thumbnailElement);
});

export {listFragment};
