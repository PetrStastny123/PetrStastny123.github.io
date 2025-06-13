// Simple scroll animation
document.addEventListener('DOMContentLoaded', function() {
  // Get all sections
  const sections = document.querySelectorAll('.section');
  
  // Make sure all sections are visible initially
  sections.forEach(section => {
    section.style.opacity = '1';
    section.style.transform = 'translateY(0)';
  });
  
  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to handle the scroll event
  function handleScroll() {
    sections.forEach(section => {
      if (isInViewport(section)) {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }
    });
  }
  
  // Listen for scroll events
  window.addEventListener('scroll', handleScroll);
}); 