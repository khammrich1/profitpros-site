// Mobile nav
const toggle = document.querySelector(".nav__toggle");
const links = document.getElementById("nav-links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// Hero clip sound toggle
const heroVideo = document.querySelector(".phone video");
const soundBtn = document.querySelector(".phone__sound");
soundBtn.addEventListener("click", () => {
  heroVideo.muted = !heroVideo.muted;
  if (!heroVideo.muted) heroVideo.play();
  soundBtn.textContent = heroVideo.muted ? "🔇" : "🔊";
  soundBtn.setAttribute("aria-label", heroVideo.muted ? "Unmute clip" : "Mute clip");
});

// Only one clip plays at a time
const videos = document.querySelectorAll("video");
videos.forEach((v) => {
  v.addEventListener("play", () => {
    videos.forEach((other) => {
      if (other !== v && !other.paused && !(other === heroVideo && other.muted)) other.pause();
    });
    if (v !== heroVideo && !heroVideo.muted) {
      heroVideo.muted = true;
      soundBtn.textContent = "🔇";
    }
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
