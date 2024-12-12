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
