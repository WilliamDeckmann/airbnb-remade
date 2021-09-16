document.addEventListener("DOMContentLoaded", () => {
    
    // Element variable
    const offersList = document.querySelector(".Offers__list");

    // Fetch data
    fetch("./json/residence.json")
        .then((response) => response.json())
        .then((residenceData) => {

            // For each Facilities-list item
            residenceData.residences[0].offers.forEach((item) => {

                // Create, append & add content
                let offer = document.createElement("li")
                offersList.appendChild(offer);
                offer.classList.add("Offers__items");
                offer.innerHTML = 
                `<i class="${item.icon}"></i>
                <p class="Offers__description">
                    ${item.title}
                </p>`;

                // Offer - description variable
                let offerDescription = document.querySelector(".Offers__description");

                // Check if item is provided
                if(!item.provided.type == true) {
                    console.log("hey")
                    offerDescription.classList.add(item.provided.style[0]);
                    offerDescription.classList.add(item.provided.style[1]);
                };
            });
        })
});