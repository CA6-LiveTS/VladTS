

let vodts_options = ["All", "Chapter Only"];

// setup VodTS UI
function setupVodTS(menuRow, container) {

    let inContainer = document.createElement('div');
    inContainer.id = 'vodts-container';
    inContainer.style.display = 'none';

    let toggleButton = document.createElement('button');
    toggleButton.innerText = 'VodTS';
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

    vodts_createUI(inContainer);
}

function vodts_createUI(container) {

    let tsControl = document.createElement('div');
    let timestamps = document.createElement('div');
    timestamps.id = 'vodts-timestamps';

    container.appendChild(tsControl);
    container.appendChild(timestamps);


    vodts_createUI_tsControl(tsControl);
    vodts_createUI_timestamps(timestamps);
}

function vodts_createUI_tsControl(container) {

    let loadButton = document.createElement('button');
    loadButton.textContent = 'Paste';
    loadButton.style.fontSize = '18px';
    loadButton.style.fontWeight = 'bold';
    loadButton.style.padding = '5px 10px';
    loadButton.style.backgroundColor = '#66d672';
    loadButton.style.color = '#fff';
    loadButton.style.border = 'none';
    loadButton.style.borderRadius = '5px';
    loadButton.style.cursor = 'pointer';
    loadButton.style.backgroundColor = '#66d672';
    // loadButton.addEventListener('click', loadTimestamps);
    container.appendChild(loadButton);

    let searchButton = document.createElement('button');
    searchButton.textContent = 'Search';
    searchButton.style.fontSize = '18px';
    searchButton.style.fontWeight = 'bold';
    searchButton.style.padding = '5px 10px';
    searchButton.style.backgroundColor = '#66d672';
    searchButton.style.color = '#fff';
    searchButton.style.border = 'none';
    searchButton.style.borderRadius = '5px';
    searchButton.style.cursor = 'pointer';
    searchButton.style.backgroundColor = '#66d672';
    // searchButton.addEventListener('click', parseRepoGlobal);
    container.appendChild(searchButton);

    let findButton = document.createElement('button');
    findButton.textContent = 'Comment';
    findButton.style.fontSize = '18px';
    findButton.style.fontWeight = 'bold';
    findButton.style.padding = '5px 10px';
    findButton.style.backgroundColor = '#66d672';
    findButton.style.color = '#fff';
    findButton.style.border = 'none';
    findButton.style.borderRadius = '5px';
    findButton.style.cursor = 'pointer';
    findButton.style.backgroundColor = '#66d672';
    // findButton.addEventListener('click', getFromComment);
    container.appendChild(findButton);

    let activitySelect = document.createElement('select');
    activitySelect.style.fontSize = '18px';
    activitySelect.style.padding = '5px';
    vodts_options.forEach(function(optionText) {
        let optionElement = document.createElement('option');
        optionElement.textContent = optionText;
        optionElement.value = optionText;
        activitySelect.appendChild(optionElement);
    });
    container.appendChild(activitySelect);
}

function vodts_createUI_timestamps(container) {

}