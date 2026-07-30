document.addEventListener("DOMContentLoaded", () => {

    const card = document.querySelector(".card");

    document.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.clientX) / 35;
        const y = (window.innerHeight / 2 - e.clientY) / 35;

        card.style.transform =
            `rotateY(${-x}deg) rotateX(${y}deg)`;

    });

    document.addEventListener("mouseleave", () => {

        card.style.transform =
            "rotateY(0deg) rotateX(0deg)";

    });

});
