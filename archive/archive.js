$(document).ready(function () {
  //változók mentése
  const sliders = {
     2023: [{
           src: '2023/2023_2.jpg',
           alt: "Alan Wake II",
           paragraph: "FBI Special Agent Saga Anderson and her partner Alex Casey are dispatched to the town of Bright Falls to investigate a series of ritualistic murders performed by a group calling themselves the Cult of the Tree. They investigate the latest victim, the naked man, who is revealed as former FBI agent Robert Nightingale."
        },
        {
           src: '2023/2023_3.jpg',
           alt: "Legend of Zelda Tears of Kingdom",
           paragraph: "Tears of the Kingdom takes place years after Breath of the Wild, at the end of the Zelda timeline. Link and Zelda set out to explore the cavern beneath Hyrule Castle, from which a poisonous substance called gloom has been seeping out and causing people to fall ill."
        },
        {
           src: '2023/2023_4.jpg',
           alt: "Resident Evil 4",
           paragraph: "Leon Kennedy is sent on a mission to rescue the president's kidnapped daughter from a secluded European village where there is something terribly wrong with the locals. Six years have passed since the biological disaster in Raccoon City."
        },
        {
           src: '2023/2023_5.jpg',
           alt: "Marvel's Spiderman 2",
           paragraph: "Peter Parker and Miles Morales come into conflict with mercenary leader and big-game hunter Sergei 'Kraven' Kravinoff, who transforms New York City into a sprawling hunting ground for its superhuman populace, including the Spider-Men and their adversaries. Matters are complicated further when an extraterrestrial symbiote called Venom bonds itself to Peter, negatively altering his personality and threatening to dismantle his personal relationships."
        },
        {
           src: '2023/2023_6.jpg',
           alt: "Super Mario Bros. Wonder",
           paragraph: "Mario, Luigi, and their friends attempt to stop Bowser, who plots to take over a new land known as the Flower Kingdom after using the magical Wonder Flower to fuse himself with the kingdom's castle."
        }
     ],
     2022: [{
           src: '2022/2022_2.jpg',
           alt: "A Plague Tale: Requiem",
           paragraph: "After escaping their devastated homeland, Amicia and Hugo travel far south. There, they attempt to start a new life and control Hugo's curse. But, when Hugo's powers reawaken, death and destruction return in a flood of devouring rats."
        },
        {
           src: '2022/2022_3.jpg',
           alt: "God of War Ragnarok",
           paragraph: "Concluding the Norse era of the series, the story follows Kratos and Atreus' efforts to prevent the nine realms from being destroyed by Ragnarök, the eschatological event which is central to Norse mythology and was foretold to happen in the previous game after Kratos killed the Aesir god Baldur."
        },
        {
           src: '2022/2022_4.jpg',
           alt: "Horizon Forbidden West",
           paragraph: "Aloy treks into an arcane region and faces new hostile enemies and threats in search of a way to heal the world from a deadly blight and catastrophic storms."
        },
        {
           src: '2022/2022_5.jpg',
           alt: "Stray",
           paragraph: "The story follows a stray cat who falls into a walled city populated by robots, machines, and mutant bacteria, and sets out to return to the surface with the help of a drone companion, B-12. "
        },
        {
           src: '2022/2022_6.jpg',
           alt: "Xenoblade Chronicles 3",
           paragraph: "In the world of Aionios, two nations are locked in conflict: Keves, a technological powerhouse and Agnus, a magic-based society. Six soldiers hailing from these nations, will take part in a grand tale with life as its central theme."
        }
     ],
     2021: [{
           src: '2021/2021_2.jpg',
           alt: "Deathloop",
           paragraph: "In Deathloop, you play as a Colt Vahn. A man trapped inside a time loop on some Bioshock flavored Island called Black Reef. After every night or death, Colt wakes up on the beach of the previous morning. The only way to break to loop is to find a way to kill 8 visionaries in one day without dying."
        },
        {
           src: '2021/2021_3.jpg',
           alt: "Metroid Dread",
           paragraph: "The Galactic Federation receives evidence that the X, a dangerous species of parasite that can mimic any creature it infects, survives on the remote planet ZDR. They dispatch seven EMMI (Extraplanetary Multiform Mobile Identifiers) robots to ZDR to investigate, but lose contact."
        },
        {
           src: '2021/2021_4.jpg',
           alt: "Psychonauts 2",
           paragraph: "Within Psychonauts 2, which directly follows the events of the interstitial virtual reality game, Psychonauts in the Rhombus of Ruin, the Psychonauts try to learn who was really behind the capture of their leader, unveiling a deep mystery surrounding the organization's founding and Raz's family history."
        },
        {
           src: '2021/2021_5.jpg',
           alt: "Rachet and Clank: Rift Apart",
           paragraph: "Ratchet, Clank, and Dr. Nefarious are transported to an alternate universe, where the Dimensionator explodes, damaging the fabric of space and time and separating the three. Clank awakens to find himself alone and now missing his right arm from the blast. He is discovered and picked up by a female Lombax named Rivet."
        },
        {
           src: '2021/2021_6.jpg',
           alt: "Resident Evil Village",
           paragraph: "Ethan Winters' wife & daughter are kidnapped and brought to a village deep within the snowy mountains of Europe. There he must fight against various monsters such as Vampires, Lycans, Wolves, Witches, Fishmen, Dolls, Zombies & industrial abominations in order to save his family from the evil Mother Miranda."
        }
     ],
     2020: [{
           src: '2020/2020_2.jpg',
           alt: "Animal Crossing: New Horizons",
           paragraph: "In New Horizons, the player controls a character who moves to a deserted island after purchasing a getaway package from Tom Nook, accomplishes assigned tasks, and develops the island as they choose. They can gather and craft items, customize the island, and develop it into a community of anthropomorphic animals."
        },
        {
           src: '2020/2020_3.jpg',
           alt: "Doom Eternal",
           paragraph: " In 2163, fourteen years after the events on Mars, Earth has been overrun by demons, wiping out 60% of the planet's population, under the corrupt Union Aerospace Corporation (UAC). What remains of humanity has either fled Earth or joined the Armored Response Coalition (ARC) resistance movement."
        },
        {
           src: '2020/2020_4.jpg',
           alt: "Final Fantady VII: Remake",
           paragraph: "Set in the dystopian cyberpunk metropolis of Midgar, players control the mercenary Cloud Strife. He joins AVALANCHE, an eco-terrorist group trying to stop the powerful megacorporation Shinra from using the planet's life essence as an energy source. The gameplay combines real-time action with role-playing elements."
        },
        {
           src: '2020/2020_5.jpg',
           alt: "Ghost of Tsushima",
           paragraph: "The player controls Jin Sakai, a samurai on a quest to protect Tsushima Island during the first Mongol invasion of Japan. Jin must choose between following the warrior code to fight honorably, or by using practical but dishonorable methods of repelling the Mongols with minimal casualties."
        },
        {
           src: '2020/2020_6.jpg',
           alt: "Hades",
           paragraph: " Zagreus, the son and Firstborn of Hades, seeks to escape his father's realm in the Underworld. He is aided in his quest by his adoptive mother Nyx, the Gods of Olympus to whom he has reached out, and other inhabitants of the Underworld."
        }
     ]
  };
  //nyertesek mentése
  const winners = {
     2023: {
        src: '2023/2023_1.jpg',
        alt: "Baldur's Gate 3",
        paragraph: "Set in the universe of the Forgotten Realms, the game begins with the protagonist waking up from unconsciousness on a mind flayer dimension-crossing ship infected with a parasitic tadpole that threatens to transform them into a mind flayer. Alongside several others who have met the same fate, they are forced to go on a quest to find a remedy to prevent ceremorphosis. Players choose from twelve character classes and customise their characters at the beginning of the game; they also select an origin from several options. Through interacting with other characters, engaging in round-based combat against enemies, and making plot decisions, players determine not only their fate but also the fate of Faerûn. That determination is also impacted by the game's dice roll mechanic where a player's roll determines if the outcome of a character action is a success or failure. Baldur's Gate 3 takes place in the fictional world of the Forgotten Realms during the year of 1492 DR, over 120 years after the events of the previous game, Baldur's Gate II: Shadows of Amn, and months after the events of the playable Dungeons & Dragons 5e module, Baldur's Gate: Descent into Avernus. The story is set primarily in the Sword Coast in western Faerûn, encompassing a forested area that includes the Emerald Grove, a druid grove dedicated to the deity Silvanus; Moonrise Towers and the Shadow-Cursed Lands, which are covered by an unnatural and sentient darkness that can only be penetrated through magical means; and Baldur's Gate, the largest and most affluent city in the region, as well as its outlying suburb of Rivington. Other places the player visits include the Underdark, the Astral Plane and Avernus."
     },
     2022: {
        src: '2022/2022_1.jpg',
        alt: "Elden Ring",
        paragraph: "Elden Ring is presented through a third-person perspective with players freely roaming its open world. The six main areas can be traversed using the player character's steed Torrent. Linear, hidden dungeons can be explored to find useful items. Players can use several types of weapons and magic spells, including non-direct engagement enabled by stealth mechanics. Throughout the game's world, checkpoints enable fast travel and allow players to improve their attributes using an in-game currency called runes. Elden Ring features an online multiplayer mode in which players join through cooperative play to fight bosses or engage in player versus player combat. FromSoftware wanted to create an open-world game based on Dark Souls. Miyazaki admired Martin's previous work and hoped that his contributions would produce a more accessible narrative than those of the company's earlier games. Martin was given unrestricted freedom to design the backstory, while Miyazaki was lead writer for the in-game narrative. However, the game's narrative is still presented through flavor text, dialogue, visual narrative, and players' interpretations. The developers concentrated on environmental scale, stat management, and the story; the scale required the construction of several structures around its world."
     },
     2021: {
        src: '2021/2021_1.jpg',
        alt: "It Takes Two",
        paragraph: "Cody (Joseph Balderrama) and May (Annabelle Dowler), a married couple, are planning on getting a divorce. After they tell their daughter Rose (Clare Corbett) the news, she takes her hand-made dolls, which look like her parents, into the family shed and tries to repair their relationship by play-acting. The parents find themselves trapped inside the dolls' bodies as a consequence of Rose's tears landing on the dolls. Dr. Hakim, who has assumed the anthropomorphic form of his relationship therapy book, tells May and Cody that he has been given the job of trying to fix their relationship as they try to reach Rose. First, Cody and May are more focused on trying to reach Rose, who they hope knows of a way to return them to their human bodies. However, Hakim continually interferes with their progress, often putting obstacles and tests in their way to force them to collaborate to progress. They also come across anthropomorphic versions of their old possessions, who criticize Cody and May for their mistreatment and negligence of both their possessions and Rose. As they travel all around their property, Cody and May are reminded of the positive memories they had together, as well as what originally drew them together to become a couple, and learn to work together and collaborate to move forward in their journey."
     },
     2020: {
        src: '2020/2020_1.jpg',
        alt: '2020 Winner',
        paragraph: "Joel confesses to his brother, Tommy, his responsibility in preventing the Fireflies attempting to develop a cure for the Cordyceps fungus pandemic by saving Ellie from a non-survivable surgical procedure. Four years later, Joel and Ellie have built a life in Jackson, Wyoming, though their relationship has become strained. While on patrol, Joel and Tommy rescue a stranger, Abby, from an Infected horde. They return to an outpost used as a temporary hideout by Abby's group, former Fireflies now part of the Washington Liberation Front (WLF), a militia group based in Seattle, Washington. The group attack Joel and Tommy; Abby seeks revenge against Joel for murdering her father, the Firefly surgeon who was to perform the operation on Ellie. Meanwhile, Ellie and her girlfriend, Dina, search for the brothers. Ellie enters the WLF outpost and witnesses Abby beat Joel to death. Abby spares Ellie and Tommy, who swear revenge. The Last of Us Part II is an action-adventure game played from a third-person perspective featuring elements of the survival horror genre. The player traverses post-apocalyptic environments such as buildings and forests to advance the story. The player can use firearms, improvised weapons, and stealth to defend against hostile humans and cannibalistic creatures infected by a mutated strain of the Cordyceps fungus. Control intermittently switches between Ellie and Abby; the player also briefly controls Joel in the opening sequence. The nimble nature of the player character introduces platforming elements, allowing the player to jump and climb to traverse environments and gain advantages during combat. The player can break glass objects such as windows to access certain areas or obtain supplies. Some areas are navigated by horse or boat."
     }
  };
  //nyertes frissítése: source és alt attribútum megadása
  function updateWinner(year) {
     const winnerData = winners[year];
     $('#winnerImage').attr('src', winnerData.src).attr('alt', winnerData.alt);
     $('#winnerText').text(winnerData.paragraph); //text frissítése
  }

  function populateSliderAndParagraphs(year) {
    //változók létrehozása
     const slider = $('.slider');
     const paragraphs = $('.paragraphs');
     const data = sliders[year];

     if (slider.hasClass('slick-initialized')) { //ha már van slider akkor törli
        slider.slick('unslick');
     }

     slider.empty(); //slider ürítése (hogy ne jelenjen meg kép plusszba)
     paragraphs.empty(); //paragraph űrítése

     data.forEach((item, index) => { //item: elemek a kulcson belül, index: kulcs
        slider.append(`<div><img src="${item.src}" alt="${item.alt}"></div>`); //képek és altok hozzáadása
        paragraphs.append(`<p class="paragraph" data-index="${index}">${item.paragraph}</p>`); //paragrafusok hozzáadása
     });

     slider.slick({ //slider létrehozása
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [{
              breakpoint: 768,
              settings: {
                 arrows: true,
                 centerPadding: '60px',
                 slidesToShow: 3,
              }
           },
           {
              breakpoint: 600,
              settings: {
                 arrows: true,
                 centerPadding: '60px',
                 slidesToShow: 1,
              }
           }

        ]
     });

     paragraphs.find(`[data-index="0"]`).addClass('active'); //a 0-ás indexű paragrafus legyen aktív (inicializálás)

     slider.on('afterChange', function (event, slick, currentSlide) {
        paragraphs.find('.paragraph').removeClass('active'); //leszedi az aktív class-t
        paragraphs.find(`[data-index="${currentSlide}"]`).addClass('active'); //current slide paragrafusára teszi az aktív class-t
     });

     updateWinner(year); //nyertes function
  }

  $('.gomb').on('click', function () { //gombnyomásra meghívja az slider és paragrafus updatet aminek a végén meg van hívva a nyertes updatje is
     const year = $(this).data('year');
     populateSliderAndParagraphs(year);
  });

  // első betöltésnél
  populateSliderAndParagraphs(2023);
});