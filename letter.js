// Get elements

const openButton = document.getElementById("openLetter");

const photoPage = document.getElementById("photoPage");

const letterPage = document.getElementById("letterPage");

const song = document.getElementById("song");

const paragraphs = document.querySelectorAll(
    "#letterText p, #letterText h2"
);



// Open letter experience

openButton.addEventListener("click", () => {


    // Fade out photo page

    photoPage.style.opacity = "0";


    setTimeout(() => {


        photoPage.style.display = "none";


        letterPage.style.display = "block";


        // Start song with smooth fade in

        song.volume = 0;

        song.play();



        let volume = 0;


        let fadeAudio = setInterval(() => {


            if(volume < 0.35){


                volume += 0.01;

                song.volume = volume;


            } else {


                clearInterval(fadeAudio);


            }


        },100);



        // Start letter reveal

        revealLetter();



    },1500);



});





// Handwritten style reveal

function revealLetter(){


    let delay = 1000;


    paragraphs.forEach((paragraph)=>{


        setTimeout(()=>{


            paragraph.classList.add("show");


        }, delay);



        delay += 3500;



    });



}