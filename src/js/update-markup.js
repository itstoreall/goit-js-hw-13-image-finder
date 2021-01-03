import myNoties from "./notifications.js";
import refs from "./refs.js";
import itemsTemplate from "../templates/gallery-items.hbs";

function updateImagesMarkup(hits) {
   const markup = itemsTemplate(hits);

   if (hits.length === 0) {
      myNoties.myError()
      refs.loadMoreSpan.classList.remove('is-hidden');
   } else if (hits.length > 0 && hits.length <= 12) {
      refs.galleryRef.insertAdjacentHTML("beforeend", markup);
      myNoties.mySuccess(); 
   };
};

export default updateImagesMarkup;