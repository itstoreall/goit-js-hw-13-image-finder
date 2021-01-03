import apiService from './apiService.js';
import updateImagesMarkup from './update-markup.js';

const io = new IntersectionObserver(entries => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         apiService.fetchImages().then(hits => {

            updateImagesMarkup(hits);
         });
      };
   });
});

const boxRef = document.querySelector('.js-box');

io.observe(boxRef);