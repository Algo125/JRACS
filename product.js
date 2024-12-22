const filterButtons = document.querySelectorAll(".filter-buttons button");
const filterableCards = document.querySelectorAll(".filterable-card .card");

const filterCards = (e) => {
    // Remove 'active' class from the currently active button
    document.querySelector(".filter-buttons .active").classList.remove("active");
    e.target.classList.add("active");
    console.log(e.target);

    // Iterate through all cards and filter them
    filterableCards.forEach(card => {
        card.classList.add("hide"); // Add the 'hide' class to all cards
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide"); // Remove the 'hide' class if the card matches the filter
        }
    });
};

// Attach event listener to each button
filterButtons.forEach(button => button.addEventListener("click", filterCards));

function resizeTextOnOverflow(element) {
    // Get the initial font size
    let fontSize = parseInt(window.getComputedStyle(element).fontSize);

    // Check if the text overflows
    while (element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth) {
        if (fontSize <= 6) break; // Minimum font size limit
        fontSize -= 1; // Reduce the font size
        element.style.fontSize = fontSize + "px"; // Set the new font size
    }
}

// Call the function on text elements
document.querySelectorAll('.card-title, .card-text').forEach(el => {
    resizeTextOnOverflow(el);
});

const searchBar = document.getElementById("search-bar");

searchBar.addEventListener("input", (e) => {
    const searchQuery = e.target.value.toLowerCase();
    filterableCards.forEach(card => {
        const title = card.querySelector(".card-title").textContent.toLowerCase();
        const text = card.querySelector(".card-text").textContent.toLowerCase();
        if (title.includes(searchQuery) || text.includes(searchQuery)) {
            card.classList.remove("hide");
        } else {
            card.classList.add("hide");
        }
    });
});


