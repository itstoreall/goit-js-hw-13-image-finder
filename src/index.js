import apiService from "./js/apiService.js"
import updateImagesMarkup from "./js/update-markup";
import refs from "./js/refs.js";
const debounce = require('lodash.debounce');
import myNoties from "./js/notifications";
import './js/intersectionObserver';
import './styles.scss';
import './js/modal-basicLightbox';

refs.searchInput.addEventListener("input", debounce(e => {
   e.preventDefault();

   const input = e.target;
   apiService.query = input.value;

   if (apiService.query.length < 1) {
      refs.galleryRef.innerHTML = "";
      refs.loadMoreSpan.classList.remove('is-hidden');
      myNoties.myInfo();

   } else {
      refs.galleryRef.innerHTML = "";
      apiService.resetPage();

      apiService.fetchImages().then(hits => {
         updateImagesMarkup(hits);
         refs.loadMoreSpan.classList.add('is-hidden');
      });
   };

}, 1000));