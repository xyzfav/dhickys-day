/*==================================================
    GLOBAL
==================================================*/

let sparkleStarted = false;
let i = 0;
let enteredPin = "";

const message = `Happy Birthday, Sayang.

Thank you for being part of my life and for bringing so many beautiful memories.

I hope this new year of your life brings happiness, success, good health, and everything you've been wishing for.

May your days always be filled with love, laughter, and people who genuinely care about you.

Thank you for existing. 🖤`;



/*==================================================
    COUNTDOWN
==================================================*/

const countdown =
document.getElementById("countdown");

countdown.innerHTML =
"✨ Tap To Start ✨";

countdown.style.fontSize =
"30px";


countdown.addEventListener("click", () => {

    const tick =
    document.getElementById("tickSound");

    const paper =
    document.getElementById("paperSound");

    const sparkle =
    document.getElementById("sparkleSound");

    countdown.style.fontSize = "130px";

    let n = 3;

    countdown.innerHTML = n;

    const timer = setInterval(() => {

        tick.currentTime = 0;

        tick.play().catch(() => {});

        n--;

        if (n > 0){

            countdown.innerHTML = n;

        }

        else{

            clearInterval(timer);

            countdown.innerHTML = "✦";

            sparkle.currentTime = 0;

            sparkle.play().catch(() => {});

            setTimeout(() => {

                countdown.style.display = "none";

                const intro =
                document.getElementById("introPage");

                intro.classList.add("active");

                setTimeout(() => {

                    intro.style.opacity = "1";

                },100);

                setTimeout(() => {

                    intro.style.opacity = "0";

                    setTimeout(() => {

                        intro.classList.remove("active");

                        document
                        .getElementById("newspaper")
                        .classList.add("active");

                        paper.currentTime = 0;

                        paper.play().catch(()=>{});

                    },1500);

                },2500);

            },1000);

        }

    },1000);

},{ once:true });



/*==================================================
    SPARKLE
==================================================*/

function createSparkles(){

    setInterval(()=>{

        const star =
        document.createElement("div");

        star.className = "sparkle";

        star.innerHTML = "✨";

        star.style.left =
        Math.random()*100 + "vw";

        star.style.animationDuration =
        3 + Math.random()*4 + "s";

        document.body.appendChild(star);

        setTimeout(()=>{

            star.remove();

        },7000);

    },500);

}



/*==================================================
    PAGE
==================================================*/

function openEnvelope(){

    document
    .getElementById("bgMusic")
    .play()
    .catch(()=>{});

    if(!sparkleStarted){

        sparkleStarted = true;

        createSparkles();

    }

    document
    .getElementById("newspaper")
    .classList.remove("active");

    document
    .getElementById("envelopePage")
    .classList.add("active");

}



function openLetter(){

    document
    .getElementById("envelopePage")
    .classList.remove("active");

    document
    .getElementById("letterPage")
    .classList.add("active");

    typeLetter();

}



function openGallery(){

    document
    .getElementById("letterPage")
    .classList.remove("active");

    document
    .getElementById("galleryPage")
    .classList.add("active");

    initScratch();

}



function openStarPage(){

    document
    .getElementById("galleryPage")
    .classList.remove("active");

    document
    .getElementById("starPage")
    .classList.add("active");

}



function openCake(){

    document
    .getElementById("starPage")
    .classList.remove("active");

    document
    .getElementById("cakePage")
    .classList.add("active");

}



function openVideo(){

    document
    .getElementById("cakePage")
    .classList.remove("active");

    document
    .getElementById("videoPage")
    .classList.add("active");

    document
    .getElementById("bgMusic")
    .play()
    .catch(()=>{});

}



function openSecret(){

    document
    .getElementById("videoPage")
    .classList.remove("active");

    document
    .getElementById("secretPage")
    .classList.add("active");

}

/*==================================================
    LETTER
==================================================*/

function typeLetter(){

    const text =
    document.getElementById("typingText");

    text.innerHTML = "";

    i = 0;

    function typing(){

        if(i < message.length){

            if(message.charAt(i) === "\n"){

                text.innerHTML += "<br>";

            }else{

                text.innerHTML += message.charAt(i);

            }

            i++;

            setTimeout(typing,40);

        }

    }

    typing();

}



