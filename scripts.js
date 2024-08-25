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

const audio = document.getElementById('audioPlayer');
const playButton = document.getElementById('playPauseButton');
const progressBar = document.getElementById('progressBar');
const currentTimeElement = document.getElementById('currentTime');
const durationTimeElement = document.getElementById('durationTime');

// 播放/暫停控制
playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.classList.remove('paused');
    } else {
        audio.pause();
        playButton.classList.add('paused');
    }
});

// 音軌/播放器處理
// 更新進度條與時間顯示
audio.addEventListener('timeupdate', () => {
    const currentTime = audio.currentTime;
    const duration = audio.duration;

    // 進度條更新
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // 時間顯示更新
    currentTimeElement.textContent = formatTime(currentTime);
    durationTimeElement.textContent = formatTime(duration);
});

// 格式化時間
function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}
