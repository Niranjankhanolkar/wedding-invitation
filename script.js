/* =========================================================
   WEDDING INVITATION
   NIRANJAN ❤️ NETRA
   27 FEBRUARY 2027
========================================================= */


/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", function () {

  setTimeout(function () {

    const loader = document.getElementById("loader");

    if (loader) {
      loader.classList.add("hide");
    }

  }, 1800);

});


/* =========================================================
   SCROLL TO STORY
========================================================= */

function scrollToStory() {

  const story = document.querySelector(".introduction");

  if (story) {

    story.scrollIntoView({
      behavior: "smooth"
    });

  }

}


/* =========================================================
   COUNTDOWN
========================================================= */

const weddingDate =
  new Date("February 27, 2027 00:00:00").getTime();


function updateCountdown() {

  const now = new Date().getTime();

  const distance = weddingDate - now;


  if (distance <= 0) {

    document.getElementById("days").innerText = "00";
    document.getElementById("hours").innerText = "00";
    document.getElementById("minutes").innerText = "00";
    document.getElementById("seconds").innerText = "00";

    return;

  }


  const days =
    Math.floor(
      distance /
      (1000 * 60 * 60 * 24)
    );

  const hours =
    Math.floor(
      (distance %
        (1000 * 60 * 60 * 24)) /
      (1000 * 60 * 60)
    );

  const minutes =
    Math.floor(
      (distance %
        (1000 * 60 * 60)) /
      (1000 * 60)
    );

  const seconds =
    Math.floor(
      (distance %
        (1000 * 60)) /
      1000
    );


  document.getElementById("days").innerText =
    String(days).padStart(2, "0");

  document.getElementById("hours").innerText =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").innerText =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").innerText =
    String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const observer =
  new IntersectionObserver(

    function (entries) {

      entries.forEach(function (entry) {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

        }

      });

    },

    {
      threshold: 0.12
    }

  );


document
  .querySelectorAll(".reveal")
  .forEach(function (element) {

    observer.observe(element);

  });


/* =========================================================
   CONFETTI
========================================================= */

function createConfetti(amount = 80) {

  const container =
    document.getElementById("confetti");

  if (!container) return;


  const symbols = [
    "🌸",
    "🌺",
    "🌹",
    "✨",
    "💕",
    "💖",
    "💫",
    "🪷",
    "💍",
    "❤️",
    "🌟"
  ];


  for (let i = 0; i < amount; i++) {

    const item =
      document.createElement("div");

    item.className = "confetti";

    item.innerText =
      symbols[
        Math.floor(
          Math.random() * symbols.length
        )
      ];


    item.style.left =
      Math.random() * 100 + "vw";


    item.style.fontSize =
      (12 + Math.random() * 20) + "px";


    item.style.animationDuration =
      (3 + Math.random() * 5) + "s";


    item.style.animationDelay =
      Math.random() * 2 + "s";


    container.appendChild(item);


    setTimeout(function () {

      item.remove();

    }, 9000);

  }

}


/* =========================================================
   HERO CONFETTI
========================================================= */

setTimeout(function () {

  createConfetti(45);

}, 2200);


/* =========================================================
   CLICK ANYWHERE FOR HEARTS
========================================================= */

document.addEventListener(
  "click",
  function (event) {

    if (
      event.target.closest("button") ||
      event.target.closest("a")
    ) {
      return;
    }


    const heart =
      document.createElement("div");

    heart.innerText =
      Math.random() > .5
        ? "💕"
        : "✨";


    heart.style.position = "fixed";

    heart.style.left =
      event.clientX + "px";

    heart.style.top =
      event.clientY + "px";

    heart.style.pointerEvents =
      "none";

    heart.style.zIndex =
      "9999";

    heart.style.fontSize =
      "20px";


    document.body.appendChild(heart);


    heart.animate(

      [
        {
          transform: "translate(-50%, -50%) scale(.5)",
          opacity: 1
        },

        {
          transform:
            "translate(-50%, -150px) scale(1.5)",
          opacity: 0
        }
      ],

      {
        duration: 1000,
        easing: "ease-out"
      }

    );


    setTimeout(function () {

      heart.remove();

    }, 1000);

  }
);


/* =========================================================
   GOOGLE MAPS
   CHANGE THIS URL TO ACTUAL VENUE
========================================================= */

function openMaps() {

  const venue =
    "Wedding Venue, Maharashtra, India";

  const url =
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(venue);

  window.open(url, "_blank");

}


/* =========================================================
   WHATSAPP RSVP
========================================================= */

function rsvpWhatsApp() {

  const message =
    "Hello Niranjan & Netra ❤️\n\n" +
    "Congratulations! 🎉\n" +
    "I would love to be a part of your wedding celebration on 27 February 2027. 💍🌸\n\n" +
    "With love ❤️";


  const whatsappURL =
    "https://wa.me/?text=" +
    encodeURIComponent(message);


  window.open(
    whatsappURL,
    "_blank"
  );

}


/* =========================================================
   SHARE
========================================================= */