/*==================================================
    SCRATCH CARD
==================================================*/

function initScratch(){

    document
    .querySelectorAll(".scratchCanvas")
    .forEach(canvas=>{

        if(canvas.dataset.ready) return;

        canvas.dataset.ready = true;

        const card =
        canvas.parentElement;

        canvas.width =
        card.offsetWidth;

        canvas.height =
        card.offsetHeight;

        const ctx =
        canvas.getContext("2d");

        ctx.fillStyle = "#c9b48d";

        ctx.fillRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        ctx.fillStyle = "#ffffff";

        ctx.font = "bold 26px Cinzel";

        ctx.textAlign = "center";

        ctx.fillText(
            "Scratch Here ✨",
            canvas.width/2,
            canvas.height/2
        );

        ctx.globalCompositeOperation =
        "destination-out";

        let scratching = false;



        function scratch(e){

            if(!scratching) return;

            const rect =
            canvas.getBoundingClientRect();

            let x;
            let y;

            if(e.touches){

                x =
                e.touches[0].clientX -
                rect.left;

                y =
                e.touches[0].clientY -
                rect.top;

            }else{

                x =
                e.clientX -
                rect.left;

                y =
                e.clientY -
                rect.top;

            }

            ctx.beginPath();

            ctx.arc(
                x,
                y,
                35,
                0,
                Math.PI*2
            );

            ctx.fill();

        }



        canvas.addEventListener(
            "mousedown",
            ()=> scratching = true
        );

        canvas.addEventListener(
            "mouseup",
            ()=> scratching = false
        );

        canvas.addEventListener(
            "mouseleave",
            ()=> scratching = false
        );

        canvas.addEventListener(
            "mousemove",
            scratch
        );



        canvas.addEventListener(
            "touchstart",
            function(e){

                scratching = true;

                scratch(e);

            }
        );

        canvas.addEventListener(
            "touchmove",
            scratch
        );

        canvas.addEventListener(
            "touchend",
            ()=> scratching = false
        );

    });

}



/*==================================================
    CAKE
==================================================*/

function blowCandle(){

    document
    .querySelectorAll(".mini-candle")
    .forEach(candle=>{

        candle.classList.add("flame-off");

    });

    const wish =
    document.getElementById("wishMessage");

    wish.innerHTML = `

    🖤 Selamat ulang tahun, sayangku 🖤

    <br><br>

    Thank you for being part of my universe.

    <button
    class="btn"
    style="margin-top:20px;"
    onclick="openVideo()">

        Watch Something Special →

    </button>

    `;

    wish.classList.add("show");

}

/*==================================================
    PASSWORD
==================================================*/

function pressPin(num){

    if(enteredPin.length >= 4) return;

    enteredPin += num;

    updateDots();

    if(enteredPin.length !== 4) return;

    setTimeout(()=>{

        if(enteredPin === "3107"){

            document.querySelector(".lock-icon").innerHTML = "🔓";

            setTimeout(openGift,700);

        }else{

            const box =
            document.querySelector(".secret-box");

            box.animate([

                {transform:"translateX(-8px)"},
                {transform:"translateX(8px)"},
                {transform:"translateX(-8px)"},
                {transform:"translateX(0)"}

            ],{

                duration:350

            });

            document
            .getElementById("passwordError")
            .style.display = "block";

            enteredPin = "";

            updateDots();

        }

    },250);

}



function deletePin(){

    enteredPin =
    enteredPin.slice(0,-1);

    updateDots();

}



function updateDots(){

    const dots =
    document.querySelectorAll(".pin-dots span");

    dots.forEach((dot,index)=>{

        if(index < enteredPin.length){

            dot.classList.add("filled");

        }else{

            dot.classList.remove("filled");

        }

    });

}



/*==================================================
    OPEN GIFT
==================================================*/

