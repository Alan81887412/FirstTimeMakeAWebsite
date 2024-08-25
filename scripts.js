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
const seekSlider = document.getElementById('seek-slider');
const currentTimeElem = document.getElementById('current-time');
const durationElem = document.getElementById('duration');

// 更新進度條和時間
audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    seekSlider.value = (currentTime / duration) * 100;
    currentTimeElem.textContent = formatTime(currentTime);
});

// 進度條變更
seekSlider.addEventListener('input', () => {
    const duration = audio.duration;
    audio.currentTime = (seekSlider.value / 100) * duration;
});

// 設置音樂時長
audio.addEventListener('loadeddata', () => {
    durationElem.textContent = formatTime(audio.duration);
});

// 格式化時間
function formatTime(seconds) {
    
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

window.addEventListener('load', () => {
    audio.play().catch(error => {
        console.log('自動播放失敗:', error);
    });
});
