import itemsTemplate from "../templates/gallery-items.hbs";

console.log(itemsTemplate);

const items = [{
   "comments": 78,
   "downloads": 63296,
   "largeImageURL": "https://pixabay.com/get/57e5d54b4c53af14f6da8c7dda793376173cd8e7524c704c702873dc9f44c551_1280.jpg",
   "likes": 575,
   "views": 127450,
   "webformatURL": "https://cdn.pixabay.com/photo/2016/07/10/21/47/cat-1508613_150.jpg",
}];

const markup = itemsTemplate(items)

console.log(markup);

const galleryRef = document.querySelector('.gallery');

galleryRef.insertAdjacentHTML("beforeend", markup);

// console.log("items ",items);

// const markup = itemsTemplate(items);

// console.log("markup ",markup);

// export default items;