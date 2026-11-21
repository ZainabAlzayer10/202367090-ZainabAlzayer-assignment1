# AI Usage Report

## Student Information

- **Name:** Zainab Alzayer
- **Student ID:** 202367090
- **Assignment:** Assignment 3 — Advanced Functionality
- **Date:** 2026-11-21

## Tools Used

I used ChatGPT as an AI-assisted development and learning tool during Assignment 3.

ChatGPT helped me understand the assignment requirements, review my existing portfolio, plan the external API integration, connect the website to the GitHub REST API, add project sorting, save user preferences using `localStorage`, improve image loading performance, review the project documentation, and explain the code so I could understand and test it.

The AI suggestions were used as guidance. I reviewed, modified, and tested the code before including it in the project.

## Usage Log

| ID | Tool (model) | Date | Purpose | Files Affected | What I Changed and How I Verified It |
|---|---|---|---|---|---|
| C06 | ChatGPT | 2026-11-21 | Understand Assignment 3 requirements and improve the existing portfolio with an external API, advanced logic, state management, performance improvements, and documentation | `index.html`, `css/styles.css`, `js/script.js`, `README.md`, `docs/technical-documentation.md` | I reviewed the suggestions, used my GitHub username, adjusted the layout and button design, added GitHub repository loading and sorting, saved filter and sorting preferences using `localStorage`, added lazy loading to project images, removed unused CSS rules, and tested the website locally in a browser. |

## Benefits and Challenges

ChatGPT helped me understand the Assignment 3 requirements and organize the work into smaller steps. It also helped me connect the portfolio to the GitHub REST API and understand how asynchronous JavaScript works using `fetch()`, `async`, and `await`.

The AI suggestions helped me implement:

- Dynamic GitHub project cards.
- API loading and error messages.
- Project sorting by update date, stars, and name.
- Persistent filter and sorting preferences.
- Lazy loading and asynchronous image decoding.
- More detailed technical documentation.

One challenge was that some suggestions did not match the visual style of my portfolio. For example, the first sorting design used a standard `select` element, but I changed it to rounded sorting buttons so that it matched the existing filter buttons.

Another challenge was keeping the code clean after changing the sorting design. I removed unused styles for the previous `select` element and removed duplicate CSS rules.

## Learning Outcomes

During this assignment, I learned how to:

- Read and understand assignment requirements.
- Use the GitHub REST API.
- Send asynchronous requests using `fetch()`.
- Use `async` and `await`.
- Convert an API response to JSON.
- Create HTML elements dynamically using JavaScript.
- Display API data inside project cards.
- Handle loading, empty-data, and error states.
- Sort arrays of objects using JavaScript.
- Use `localStorage` to save user preferences.
- Save and restore project filters.
- Save and restore GitHub project sorting.
- Improve image loading using `loading="lazy"` and `decoding="async"`.
- Remove duplicate and unused CSS.
- Write detailed technical documentation.

## Responsible Use and Modifications

I treated ChatGPT output as a starting point rather than a final submission.

I reviewed and modified the suggestions by:

- Using my own GitHub username.
- Keeping the project descriptions related to my actual portfolio.
- Choosing the sorting options that were useful for GitHub repositories.
- Changing the sorting interface from a dropdown menu to rounded buttons.
- Adjusting the CSS to match the existing portfolio design.
- Removing unused styles from the previous dropdown design.
- Correcting JavaScript errors such as the missing `savedSort` variable.
- Checking that the filter, sorting, theme, and API features work together.
- Testing the website in a browser after making the changes.
- Updating the README and technical documentation.

I made sure that I understood the code and could explain how the API integration, sorting, filtering, state management, and performance improvements work.

## What I Changed Myself

I selected GitHub as the external API because it is directly related to a developer portfolio.

I used the GitHub username:

```text
ZainabAlzayer10
```

I chose to display the repository name, description, programming language, star count, and repository link.

I also decided to use three sorting options:

- Recently updated.
- Most stars.
- Name.

I changed the visual design of the sorting controls so that they matched the existing project filter buttons. I also reviewed the generated code, corrected errors, removed unnecessary CSS, and tested the final website.

## Understanding and Verification

I understand that the GitHub API request retrieves public repositories using the following endpoint:

```text
https://api.github.com/users/ZainabAlzayer10/repos?sort=updated&per_page=6
```

I understand that `fetch()` sends the request and that `response.json()` converts the response into JavaScript data.

I understand that the `displayGitHubProjects()` function creates project cards dynamically from the API response.

I understand that the sorting function creates a copy of the repository array and sorts it according to the selected option.

I understand that `localStorage` saves the selected theme, project filter, and GitHub sorting option so that the preferences can be restored when the website is opened again.

I verified the work by:

- Opening `index.html` in a browser.
- Checking that GitHub projects load correctly.
- Testing the loading message.
- Testing the API error message.
- Testing the sorting buttons.
- Testing the project filter buttons.
- Closing and reopening the website to check saved preferences.
- Testing the light and dark mode.
- Testing the contact form with empty, invalid, and valid input.
- Checking the website on desktop and mobile screen sizes.
- Checking the project images after adding lazy loading.
- Reviewing the browser Developer Tools Network tab.
- Running:

```text
node --check js/script.js
```

## Declaration

> I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

**Name:** Zainab Alzayer  
**Student ID:** 202367090  
**Date:** 2026-11-21