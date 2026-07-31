document.addEventListener("DOMContentLoaded", () => {

    const card = document.querySelector(".glass");

    if (!card) return;

    document.addEventListener("mousemove", (e) => {

        const x = (window.innerWidth / 2 - e.clientX) / 45;
        const y = (window.innerHeight / 2 - e.clientY) / 45;

        card.style.transform =
            `perspective(1000px) rotateY(${-x}deg) rotateX(${y}deg)`;

    });

    document.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateY(0deg) rotateX(0deg)";

    });

});
