document.addEventListener("DOMContentLoaded", () => {

    // URL variables
    let url = window.location.search;
    let params = new URLSearchParams(url);
    let id = params.get("id");

    // Element variable
    const gallery = document.querySelector(".Gallery");


    
    // Fetch data
    fetch("./json/residence.json")
        .then((response) => response.json())
        .then((residenceData) => {

            // For each residence
            residenceData.residences.forEach((residence) => {

                // For each Facilities-list item
                residence.images.forEach((item, index) => {

                    // Search for id
                    if(id == residence.info.id) {

                        // Create, append & add content
                        let facility = document.createElement("img")
                        gallery.appendChild(facility);
                        facility.classList.add("Gallery__img");
                        facility.src = `./img/residence_01/${item}`
    
                        // Find the first index in loop
                        if(index === 0) facility.classList.add("Gallery__img_type_hero");
                    };

                });
            });
        })
});