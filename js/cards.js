document.addEventListener("DOMContentLoaded", () => {
    
    // Element variable
    const container = document.querySelector(".Cards-container__container");

    // Fetch data
    fetch("./json/residence.json")
        .then((response) => response.json())
        .then((residenceData) => {

            residenceData.residences.forEach((residence) => {

                // Create element, add content & append it
                let cardLink = document.createElement("a");
                container.appendChild(cardLink);
                cardLink.href = `./about.html?id=${residence.info.id}`;
                cardLink.classList.add("Card-link");
                cardLink.innerHTML =
                `<!-- Card -->
                <article class="Card">
    
                    <!-- Card - img-container -->
                    <figure class="Card__img-container">
    
                        <!-- Card - img & tag -->
                        <img class="Card__img" src="./img/residence_01/${residence.images[0]}" alt="Billede af udlejing">
                        <div class="Card__tag">
                            <p class="Card__tag-title uppercase font-bold">
                                Vis alle billeder
                            </p>
                        </div>
                    </figure>
    
                    <!-- Card - info -->
                    <section class="Card__info">
    
                        <!-- Card - header -->
                        <header class="Card__header">
    
                            <!-- Card - header-left -->
                            <section class="Card__header-left">
    
                                <!-- Residence-description -->
                                <p class="Residence-description color-weak">
                                    ${residence.details.about.description}
                                </p>
    
                                <!--  Residence-title -->
                                <h2 class="Residence-title Card__residence-title font-thin">
                                    ${residence.details.about.title} - ${residence.details.about.tag}
                                </h2>

                                <!--  Residence-line -->
                                <hr class="Residence-line line">
    
                                <!-- Facilities-list -->
                                <ul class="Facilities-list color-weak" id="Facilities-list_id_${residence.info.id}">

                                    <!-- facilities-items goes here -->
    
                                </ul>
                            </section>
    
                            <!-- Card - header-right -->
                            <section class="Card__header-right">
                                <i class="far fa-heart Heart Icon Card__heart"></i>
                            </section>
                        </header>
    
                        <!-- Residence-rating -->
                        <footer class="Card__footer">
    
                            <!-- Star & Rating -->
                            <p class="Rating font-bold">
                                <i class="${residence.details.mention.icon}"></i>
                                    ${residence.details.mention.rating}
                            </p>
    
                            <!-- Mention -->
                            <p class="Mention color-weak">
                                (${residence.details.mention.amount} ${residence.details.mention.title})
                            </p>
                        </footer>
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
            });
        })
});