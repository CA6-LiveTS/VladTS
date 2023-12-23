let selectedTime = 0;   // time selected by user
let currentTime = 0;    // current time of video
let timestampLine;
let outputTexts = [];
let fileName;
let isTS = false;

let livets_options = ["", "Loading", "Break", "Ending", "End", "Zatsudan", "Gaming", "Karaoke", "Art", "Misc", "TS", "LiveTS"];

// setup LiveTS UI
function setupLiveTS(menuRow, container) {

    let inContainer = document.createElement('div');
    inContainer.id = 'livets-container';
    inContainer.style.display = 'none';

    let toggleButton = document.createElement('button');
    toggleButton.innerText = 'LiveTS';
    toggleButton.style.fontSize = '18px';
    toggleButton.style.fontWeight = 'bold';
    toggleButton.style.padding = '5px 10px';
    toggleButton.style.border = 'black solid 1px';
    toggleButton.style.borderRadius = '5px';
    toggleButton.style.cursor = 'pointer';
    toggleButton.style.color = 'red';
    toggleButton.style.backgroundColor = '#1e90ff';
    toggleButton.addEventListener('click', function() {
        if (inContainer.style.display === 'none') {
            inContainer.style.display = 'block';
        } else {
            inContainer.style.display = 'none';
        }
    });

    menuRow.appendChild(toggleButton);

    container.appendChild(inContainer);

    livets_createUI(inContainer)

}

function livets_createUI(container) {

    let activityRow = document.createElement('div');
    let timestampRow = document.createElement('div');
    let playbackRow = document.createElement('div');
    let tsControl1 = document.createElement('div');
    let tsControl2 = document.createElement('div');

    createUI_activity(activityRow);
    createUI_timestamp(timestampRow);
    createUI_playback(playbackRow);
    createUI_tsControl1(tsControl1);
    createUI_tsControl2(tsControl2);

    container.appendChild(playbackRow);
    container.appendChild(activityRow);
    container.appendChild(timestampRow);
    container.appendChild(tsControl1);
    container.appendChild(tsControl2);
}



function createUI_activity(container) {

    let activitySelect = document.createElement('select');
    activitySelect.style.fontSize = '18px';
    activitySelect.style.padding = '5px 0px';
    activitySelect.style.width = '28%';
    activitySelect.id = 'livets-iner-activitySelect';

    livets_options.forEach(function(optionText) {
        let optionElement = document.createElement('option');
        optionElement.textContent = optionText;
        optionElement.value = optionText;

        activitySelect.appendChild(optionElement);
    });

    let tsActivityText = document.createElement('input');
    tsActivityText.type = 'text';
    tsActivityText.style.fontSize = '18px';
    tsActivityText.style.padding = '5px 0px';
    tsActivityText.style.width = '71%';
    tsActivityText.id = 'livets-iner-tsActivityText';

    container.appendChild(activitySelect);
    container.appendChild(tsActivityText);
};

