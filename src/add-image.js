import Kiwi from './kiwi.jpg';
import altText from './alt.text.txt';

function addImage() {
    const body = document.querySelector('body');
    const newImage = document.createElement('img');
    newImage.alt = altText;
    newImage.width = 200;
    newImage.src = Kiwi;
    body.appendChild(newImage);
}

export default addImage;