document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    for (const link of smoothScrollLinks) {
      link.addEventListener('click', smoothScroll);
    }
  
    // Hover animation for social icons
    const socialIcons = document.querySelectorAll('.socials a');
    for (const icon of socialIcons) {
      icon.addEventListener('mouseover', addHoverAnimation);
      icon.addEventListener('mouseout', removeHoverAnimation);
    }
  
    // Form submission handling
    const contactForm = document.forms['myform'];
    if (contactForm) {
      contactForm.addEventListener('submit', handleFormSubmission);
    }
  });
  
  function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  }
  
  function addHoverAnimation() {
    this.classList.add('hovered');
  }
  
  function removeHoverAnimation() {
    this.classList.remove('hovered');
  }
  
  function handleFormSubmission(e) {
    e.preventDefault();
    // You can add your form submission logic here
    alert('Form submitted!'); // Placeholder, replace with your actual form submission code
  }
  