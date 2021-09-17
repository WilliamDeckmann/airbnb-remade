document.addEventListener("DOMContentLoaded", () => {
    
    // Element variable
    const header = document.querySelector(".Cards-container__header");
    const filtersContainer = document.querySelector(".Cards-container__filters-container");


    
    // Fetch data
    fetch("./json/filters.json")
        .then((response) => {
            /* if(!response.ok) {
                throw new Error("Ups, noget gik galt!");
            } */
            return response.json();
        })
        .then((filtersData) => {

            // Add header inner html
            header.innerHTML =
            `<!-- Cards-container - result-count & title -->
            <p class="Cards-container__result-count">
                Over ${filtersData.about.amount} overnatningssteder
            </p>
            <h2 class="Cards-container__title">
                ${filtersData.about.title}
            </h2>`;

            // Add item for for each object in array
            filtersData.filters.items.forEach((item) => {
                
                // Create, append & add content
                let filter = document.createElement("li");
                filtersContainer.appendChild(filter);
                filter.classList.add("Cards-container__filter");
                filter.innerHTML = item.title;
                
                // Check for state
                if(item.active.type == true) {
                    filter.classList.add(item.active.class)
                }
            });

            // Create, append & add content
            let counter = document.createElement("li");
            filtersContainer.appendChild(counter);
            counter.classList.add("Cards-container__filter");
            counter.classList.add(filtersData.filters.count.active.class);
            counter.innerHTML = `${filtersData.filters.count.title} · ${filtersData.filters.count.amount}`
        })
        /* .catch((error) => {
            console.log(error.message);
        }); */

    


    /*
    // Turn fetch-data into variable
    let filterFetchData = fetch("./json/filters.json")
        .then((response) => response.json());
        
    filterFetchData.then((filterData) => { 
            
    }) */
});