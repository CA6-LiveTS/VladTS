function getTitleElement() {
    let url = window.location.href;

    if (url.includes('youtube')) {
        return youtube_getTitleElement();
    } else if (url.includes('twitch')) {
        return twitch_getTitleElement();
    } else if (url.includes('vstream')) {
        return 0;                                                               // not supported yet
    }
    return 0;
}

function getCurrentTime() {
    let url = window.location.href;
    
    if (url.includes('youtube')) {
        return youtube_getCurrentTime();
    } else if (url.includes('twitch')) {
        if(window.location.href.includes('/videos/')) {
            return twitch_getCurrentTime();
        } else {
            return twitch_getCurrentTimeLive();
        }
    } else if (url.includes('vstream')) {
        return 0;                                                               // not supported yet
    }
    return 0;
}

function setCurrentTime(timeInSeconds) {
    let url = window.location.href;
    
    if (url.includes('youtube')) {
        youtube_setCurrentTime(timeInSeconds);
    } else if (url.includes('twitch')) {
        twitch_setCurrentTime(timeInSeconds);
    } else if (url.includes('vstream')) {
        return 0;                                                               // not supported yet
    }
    return 0;
}

function playPauseVideo() {
    let url = window.location.href;
    
    if (url.includes('youtube')) {
        youtube_playPauseVideo();
    } else if (url.includes('twitch')) {
        twitch_playPauseVideo();
    } else if (url.includes('vstream')) {
        return 0;                                                               // not supported yet
    }
    return 0;
}

function getStreamName() {
    let url = window.location.href;
    
    if (url.includes('youtube')) {
        return youtube_getStreamName();
    } else if (url.includes('twitch')) {
        return twitch_getStreamName();
    } else if (url.includes('vstream')) {
        return 0;                                                               // not supported yet
    }
    return 0;
}