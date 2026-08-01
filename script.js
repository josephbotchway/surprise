const startButton = document.getElementById("startButton");

const voice = document.getElementById("voice");

const music = document.getElementById("music");

const opening = document.getElementById("intro");

const letter = document.getElementById("experience");

const lyricsBox = document.getElementById("lyrics");

const resetLyrics = document.getElementById("resetLyrics");

const finalMessage = document.getElementById("ending");


// Your letter converted into lyrics

const lyrics = [

{
    time:0,
    text:"My Love ❤️"
},

{
    time:5,
    text:"Happy Girlfriend's Day, my darling."
},

{
    time:10,
    text:"Tonight, I don't want to write you just another letter."
},

{
    time:15,
    text:"I want to give you a piece of my heart — the part that has finally learned what loving you truly means."
},

{
    time:25,
    text:"I've spent a long time thinking about us."
},

{
    time:30,
    text:"About every smile you've given me, every tear you've hidden, and every moment you waited for me to be better."
},

{
    time:40,
    text:"And the more I thought, the more I realized something that changed me forever."
},

{
    time:50,
    text:"First, I want to say I'm sorry."
},

{
    time:55,
    text:"I'm sorry for the moments when I wasn't giving you the love, attention, and effort you deserved."
},

{
    time:65,
    text:"I'm sorry for the times I made you feel like you had to question my feelings for you."
},

{
    time:75,
    text:"But I want you to know something..."
},

{
    time:82,
    text:"I have realized that love is not just about saying 'I love you'."
},

{
    time:92,
    text:"Love is about showing it every day."
},

{
    time:100,
    text:"It is about paying attention, being present, listening, and making the person you love feel valued."
},

{
    time:115,
    text:"And from this moment forward, I want to do that for you."
},

{
    time:125,
    text:"I don't want to be the person who takes your love for granted."
},

{
    time:135,
    text:"I want to be the person who chooses you every single day."
},

{
    time:145,
    text:"You are everything I have ever wanted."
},

{
    time:155,
    text:"You are the person who brings peace into my life."
},

{
    time:165,
    text:"You make my happiest moments even better."
},

{
    time:175,
    text:"Honestly, you are the best thing that has ever happened to me since the day I was born."
},

{
    time:190,
    text:"You are not just my girlfriend."
},

{
    time:198,
    text:"You are my best friend, my safe place, my happiness, and the person I want to build my future with."
},

{
    time:215,
    text:"I don't just want you for today."
},

{
    time:220,
    text:"I want you for every tomorrow."
},

{
    time:230,
    text:"I want to wake up beside you, laugh with you, grow with you, and create a beautiful life together."
},

{
    time:245,
    text:"I can't promise that I will always be perfect."
},

{
    time:255,
    text:"But I can promise you this..."
},

{
    time:260,
    text:"I will never stop fighting for us."
},

{
    time:270,
    text:"I will never stop learning how to love you better."
},

{
    time:280,
    text:"I will listen to you, understand you, and pay attention to the little things that make you smile."
},

{
    time:295,
    text:"Because you are worth the effort."
},

{
    time:300,
    text:"You are worth the patience."
},

{
    time:305,
    text:"You are worth everything."
},

{
    time:315,
    text:"Forever yours ❤️"
}

];


// Create lyrics

lyrics.forEach((line)=>{

    const p = document.createElement("p");

    p.textContent = line.text;

    p.classList.add("lyric");

    lyricsBox.appendChild(p);

});


const lyricElements = document.querySelectorAll(".lyric");

let currentLyric = -1;


// Start experience

startButton.addEventListener("click",()=>{


    opening.style.display="none";

    letter.style.display="flex";


    // reset everything

    voice.pause();

    voice.currentTime = 0;

    lyricsBox.parentElement.scrollTop = 0;

    currentLyric = -1;

    lyricsBox.style.transform="translateY(0px)";


    voice.play();


    if(music){

        music.volume=0.2;

        music.play();

    }


});



// Move lyrics automatically

voice.addEventListener("timeupdate",()=>{

    console.log("Current audio time:", voice.currentTime);
    
    let currentTime = voice.currentTime;


    for(let i = lyrics.length-1; i>=0; i--){


        if(currentTime >= lyrics[i].time){


            if(currentLyric !== i){


                currentLyric=i;


                lyricElements.forEach((line)=>{

                    line.classList.remove("active");

                });


                lyricElements[i].classList.add("active");


                // move current lyric into center

                lyricElements[i].scrollIntoView({

                    behavior:"smooth",

                    block:"center"

});


            }


            break;

        }


    }


});



// Show ending message

voice.addEventListener("ended",()=>{

    letter.style.display="none";

    finalMessage.style.display="flex";

});

resetLyrics.addEventListener("click",()=>{

    voice.pause();

    voice.currentTime = 0;

    currentLyric = -1;

    lyricsBox.style.transform="translateY(0px)";

    lyricElements.forEach((line)=>{

        line.classList.remove("active");

    });

    voice.play();

});