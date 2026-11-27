# Technical Documentation — Assignment 4

## Project Overview

This project is a responsive and interactive personal portfolio web application built with HTML5, CSS3, and JavaScript.

The website presents personal information, skills, projects, and a contact form. It also connects to the GitHub REST API to retrieve and display public repositories dynamically.

Assignment 4 brings together the skills and features developed throughout the previous assignments into one complete and polished personal web application.

The final application includes:

- Responsive personal portfolio design.
- External GitHub API integration.
- Dynamic GitHub project cards.
- Project sorting and filtering.
- Persistent user preferences.
- API loading, empty-data, and error handling.
- Contact form validation.
- Light and dark mode.
- Performance improvements.
- Accessibility considerations.
- Responsive layouts for desktop and mobile devices.

## Technologies

### HTML5

HTML5 is used to create the structure of the website using semantic elements such as:

- `header`
- `nav`
- `main`
- `section`
- `article`
- `form`
- `footer`

Labels are connected to form fields using the `for` and `id` attributes. Buttons also include accessible attributes such as `aria-label` and `aria-expanded`.

### CSS3

CSS3 is used for:

- Custom properties.
- CSS Grid.
- Flexbox.
- Responsive layouts.
- Media queries.
- Responsive typography.
- Hover and focus states.
- Transitions and animations.
- Light and dark mode styling.

### JavaScript

JavaScript is used for:

- Event listeners.
- DOM manipulation.
- Mobile menu interaction.
- Project filtering.
- GitHub API integration.
- Project sorting.
- Contact form validation.
- Time-based greeting.
- Theme management.
- Persistent user preferences.
- Loading and error messages.

### GitHub REST API

The GitHub REST API is used to retrieve and display public repositories from the GitHub account:

```text
ZainabAlzayer10
```

## Main Features

1. Sticky navigation with links to the About, Projects, and Contact sections.
2. Responsive mobile menu for smaller screens.
3. Light and dark mode.
4. Theme preference saved using `localStorage`.
5. Greeting based on the visitor's local time.
6. Project filtering by category.
7. Filter preference saved using `localStorage`.
8. Contact form validation.
9. Success and error messages for form submission.
10. Dynamic GitHub project loading.
11. GitHub API loading and error handling.
12. GitHub project sorting.
13. Sorting preference saved using `localStorage`.
14. Lazy loading for project images.
15. Asynchronous image decoding.
16. Responsive layout for desktop and mobile devices.
17. Hover effects, smooth scrolling, and animated feedback messages.

## GitHub API Integration

The portfolio uses the GitHub REST API to retrieve and display public repositories from the GitHub account `ZainabAlzayer10`.

The API endpoint used is:

```text
https://api.github.com/users/ZainabAlzayer10/repos?sort=updated&per_page=6
```

The endpoint requests up to six public repositories and sorts them by their latest update.

The website uses the JavaScript `fetch()` function to send an asynchronous request:

```javascript
const response = await fetch(
  `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`
);
```

The returned response is converted to JSON:

```javascript
githubRepositories = await response.json();
```

The JSON data is then used to create project cards dynamically.

For each repository, the website displays:

- Repository name.
- Repository description.
- Main programming language.
- Number of stars.
- Direct link to the repository.

The repository link opens in a new browser tab using:

```html
target="_blank"
rel="noopener noreferrer"
```

## API Loading and Error Handling

A loading message is displayed while the API request is being processed:

```text
Loading GitHub projects...
```

After the data is successfully retrieved, the loading message is hidden.

The request checks whether the response was successful:

```javascript
if (!response.ok) {
  throw new Error('GitHub API request failed');
}
```

If the request fails, the `catch` block displays:

```text
Unable to load GitHub projects at the moment.
```

If the GitHub account does not contain any public repositories, the website displays:

```text
No public GitHub projects were found.
```

This prevents the page from showing an empty section without feedback.

## Dynamic GitHub Project Cards

The `displayGitHubProjects()` function creates project cards using the repository data received from GitHub.

The function first clears the existing project cards:

