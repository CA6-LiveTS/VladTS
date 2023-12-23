
// setup VladTS UI
function setupVladTS(menuRow, container) {

    let inContainer = document.createElement('div');
    inContainer.id = 'vodts-container';
    inContainer.style.display = 'none';

    let toggleButton = document.createElement('button');
    toggleButton.innerText = 'VladTS';
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
}