function createUI_timestamp(container) {

    let decSel30 = document.createElement('button');
    decSel30.textContent = '-30';
    decSel30.style.fontSize = '18px';
    decSel30.style.fontWeight = 'bold';
    decSel30.style.padding = '5px 10px';
    decSel30.style.backgroundColor = '#4cadf7';
    decSel30.style.color = '#fff';
    decSel30.style.border = 'black solid 1px';
    decSel30.style.borderRadius = '5px';
    decSel30.style.cursor = 'pointer';
    decSel30.style.width = '14%';
    decSel30.addEventListener('click', function() {
        incrementSelectedTime(-30);
    });

    let decSel15 = document.createElement('button');
    decSel15.textContent = '-15';
    decSel15.style.fontSize = '18px';
    decSel15.style.fontWeight = 'bold';
    decSel15.style.padding = '5px 10px';
    decSel15.style.backgroundColor = '#4cadf7';
    decSel15.style.color = '#fff';
    decSel15.style.border = 'black solid 1px';
    decSel15.style.borderRadius = '5px';
    decSel15.style.cursor = 'pointer';
    decSel15.style.width = '14%';
    decSel15.addEventListener('click', function() {
        incrementSelectedTime(-15);
    });
    
    let decSel05 = document.createElement('button');
    decSel05.textContent = '-05';
    decSel05.style.fontSize = '18px';
    decSel05.style.fontWeight = 'bold';
    decSel05.style.padding = '5px 10px';
    decSel05.style.backgroundColor = '#4cadf7';
    decSel05.style.color = '#fff';
    decSel05.style.border = 'black solid 1px';
    decSel05.style.borderRadius = '5px';
    decSel05.style.cursor = 'pointer';
    decSel05.style.width = '14%';
    decSel05.addEventListener('click', function() {
        incrementSelectedTime(-5);
    });
    
    let set = document.createElement('button');
    set.textContent = 'Set';
    set.style.fontSize = '18px';
    set.style.fontWeight = 'bold';
    set.style.padding = '5px 10px';
    set.style.backgroundColor = '#4cadf7';
    set.style.color = '#fff';
    set.style.border = 'black solid 1px';
    set.style.borderRadius = '5px';
    set.style.cursor = 'pointer';
    set.style.width = '16%';
    set.addEventListener('click', function() {
        setSelectedTime();
    });
    
    let encSel05 = document.createElement('button');
    encSel05.textContent = '+05';
    encSel05.style.fontSize = '18px';
    encSel05.style.fontWeight = 'bold';
    encSel05.style.padding = '5px 10px';
    encSel05.style.backgroundColor = '#4cadf7';
    encSel05.style.color = '#fff';
    encSel05.style.border = 'black solid 1px';
    encSel05.style.borderRadius = '5px';
    encSel05.style.cursor = 'pointer';
    encSel05.style.width = '14%';
    encSel05.addEventListener('click', function() {
        incrementSelectedTime(5);
    });
    
    let encSel15 = document.createElement('button');
    encSel15.textContent = '+15';
    encSel15.style.fontSize = '18px';
    encSel15.style.fontWeight = 'bold';
    encSel15.style.padding = '5px 10px';
    encSel15.style.backgroundColor = '#4cadf7';
    encSel15.style.color = '#fff';
    encSel15.style.border = 'black solid 1px';
    encSel15.style.borderRadius = '5px';
    encSel15.style.cursor = 'pointer';
    encSel15.style.width = '14%';
    encSel15.addEventListener('click', function() {
        incrementSelectedTime(15);
    });
    
    let encSel30 = document.createElement('button');
    encSel30.textContent = '+30';
    encSel30.style.fontSize = '18px';
    encSel30.style.fontWeight = 'bold';
    encSel30.style.padding = '5px 10px';
    encSel30.style.backgroundColor = '#4cadf7';
    encSel30.style.color = '#fff';
    encSel30.style.border = 'black solid 1px';
    encSel30.style.borderRadius = '5px';
    encSel30.style.cursor = 'pointer';
    encSel30.style.width = '14%';
    encSel30.addEventListener('click', function() {
        incrementSelectedTime(30);
    });

    container.appendChild(decSel30);
    container.appendChild(decSel15);
    container.appendChild(decSel05);
    container.appendChild(set);
    container.appendChild(encSel05);
    container.appendChild(encSel15);
    container.appendChild(encSel30);
}

