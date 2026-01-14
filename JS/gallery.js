/**
 * Gallery Slideshow Logic
 * Matches fixed-width container: 1100px
 */

const mainDisplay = document.getElementById('mainDisplay');
const thumbnails = Array.from(document.querySelectorAll('.thumb'));
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
let autoPlayTimer;

// Function to update the image and active state
function updateGallery(index) {
    currentIndex = index;

    // 1. Update the main display image
    mainDisplay.src = thumbnails[currentIndex].src;

    // 2. Manage the "Active" thumbnail border
    thumbnails.forEach(t => t.classList.remove('active'));
    thumbnails[currentIndex].classList.add('active');

    // 3. Restart the 5s timer so it doesn't skip immediately after a click
    startAutoPlay();
}

// Logic for the "Next" button and Auto-play
function nextSlide() {
    let nextIndex = (currentIndex + 1) % thumbnails.length;
    updateGallery(nextIndex);
}

// Logic for the "Previous" button
function prevSlide() {
    let prevIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    updateGallery(prevIndex);
}

// Set/Reset the 5-second interval
function startAutoPlay() {
    clearInterval(autoPlayTimer);
    autoPlayTimer = setInterval(nextSlide, 5000);
}

// Event Listeners for Manual Navigation
if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
}

// Event Listeners for Thumbnails
thumbnails.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        updateGallery(index);
    });
});

// Initialize the timer on page load
startAutoPlay();