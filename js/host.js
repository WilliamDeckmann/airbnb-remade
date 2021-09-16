document.addEventListener("DOMContentLoaded", () => {
    
    // Element variable
    const host = document.querySelector(".Host-introduction");

    // Fetch data
    fetch("./json/residence.json")
        .then((response) => response.json())
        .then((residenceData) => {

            // Add header inner html
            host.innerHTML =
            `<!-- Host-introduction - section-left -->
            <section class="Host-introduction__section-left">

                <!-- Host-introduction - header -->
                <header class="Host-introduction__header">
                    
                    <!-- Host-introduction - Picture -->
                    <figure class="Host-introduction__picture">

                        <!-- Host-introduction - img & Super-host -->
                        <img class="Host-introduction__img" src="./img/residence_01/${residenceData.residences[0].host.image}" alt="Billede af vært: 01">
                        <i class="${residenceData.residences[0].details.superHost.icon} Host-introduction__award"></i>
                    </figure>



                    <!-- Host-introduction - info -->
                    <section class="Host-introduction__info">

                        <!-- Host-introduction - about -->
                        <article class="Host-introduction__about">

                            <!-- Host-introduction - title & date -->
                            <h2 class="Host-introduction__title">
                                ${residenceData.residences[0].host.title.description} ${residenceData.residences[0].host.title.name}
                            </h2>
                            <p class="Host-introduction__date">
                                ${residenceData.residences[0].host.date.description} ${residenceData.residences[0].host.date.month} ${residenceData.residences[0].host.date.year}
                            </p>
                        </article>

                        <!-- Host-introduction - achievements -->
                        <ul class="Host-introduction__achievement-list">

                            <!-- Host-introduction - achievement-items -->
                            <li class="Host-introduction__achievement-item">

                                <!-- Host-introduction - achievement - icon & title -->
                                <i class="${residenceData.residences[0].details.mention.icon} Host-introduction__achievement-icon"></i>
                                <p class="Mention">
                                    ${residenceData.residences[0].details.mention.amount} ${residenceData.residences[0].details.mention.title}
                                </p>
                            </li>

                            <!-- Host-introduction - achievement-items -->
                            <li class="Host-introduction__achievement-item">

                                <!-- Host-introduction - achievement - icon & title -->
                                <i class="${residenceData.residences[0].details.verified.icon} Host-introduction__achievement-icon"></i>
                                <p class="Verified Host-introduction__achievement-title">
                                    ${residenceData.residences[0].details.verified.title}
                                </p>
                            </li>

                            <!-- Host-introduction - achievement-items -->
                            <li class="Host-introduction__achievement-item">

                                <!-- Host-introduction - achievement - icon & title -->
                                <i class="${residenceData.residences[0].details.superHost.icon} Host-introduction__achievement-icon"></i>
                                <p class="Super-host Host-introduction__achievement-title">
                                    ${residenceData.residences[0].details.superHost.title}
                                </p>
                            </li>
                        </ul>
                    </section>
                </header>



                <!-- Host-introduction - article -->
                <article class="Host-introduction__article">

                    <!-- Host-introduction - paragraph -->
                    <p class="Host-introduction__paragraph">
                        ${residenceData.residences[0].host.introduction.description}
                        <span class="Tripple-dots">...</span>
                    </p>

                    <!-- Host-introduction - show-more -->
                    <a class="Show-more Host-introduction__show-more" href="#">

                        <!-- Show-more & Arrow -->
                        <p class="Show-more__link font-bold">
                            Vis mere
                        </p>
                        <i class="fas fa-chevron-right Arrow icon Show-more__arrow"></i>
                    </a>
                </article>

                <!-- Host-introduction - article -->
                <article class="Host-introduction__article">

                    <!-- Host-introduction - title -->
                    <h3 class="Host-introduction__title">
                        ${residenceData.residences[0].host.title.name} ${residenceData.residences[0].details.superHost.about.title}
                    </h3>

                    <!-- Host-introduction - paragraph -->
                    <p class="Host-introduction__paragraph">
                        ${residenceData.residences[0].details.superHost.about.description}
                    </p>
                </article>

                <!-- Host-introduction - article -->
                <article class="Host-introduction__article">

                    <!-- Host-introduction - title -->
                    <h3 class="Host-introduction__title">
                        ${residenceData.residences[0].host.about.title}
                    </h3>

                    <!-- Host-introduction - paragraph -->
                    <p class="Host-introduction__paragraph">
                        ${residenceData.residences[0].host.about.description}
                    </p>
                </article>
            </section>

            

            <!-- Host-introduction - section-right -->
            <section class="Host-introduction__section-right">


                <!-- WILL ADD MORE CONTENT IS POSSIBLE -->

            </section>`;
        })
});