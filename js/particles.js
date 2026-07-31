const container = document.getElementById("particles");

if (container) {

    for (let i = 0; i < 40; i++) {

        const particle = document.createElement("div");

        particle.className = "particle";

        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";

        particle.style.animationDuration =
            (6 + Math.random() * 10) + "s";

        particle.style.animationDelay =
            (Math.random() * 5) + "s";

        particle.style.opacity =
            Math.random();

        container.appendChild(particle);

    }

}
