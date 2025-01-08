// Smooth scrolling for navigation links
const sections = document.querySelectorAll('section[id]');

function scrollToSection(event) {
  event.preventDefault();
  const targetID = this.getAttribute('href');
  const targetElement = document.querySelector(targetID);

  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: 'smooth' 
  });
}

sections.forEach(section => {
  const anchor = document.querySelector(`a[href="#${section.id}"]`);
  if (anchor) {
    anchor.addEventListener('click', scrollToSection);
  }
});

// Optional: Add a "Back to Top" button
const backToTopButton = document.createElement('button');
backToTopButton.textContent = 'Back to Top';
backToTopButton.classList.add('back-to-top'); // Add a CSS class for styling

document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Add a CSS class for styling the "Back to Top" button
const style = document.createElement('style');
style.textContent = `
  .back-to-top {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #007bff; /* Use your brand color */
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    display: none; /* Hide initially */
  }
`;
document.head.appendChild(style);

// Show the "Back to Top" button when scrolling down
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});
