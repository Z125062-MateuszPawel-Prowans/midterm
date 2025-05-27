// This script handles the scroll behavior for the main content area and the navigation bar.

var mainElement = document.querySelector('main');
                
// Control the "scrolled" class on the navbar based on scroll position,
// in order to change its appearance when the user scrolls down.
mainElement.addEventListener('scroll', function() {
    const scrollTop = window.scrollY || mainElement.scrollTop;
    const header = document.getElementById('navbar');
    if (scrollTop > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Add event listeners for the up and down buttons to scroll to the previous or next section.
function sectionUp() {
    const sections = document.querySelectorAll('section');
    let currentPosition = window.scrollY || mainElement.scrollTop;
    let closestSection = null;
    // Find the closest section above the current scroll position
    // that is at least 10 pixels above the current position.
    sections.forEach((section, index) => {
        if((closestSection == null || section.offsetTop > closestSection.offsetTop) && section.offsetTop < currentPosition - 10) {
            closestSection = section;
        }
    });
    // If a section is found, scroll to it smoothly.
    if(closestSection != null) {
        closestSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function sectionDown() {
    const sections = document.querySelectorAll('section');
    let currentPosition = window.scrollY || mainElement.scrollTop;
    let closestSection = null;
    // Find the closest section above the current scroll position
    // that is at least 10 pixels above the current position.
    sections.forEach((section, index) => {
        if((closestSection == null || section.offsetTop < closestSection.offsetTop) && section.offsetTop > currentPosition + 10) {
            closestSection = section;
        }
    });
    // If a section is found, scroll to it smoothly.
    if(closestSection != null) {
        closestSection.scrollIntoView({ behavior: 'smooth' });
    }            
}