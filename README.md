# Assignment 4 — Interactive Personal Portfolio

A responsive and interactive personal portfolio website built with HTML, CSS, and JavaScript.

This project builds on the previous portfolio by adding external API integration, advanced project sorting, persistent user preferences, error handling, and performance improvements.

## Project Features

- Responsive personal portfolio design.
- Sticky navigation bar.
- Responsive mobile menu.
- About, Projects, and Contact sections.
- Light and dark mode.
- Project filtering by category.
- GitHub API integration.
- Dynamic display of public GitHub repositories.
- Sorting GitHub projects by update date, stars, or name.
- Contact form validation.
- Loading and error messages.
- Persistent user preferences using `localStorage`.
- Lazy loading and asynchronous decoding for project images.
- Hover effects, smooth scrolling, and animated feedback messages.
- Hidden Pokémon hunt using the PokéAPI.
- Pokémon caught counter with a Poké Ball icon.
- Reset button for the Pokémon counter.
- Responsive Pokémon message layout for desktop and mobile screens.

## Run Locally

1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` directly in a browser, or use the Live Server extension.
4. Open the website in a modern browser.

No installation or backend server is required.

The contact form is a front-end demonstration and does not send data to a backend service.

## Interactive Features

### Project Filtering

The project section includes three filter buttons:

- All
- Adventure
- Platform

When a filter is selected, JavaScript compares the selected category with each project's `data-category` attribute.

The selected filter is saved using `localStorage`, so it is restored when the user opens the website again.

### Light and Dark Mode

Users can switch between light mode and dark mode using the theme button.

The selected theme is saved in the browser using:

```javascript
localStorage.setItem('portfolio-theme', 'dark');
```

When the website is opened again, the saved theme is restored automatically.

### Time-Based Greeting

The greeting changes according to the visitor's local time:

- Good morning
- Good afternoon
- Good evening

### Contact Form Validation

The contact form checks that:

- The name field is not empty.
- The email field is not empty.
- The message field is not empty.
- The email contains `@` and a dot.

The form displays a success or error message based on the entered information.

The form does not send real messages because it is a front-end demonstration.

## Pokémon Hunt

The website includes a small interactive Pokémon hunt as an original creative feature.

When the page opens, a random Pokémon is retrieved from the PokéAPI and placed at a random position within the page. The visitor searches for it by scrolling and clicks it to catch it. After a successful catch, the counter increases, a feedback message displays the Pokémon name, and a new Pokémon is loaded in a new location.

The caught counter is saved with `localStorage`. The reset button sets the counter back to zero and displays the introductory message again. The game supports desktop and touch devices. On mobile screens, the Pokémon keeps its position while the visitor scrolls, and the message wraps inside the screen.

The Pokémon image is retrieved from:

```text
https://pokeapi.co/api/v2/pokemon/{id}
```

## External API Integration

The portfolio uses the GitHub REST API to retrieve public repositories from the GitHub account `ZainabAlzayer10`.

The website displays:

- Repository name.
- Repository description.
- Main programming language.
- Number of stars.
- Direct link to the repository.

The JavaScript `fetch()` function sends an asynchronous request to the GitHub API and creates project cards dynamically.

### GitHub API Endpoint

```text
https://api.github.com/users/ZainabAlzayer10/repos?sort=updated&per_page=6
```

### API Loading and Error Handling

While the request is being processed, the website displays:

```text
Loading GitHub projects...
```

If the request fails, the website displays:

```text
Unable to load GitHub projects at the moment.
```

If the account does not have public repositories, the website displays:

```text
No public GitHub projects were found.
```

## GitHub Project Sorting

GitHub repositories can be sorted using three buttons:

- Recently updated
- Most stars
- Name

The sorting logic is handled with JavaScript.

The selected sorting option is saved using `localStorage` and restored when the user returns to the website.

## State Management

The website manages and stores several user preferences:

- Selected light or dark theme.
- Selected project filter.
- Selected GitHub project sorting option.
- Number of caught Pokémon.
- Active filter and sorting buttons.

These preferences are saved in the browser using `localStorage`.

## Performance Improvements

The website includes the following performance improvements:

- Project images use lazy loading.
- Project images use asynchronous decoding.
- JavaScript is loaded using the `defer` attribute.
- The Pokémon counter is stored in `localStorage`.
- Unused CSS styles were removed.
- Duplicate CSS rules were removed.
- The website uses efficient DOM updates when displaying GitHub projects.

Project images use:

```html
loading="lazy"
decoding="async"
```

This prevents images below the visible area from loading before they are needed.

## Technologies

- HTML5
- CSS3
- JavaScript
- GitHub REST API
- Browser `localStorage`
- GitHub Pages

## Folder Structure

```text
Assignment-1-Foundation-AI-Integration/
├── assets/
│   ├── farm-adventure.png
│   └── platform-game.png
├── css/
│   └── styles.css
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── js/
│   └── script.js
├── presentation/
│   ├── Assignment4_Personal_Web_Application_Final.pptx
│   └── Assignment4_Website_Demonstration.mp4
├── .gitignore
├── index.html
└── README.md
```

## Testing

The following features were tested:

- Navigation links.
- Responsive mobile menu.
- Light and dark mode.
- Theme persistence after reopening the website.
- Project filtering.
- Filter persistence after reopening the website.
- Contact form validation.
- Success and error messages.
- GitHub repository loading.
- GitHub API error handling.
- GitHub project sorting.
- Sorting preference persistence.
- Project image loading.
- Desktop and mobile layouts.
- Pokémon hunt, counter, reset button, and PokéAPI loading.
- Pokémon position while scrolling on mobile.
- Pokémon message position, text wrapping, and automatic disappearance.

## AI Use

ChatGPT was used for:

- Planning the project structure.
- Suggesting responsive CSS patterns.
- Explaining JavaScript interactions.
- Adding and explaining GitHub API integration.
- Implementing project sorting and state management.
- Reviewing and improving the documentation.
- Suggesting performance improvements.
- Planning and debugging the Pokémon hunt feature.
- Explaining the PokéAPI request and random Pokémon loading.
- Fixing Pokémon movement during mobile scrolling.
- Improving the responsive message layout and text wrapping.

All AI-generated suggestions were reviewed, modified, understood, and tested before being used.

Full details of AI usage are available in:

```text
docs/ai-usage-report.md
```

## Deployment

The website can be deployed using GitHub Pages by enabling Pages for the repository's main branch.

An optional live deployment link can be added here:

```text
Live website: https://zainabalzayer10.github.io/202367090-ZainabAlzayer-assignment1/
```

## Future Improvements

Future versions could include:

- A real backend for the contact form.
- More detailed GitHub repository information.
- Repository language filtering.
- Pagination for GitHub repositories.
- A profile image.
- A blog section.
- A live deployment link.
