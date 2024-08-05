

const backButton = document.getElementById('back');
const forwardButton = document.getElementById('forward');
const resButton = document.getElementById('refresh');

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
})