document.addEventListener("DOMContentLoaded", () => {

    // URL variables
    let url = window.location.search;
    let params = new URLSearchParams(url);
    let id = params.get("id");
    
    // Element variable
    const offersList = document.querySelector("#Offers__list_id");


    
    // Fetch data
    fetch("./json/residence.json")
        .then((response) => response.json())
        .then((residenceData) => {

            // For each residence
            residenceData.residences.forEach((residence) => {

                // For each Facilities-list item
                residence.offers.forEach((item) => {

                    // Search for id
                    if(id == residence.info.id) {

                        // Create, append & add content
                        let offer = document.createElement("li")
                        offersList.appendChild(offer);
                        offer.classList.add("Offers__items");
                        offer.innerHTML = 
                        `<i class="${item.icon}"></i>`;
                        let description = document.createElement("P")
                        offer.appendChild(description);
                        description.textContent = item.title;
        
                        // Check if item is provided
                        if(!item.provided.type == true) {
                            description.classList.add(item.provided.style[0]);
                            description.classList.add(item.provided.style[1]);
                        };
                    };
    
                });
            });



            // Initiator
            document.querySelector("#Offers__show-all_id").addEventListener("click", function() {

                // Display popup
                DisplayPopup();
            });

            // Function: Popup
            function DisplayPopup() {

                // Variables
                let popup = document.querySelector("#Popup_id");
                let closeButton = document.querySelector("#Offers-popup__close-button_id");
                let overlay = document.querySelector("#Overlay_id");

                // Display: popup
                popup.classList.add("PopupActive");
                overlay.classList.add("PopupActive");

                // Popup: close
                closeButton.addEventListener("click", function() {

                    // Remove: popup
                    popup.classList.remove("PopupActive");
                    overlay.classList.remove("PopupActive");
                });
            };
        })
});