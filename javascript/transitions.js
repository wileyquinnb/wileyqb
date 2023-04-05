
function preloadPage() { }

const anchors = document.querySelectorAll('a');
const newButton = document.createElement('div');
const allAnchors = document.querySelectorAll('button');
const loadingElement = document.getElementById('loading');
const newButtonStyles = getComputedStyle(newButton);

anchors.forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();

        clickedButton = e.target;

        if (!clickedButton) throw new Error('Failed to get button');

        newButton.classList = clickedButton.classList;
        newButton.classList.add('setZ');
        newButton.classList.add('expand');
        clickedButton.classList.add('removeShadow');

        allAnchors.forEach(anchor => {
            anchor.classList.add('shrink');
        });

        overlay1.appendChild(newButton);

        loadingElement.style.backgroundColor = newButtonStyles.backgroundColor;

        setTimeout(() => {
            window.location.href = anchor.href;
        }, 600);
    });
});
