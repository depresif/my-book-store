const books = [
  {
    id: 1,
    image: "https://kbimages1-a.akamaihd.net/b7697299-e92b-48d1-ab35-a74dccb8ffa6/1200/1200/False/dead-poets-society-4.jpg",
    name: "Dead Poets Society",
    author: "Nanch H. Kleinbaum",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, vero iure voluptatum doloremque dolor ipsum repudiandae temporibus!"
  },
  {
    id: 2,
    image: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, vero iure voluptatum doloremque dolor ipsum repudiandae temporibus!"
  },
  {
    id: 3,
    image: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982146702/the-great-gatsby-9781982146702_hr.jpg",
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, vero iure voluptatum doloremque dolor ipsum repudiandae temporibus!"
  },
  {
    id: 4,
    image: "https://kbimages1-a.akamaihd.net/ad12ce73-aa34-473e-9a53-77a50360c239/1200/1200/False/pride-prejudice-13.jpg",
    name: "Pride and Prejudice",
    author: "Jane Austen",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, vero iure voluptatum doloremque dolor ipsum repudiandae temporibus!"
  },
];

$(document).ready(() => {
  $("#book-search-input").focus();
  
  books.forEach((book) => {
    let baseCard = `
    <div class="column is-3 is-ancestor book-card" id="${book.id}">
      <div class="card">
        <div class="card-image">
          <figure class="image is-2by3">
            <img rel="prefetch" src="${book.image}" alt="${book.name}">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">${book.name}</p>
              <p class="subtitle is-6">${book.author}</p>
            </div>
          </div>
          <div class="content">
            ${book.info}
          </div>
        </div>
      </div>
    </div>
    `;

    $('#books').append(baseCard);
  });

  function updateBooksByName({ name }) {
    $('.book-card').each((index, div) => {
      let bookTitle = $(div).find('.title').text();
      if (!bookTitle.toLowerCase().includes(name)) {
        $(div).hide();
      } else {
        $(div).show();
      };
    });
  };

  let waitTimeout;
  $('#book-search-input').keydown(() => {
    clearTimeout(waitTimeout);
  });
  
  $('#book-search-input').keyup(() => {
    waitTimeout = setTimeout(() => {
      updateBooksByName({ name: $('#book-search-input').val() });
    }, 450);
  });
  
});