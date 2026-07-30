window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});

const buttons=document.querySelectorAll(".buttons a");

buttons.forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect=button.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

button.style.setProperty("--x",x+"px");

button.style.setProperty("--y",y+"px");

});

});