function createUI_playback(container) {

    let decCur30 = document.createElement('button');
    decCur30.textContent = '-30';
    decCur30.style.fontSize = '18px';
    decCur30.style.fontWeight = 'bold';
    decCur30.style.padding = '5px 10px';
    decCur30.style.backgroundColor = '#4cadf7';
    decCur30.style.color = '#fff';
    decCur30.style.border = 'black solid 1px';
    decCur30.style.borderRadius = '5px';
    decCur30.style.cursor = 'pointer';
    decCur30.style.width = '14%';
    decCur30.addEventListener('click', function() {
        incrementcurrentTime(-30);
    });

    let decCur15 = document.createElement('button');
    decCur15.textContent = '-15';
    decCur15.style.fontSize = '18px';
    decCur15.style.fontWeight = 'bold';
    decCur15.style.padding = '5px 10px';
    decCur15.style.backgroundColor = '#4cadf7';
    decCur15.style.color = '#fff';
    decCur15.style.border = 'black solid 1px';
    decCur15.style.borderRadius = '5px';
    decCur15.style.cursor = 'pointer';
    decCur15.style.width = '14%';
    decCur15.addEventListener('click', function() {
        incrementcurrentTime(-15);
    });
    
    let decCur05 = document.createElement('button');
    decCur05.textContent = '-05';
    decCur05.style.fontSize = '18px';
    decCur05.style.fontWeight = 'bold';
    decCur05.style.padding = '5px 10px';
    decCur05.style.backgroundColor = '#4cadf7';
    decCur05.style.color = '#fff';
    decCur05.style.border = 'black solid 1px';
    decCur05.style.borderRadius = '5px';
    decCur05.style.cursor = 'pointer';
    decCur05.style.width = '14%';
    decCur05.addEventListener('click', function() {
        incrementcurrentTime(-5);
    });
    
    let now = document.createElement('button');
    now.textContent = '||';
    now.style.fontSize = '18px';
    now.style.fontWeight = 'bold';
    now.style.padding = '5px 10px';
    now.style.backgroundColor = '#4cadf7';
    now.style.color = '#fff';
    now.style.border = 'black solid 1px';
    now.style.borderRadius = '5px';
    now.style.cursor = 'pointer';
    now.style.width = '16%';
    now.addEventListener('click', function() {
        playPauseVideo();
    });
    
    let encCur05 = document.createElement('button');
    encCur05.textContent = '+05';
    encCur05.style.fontSize = '18px';
    encCur05.style.fontWeight = 'bold';
    encCur05.style.padding = '5px 10px';
    encCur05.style.backgroundColor = '#4cadf7';
    encCur05.style.color = '#fff';
    encCur05.style.border = 'black solid 1px';
    encCur05.style.borderRadius = '5px';
    encCur05.style.cursor = 'pointer';
    encCur05.style.width = '14%';
    encCur05.addEventListener('click', function() {
        incrementcurrentTime(5);
    });
    
    let encCur15 = document.createElement('button');
    encCur15.textContent = '+15';
    encCur15.style.fontSize = '18px';
    encCur15.style.fontWeight = 'bold';
    encCur15.style.padding = '5px 10px';
    encCur15.style.backgroundColor = '#4cadf7';
    encCur15.style.color = '#fff';
    encCur15.style.border = 'black solid 1px';
    encCur15.style.borderRadius = '5px';
    encCur15.style.cursor = 'pointer';
    encCur15.style.width = '14%';
    encCur15.addEventListener('click', function() {
        incrementcurrentTime(15);
    });
    
    let encCur30 = document.createElement('button');
    encCur30.textContent = '+30';
    encCur30.style.fontSize = '18px';
    encCur30.style.fontWeight = 'bold';
    encCur30.style.padding = '5px 10px';
    encCur30.style.backgroundColor = '#4cadf7';
    encCur30.style.color = '#fff';
    encCur30.style.border = 'black solid 1px';
    encCur30.style.borderRadius = '5px';
    encCur30.style.cursor = 'pointer';
    encCur30.style.width = '14%';
    encCur30.addEventListener('click', function() {
        incrementcurrentTime(30);
    });

    container.appendChild(decCur30);
    container.appendChild(decCur15);
    container.appendChild(decCur05);
    container.appendChild(now);
    container.appendChild(encCur05);
    container.appendChild(encCur15);
    container.appendChild(encCur30);
}

