document.addEventListener('DOMContentLoaded', function () {
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    for (const link of smoothScrollLinks) {
      link.addEventListener('click', smoothScroll);
    }
  
    const socialIcons = document.querySelectorAll('.socials a');
    for (const icon of socialIcons) {
      icon.addEventListener('mouseover', addHoverAnimation);
      icon.addEventListener('mouseout', removeHoverAnimation);
    }
  
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
  
