const credits = document.querySelector(".credits-container");


window.addEventListener("load",()=>{


    credits.style.opacity = "0";


    setTimeout(()=>{


        credits.style.transition="opacity 3s ease";


        credits.style.opacity="1";


    },500);



});