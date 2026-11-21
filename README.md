# Assignment 2 — Interactive Personal Portfolio

A responsive and interactive personal portfolio website built with HTML, CSS, and JavaScript. This project improves the Assignment 1 portfolio by adding project filtering, contact form validation, user feedback, and animations.

## Run locally

1. Download or clone this repository.
2. Open `index.html` directly in a browser, or use the Live Server extension in VS Code.

No installation or backend is required. The contact form is a front-end demo and does not send data.

## Interactive features

- Filter projects by **All**, **Adventure**, or **Platform**.
- Toggle between light and dark mode.
- Save the selected theme using `localStorage`.
- Display a greeting based on the visitor's local time.
- Validate the contact form and show success or error feedback.
- Use hover effects, smooth scrolling, and animated messages.

## External API Integration

The portfolio uses the GitHub REST API to retrieve and display public repositories from the GitHub account `ZainabAlzayer10`.

The website displays:

- Repository name
- Repository description
- Main programming language
- Number of stars
- Direct link to the repository

The JavaScript `fetch()` function sends a request to the GitHub API and creates project cards dynamically. A loading message is displayed while the data is being retrieved, and an error message is shown if the request fails.

GitHub API endpoint:

```text
https://api.github.com/users/ZainabAlzayer10/repos

## Folder structure

```text
assignment-2/
├── assets
├── index.html
├── css/styles.css
├── js/script.js
├── docs/ai-usage-report.md
├── docs/technical-documentation.md
└── .gitignore

## AI use

ChatGPT was used for planning the page structure, suggesting responsive CSS patterns, explaining JavaScript interactions, and reviewing the documentation. All generated suggestions were reviewed, edited, and tested. Full details are available in [`docs/ai-usage-report.md`](docs/ai-usage-report.md).

## Deployment

The site can be published with GitHub Pages by enabling Pages for the repository's main branch.