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
                        <img class="Host-introduction__img" src="./img/residence_01/original.jpg" alt="Billede af vært: 01">
                        <i class="fas fa-award Award Host-introduction__award"></i>
                    </figure>



                    <!-- Host-introduction - info -->
                    <section class="Host-introduction__info">

                        <!-- Host-introduction - about -->
                        <article class="Host-introduction__about">

                            <!-- Host-introduction - title & date -->
                            <h2 class="Host-introduction__title">
                                Hils på din vært, Morten
                            </h2>
                            <p class="Host-introduction__date">
                                Vært siden november 2013
                            </p>
                        </article>

                        <!-- Host-introduction - achievements -->
                        <ul class="Host-introduction__achievement-list">

                            <!-- Host-introduction - achievement-items -->
                            <li class="Host-introduction__achievement-item">

                                <!-- Host-introduction - achievement - icon & title -->
                                <i class="fas fa-star Star icon color-logo Host-introduction__achievement-icon"></i>
                                <p class="Mention">
                                    178 omtaler
                                </p>
                            </li>

                            <!-- Host-introduction - achievement-items -->
                            <li class="Host-introduction__achievement-item">

                                <!-- Host-introduction - achievement - icon & title -->
                                <i class="fas fa-check-circle Check icon color-logo Host-introduction__achievement-icon"></i>
                                <p class="Verified Host-introduction__achievement-title">
                                    Identitet bekræftet
                                </p>
                            </li>

                            <!-- Host-introduction - achievement-items -->
                            <li class="Host-introduction__achievement-item">

                                <!-- Host-introduction - achievement - icon & title -->
                                <i class="fas fa-award Award icon color-logo Host-introduction__achievement-icon"></i>
                                <p class="Super-host Host-introduction__achievement-title">
                                    Superhost
                                </p>
                            </li>
                        </ul>
                    </section>
                </header>



                <!-- Host-introduction - article -->
                <article class="Host-introduction__article">

                    <!-- Host-introduction - paragraph -->
                    <p class="Host-introduction__paragraph">
                        I am a photographer and I am married to Mette Marie. Our daughter is named Meta Mei and she goes to school. We live in Copenhagen and work with art and photography. And we love
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
                        Morten er Superhost
                    </h3>

                    <!-- Host-introduction - paragraph -->
                    <p class="Host-introduction__paragraph">
                        Superhosts er erfarne værter med gode anmeldelser, der dedikerer deres tid til at give deres gæster et godt ophold.
                    </p>
                </article>

                <!-- Host-introduction - article -->
                <article class="Host-introduction__article">

                    <!-- Host-introduction - title -->
                    <h3 class="Host-introduction__title">
                        Sådan skal du bo
                    </h3>

                    <!-- Host-introduction - paragraph -->
                    <p class="Host-introduction__paragraph">
                        Normally we have self check-in, but sometimes we will be there to meet and greet you. There is a keygarage at the left side of the front door, you will get the code a few days before arrival.
                    </p>
                </article>
            </section>

            

            <!-- Host-introduction - section-right -->
            <section class="Host-introduction__section-right">


                <!-- WILL ADD MORE CONTENT IS POSSIBLE -->

            </section>`;
        })
});