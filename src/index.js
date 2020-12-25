import refs from "./js/refs.js";
const debounce = require('lodash.debounce');
import fetchImages from "./js/apiService.js"
// import itemsTemplate from "./js/apiService.js";
import './styles.scss';

refs.searchForm.addEventListener("input", debounce((e) => {
   e.preventDefault();

   const searchQuery = e.target.value;
   fetchImages(searchQuery);
}, 500)
);