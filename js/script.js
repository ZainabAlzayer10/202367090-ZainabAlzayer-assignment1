// Portfolio interactions: mobile menu, theme preference, greeting, and form feedback.
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.querySelector('#theme-toggle');
const greeting = document.querySelector('#greeting');
const contactForm = document.querySelector('#contact-form');
const formMessage = document.querySelector('#form-message');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme === 'dark') document.body.classList.add('dark');

themeToggle.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
  themeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
});

const hour = new Date().getHours();
greeting.textContent = `${hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'}, I am`;

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formMessage.textContent = 'Thanks! Your message is ready to send (demo only).';
  contactForm.reset();
});