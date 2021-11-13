import { galleryItems } from './gallery-items.js';
// Change code below this line

import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainar = document.querySelector('.gallery');
const cardsMarkup = createImgCardsMarkup(galleryItems);
galleryContainar.insertAdjacentHTML('beforeend', cardsMarkup);

function createImgCardsMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}

galleryContainar.addEventListener('click', onGalleryLinkClick);

console.log(galleryItems);

function onGalleryLinkClick(evt) {
  evt.preventDefault();
  const urlLinkOriginalImg = evt.target.dataset.source;
  const isGalleryLinkEl = evt.target.classList.contains('gallery__image');
  if (!isGalleryLinkEl) {
    return;
  }

  const instance = basicLightbox.create(
    `<img src="${urlLinkOriginalImg}" width="800" height="600">`,
  );

  instance.show();

  return urlLinkOriginalImg;
}
