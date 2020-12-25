import refs from "./refs.js";
import itemsTemplate from "../templates/gallery-items.hbs";

function updateImagesMarkup(hits) {
   const markup = itemsTemplate(hits);
   refs.galleryRef.insertAdjacentHTML("beforeend", markup);
}

export default updateImagesMarkup;