# Technical Documentation — Assignment 2

## Technologies

- **HTML5:** semantic sections, navigation, headings, form labels, and accessible button attributes.
- **CSS3:** custom properties, CSS Grid, Flexbox, media queries, responsive typography, and hover/focus states.
- **JavaScript:** event listeners, DOM class changes, project filtering, time-based text, form validation, form feedback, and `localStorage`.

## Main features

1. Sticky navigation with links to About, Projects, and Contact.
2. Responsive mobile menu shown below 700px.
3. Light/dark mode saved in the browser using `localStorage`.
4. Greeting changes according to the visitor's local time.
5. Project cards can be filtered by Adventure or Platform.
6. Contact form validates empty fields and email format.
7. Success and error messages provide feedback after form submission.
8. Smooth scrolling, hover effects, and animated feedback messages improve the user experience.

## Project filtering

Each project card has a `data-category` attribute:

- The Farm Adventure Game uses `data-category="adventure"`.
- The 2D Platform Game uses `data-category="platform"`.

When the user selects a filter button, JavaScript compares the selected filter with each card's category and adds or removes the `hidden` CSS class.

## Contact form validation

The form submission is handled in JavaScript. The script checks that the name, email, and message fields are not empty. It also checks that the email contains `@` and a dot. The page displays a clear error message when validation fails and a success message when the input is valid.

## Testing checklist

- Tested the page by opening `index.html` in a modern browser.
- Resized the browser to desktop and mobile widths.
- Checked navigation links, menu button, theme toggle, greeting, project filters, and form feedback.
- Tested the form with empty fields, an invalid email, and valid information.
- Tested hover effects and message animations.
- Confirmed that the form does not reload the page or attempt to send data.

## Future improvements

The next version could add real project links, a profile image, form submission through a backend service, and a deployment URL.