async function shareInvitation() {

  const shareData = {

    title:
      "Niranjan ❤️ Netra",

    text:
      "Join Niranjan & Netra as they begin their forever. 💍🌸\n27 February 2027",

    url:
      window.location.href

  };


  if (
    navigator.share &&
    navigator.canShare &&
    navigator.canShare(shareData)
  ) {

    try {

      await navigator.share(
        shareData
      );

    } catch (error) {

      console.log(
        "Share cancelled."
      );

    }

    return;

  }


  try {

    await navigator.clipboard.writeText(
      window.location.href
    );

    alert(
      "Invitation link copied! ❤️"
    );

  } catch (error) {

    alert(
      "Please copy the invitation URL from your browser."
    );

  }

}


/* =========================================================
   CINEMATIC BACKGROUND MUSIC
   Browser generated - no audio file required
========================================================= */

let audioContext = null;

let masterGain = null;

let musicPlaying = false;

let musicTimer = null;


function createMusic() {

  if (audioContext) return;


  audioContext =
    new (
      window.AudioContext ||
      window.webkitAudioContext
    )();


  masterGain =
    audioContext.createGain();


  masterGain.gain.value =
    0.025;


  masterGain.connect(
    audioContext.destination
  );


  playMelody();

}


function playNote(
  frequency,
  duration,
  delay
) {

  if (!audioContext) return;


  const oscillator =
    audioContext.createOscillator();

  const gain =
    audioContext.createGain();


  oscillator.type =
    "sine";


  oscillator.frequency.value =
    frequency;


  oscillator.connect(gain);

  gain.connect(masterGain);


  const start =
    audioContext.currentTime +
    delay;


  gain.gain.setValueAtTime(
    0,
    start
  );


  gain.gain.linearRampToValueAtTime(
    0.7,
    start + 0.05
  );


  gain.gain.exponentialRampToValueAtTime(
    0.001,
    start + duration
  );


  oscillator.start(start);

  oscillator.stop(
    start + duration + 0.1
  );

}


function playMelody() {

  if (!musicPlaying) return;


  const melody = [

    261.63,
    293.66,
    329.63,
    392.00,
    329.63,
    293.66,

    261.63,
    293.66,
    349.23,
    392.00,
    440.00,
    392.00,

    349.23,
    329.63,
    293.66,
    261.63

  ];


  melody.forEach(
    function (frequency, index) {

      playNote(
        frequency,
        1.4,
        index * .45
      );

    }
  );


  musicTimer =
    setTimeout(
      playMelody,
      melody.length * 450 + 1000
    );

}


/* =========================================================
   MUSIC BUTTON
========================================================= */

document
  .getElementById("musicButton")
  .addEventListener(
    "click",
    async function () {

      if (!audioContext) {

        createMusic();

      }


      if (
        audioContext.state === "suspended"
      ) {

        await audioContext.resume();

      }


      musicPlaying =
        !musicPlaying;


      if (musicPlaying) {

        this.innerText = "🎵";

        playMelody();

      } else {

        this.innerText = "🔇";

        clearTimeout(
          musicTimer
        );

      }

    }
  );


/* =========================================================
   PARALLAX
========================================================= */

window.addEventListener(
  "scroll",
  function () {

    const hero =
      document.querySelector(".hero-content");


    if (!hero) return;


    const scroll =
      window.scrollY;


    if (scroll < window.innerHeight) {

      hero.style.transform =
        "translateY(" +
        scroll * .18 +
        "px)";

      hero.style.opacity =
        Math.max(
          0,
          1 - scroll / 650
        );

    }

  }
);


/* =========================================================
   FLOATING PARTICLES
========================================================= */

function createFloatingPetals() {

  const symbols = [
    "🌸",
    "🌺",
    "✨",
    "💕",
    "🪷"
  ];


  for (let i = 0; i < 20; i++) {

    const petal =
      document.createElement("div");


    petal.innerText =
      symbols[
        Math.floor(
          Math.random() * symbols.length
        )
      ];


    petal.style.position =
      "fixed";

    petal.style.left =
      Math.random() * 100 + "vw";

    petal.style.top =
      Math.random() * 100 + "vh";

    petal.style.fontSize =
      (10 + Math.random() * 15) + "px";

    petal.style.opacity =
      ".25";

    petal.style.pointerEvents =
      "none";

    petal.style.zIndex =
      "0";


    document.body.appendChild(
      petal
    );


    petal.animate(

      [

        {
          transform:
            "translateY(0) rotate(0deg)"
        },

        {
          transform:
            "translateY(-80px) rotate(180deg)"
        },

        {
          transform:
            "translateY(0) rotate(360deg)"
        }

      ],

      {

        duration:
          5000 +
          Math.random() * 6000,

        iterations: Infinity,

        easing: "ease-in-out"

      }

    );

  }

}


createFloatingPetals();


/* =========================================================
   EASTER EGG
   TYPE "LOVE"
========================================================= */

let secretCode = "";

document.addEventListener(
  "keydown",
  function (event) {

    secretCode +=
      event.key.toLowerCase();


    if (secretCode.length > 10) {

      secretCode =
        secretCode.slice(-10);

    }


    if (
      secretCode.includes("love")
    ) {

      createConfetti(150);

      secretCode = "";

    }

  }
);