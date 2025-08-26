// Enhanced JavaScript functionality for BioPharmLab website

// Dark mode toggle with enhanced functionality
const darkToggle = document.getElementById('darkToggle');
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Initialize dark mode from localStorage
function initializeDarkMode() {
  if (isDarkMode) {
    document.body.classList.add('dark');
    darkToggle.textContent = '☀️';
  } else {
    document.body.classList.remove('dark');
    darkToggle.textContent = '🌙';
  }
}

// Toggle dark mode
darkToggle.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark');
  localStorage.setItem('darkMode', isDarkMode);
  darkToggle.textContent = isDarkMode ? '☀️' : '🌙';
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Form validation and submission
const contactForm = document.querySelector('form');
const nameInput = contactForm.querySelector('input[type="text"]');
const emailInput = contactForm.querySelector('input[type="email"]');
const messageInput = contactForm.querySelector('textarea');
const submitBtn = contactForm.querySelector('button[type="submit"]');

// Enhanced form validation
function validateForm() {
  let isValid = true;
  
  // Name validation
  if (nameInput.value.trim().length < 2) {
    showFieldError(nameInput, 'Name must be at least 2 characters');
    isValid = false;
  } else {
    clearFieldError(nameInput);
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    showFieldError(emailInput, 'Please enter a valid email address');
    isValid = false;
  } else {
    clearFieldError(emailInput);
  }
  
  // Message validation
  if (messageInput.value.trim().length < 10) {
    showFieldError(messageInput, 'Message must be at least 10 characters');
    isValid = false;
  } else {
    clearFieldError(messageInput);
  }
  
  return isValid;
}

function showFieldError(field, message) {
  clearFieldError(field);
  field.style.borderColor = '#ff006e';
  field.style.boxShadow = '0 0 10px rgba(255, 0, 110, 0.5)';
  
  const errorDiv = document.createElement('div');
  errorDiv.className = 'field-error';
  errorDiv.textContent = message;
  errorDiv.style.color = '#ff006e';
  errorDiv.style.fontSize = '0.8rem';
  errorDiv.style.marginTop = '0.5rem';
  field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

function clearFieldError(field) {
  field.style.borderColor = '';
  field.style.boxShadow = '';
  const existingError = field.parentNode.querySelector('.field-error');
  if (existingError) {
    existingError.remove();
  }
}

// Form submission with loading state
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  if (!validateForm()) {
    return;
  }
  
  // Show loading state
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  submitBtn.style.opacity = '0.6';
  
  // Simulate form submission (replace with actual API call)
  try {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay
    
    // Success state
    submitBtn.textContent = '✓ Sent!';
    submitBtn.style.background = 'linear-gradient(45deg, #06ffa5, #00d4ff)';
    
    // Reset form
    setTimeout(() => {
      contactForm.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
      submitBtn.style.background = '';
    }, 3000);
    
  } catch (error) {
    // Error state
    submitBtn.textContent = 'Error - Try Again';
    submitBtn.style.background = 'linear-gradient(45deg, #ff006e, #ff4757)';
    
    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      submitBtn.style.opacity = '1';
      submitBtn.style.background = '';
    }, 3000);
  }
});

// Real-time input validation
[nameInput, emailInput, messageInput].forEach(input => {
  input.addEventListener('blur', validateForm);
  input.addEventListener('input', () => clearFieldError(input));
});

// Scroll-to-top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '↑';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.display = 'none';
document.body.appendChild(scrollToTopBtn);

// Show/hide scroll-to-top button
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});

// Scroll to top functionality
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Enhanced button interactions
const exploreBtn = document.querySelector('#home button');
exploreBtn.addEventListener('click', () => {
  document.querySelector('#research').scrollIntoView({
    behavior: 'smooth'
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      entry.target.classList.add('animate-in');
    }
  });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll('section').forEach(section => {
  observer.observe(section);
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  initializeDarkMode();
  
  // Add loading animation to cards
  document.querySelectorAll('.card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });
});
