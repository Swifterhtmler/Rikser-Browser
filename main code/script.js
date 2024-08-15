

const backButton = document.getElementById('back');
const forwardButton = document.getElementById('forward');
const resButton = document.getElementById('refresh');
const urlInput = document.getElementById('searchfield');
const loadButton = document.getElementById('loadButton')

backButton.addEventListener('mouseover', () => {
    backButton.style.boxShadow ='5px 5px 5px  rgba(141, 156, 164, 0.65)';
});

backButton.addEventListener('mouseout', () => {
    backButton.style.boxShadow ='none';
});

forwardButton.addEventListener('mouseover', () => {
    forwardButton.style.boxShadow ='5px 5px 5px  rgba(141, 156, 164, 0.65)';
});

forwardButton.addEventListener('mouseout', () => {
    forwardButton.style.boxShadow ='none';
});

resButton.addEventListener('mouseover', () => {
    resButton.style.boxShadow ='5px 5px 5px  rgba(141, 156, 164, 0.65)';
});

resButton.addEventListener('mouseout', () => {
    resButton.style.boxShadow ='none';
});

loadButton.addEventListener('mouseover', () => {
    loadButton.style.boxShadow = '5px 5px 5px  rgba(141, 156, 164, 0.65)';
});

loadButton.addEventListener('mouseout', () => {
    loadButton.style.boxShadow = 'none';
})


function loadPage(url) {
    if (url !== '') {
        // Add the URL to the history stack only if it's a new navigation
        if (historyIndex === -1 || historyStack[historyIndex] !== url) {
            historyStack = historyStack.slice(0, historyIndex + 1); // Truncate forward history if needed
            historyStack.push(url);
            historyIndex++;
        }

        iframe.src = url; // Set the iframe's source to the input URL
    } else {
        console.error('Empty URL provided');
    }
}



let historyStack = [];
let historyIndex = -1;


backButton.addEventListener('click', () => {
    if (historyIndex > 0) {
        historyIndex--;
        iframe.src = historyStack[historyIndex];
    }
});

forwardButton.addEventListener('click', () => {
    if (historyIndex < historyStack.length - 1) {
        historyIndex++;
        iframe.src = historyStack[historyIndex];
    }
});

resButton.addEventListener('click', () => {
    iframe.src = iframe.src;
});

