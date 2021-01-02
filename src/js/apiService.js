import success from "./notifications.js";

const key = "19654189-563fdc3d41881a1ec494ce492";

export default {
   searchQuery: '',
   page: 1,
   fetchImages(searchQuery) {
      const root = "https://pixabay.com/api/";
      const url = `${root}?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${key}`;

      return fetch(url)
         .then(res => res.json())
         .then(({ hits }) => {
            this.incrementPage();

            success();
            
            return hits;
         });
   },

   resetPage() {
      this.page = 1;
   },

   incrementPage() {
      this.page += 1;
   },

   get query() {
      return this.searchQuery;
   },

   set query(value) {
      this.searchQuery = value;
   }
};