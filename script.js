let clickCount = 0;

document.getElementById('logo').addEventListener('click', () => {
    clickCount++;

    if (clickCount >= 5) {
        // Add confetti effect
        confetti.start();
        clickCount = 0; // Reset the click count
    }
});