function createUI_tsControl1(container) {

    let outputElement = document.createElement('input');
    outputElement.type = 'text';
    outputElement.style.fontSize = '18px';
    outputElement.style.padding = '5px 0px';
    outputElement.style.width = '71%';
    outputElement.id = 'livets-iner-outputElement';
    outputElement.readOnly = true;

    let write = document.createElement('button');
    write.textContent = 'TS';
    write.style.fontSize = '18px';
    write.style.fontWeight = 'bold';
    write.style.padding = '5px 10px';
    write.style.backgroundColor = 'green';
    write.style.color = '#fff';
    write.style.border = 'black solid 1px';
    write.style.borderRadius = '5px';
    write.style.cursor = 'pointer';
    write.style.width = '14%';
    write.addEventListener('click', function() {
        isTS = true;
        generateTimestamp();
    });

    let writeCh = document.createElement('button');
    writeCh.textContent = 'CH';
    writeCh.style.fontSize = '18px';
    writeCh.style.fontWeight = 'bold';
    writeCh.style.padding = '5px 10px';
    writeCh.style.backgroundColor = 'green';
    writeCh.style.color = '#fff';
    writeCh.style.border = 'black solid 1px';
    writeCh.style.borderRadius = '5px';
    writeCh.style.cursor = 'pointer';
    writeCh.style.width = '14%';
    writeCh.addEventListener('click', function() {
        isTS = false;
        generateTimestamp();
    });

    container.appendChild(outputElement);
    container.appendChild(write);
    container.appendChild(writeCh);
}

function createUI_tsControl2(container) {

    let del = document.createElement('button');
    del.textContent = 'Del';
    del.style.fontSize = '18px';
    del.style.fontWeight = 'bold';
    del.style.padding = '5px 10px';
    del.style.backgroundColor = 'red';
    del.style.color = 'black';
    del.style.border = 'black solid 1px';
    del.style.borderRadius = '5px';
    del.style.cursor = 'pointer';
    del.style.width = '14%';
    del.addEventListener('click', function() {
        deleteFile();
    });

    let head = document.createElement('button');
    head.textContent = 'ST';
    head.style.fontSize = '18px';
    head.style.fontWeight = 'bold';
    head.style.padding = '5px 10px';
    head.style.backgroundColor = '#4cadf7';
    head.style.color = '#fff';
    head.style.border = 'black solid 1px';
    head.style.borderRadius = '5px';
    head.style.cursor = 'pointer';
    head.style.width = '14%';
    head.addEventListener('click', function() {
        getHeader();
    });

    let download = document.createElement('button');
    download.textContent = 'DL';
    download.style.fontSize = '18px';
    download.style.fontWeight = 'bold';
    download.style.padding = '5px 10px';
    download.style.backgroundColor = '#4cadf7';
    download.style.color = '#fff';
    download.style.border = 'black solid 1px';
    download.style.borderRadius = '5px';
    download.style.cursor = 'pointer';
    download.style.width = '14%';
    download.addEventListener('click', function() {
        downloadFile();
    });

    let copy = document.createElement('button');
    copy.textContent = 'CPY';
    copy.style.fontSize = '18px';
    copy.style.fontWeight = 'bold';
    copy.style.padding = '5px 10px';
    copy.style.backgroundColor = '#4cadf7';
    copy.style.color = '#fff';
    copy.style.border = 'black solid 1px';
    copy.style.borderRadius = '5px';
    copy.style.cursor = 'pointer';
    copy.style.width = '30%';
    copy.addEventListener('click', function() {
        copyFile();
    });

    let clear = document.createElement('button');
    clear.textContent = 'CLR';
    clear.style.fontSize = '18px';
    clear.style.fontWeight = 'bold';
    clear.style.padding = '5px 10px';
    clear.style.backgroundColor = '#4cadf7';
    clear.style.color = '#fff';
    clear.style.border = 'black solid 1px';
    clear.style.borderRadius = '5px';
    clear.style.cursor = 'pointer';
    clear.style.width = '28%';
    clear.addEventListener('click', function() {
        clrActivityText();
    });

    container.appendChild(del);
    container.appendChild(head);
    container.appendChild(download);
    container.appendChild(copy);
    container.appendChild(clear);
}


// ****************************************************************************
//                              Functions
// ****************************************************************************

