document.addEventListener("DOMContentLoaded", function () {

    /* --- TRIBE IMAGE SWITCHER --- */

    const tribeImage = document.getElementById("tribeImage");
    const tribeItems = document.querySelectorAll("#tribeList li");

    const tribeImages = {
        "Ata": "assets/ata.png",
        "Bagobo Klata": "assets/bagobo-klata.png",
        "Bagobo-Tagabawa": "assets/bagobo-tagabawa.png",
        "Iranun": "assets/iranun.png",
        "Kagan": "assets/kagan.png",
        "Maguindanao": "assets/maguindanao.png",
        "Maranao": "assets/maranao.png",
        "Matigsalug": "assets/matigsalug.png",
        "Tausug": "assets/tausug.png",
        "Obo-Manuvu": "assets/obo-manuvu.png",
        "Sama": "assets/sama.png"
    };


    /* When a tribe is clicked */

    tribeItems.forEach(function (item) {

        item.addEventListener("click", function () {

            const tribe = this.dataset.tribe;

            if (tribeImages[tribe] && tribeImage) {

                tribeImage.src = tribeImages[tribe];
                tribeImage.alt = tribe;

            }

            // Remove active from all tribes
            tribeItems.forEach(function (li) {
                li.classList.remove("active");
            });

            // Add active to selected tribe
            this.classList.add("active");

        });

    });


    /* --- DIRECTORY LINKS --- */

    const links = {

        "NCIP – Davao Region":
            "https://ncip.gov.ph",

        "Davao City Tourism Office":
            "https://www.davaotourism.com",

        "Kadayawan Tribal Village":
            "https://www.davaocity.gov.ph",

        "Museo Dabawenyo":
            "https://www.davaocity.gov.ph",

        "NCCA":
            "https://ncca.gov.ph"

    };


    /* When a directory button is clicked */

    const directoryButtons =
        document.querySelectorAll(".directory-card button");

    directoryButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const card = this.closest(".directory-card");

            if (!card) {
                return;
            }

            const titleElement = card.querySelector("h2");

            if (!titleElement) {
                return;
            }

            const title = titleElement.textContent.trim();

            if (links[title]) {

                window.location.href = links[title];

            }

        });

    });

});