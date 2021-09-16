document.addEventListener("DOMContentLoaded", () => {
    
    // Element variable
    const header = document.querySelector(".About__header");

    // Fetch data
    fetch("./json/residence.json")
        .then((response) => response.json())
        .then((residenceData) => {

            // Add header inner html
            header.innerHTML =
            `<!-- Residence-info -->
            <article class="Residence-info">
            
                <!-- Residence-title -->
                <h2 class="Residence-title font-thin">
                    ${residenceData.residences[0].details.about.title} - ${residenceData.residences[0].details.about.tag}
                </h2>
            
                <!-- Residence-info - footer -->
                <section class="Residence-info__detail">
            
                    <!-- Residence-info - list -->
                    <ul class="Residence-info__detail-list">
            
                        <!-- Residence-info - detail-items -->
                        <li class="Residence-info__detail-item">
            
                            <!-- Star & Rating -->
                            <i class="${residenceData.residences[0].details.mention.icon}"></i>
                            <p class="Rating font-bold Residence-info__rating">
                                ${residenceData.residences[0].details.mention.rating}
                            </p>
                        </li>
                        <li class="Residence-info__detail-dot">
                            ·
                        </li>
                        <li class="Residence-info__detail-item">
            
                            <!-- Mention -->
                            <p class="Mention Residence-info__mention">
                                ${residenceData.residences[0].details.mention.amount} ${residenceData.residences[0].details.mention.title}
                            </p>
                        </li>
                        <li class="Residence-info__detail-dot">
                            ·
                        </li>
                        <li class="Residence-info__detail-item">
            
                            <!-- Location -->
                            <i class="${residenceData.residences[0].details.location.icon}"></i>
                            <p class="Location Residence-info__location">
                                ${residenceData.residences[0].details.location.location}, 
                                ${residenceData.residences[0].details.location.country}
                            </p>
                        </li>
                        <li class="Residence-info__detail-dot">
                            ·
                        </li>
                        <li class="Residence-info__detail-item">
            
                            <!-- Residence-info - rooms-list -->
                            <i class="${residenceData.residences[0].details.facilities.icon}"></i>

                            <!-- Facilities-list -->
                            <ul class="Facilities-list Residence-info__facilities-list">
            
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
            let facilitiesList = document.querySelector(".Facilities-list");

            // For each Facilities-list item
            residenceData.residences[0].details.facilities.items.forEach((item) => {

                // Create, append & add content
                let facility = document.createElement("li")
                facilitiesList.appendChild(facility);
                facility.classList.add("Facilities-item");
                facility.innerHTML = `${item.amount} ${item.title}`
            });
        })
});