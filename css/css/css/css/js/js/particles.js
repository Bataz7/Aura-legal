const bg = document.querySelector(".bg");

for(let i = 0; i < 25; i++){

    const p = document.createElement("div");

    p.className = "particle";

    p.style.left = Math.random()*100 + "%";
    p.style.top = Math.random()*100 + "%";

    p.style.animationDuration =
        6 + Math.random()*10 + "s";

    p.style.animationDelay =
        Math.random()*5 + "s";

    bg.appendChild(p);

}
