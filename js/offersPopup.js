document.addEventListener("DOMContentLoaded", () => {

    // URL variables
    let url = window.location.search;
    let params = new URLSearchParams(url);
    let id = params.get("id");
    
    // Element variable
    const sectionContainer = document.querySelector("#Offers-popup__section-container_id")
    const popup = document.querySelector("#Popup_id");
    const closeButton = document.querySelector("#Offers-popup__close-button_id");
    const overlay = document.querySelector("#Overlay_id");

    
    // Fetch data
    fetch("./json/residence.json")
        .then((response) => response.json())
        .then((residenceData) => {

            // For each residence
            residenceData.residences.forEach((residence) => {

                let idCount = 0;

                // For each Facilities-list item
                residence.offers.total.forEach((section) => {

                    // Search for id
                    if(id == residence.info.id) {

                        let offersSection = document.createElement("li")
                        sectionContainer.appendChild(offersSection);
                        offersSection.classList.add("Offers-popup__section");
                        offersSection.innerHTML =
                        `<!-- Offers-popup - section-title -->
                        <h3 class="Offers-popup__section-title" id="Offers-popup__section-title_id_${idCount}">
                            ${section.title}
                        </h3>
        
                        <!-- Offers-popup - list -->
                        <ul class="Offers__list Offers-popup__list" id="Offers-popup__list_id_${idCount}">
        
                            <!-- Offers-popup - items goes here -->
        
                        </ul>`;



                        // Element variable
                        let offersList = document.querySelector(`#Offers-popup__list_id_${idCount}`);

                        // For each item
                        section.items.forEach((item) => {

                            // Create, append & add content
                            let offer = document.createElement("li")
                            offersList.appendChild(offer);
                            offer.classList.add("Offers__items");
                            offer.classList.add("Offers-popup__items");
                            offer.innerHTML = 
                            `<i class="${item.icon}"></i>`;
                            let description = document.createElement("P")
                            offer.appendChild(description);
                            description.textContent = item.title;
                            let line = document.createElement("hr")
                            offer.appendChild(line);
                            line.classList.add("line");
                            line.classList.add("Offers-popup__line");
            
                            // Check if item is provided
                            if(!item.provided.type == true) {
                                description.classList.add(item.provided.style[0]);
                                description.classList.add(item.provided.style[1]);
                            };
                        });

                        

                        // Increment id-count
                        idCount++
                    };
                });
            });


            
            // Function: Popup
            function DisplayPopup() {
                
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
            
            // Initiator
            document.querySelector("#Offers__show-all_id").addEventListener("click", DisplayPopup);
        }) 
});