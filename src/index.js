import apiService from "./js/apiService.js"
import updateImagesMarkup from "./js/update-markup";
import refs from "./js/refs.js";
const debounce = require('lodash.debounce');
// import fetchImages from "./js/apiService"
import './styles.scss';

refs.searchInput.addEventListener("input", debounce(e => {
   e.preventDefault();

   const input = e.target;
   apiService.query = input.value;

   if (apiService.query.length < 1) {
      refs.galleryRef.innerHTML = "";
   } else {
      refs.galleryRef.innerHTML = "";

      apiService.resetPage();

      apiService.fetchImages().then(hits => {
         updateImagesMarkup(hits);
      });
   };

}, 1000));

refs.loadMoreBtn.addEventListener("click", () => {
   apiService.fetchImages().then(hits => {
         updateImagesMarkup(hits);
      });
})