```javascript
githubProjectGrid.innerHTML = '';
```

It then loops through the repositories:

```javascript
repositories.forEach((repository, index) => {
```

For every repository, JavaScript creates an `article` element and adds the repository information to it.

Each project card includes:

- A project number.
- The repository name.
- The repository description.
- The programming language.
- The number of stars.
- A link to GitHub.

Finally, the card is added to the GitHub projects container:

```javascript
githubProjectGrid.appendChild(projectCard);
```

## Project Filtering

The original project cards contain a `data-category` attribute:

```html
<article class="project-card" data-category="adventure">
```

```html
<article class="project-card" data-category="platform">
```

The available filter buttons are:

- All.
- Adventure.
- Platform.

When a filter button is clicked, JavaScript reads its `data-filter` value and compares it with the category of every project card.

If the category does not match, JavaScript adds the `hidden` class:

```javascript
card.classList.toggle('hidden', !shouldShow);
```

The `hidden` class hides the project using CSS:

```css
.project-card.hidden {
  display: none;
}
```

## Persistent Project Filtering

The selected project filter is saved using `localStorage`:

```javascript
localStorage.setItem(
  'project-filter',
  selectedFilter
);
```

When the website loads, JavaScript retrieves the saved filter:

```javascript
const savedFilter =
  localStorage.getItem('project-filter') || 'all';
```

The saved filter is then applied automatically:

```javascript
applyProjectFilter(savedFilter);
```

This allows the website to remember the visitor's previous filter selection.

## GitHub Project Sorting

GitHub projects can be sorted using three buttons:

- Recently updated.
- Most stars.
- Name.

Each button has a `data-sort` attribute:

```html
<button data-sort="updated">
  Recently updated
</button>
```

```html
<button data-sort="stars">
  Most stars
</button>
```

```html
<button data-sort="name">
  Name
</button>
```

When a sorting button is clicked, JavaScript copies the repository array:

```javascript
const sortedRepositories = [
  ...githubRepositories
];
```

A copy is used so that the original API data remains unchanged.

### Sorting by Stars

The repositories are sorted from the highest number of stars to the lowest:

```javascript
sortedRepositories.sort(
  (firstRepository, secondRepository) =>
    secondRepository.stargazers_count -
    firstRepository.stargazers_count
);
```

### Sorting by Name

The repositories are sorted alphabetically:

```javascript
sortedRepositories.sort(
  (firstRepository, secondRepository) =>
    firstRepository.name.localeCompare(
      secondRepository.name
    )
);
```

### Sorting by Update Date

The repositories are sorted from the most recently updated to the oldest:

```javascript
sortedRepositories.sort(
  (firstRepository, secondRepository) =>
    new Date(secondRepository.updated_at) -
    new Date(firstRepository.updated_at)
);
```

After sorting, the project cards are displayed again:

```javascript
displayGitHubProjects(sortedRepositories);
```

## Persistent GitHub Sorting

The selected GitHub sorting option is saved using:

```javascript
localStorage.setItem(
  'github-sort',
  selectedSort
);
```

When the website loads, the saved option is retrieved:

```javascript
const savedSort =
  localStorage.getItem('github-sort') || 'updated';
```

The saved sorting option is then applied after the repositories are loaded:

```javascript
applyGitHubSort(savedSort);
```

This allows the website to remember the user's preferred sorting method.

## Active Buttons

The active filter and sorting buttons receive the `active` CSS class.

For example:

```javascript
sortButton.classList.toggle(
  'active',
  sortButton.dataset.sort === selectedSort
);
```

The active button has a filled background, while the other buttons remain transparent.

This gives the user clear visual feedback about the current selection.

## Dark Mode and State Management

The theme toggle changes the website between light mode and dark mode.

When the user changes the theme, the selected value is stored:

```javascript
localStorage.setItem(
  'portfolio-theme',
  isDark ? 'dark' : 'light'
);
```

When the website is opened, JavaScript checks the saved theme:

```javascript
const savedTheme =
  localStorage.getItem('portfolio-theme');
```

