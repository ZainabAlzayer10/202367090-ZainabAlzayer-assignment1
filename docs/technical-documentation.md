
# Technical Documentation — Assignment 3

## Technologies

- **HTML5:** Semantic sections, navigation, headings, form labels, and accessible button attributes.
- **CSS3:** Custom properties, CSS Grid, Flexbox, media queries, responsive typography, and hover/focus states.
- **JavaScript:** Event listeners, DOM manipulation, project filtering, time-based text, form validation, form feedback, `localStorage`, asynchronous functions, and API integration.
- **GitHub REST API:** Used to retrieve and display public repositories from the GitHub account `ZainabAlzayer10`.

## Main Features

1. Sticky navigation with links to About, Projects, and Contact.
2. Responsive mobile menu shown below 700px.
3. Light/dark mode saved in the browser using `localStorage`.
4. Greeting changes according to the visitor's local time.
5. Project cards can be filtered by Adventure or Platform.
6. Contact form validates empty fields and email format.
7. Success and error messages provide feedback after form submission.
8. Public GitHub repositories are loaded dynamically using the GitHub API.
9. Loading and error messages are displayed during the API request.
10. Smooth scrolling, hover effects, and animated feedback messages improve the user experience.

## GitHub API Integration

The portfolio uses the GitHub REST API to retrieve the public repositories of the GitHub user `ZainabAlzayer10`.

The API endpoint used is:

```text
https://api.github.com/users/ZainabAlzayer10/repos?sort=updated&per_page=6
```

The request retrieves the most recently updated public repositories and displays up to six repositories on the portfolio website.

For each repository, the website displays:

- Repository name
- Repository description
- Main programming language
- Number of stars
- Direct link to the repository on GitHub

The JavaScript `fetch()` function sends an asynchronous request to the API. The returned JSON data is then used to create project cards dynamically in the page.

## API Loading and Error Handling

While the API request is being processed, the website displays:

```text
Loading GitHub projects...
```

If the request fails, the website hides the loading message and displays:

```text
Unable to load GitHub projects at the moment.
```

If the GitHub account does not contain any public repositories, the website displays:

```text
No public GitHub projects were found.
```

This ensures that the user receives clear feedback instead of seeing an empty section.

## Project Filtering

Each project card has a `data-category` attribute:

- The Farm Adventure Game uses `data-category="adventure"`.
- The 2D Platform Game uses `data-category="platform"`.

When the user selects a filter button, JavaScript compares the selected filter with each card's category and adds or removes the `hidden` CSS class.

The GitHub projects are displayed in a separate project area and are loaded dynamically from the API.

## Dark Mode and State Management

The theme toggle changes the page between light mode and dark mode.

The selected theme is stored using:

```javascript
localStorage.setItem('portfolio-theme', 'dark');
```

When the page is opened again, JavaScript checks the saved value and restores the user's previous theme preference.

## Contact Form Validation

The form submission is handled in JavaScript.

The script checks that:

- The name field is not empty.
- The email field is not empty.
- The message field is not empty.
- The email contains `@` and a dot.

The page displays a clear error message when validation fails and a success message when the input is valid.

The form is a front-end demo and does not send data to a backend server.

## Testing Checklist

- Tested the page by opening `index.html` in a modern browser.
- Resized the browser to desktop and mobile widths.
- Checked navigation links, menu button, theme toggle, greeting, project filters, and form feedback.
- Tested the form with empty fields, an invalid email, and valid information.
- Tested hover effects and message animations.
- Confirmed that the form does not reload the page or attempt to send data.
- Confirmed that GitHub repositories are loaded and displayed correctly.
- Confirmed that the loading message appears before the API data is displayed.
- Tested the API error message by checking the behavior when the request fails.
- Confirmed that each GitHub project link opens the correct repository in a new tab.

## Future Improvements

Future versions could include:

- More detailed project information from GitHub.
- Repository language filtering.
- Pagination for displaying more repositories.
- A profile image.
- Form submission through a backend service.
- A deployment URL.
- A GitHub access token to support higher API request limits.
