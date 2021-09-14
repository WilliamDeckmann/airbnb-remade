document.addEventListener("DOMContentLoaded", () => {
    
    // Element variable
    const gallery = document.querySelector(".Gallery");

    // Fetch data
    fetch("./json/residence.json")
        .then((response) => response.json())
        .then((galleryData) => {

            galleryData.residences.forEach((residence) => {

                // For each Facilities-list item
                residence.images.forEach((item, index) => {

                    // Create, append & add content
                    let facility = document.createElement("img")
                    gallery.appendChild(facility);
                    facility.classList.add("Gallery__img");
                    facility.src = `./img/residence_01/${item}`

                    // Find the first index in loop
                    if(index === 0) facility.classList.add("Gallery__img_type_hero");
                });
            });
        })
});