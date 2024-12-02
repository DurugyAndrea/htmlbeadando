$(document).ready(function () {
    // Diákhoz tartozó leírások tömbje
    const descriptions = [
        "One day, in space, a mothership resembling the PlayStation 5 console is seen flying around the cosmos, featuring Astro and numerous bots resembling him, representing his entire crew. They suddenly encounter a green alien named Space Bully Nebulax, who chases after the mothership, attacks the crew and steals its CPU.",
        "The poker roguelike. Balatro is a hypnotically satisfying deckbuilder where you play illegal poker hands, discover game-changing jokers, and trigger adrenaline-pumping, outrageous combos.",
        " After escorting his master Tang Sanzang and retrieving the Buddhist scriptures in a perilous pilgrimage to the West, Sun Wukong ascends to Buddhahood. Yet, he rejects life in the Celestial Court and chooses the simple joys of life on Mount Huaguo instead.",
        "Dark and intense, Shadow of the Erdtree has players continue their quest with the freedom to explore and experience the adventure at their own pace.",
        " Cloud Strife, a former Shinra soldier who joins the eco-terrorist group AVALANCHE to fight Shinra, who has been draining the Planet's life energy, and is drawn into a conflict with the legendary SOLDIER Sephiroth, who has returned after being presumed dead..",
        "An assassination attempt on the Prince resulted in the king being cursed and falling into a long slumber. The protagonist, Will, an orphaned boy of the magic-wielding Elda tribe and the Prince's childhood friend, participates in the Royal Tournament, held to decide the throne's successor, journeying across Euchronia to rally support from its people while searching for a way to lift the curse."
    ];

    // Slider inicializálása
    $(".center").slick({
        dots: false, // Pontok kikapcsolása
        infinite: true, // Végtelen görgetés
        centerMode: true, // Középre igazított diák
        centerPadding: '60px', // Közép körüli margó
        slidesToShow: 3, // Egyszerre látható diák száma
        slidesToScroll: 1, // Egyszerre görgetett diák száma
        autoplay: false, // Automatikus lejátszás
        responsive: [
            {
                breakpoint: 768, // Mobil eszközöknél
                settings: {
                    arrows: true,
                    centerPadding: '60px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 600, // Kis képernyőknél
                settings: {
                    arrows: true,
                    centerPadding: '60px',
                    slidesToShow: 1
                }
            }
        ]
    }).on('afterChange', function (event, slick, currentSlide) {
        // Leírás frissítése a jelenlegi diának megfelelően
        $('#slider-description').text(descriptions[currentSlide]);
    });

    // Kezdeti leírás beállítása
    $('#slider-description').text(descriptions[0]);
});