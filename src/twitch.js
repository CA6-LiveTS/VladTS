// get titleElement (where we will inject the UI)
function twitch_getTitleElement() {
    return document.querySelector('.channel-info-content');
}

// get current time for live stream
function twitch_getCurrentTimeLive() {
    return time2sec(document.querySelector('.live-time').textContent);
}

// get current time
function twitch_getCurrentTime() {
    let video = document.querySelector('video');
    return video.currentTime;
}

// set current time
function twitch_setCurrentTime(timeInSeconds) {
    let video = document.querySelector('video');
    video.currentTime = timeInSeconds;
}

// play/pause video
function twitch_playPauseVideo() {
    let video = document.querySelector('video');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function twitch_getStreamName() {
    return document.querySelector('h2[data-a-target="stream-title"]').textContent + " - Twitch";
}