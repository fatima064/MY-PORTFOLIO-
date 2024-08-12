// Add this script to your script.js file

document.addEventListener('DOMContentLoaded', () => {
    const titles = ["Frontend Developer", "Data Analyst", "Student"];
    let currentIndex = 0;
    const textElement = document.querySelector('.home .dynamic-text');

    function changeTitle() {
        textElement.classList.remove('fade-in'); // Remove fade-in class
        setTimeout(() => {
            textElement.textContent = titles[currentIndex]; // Change the text
            textElement.classList.add('fade-in'); // Add fade-in class
            currentIndex = (currentIndex + 1) % titles.length; // Move to the next title
        }, 500); // Match this time with the transition duration
    }

    // Change the title every 3 seconds
    setInterval(changeTitle, 3000);

    // Start the first animation
    textElement.classList.add('fade-in');
});
