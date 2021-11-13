import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainar = document.querySelector('.gallery');
const cardsMarkup = createImgCardsMarkup(galleryItems);
galleryContainar.insertAdjacentHTML('beforeend', cardsMarkup);

function createImgCardsMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
        <li>
            <a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`;
    })
    .join('');
}

galleryContainar.addEventListener('click', onGalleryLinkClick);

function onGalleryLinkClick(evt) {
  evt.preventDefault();

  const galleryImg = evt.target;
  const parentGalleryImg = galleryImg.closest('.gallery__item').href;
  const isGalleryLinkEl = evt.target.classList.contains('gallery__image');
  if (!isGalleryLinkEl) {
    return;
  }

  return parentGalleryImg;
}

//  const gallery = galleryItems.simpleLightbox();
//   const galleryItems = document.querySelector('.gallery li');
//   gallery.next(); // Next Image
const lightbox = new SimpleLightbox('.gallery a', {
  nav: true,
  captions: true,
  //   captionsData: images.description,
  captionPosition: 'bottom',
  captionDelay: 250,
  infinite: false,
});
