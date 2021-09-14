document.addEventListener("DOMContentLoaded", () => {
    
    // Element variable
    const filter = document.querySelector(".Cards-container__info");

    // Fetch data
    fetch("./json/residence.json")
        .then((response) => {
            /* if(!response.ok) {
                throw new Error("Ups, noget gik galt!");
            } */
            return response.json();
        })
        .then((residenceData) => {

            // Console log
            console.log(residenceData)

            // Inner html
            filter.innerHTML =
            `<!-- Cards-container - result-count & title -->
            <p class="Cards-container__result-count">
            Over ${residenceData.filters.about.amount} overnatningssteder
            </p>
            <h2 class="Cards-container__title">
                <c
            </h2>

            <!-- Cards-container - filters-container -->
            <ul class="Cards-container__filters-container">
                <li class="Cards-container__filter">
                    ${residenceData.filters.filters.items[0].title}
                </li>
                <li class="Cards-container__filter Cards-container__filter_active">
                    ${residenceData.filters.filters.items[1].title}
                </li>
                <li class="Cards-container__filter">
                    ${residenceData.filters.filters.items[2].title}
                </li>
                <li class="Cards-container__filter">
                    ${residenceData.filters.filters.items[3].title}
                </li>
                <li class="Cards-container__filter ${residenceData.filters.filters.count.active.class}">
                    ${residenceData.filters.filters.count.title} · ${residenceData.filters.filters.count.amount}
                </li>
            </ul>`;
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