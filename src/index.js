import apiService from "./js/apiService.js"
import updateImagesMarkup from "./js/update-markup";
import refs from "./js/refs.js";
const debounce = require('lodash.debounce');
import './styles.scss';
import './js/modal-basicLightbox';

refs.searchInput.addEventListener("input", debounce(e => {
   e.preventDefault();

   const input = e.target;
   apiService.query = input.value;

   if (apiService.query.length < 1) {
      refs.galleryRef.innerHTML = "";
      refs.loadMoreBtn.classList.remove('is-hidden');

   } else {
      refs.galleryRef.innerHTML = "";
      apiService.resetPage();

      apiService.fetchImages().then(hits => {
         updateImagesMarkup(hits);

         refs.loadMoreBtn.classList.add('is-hidden');
      });
   };

}, 1000));

refs.loadMoreBtn.addEventListener("click", () => {
   apiService.fetchImages().then(hits => {
      updateImagesMarkup(hits);
      
      setTimeout(() => {
         window.scrollTo({
            top: document.documentElement.offsetHeight,
            behavior: 'smooth'
            });
      }, 700)
      
      });
})

