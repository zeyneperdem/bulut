function createProfilePage() {
    const container = document.getElementById("profile-container");

    const userInfo = document.createElement("div");
    userInfo.className = "user-info";

    const userImage = document.createElement("img");
    userImage.src = "indir (3).jpg";  
    

    const userName = document.createElement("h2");
    userName.textContent = "user";

    const userStats = document.createElement("p");
    userStats.textContent = "books read: 45 | lists: 4 | reviews written: 10";

    userInfo.appendChild(userImage);
    userInfo.appendChild(userName);
    userInfo.appendChild(userStats);

    const bookLists = createBookLists();

    const reviewsSection = createReviews();

    container.appendChild(userInfo);
    container.appendChild(bookLists);
    container.appendChild(reviewsSection);
}

function createBookLists() {
    const bookListsSection = document.createElement("div");
    bookListsSection.className = "book-lists-section";

    const collectionTitle = document.createElement("h3");
    collectionTitle.textContent = "my book lists";

    const lists = [
        { name: "currently reading", books: ["images/demian.jpg", "images/f.webp"] },
        { name: "want to read", books: ["images/poems.jpg", "images/winter.jpg"] },
        { name: "favorites", books: ["images/dune.jpg", "images/circe.jpg"] }
    ];

    const listsContainer = document.createElement("div");
    listsContainer.className = "book-lists-container";

    lists.forEach(list => {
        const listContainer = document.createElement("div");
        listContainer.className = "book-list-container";

        const listTitle = document.createElement("h4");
        listTitle.textContent = list.name;
        listTitle.className = "book-list-title";
        listContainer.appendChild(listTitle);

        const booksList = document.createElement("div");
        booksList.className = "books-list";

        list.books.forEach(book => {
            const bookItem = document.createElement("div");
            bookItem.className = "book-item";
            const bookCover = document.createElement("img");
            bookCover.src = book;
            bookCover.alt = "Book Cover";
            bookCover.className = "book-cover";
            bookItem.appendChild(bookCover);
            booksList.appendChild(bookItem);
        });

        listContainer.appendChild(booksList);
        listsContainer.appendChild(listContainer);
    });

    bookListsSection.appendChild(collectionTitle);
    bookListsSection.appendChild(listsContainer);
    return bookListsSection;
}

function createReviews() {
    const reviewsSection = document.createElement("div");
    reviewsSection.className = "reviews-section";

    const reviewsTitle = document.createElement("h3");
    reviewsTitle.textContent = "my reviews";

    const reviewsList = document.createElement("ul");
    reviewsList.className = "reviews-list";

    const reviews = [
        { book: "images/ldr.jpg", review: "Lana Del Rey has tight control over her meter, rhythm, and rhyme -- like allowing a yo-yo to unravel itself yet all-the-while maintaining the power to pull it right back, exploiting its spin. Her distinctive tone and ethereal language are unmistakably Lana, but there's also homage to Sylvia Plath in the assonance which is delicious to read aloud. It feels even more vulnerable than her music, especially in the physical edition where the drafts of some poems are printed alongside the refined final versions -- the construction lines behind the rich LA landscape she details. It's a shame about the haikus at the end, which brought my rating down from 4 to 3 stars, as they appear underdeveloped and unnecessary, especially in contrast to the dense imagery and taut poetry she writes so beautifully elsewhere." },
        { book: "images/circe.jpg", review: "Do you ever just get mad because you're spending your life paying rent and dreading the next impending catastrophe when you could have been a goddess living in an enchanted island unreachable by men and only seen every ten years? You live with ancient queens of myth and you're so much a part of each other it is like a second soul within your skin. You sing hymns, burn incenses, and make fragrant oils. You call birds to sing at your windows, fall asleep in patches of magical herbs, and sit by the hearth with a lioness, cheeks glowing with the flames' light. You are so far removed from the world's sorrows, so at peace and healthy. You live into 300 years, and in the space where legends and fairytales are gathering up words, your name is among them." },
        { book: "images/ways.jpg", review: "This was a great introduction to the work of John Berger, and my doubts that this would turn into something rather dull were swiftly blown away. His approach to art isn't overly complex thus you don't have to be a cultural boffin on the subject, yet its deep on a theoretical level to challenge and stimulate the old grey matter. Ways of Seeing offers not just an idea but also an invitation to see and know the world differently. As the TV series aired in 1972 (four years before I was born) I will likely turn to youtube and try to catch an episode or two, and hopefully find it as fascinating as this book. Bravo John!" }
    ];

    reviews.forEach(review => {
        const reviewItem = document.createElement("li");
        const bookCover = document.createElement("img");
        bookCover.src = review.book;
        bookCover.alt = "Book Cover";
        bookCover.className = "book-cover";

        reviewItem.appendChild(bookCover);
        reviewItem.innerHTML += `<p>${review.review}</p>`;
        reviewsList.appendChild(reviewItem);
    });

    reviewsSection.appendChild(reviewsTitle);
    reviewsSection.appendChild(reviewsList);
    return reviewsSection;
}

window.onload = createProfilePage;
