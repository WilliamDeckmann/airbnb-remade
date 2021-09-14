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
                            <i class="fas fa-star Star icon color-logo"></i>
                            <p class="Rating font-bold Residence-info__rating">
                                4,97
                            </p>
                        </li>
                        <li class="Residence-info__detail-dot">
                            ·
                        </li>
                        <li class="Residence-info__detail-item">
            
                            <!-- Mention -->
                            <p class="Mention Residence-info__mention">
                                178 omtaler
                            </p>
                        </li>
                        <li class="Residence-info__detail-dot">
                            ·
                        </li>
                        <li class="Residence-info__detail-item">
            
                            <!-- Location -->
                            <i class="fas fa-map-marker-alt Marker icon color-logo"></i>
                            <p class="Location Residence-info__location">
                                Orø, 
                                Danmark
                            </p>
                        </li>
                        <li class="Residence-info__detail-dot">
                            ·
                        </li>
                        <li class="Residence-info__detail-item">
            
                            <!-- Residence-info - rooms-list -->
                            <i class="fas fa-home House icon color-logo"></i>
                            <ul class="Facilities-list Residence-info__facilities-list">
            
                                <!-- rooms-item -->
                                <li class="Facilities-item">
                                    4 gæster
                                </li>
            
                                <li class="Facilities-dot">
                                    ·
                                </li>
            
                                <li class="Facilities-item">
                                    1 soveværelse
                                </li>
            
                                <li class="Facilities-dot">
                                    ·
                                </li>
            
                                <li class="Facilities-item">
                                    1 seng
                                </li>
            
                                <li class="Facilities-dot">
                                    ·
                                </li>
            
                                <li class="Facilities-item">
                                    1 badeværelse
                                </li>
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
            </article>`
        })
});