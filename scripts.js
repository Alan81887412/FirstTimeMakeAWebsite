const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');
registerLink.addEventListener('click',() => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',() => {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',() => {
    wrapper.classList.add('active-popup');
});
iconClose.addEventListener('click',() => {
    wrapper.classList.remove('active-popup');
});

const audio = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const seekSlider = document.getElementById('seek-slider');
const currentTimeElem = document.getElementById('current-time');
const durationElem = document.getElementById('duration');

let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = '播放';
    } else {
        audio.play();
        playPauseBtn.textContent = '暫停';
    }
});

audio.addEventListener('play', () => {
    isPlaying = true;
    playPauseBtn.textContent = '暫停';
});

audio.addEventListener('pause', () => {
    isPlaying = false;
    playPauseBtn.textContent = '播放';
});

audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    seekSlider.value = (currentTime / duration) * 100;
    currentTimeElem.textContent = formatTime(currentTime);
});

seekSlider.addEventListener('input', () => {
    const duration = audio.duration;
    audio.currentTime = (seekSlider.value / 100) * duration;
});

audio.addEventListener('loadeddata', () => {
    durationElem.textContent = formatTime(audio.duration);
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}
