function fetchImages(searchQuery) {
   
   const key = "19654189-563fdc3d41881a1ec494ce492";
   const root = "https://pixabay.com/api/";
   const url = `${root}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${key}`;

   return fetch(url)
      .then(res => res.json())
      .then(data => data.hits)
      .catch(error => console.log(error));
};

export default fetchImages;