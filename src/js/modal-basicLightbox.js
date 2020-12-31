import refs from './refs';
import * as basicLightbox from 'basiclightbox';
import "basiclightbox/dist/basicLightbox.min.css";

const instance = basicLightbox.create(refs.modalTemplate, {
   onShow(instance) {
      // const closeModalBtnRef = getCloseModalBtnRef(instance);
      // closeModalBtnRef.addEventListener('click', instance.close);

      window.addEventListener('keydown', closeModalEsc);
   },

   onclose(instance) {
      const closeModalBtnRef = getCloseModalBtnRef(instance);
      closeModalBtnRef.removeEventListener('click', instance.close);
   },
});

refs.galleryRef.addEventListener('click', e => {
   const targetId = e.target.id;
   const dataId = e.target.dataset.openModal;
   const targetSrc = e.target.dataset.src;

   if (targetId === dataId) {
      instance.show()
      const modalImg = document.querySelector('.lightbox__image');
      modalImg.src = targetSrc;
   } 
})

// Close modal
// function getCloseModalBtnRef(parent) {
//    return parent.element().querySelector('.js-close-modal');
// }

// Close modal by escape
function closeModalEsc(e) {
   if (e.code === 'Escape') {
      instance.close();
   };
   
   window.removeEventListener('keydown', closeModalEsc);
};

export default instance;