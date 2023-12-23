let observer = new MutationObserver(function() {
    let titleElement = getTitleElement();


    let container = document.createElement('div');
    container.id = 'ca6livets-container';

    let inContainer = document.createElement('div');
    inContainer.id = 'ca6livets-iner-container';
    inContainer.style.display = 'none';

    let firstRow = document.createElement('div');
    container.appendChild(firstRow);
    container.appendChild(inContainer);

    titleElement.prepend(container);

    setupVladTS(firstRow, container);
    setupLiveTS(firstRow, container);
    setupVodTS(firstRow, container);

    observer.disconnect();
});
observer.observe(document, {childList: true, subtree: true});
