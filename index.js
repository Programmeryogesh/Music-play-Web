let audio = document.getElementById("audio");
let playBtn = document.getElementById("playBtn");
let pauseBtn = document.getElementById("pauseBtn");
let progressBar = document.getElementById("progressBar");
let currentTime = document.getElementById("currentTime");
let remainingTime = document.getElementById("remainingTime");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
let title = document.getElementById("title");
let poster = document.getElementById("poster");
let artist = document.getElementById("artist");

let songs = [
  {
    music: "Main Nikla Gaddi Leke Gadar 2 128 Kbps.mp3",
    poster: "main-nikla-gaddi-leke-gadar-2.jpg",
    title: "Main Nikla Gaddi Leke",
    artist: "Udit Narayan, Aditya Narayan, Mithoon",
  },
  {
    music: "Chal Tere Ishq Mein Gadar 2 128 Kbps.mp3",
    poster: "Gadar-2-500-500.jpg",
    title: "Chal Tere Ishq Mein",
    artist: "Udit Narayan, Alka Yagnik",
  },
 
  {
    music: "Udd Jaa Kaale Kaava Gadar 2 128 Kbps.mp3",
    poster: "Udd-Jaa-Kaale-Kaava-Gadar-2.jpg",
    title: "Udd Jaa Kaale Kaava",
    artist: "Udit Narayan, Alka Yagnik",
  },
  {
    music: "Blender Ruchika Jangid 128 Kbps.mp3",
    poster: "Blender-Ruchika-Jangid-500-500.jpg",
    title: "Blender",
    artist: "Ruchika-Jangid",
  },  {
    music: "music_forest-lullaby-110624.mp3",
    poster: "cover-1.png",
    title: "music_forest-lullaby",
    artist: "music_forest",
  },
  {
    music: "music_lost-in-city-lights-145038.mp3",
    poster: "cover-2.png",
    title: "music_lost-in-city-lights",
    artist: "music",
  },
];


let songCount = 0;

function update() {
  audio.setAttribute("src", songs[`${songCount}`].music);
  title.innerHTML = songs[`${songCount}`].title;
  artist.innerHTML = songs[`${songCount}`].artist;
  poster.setAttribute("src", songs[`${songCount}`].poster);
}

update();

playBtn.addEventListener("click", function () {
  pauseBtn.style.display = "flex";
  playBtn.style.display = "none";
  audio.play();
});

pauseBtn.addEventListener("click", function () {
  pauseBtn.style.display = "none";
  playBtn.style.display = "flex";
  audio.pause();
});

audio.addEventListener("timeupdate", () => {
  let progress = parseInt((audio.currentTime / audio.duration) * 100) ;
  progressBar.value = isNaN(progress) ?0 : progress;
 
});

progressBar.addEventListener("change", () => {
  audio.currentTime = (progressBar.value * audio.duration) / 100;

});


audio.addEventListener("timeupdate", function () {
  const duration = audio.duration;
  const time = audio.currentTime;
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  currentTime.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  const remaining = duration - time;
  const remMinutes = Math.floor(remaining / 60);
  const remSeconds = Math.floor(remaining % 60);
  remainingTime.textContent =  `${remMinutes}:${remSeconds < 10 ? "0" : " "}${remSeconds}`;

});

backBtn.addEventListener("click", function () {
  songCount--;
  update();
  pauseBtn.style.display = "flex";
  playBtn.style.display = "none";
  audio.play();
});

nextBtn.addEventListener("click", function () {
  songCount++;
  update();
  pauseBtn.style.display = "flex";
  playBtn.style.display = "none";
  audio.play();
});

const volumeBar = document.getElementById("volumeBar");

function changeVolume() {
  audio.volume = volumeBar.value;
}

let volumeIcon = document.getElementById("vol");
let volumeOn = true;

volumeIcon.addEventListener("click", () => {
  let volume = document.getElementById("volumeBar");
  if (volumeOn) {
    volume.style.opacity = 0;
    volumeOn = false;
  } else {
    volume.style.opacity = 1;
    volumeOn = true;
  }
});
