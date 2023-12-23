

function sec2time(timeInSeconds) {
    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60);
    let seconds = Math.floor(timeInSeconds - (hours * 3600) - (minutes * 60));

    minutes = ('0' + minutes).slice(-2);
    seconds = ('0' + seconds).slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}

function time2sec(time) {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
}