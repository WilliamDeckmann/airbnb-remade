document.addEventListener("DOMContentLoaded", () => {

    // URL variables
    let url = window.location.search;
    let params = new URLSearchParams(url);
    let id = params.get("id");
    
    // Element variable
    const header = document.querySelector(".About__header");



    // Fetch data
    fetch("./json/residence.json")
        .then((response) => response.json())
        .then((residenceData) => {

            // For each residence
            residenceData.residences.forEach((residence) => {

                // Rating variables
                let ratingStars = residence.info.rating.stars;
                let ratingPeople = residence.info.rating.people;
                let ratingTotal = ratingStars / ratingPeople;
                let ratingFinal = parseFloat(ratingTotal).toFixed(2);
                ratingFinal = ratingFinal.replace(".", ",")


                
                // Search for id
                if(id == residence.info.id) {

                    // Add header inner html
                    header.innerHTML =
                    `<!-- Residence-info -->
                    <article class="Residence-info">
                    
                        <!-- Residence-title -->
                        <h2 class="Residence-title font-thin">
                            ${residence.details.about.title} - ${residence.details.about.tag}
                        </h2>
                    
                        <!-- Residence-info - footer -->
                        <section class="Residence-info__detail">
                    
                            <!-- Residence-info - list -->
                            <ul class="Residence-info__detail-list">
                    
                                <!-- Residence-info - detail-items -->
                                <li class="Residence-info__detail-item">
                    
                                    <!-- Star & Rating -->
                                    <i class="${residence.details.mention.icon}"></i>
                                    <p class="Rating font-bold Residence-info__rating">
                                        ${ratingFinal}
                                    </p>
                                </li>
                                <li class="Residence-info__detail-dot">
                                    ·
                                </li>
                                <li class="Residence-info__detail-item">
                    
                                    <!-- Mention -->
                                    <p class="Mention Residence-info__mention">
                                        ${residence.details.mention.amount} ${residence.details.mention.title}
                                    </p>
                                </li>
                                <li class="Residence-info__detail-dot">
                                    ·
                                </li>
                                <li class="Residence-info__detail-item">
                    
                                    <!-- Location -->
                                    <i class="${residence.details.location.icon}"></i>
                                    <p class="Location Residence-info__location">
                                        ${residence.details.location.location}, 
                                        ${residence.details.location.country}
                                    </p>
                                </li>
                                <li class="Residence-info__detail-dot">
                                    ·
                                </li>
                                <li class="Residence-info__detail-item">
                    
                                    <!-- Residence-info - rooms-list -->
                                    <i class="${residence.details.facilities.icon}"></i>
        
                                    <!-- Facilities-list -->
                                    <ul class="Facilities-list Residence-info__facilities-list" id="Facilities-list_id_${residence.info.id}">
                    
                                        <!-- facilities-items goes here -->
                                        
                                    </ul>
                                </li>
                            </ul>
                    
                            
                    
                            <!-- Residence-info - social-media -->
                            <section class="Residence-info__social-media">
                    
                                <!-- Share -->
                                <button class="Share">
                    
                                    <i class="fas fa-external-link-alt Export icon"></i>
                                    <p class="Share__title">
                                        Del
                                    </p>
                                </button>
                    
                                <!-- Save -->
                                <button class="Save">
                    
                                    <i class="far fa-heart Heart icon"></i>
                                    <p class="Save__title"> 
                                        Gem
                                    </p>
                                </button>
                            </section>
                        </section>
                    </article>`;



                    // Element variable
                    let facilitiesList = document.querySelector(`#Facilities-list_id_${residence.info.id}`);
        
                    // For each Facilities-list item
                    residence.details.facilities.items.forEach((item) => {
        
                        // Create, append & add content
                        let facility = document.createElement("li")
                        facilitiesList.appendChild(facility);
                        facility.classList.add("Facilities-item");
                        facility.innerHTML = `${item.amount} ${item.title}`
                    });
                };
            });
        })
});