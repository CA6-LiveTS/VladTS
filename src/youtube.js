// get titleElement (where we will inject the UI)
function youtube_getTitleElement() {
    return document.querySelector('#secondary-inner.ytd-watch-flexy');
}

// get current time
function youtube_getCurrentTime() {
    let video = document.querySelector('video');
    return video.currentTime;
}

// set current time
function youtube_setCurrentTime(timeInSeconds) {
    let video = document.querySelector('video');
    video.currentTime = timeInSeconds;
}

// play/pause video
function youtube_playPauseVideo() {
    let video = document.querySelector('video');
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function youtube_getStreamName() {
    return document.title;
}