import "./js/apiService";
import "./js/templating";
import './styles.scss';

// 19654189-563fdc3d41881a1ec494ce492

const key = "19654189-563fdc3d41881a1ec494ce492";
const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12&key=${key}`;

fetch(url)
   .then(res => res.json())
   .then(({ hits }) => console.log(hits))
   .catch(error => console.log(error));
