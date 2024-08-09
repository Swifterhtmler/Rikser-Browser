

const backButton = document.getElementById('back');
const forwardButton = document.getElementById('forward');
const resButton = document.getElementById('refresh');
const urlInput = document.getElementById('searchfield')
const iframe = document-getElementById('browser-frame')

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




// let historyStack = [];
// let historyIndex = -1;

// function loadPage(url) {
//     if (url === '') return;
//     iframe.src = url;
//     historyStack = historyStack.slice(0, historyIndex + 1);
//     historyStack.push(url);
//     historyIndex++;
// }

// urlInput.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//         loadPage(urlInput.value);
//     }
// });

// backButton.addEventListener('click', () => {
//     if (historyIndex > 0) {
//         historyIndex--;
//         iframe.src = historyStack[historyIndex];
//     }
// });

// forwardButton.addEventListener('click', () => {
//     if (historyIndex < historyStack.length - 1) {
//         historyIndex++;
//         iframe.src = historyStack[historyIndex];
//     }
// });

// resButton.addEventListener('click', () => {
//     iframe.src = iframe.src;
// });


let historyStack = [];
let historyIndex = -1;

function loadPage(url) {
    if (url === '') return;
    iframe.src = url;
    historyStack = historyStack.slice(0, historyIndex + 1);
    historyStack.push(url);
    historyIndex++;
}

urlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        loadPage(urlInput.value);
    }
});

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