If the saved value is `dark`, the `dark` class is added to the body:

```javascript
document.body.classList.add('dark');
```

The website manages and remembers three main user preferences:

- Theme preference.
- Project filter preference.
- GitHub sorting preference.

## Time-Based Greeting

The website uses the visitor's local time:

```javascript
const hour = new Date().getHours();
```

The greeting changes according to the current hour:

```javascript
if (hour < 12) {
  greeting.textContent = 'Good morning, I am';
} else if (hour < 18) {
  greeting.textContent = 'Good afternoon, I am';
} else {
  greeting.textContent = 'Good evening, I am';
}
```

This provides a small personalized interaction for visitors.

## Contact Form Validation

The contact form submission is handled using JavaScript:

```javascript
contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
});
```

The `preventDefault()` method prevents the page from reloading.

The script retrieves and cleans the form values:

```javascript
const name = document.querySelector('#name').value.trim();
const email = document.querySelector('#email').value.trim();
const message = document.querySelector('#message').value.trim();
```

The form checks whether any field is empty:

```javascript
if (!name || !email || !message) {
  formMessage.textContent =
    'Please complete all fields before sending your message.';
}
```

It also checks whether the email contains `@` and a dot:

```javascript
if (!email.includes('@') || !email.includes('.')) {
  formMessage.textContent =
    'Please enter a valid email address.';
}
```

If the information is valid, a success message is displayed.

The form is a front-end demonstration and does not send data to a backend server.

## Performance Improvements

Several performance improvements were applied.

### Lazy Loading

Project images use:

```html
loading="lazy"
```

This delays image loading until the images are close to the visible area.

### Asynchronous Image Decoding

Project images also use:

```html
decoding="async"
```

This allows the browser to decode images without unnecessarily blocking page rendering.

### Deferred JavaScript

The JavaScript file is loaded with:

```html
<script src="js/script.js" defer></script>
```

The `defer` attribute allows the HTML document to be parsed before the script is executed.

### CSS Cleanup

Unused styles related to the previous sorting `select` element were removed.

Duplicate CSS rules were also removed after replacing the dropdown with sorting buttons.

## Accessibility Considerations

The website includes several accessibility improvements:

- Semantic HTML elements.
- Labels connected to form fields.
- Alternative text for project images.
- Accessible navigation labels.
- `aria-expanded` for the mobile menu.
- `aria-label` for interactive buttons.
- `role="status"` for form feedback.
- Visible focus styles for form controls.

## Testing Checklist

The following features were tested:

- Opening `index.html` in a modern browser.
- Navigation links.
- Responsive mobile menu.
- Light and dark mode.
- Theme persistence after reopening the website.
- Time-based greeting.
- Project filtering.
- Filter persistence after reopening the website.
- Contact form with empty fields.
- Contact form with an invalid email.
- Contact form with valid information.
- Success and error messages.
- GitHub repository loading.
- GitHub API error handling.
- Empty GitHub repository handling.
- GitHub project links.
- GitHub project sorting by update date.
- GitHub project sorting by stars.
- GitHub project sorting by name.
- Sorting preference persistence.
- Project image lazy loading.
- Asynchronous image decoding.
- Desktop layout.
- Mobile layout.
- Hover effects and transitions.

The browser Developer Tools Network tab was used to inspect image requests and confirm that project images load correctly when reaching the Projects section.

The JavaScript file was also checked using:

```text
node --check js/script.js
```

## File Structure

```text
202367090-ZainabAlzayer-assignment4/
├── README.md
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── assets/
│   ├── farm-adventure.png
│   └── platform-game.png
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── presentation/
│   ├── slides.pdf
│   └── demo-video.mp4
└── .gitignore
```

## Future Improvements

Future versions could include:

- More detailed GitHub repository information.
- Repository language filtering.
- Pagination for displaying more repositories.
- A profile image.
- A backend service for the contact form.
- A live deployment URL.
- A GitHub access token to support higher API request limits.
- A blog section for technical articles.
- More advanced accessibility testing.
- Automated performance testing using Lighthouse.