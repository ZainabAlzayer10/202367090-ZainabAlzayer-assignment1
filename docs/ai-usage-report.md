# AI Usage Report

## Student information

- **Name:** Zainab Alzayer
- **Student ID:** 202367090
- **Assignment:** Assignment 2 — Interactive Features
- **Date:** 2026-10-25

## Tools used

I used ChatGPT as an AI-assisted development and learning tool in both the foundation work from Assignment 1 and the interactive improvements in Assignment 2.

For Assignment 1, I used ChatGPT to plan the semantic HTML structure, suggest a responsive layout using CSS Grid and Flexbox, explain CSS custom properties and media queries, and help with the mobile menu, light/dark theme toggle, time-based greeting, contact form feedback, and `localStorage`. I also used it to review the project documentation and accessibility details such as labels, button states, and alternative text.

For Assignment 2, I used ChatGPT to understand the new requirements, review the Assignment 1 portfolio, plan project filtering, improve contact form validation, review CSS interactions, update the documentation, and explain how to test the website.

## Usage log

| ID | Tool (model) | Date | Purpose | Files affected | What you changed and how you verified it |
|---|---|---|---|---|---|
| C01 | ChatGPT | 2026-10-19 | Review Assignment 1 and plan Assignment 2 features | `index.html`, `css/styles.css`, `js/script.js` | I selected project categories that fit my actual projects: Adventure and Platform. I reviewed the suggested structure and tested the website locally. |
| C02 | ChatGPT | 2026-10-19 | Add project filtering | `index.html`, `css/styles.css`, `js/script.js` | I added All, Adventure, and Platform buttons, added `data-category` attributes, and verified that the buttons show and hide the correct project cards. |
| C03 | ChatGPT | 2026-10-19 | Improve contact form validation | `js/script.js`, `css/styles.css` | I added checks for empty fields and invalid email addresses, then tested empty, invalid, and valid form inputs. |
| C04 | ChatGPT | 2026-10-19 | Improve animations and transitions | `css/styles.css` | I reviewed existing transitions and added project-card hover effects, card appearance animation, and animated form feedback messages. |
| C05 | ChatGPT | 2026-10-19 | Update project documentation | `README.md`, `docs/technical-documentation.md` | I updated the project description, features, setup instructions, implementation details, and testing checklist. |

## Benefits and challenges

AI helped me organize the website faster, compare implementation ideas, improve the responsive design, and understand unfamiliar HTML, CSS, and JavaScript syntax. It also helped me consider accessibility, user feedback, and the organization of a small front-end project.

The main challenge was that AI suggestions could be generic or include assumptions that did not fit my portfolio. For example, the first general filtering categories were not useful because my projects already used similar technology-based labels. I changed the categories to **Adventure** and **Platform** because they describe the actual projects more meaningfully. I also checked existing Assignment 1 code before adding new CSS so that I would not create duplicate rules.

## Learning outcomes

Across both assignments, I learned how to create semantic HTML sections, build responsive layouts with CSS Grid and Flexbox, use CSS variables and media queries, connect HTML controls to JavaScript event listeners, use `localStorage` to save a theme preference, validate form input, filter content using data attributes, and organize a project into separate HTML, CSS, JavaScript, assets, and documentation files.

## Responsible use and modifications

I treated AI output as a starting point rather than a final submission. I read and reviewed the suggestions, selected the final design and project categories, replaced generic or placeholder content, changed the success-message wording, corrected file paths and Markdown formatting, removed duplicate CSS rules, and tested the interactions in a browser. I also checked the JavaScript syntax and made sure I could explain how the filtering, form validation, `localStorage`, transitions, and feedback messages work.

## What I changed myself

I chose the project filter categories based on my actual projects and changed the wording of the user-facing messages. I reviewed the suggested code, placed each part in the correct file, tested the interactions, and corrected formatting and file-path issues.

## Understanding and verification

I understand that the filter buttons use JavaScript event listeners, `data-filter` values, and `data-category` values to decide which project cards are visible. I understand that the contact form uses JavaScript to validate input and display feedback without sending data to a server. I also understand that CSS transitions and keyframe animations control the visual effects.

I verified the work by opening `index.html` in a browser, testing the project filters, testing the theme toggle, submitting the form with different inputs, checking the responsive layout, and running `node --check js/script.js`.

## Declaration

> I declare that this report and the attached evidence document all of my AI use in this assignment, with complete and unedited conversations, and that I understand and can explain all the code I submitted. I understand that undeclared AI use or a false declaration will be treated as plagiarism according to KFUPM regulations.

**Name:** Zainab Alzayer  
**Student ID:** 202367090  
**Date:** 2026-10-25
