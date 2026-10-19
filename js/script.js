// Portfolio interactions: mobile menu, theme preference,
// greeting, project filtering, and contact form feedback.

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.querySelector('#theme-toggle');
const greeting = document.querySelector('#greeting');
const contactForm = document.querySelector('#contact-form');
const formMessage = document.querySelector('#form-message');

const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');

// Mobile menu
menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');

  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.setAttribute(
    'aria-label',
    isOpen ? 'Close menu' : 'Open menu'
  );
});

// Close mobile menu after clicking a navigation link
document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
  });
});

// Project filtering
filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      filterButton.classList.toggle(
        'active',
        filterButton === button
      );
    });

    projectCards.forEach((card) => {
      const projectCategory = card.dataset.category;
      const shouldShow =
        selectedFilter === 'all' ||
        projectCategory === selectedFilter;

      card.classList.toggle('hidden', !shouldShow);
    });
  });
});

// Dark mode preference
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  themeToggle.setAttribute('aria-label', 'Switch to light mode');
}

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');

  localStorage.setItem(
    'portfolio-theme',
    isDark ? 'dark' : 'light'
  );

  themeToggle.setAttribute(
    'aria-label',
    isDark ? 'Switch to light mode' : 'Switch to dark mode'
  );
});

// Greeting based on time of day
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = 'Good morning, I am';
} else if (hour < 18) {
  greeting.textContent = 'Good afternoon, I am';
} else {
  greeting.textContent = 'Good evening, I am';
}

// Contact form validation
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message').value.trim();

  formMessage.className = 'form-message';

  if (!name || !email || !message) {
    formMessage.textContent =
      'Please complete all fields before sending your message.';

    formMessage.classList.add('error');
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    formMessage.textContent =
      'Please enter a valid email address.';

    formMessage.classList.add('error');
    return;
  }

  formMessage.textContent =
    'Thanks! Your message is ready to send.';

  formMessage.classList.add('success');

  contactForm.reset();
});