// format time to hh:mm:ss format
function formatTime(timeInSeconds) {
    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60);
    let seconds = Math.floor(timeInSeconds - (hours * 3600) - (minutes * 60));

    minutes = ('0' + minutes).slice(-2);
    seconds = ('0' + seconds).slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}

// get time in seconds from hh:mm:ss format
function getTimeInSeconds(time) {
    let timeArray = time.split(':');
    let hours = parseInt(timeArray[0]);
    let minutes = parseInt(timeArray[1]);
    let seconds = parseInt(timeArray[2]);

    return (hours * 3600) + (minutes * 60) + seconds;
}

// increment current time
function incrementcurrentTime(timeInSeconds) {
    currentTime = getCurrentTime();
    currentTime += timeInSeconds;
    if(currentTime<0){
        currentTime = 0;
    }
    setCurrentTime(currentTime);
}

// increment selected time
function incrementSelectedTime(timeInSeconds) {
    selectedTime += timeInSeconds;

    if(selectedTime<0){
        selectedTime = 0;
    }

    let outputElement = document.querySelector('#livets-iner-outputElement');
    let timestampText = `${formatTime(selectedTime)}`;
    outputElement.value = timestampText;
}

// set selected time
function setSelectedTime() {
    currentTime = getCurrentTime();
    selectedTime = currentTime;

    let outputElement = document.querySelector('#livets-iner-outputElement');
    let timestampText = `${formatTime(selectedTime)}`;
    outputElement.value = timestampText;
}

// generate timestamp text
function generateTimestamp() {
    let activity = document.querySelector('#livets-iner-activitySelect').value;
    let tsActivityText = document.querySelector('#livets-iner-tsActivityText').value;

    let timestampText;
    let tsText = '';
    if(isTS){
        tsText = '!';
    }

    if(tsActivityText == null || tsActivityText == ""){
        timestampText = `${formatTime(selectedTime)} ${tsText}${activity}\n`;
    } else if(activity == null || activity == ""){
        timestampText = `${formatTime(selectedTime)} ${tsText}${tsActivityText}\n`;
    } else {
        timestampText = `${formatTime(selectedTime)} ${tsText}${activity} ~ ${tsActivityText}\n`;
    }

    let outputElement = document.querySelector('#livets-iner-outputElement');
    outputElement.value = timestampText;

    timestampLine = timestampText;

    if (outputTexts.length === 0) {
        outputTexts.push(getHeader());
    }
    outputTexts.push(timestampLine);
    navigator.clipboard.writeText(timestampLine).then(function() {
        console.log('clipboard cpy: ok');
    }, function(err) {
        console.error('clipboard cpy: ', err);
    });
}

// clear activity text
function clrActivityText() {
    let tsActivityText = document.querySelector('#livets-iner-tsActivityText');
    tsActivityText.value = "";
}

function downloadFile() {
    let outputText = outputTexts.join("");
    let blob = new Blob([outputText], {type: 'text/plain'});
    let url = URL.createObjectURL(blob);

    let a = document.createElement('a');

    let link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();
}

function copyFile() {
    let outputText = outputTexts.join("");
        
    // Copy outputText to clipboard
    navigator.clipboard.writeText(outputText).then(function() {
        console.log('Copying to clipboard was successful!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}

function deleteFile() {
    outputTexts = [];
}

function getHeader() {
    let url = window.location.href;

    // remove query string after the video id
    let index = url.indexOf('&');
    if (index > 0) {
        url = url.substring(0, index);
    }

    // header text is:
    // {date in yyyy-mm-dd} ~ {page title} {cariage return }
    // URL: {url}
    let now = new Date();
    let headerText = now.toISOString().slice(0,10) + " ~ " + getStreamName() + "\nURL: " + url + "\nLiveTs:\n" + "0:00:00 Start\n";

    fileName = now.toISOString().slice(0,10) + " ~ " + getStreamName() + ".txt";

    navigator.clipboard.writeText(headerText).then(function() {
        console.log('clipboard cpy: ok');
    }, function(err) {
        console.error('clipboard cpy: ', err);
    });

    return headerText;
}
