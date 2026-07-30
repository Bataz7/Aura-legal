const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

document.querySelectorAll(".buttons a").forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-8px) scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "";
    });

});

window.addEventListener("load", () => {

    document.body.animate(

        [
            {
                opacity:0
            },
            {
                opacity:1
            }
        ],

        {
            duration:900,
            easing:"ease"
        }

    );

});

const logo = document.querySelector(".logoIcon");

setInterval(() => {

    logo.animate(

        [

            {
                transform:"scale(1)"
            },

            {
                transform:"scale(1.08)"
            },

            {
                transform:"scale(1)"
            }

        ],

        {

            duration:2500

        }

    );

},2500);