function openGift(){

    const secretPage =
    document.getElementById("secretPage");

    const lock =
    document.querySelector(".lock-icon");

    const box =
    document.querySelector(".secret-box");


    lock.innerHTML = "🔓";


    lock.animate([

        {transform:"scale(1) rotate(0deg)"},
        {transform:"scale(1.3) rotate(-12deg)"},
        {transform:"scale(1.1) rotate(8deg)"},
        {transform:"scale(1.25) rotate(0deg)"}

    ],{

        duration:800,
        fill:"forwards"

    });


    setTimeout(()=>{

        box.style.transition = "1s";
        box.style.opacity = "0";
        box.style.transform = "scale(.9)";

    },900);


    setTimeout(()=>{

secretPage.innerHTML = `

<div class="gift-open">

<img
src="giftbox.PNG"
id="giftBox"
class="gift-box-png">

<h2 style="
margin-top:25px;
font-family:Cinzel;
color:#f3e8d2;
">
Tap to Open
</h2>

</div>

`;

document
.getElementById("giftBox")
.onclick = openGiftMenu;

},1800);

}

/*==================================================
    REAL GIFT
==================================================*/

function openRealGift(){

    const gift =
    document.getElementById("giftBox");

    gift.animate([

        {
            transform:"scale(1)"
        },

        {
            transform:"scale(1.3)"
        },

        {
            transform:"scale(.9)"
        },

        {
            transform:"scale(8)",
            opacity:0
        }

    ],{

        duration:900,

        fill:"forwards"

    });


    setTimeout(()=>{

        document
        .getElementById("secretPage")
        .innerHTML = `

<div
style="
display:flex;
justify-content:center;
align-items:center;
height:100%;
padding:40px;
animation:fadeGift 1s;
">

<div
style="
max-width:500px;
background:#1b1b1b;
padding:45px;
border-radius:30px;
text-align:center;
box-shadow:0 20px 60px rgba(0,0,0,.55);
">

<h1
style="
font-family:Cinzel;
color:#f4e4b5;
margin-bottom:20px;
">

For Dhicky 🖤

</h1>

<p
style="
font-size:22px;
line-height:1.8;
color:#f3e8d2;
">

Your surprise goes here.

</p>

</div>

</div>

`;

    },900);



    setTimeout(()=>{

        document
        .getElementById("secretPage")
        .classList.remove("active");

        document
        .getElementById("endingPage")
        .classList.add("active");

    },6000);

}

function openGiftMenu(){

document.getElementById("secretPage").innerHTML = `

<div class="gift-menu">

<h1>Your Gifts 🎁</h1>

<p>Choose one to open</p>

<button class="gift-btn"
onclick="openVoucher()">
🎟 Voucher Collection
</button>

<button class="gift-btn"
onclick="openScrapbook()">
📖 Scrapbook
</button>

<button class="gift-btn"
onclick="openInvitation()">
💌 Invitation
</button>

</div>

`;

}
function openVoucher(){

document.getElementById("secretPage").innerHTML=`

<div class="gift-menu">

<h1>Voucher Collection</h1>

<p>Choose one voucher</p>

<button class="gift-btn"
onclick="showVoucher('voucher1.PNG')">
🎟 Voucher I
</button>

<button class="gift-btn"
onclick="showVoucher('voucher2.PNG')">
🎟 Voucher II
</button>

<button class="gift-btn"
onclick="showVoucher('voucher3.PNG')">
🎟 Voucher III
</button>

<button class="gift-btn"
onclick="backToGift()">
⬅ Back
</button>

</div>

`;

}

function showVoucher(file){

document.getElementById("secretPage").innerHTML=`

<div class="gift-menu">

<img src="${file}" style="
width:90%;
max-width:700px;
border-radius:20px;
box-shadow:0 20px 40px rgba(0,0,0,.4);
">

<button class="gift-btn"
onclick="openVoucher()">
Close
</button>

</div>

`;

}

function backToGift(){

openGift();

}
/*==================================================
    OPTIONAL
==================================================*/

// Refresh scratch canvas saat ukuran layar berubah
window.addEventListener("resize",()=>{

    document
    .querySelectorAll(".scratchCanvas")
    .forEach(canvas=>{

        canvas.dataset.ready = "";

    });

});
