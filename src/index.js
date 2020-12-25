import refs from "./js/refs.js";
const debounce = require('lodash.debounce');
import fetchImages from "./js/apiService"
import updateImagesMarkup from "./js/update-markup";
import './styles.scss';

refs.searchInput.addEventListener("input", debounce(e => {
   e.preventDefault();

   const input = e.target;
   const searchQuery = input.value;

   if (searchQuery === "") {
      refs.galleryRef.innerHTML = "";
   } else {
      refs.galleryRef.innerHTML = "";
      fetchImages(searchQuery).then(updateImagesMarkup);
   };

}, 1000));