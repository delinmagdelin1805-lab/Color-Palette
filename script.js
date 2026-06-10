/* Color Palette System */

const cards =
    document.querySelectorAll(".palette-card");

/* Copy Hex Code */

cards.forEach((card) => {

    card.addEventListener("click", () => {

        const hex =
            card.querySelector("span").innerText;

        navigator.clipboard.writeText(hex);

        card.style.transform =
            "scale(0.97)";

        setTimeout(() => {

            card.style.transform =
                "";

        }, 150);

        alert(hex + " copied!");

    });

});