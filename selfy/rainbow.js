//rgb(90, 200, 250);
//rgb(0, 122, 255);

// Use the the centre Y value of a box to determine its Y value percentage on the screen, and assign it a RGB color value from the specified colors. Update this on page load.

function updateWindowColor() {
    var rgbTop = [90, 207, 250];
    var rgbBottom = [255, 0, 235];
    var messages = document.getElementsByClassName('message');
    var rgb = [];

    for (var i = 0; i < messages.length; ++i) { // For each message element
        var item = messages[i]; // Make item the element
        var yPosition = 1 - (item.offsetTop - window.scrollY) / window.innerHeight;
        yPosition = yPosition > 1 ? 1 : yPosition;
        yPosition = yPosition < 0 ? 0 : yPosition;
        console.log(yPosition);
        for (var ii = 0; ii < 3; ++ii) {
            if (rgbTop[ii] > rgbBottom[ii]) {
                rgb[ii] = ((rgbTop[ii] - rgbBottom[ii]) * yPosition) + rgbBottom[ii];
            } else {
                rgb[ii] = ((rgbBottom[ii] - rgbTop[ii]) * yPosition) + rgbTop[ii];
            }
            rgb[ii] = Math.floor(rgb[ii]);
        bgString = 'rgb(' + rgb[0] + ', ' + rgb[1] + ', ' + rgb[2] + ')';
        }
        console.log(bgString);
        messages[i].style.backgroundColor = bgString;
    }
}

window.onload = updateWindowColor;
window.onscroll = updateWindowColor;
window.onresize = updateWindowColor;