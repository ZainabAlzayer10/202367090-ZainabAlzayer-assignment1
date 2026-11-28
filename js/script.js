// Portfolio interactions: mobile menu, theme preference,
// greeting, project filtering, contact form validation,
// GitHub API integration, and project sorting.

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.querySelector('#theme-toggle');
const greeting = document.querySelector('#greeting');
const contactForm = document.querySelector('#contact-form');
const formMessage = document.querySelector('#form-message');

const pokemonTarget = document.querySelector('#pokemon-target');
const pokemonImage = document.querySelector('#pokemon-image');
const pokemonScore = document.querySelector('#pokemon-score');
const pokemonReset = document.querySelector('#pokemon-reset');
const pokemonMessage = document.querySelector('#pokemon-message');

const filterButtons =
  document.querySelectorAll('.filter-button');

const projectCards =
  document.querySelectorAll(
    '.project-card[data-category]'
  );

// Mobile menu
menuToggle.addEventListener('click', () => {
  const isOpen =
    navLinks.classList.toggle('open');

  menuToggle.setAttribute(
    'aria-expanded',
    isOpen
  );

  menuToggle.setAttribute(
    'aria-label',
    isOpen ? 'Close menu' : 'Open menu'
  );
});

// Close mobile menu after clicking a navigation link
document.querySelectorAll('.nav-links a')
  .forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');

      menuToggle.setAttribute(
        'aria-expanded',
        'false'
      );

      menuToggle.setAttribute(
        'aria-label',
        'Open menu'
      );
    });
  });

// Project filtering and saved filter state
const savedFilter =
  localStorage.getItem('project-filter') ||
  'all';

function applyProjectFilter(selectedFilter) {
  filterButtons.forEach((filterButton) => {
    filterButton.classList.toggle(
      'active',
      filterButton.dataset.filter === selectedFilter
    );
  });

  projectCards.forEach((card) => {
    const projectCategory =
      card.dataset.category;

    const shouldShow =
      selectedFilter === 'all' ||
      projectCategory === selectedFilter;

    card.classList.toggle(
      'hidden',
      !shouldShow
    );
  });

  localStorage.setItem(
    'project-filter',
    selectedFilter
  );
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyProjectFilter(
      button.dataset.filter
    );
  });
});

applyProjectFilter(savedFilter);

// Dark mode preference
const savedTheme =
  localStorage.getItem('portfolio-theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark');

  themeToggle.setAttribute(
    'aria-label',
    'Switch to light mode'
  );
}

themeToggle.addEventListener('click', () => {
  const isDark =
    document.body.classList.toggle('dark');

  localStorage.setItem(
    'portfolio-theme',
    isDark ? 'dark' : 'light'
  );

  themeToggle.setAttribute(
    'aria-label',
    isDark
      ? 'Switch to light mode'
      : 'Switch to dark mode'
  );
});

// Hidden Pokémon game
const pokemonApiUrl =
  'https://pokeapi.co/api/v2/pokemon/';

let currentPokemon = null;
let pokemonMessageTimeout;

let pokemonCaught = Number(
  localStorage.getItem('pokemon-caught') || 0
);

function updatePokemonScore() {
  pokemonScore.textContent =
    pokemonCaught;

  localStorage.setItem(
    'pokemon-caught',
    pokemonCaught
  );
}

function showPokemonMessage(message) {
  clearTimeout(pokemonMessageTimeout);

  pokemonMessage.textContent =
    message;

  pokemonMessageTimeout =
    setTimeout(() => {
      pokemonMessage.textContent = '';
    }, 5000);
}

function movePokemonRandomly() {
  const pageWidth =
    document.documentElement.scrollWidth;

  const pageHeight =
    document.documentElement.scrollHeight;

  const maxLeft = Math.max(
    12,
    pageWidth -
      pokemonTarget.offsetWidth -
      24
  );

  const maxTop = Math.max(
    160,
    pageHeight -
      pokemonTarget.offsetHeight -
      24
  );

  const randomLeft =
    Math.floor(
      Math.random() * maxLeft
    ) + 12;

  const randomTop =
    Math.floor(
      Math.random() * (maxTop - 140)
    ) + 140;

  pokemonTarget.style.left =
    `${randomLeft}px`;

  pokemonTarget.style.top =
    `${randomTop}px`;
}

async function loadRandomPokemon() {
  pokemonTarget.disabled = true;

  const randomId =
    Math.floor(Math.random() * 151) + 1;

  try {
    const response = await fetch(
      `${pokemonApiUrl}${randomId}`
    );

    if (!response.ok) {
      throw new Error(
        'Pokémon request failed'
      );
    }

    currentPokemon =
      await response.json();

    pokemonImage.src =
      currentPokemon.sprites.front_default;

    pokemonImage.alt =
      `Hidden Pokémon: ${currentPokemon.name}`;

    pokemonTarget.setAttribute(
      'aria-label',
      `Catch the hidden Pokémon ${currentPokemon.name}`
    );

    movePokemonRandomly();

    pokemonTarget.disabled = false;
  } catch (error) {
    showPokemonMessage(
      'The Pokémon could not hide right now. Please try again.'
    );
  }
}

pokemonTarget.addEventListener(
  'click',
  async () => {
    pokemonCaught += 1;

    updatePokemonScore();

    showPokemonMessage(
      `Great catch! You caught ${currentPokemon.name}.`
    );

    await loadRandomPokemon();
  }
);

pokemonReset.addEventListener(
  'click',
  () => {
    pokemonCaught = 0;

    updatePokemonScore();

    showPokemonMessage(
      'A Pokémon escaped from its field! Help me catch it and enjoy the hunt.'
    );
  }
);

updatePokemonScore();

window.addEventListener(
  'resize',
  movePokemonRandomly
);

showPokemonMessage(
  'A Pokémon escaped from its field! Help me catch it and enjoy the hunt.'
);

loadRandomPokemon();

// Greeting based on time of day
const hour =
  new Date().getHours();

if (hour < 12) {
  greeting.textContent =
    'Good morning, I am';
} else if (hour < 18) {
  greeting.textContent =
    'Good afternoon, I am';
} else {
  greeting.textContent =
    'Good evening, I am';
}

// Contact form validation
contactForm.addEventListener(
  'submit',
  (event) => {
    event.preventDefault();

    const name =
      document.querySelector('#name')
        .value.trim();

    const email =
      document.querySelector('#email')
        .value.trim();

    const message =
      document.querySelector('#message')
        .value.trim();

    formMessage.className =
      'form-message';

    if (!name || !email || !message) {
      formMessage.textContent =
        'Please complete all fields before sending your message.';

      formMessage.classList.add('error');

      return;
    }

    if (
      !email.includes('@') ||
      !email.includes('.')
    ) {
      formMessage.textContent =
        'Please enter a valid email address.';

      formMessage.classList.add('error');

      return;
    }

    formMessage.textContent =
      'Thanks! Your message is ready to send.';

    formMessage.classList.add('success');

    contactForm.reset();
  }
);

// GitHub API integration and project sorting
const githubProjectGrid =
  document.querySelector(
    '#github-project-grid'
  );

const githubLoading =
  document.querySelector(
    '#github-loading'
  );

const githubError =
  document.querySelector(
    '#github-error'
  );

const sortButtons =
  document.querySelectorAll(
    '.sort-button'
  );

const githubUsername =
  'ZainabAlzayer10';

let githubRepositories = [];

const savedSort =
  localStorage.getItem('github-sort') ||
  'updated';

async function loadGitHubProjects() {
  try {
    const response = await fetch(
      `https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=6`
    );

    if (!response.ok) {
      throw new Error(
        'GitHub API request failed'
      );
    }

    githubRepositories =
      await response.json();

    githubLoading.hidden = true;

    if (
      githubRepositories.length === 0
    ) {
      githubError.textContent =
        'No public GitHub projects were found.';

      githubError.hidden = false;

      return;
    }

    applyGitHubSort(savedSort);

    requestAnimationFrame(
      movePokemonRandomly
    );
  } catch (error) {
    githubLoading.hidden = true;
    githubError.hidden = false;
  }
}

function displayGitHubProjects(
  repositories
) {
  githubProjectGrid.innerHTML = '';

  repositories.forEach(
    (repository, index) => {
      const projectCard =
        document.createElement(
          'article'
        );

      projectCard.className =
        'project-card github-project-card';

      projectCard.innerHTML = `
        <div class="project-info">
          <div>
            <span class="github-project-number">
              ${String(index + 1).padStart(2, '0')}
            </span>

            <h3>${repository.name}</h3>

            <p>
              ${
                repository.description ||
                'No description available.'
              }
            </p>

            <div class="project-tags">
              <span class="project-tag">
                ${repository.language || 'Code'}
              </span>

              <span class="project-tag">
                ★ ${repository.stargazers_count}
              </span>
            </div>
          </div>

          <a
            class="project-arrow"
            href="${repository.html_url}"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View ${repository.name} on GitHub"
          >
            ↗
          </a>
        </div>
      `;

      githubProjectGrid.appendChild(
        projectCard
      );
    }
  );
}

function applyGitHubSort(selectedSort) {
  const sortedRepositories = [
    ...githubRepositories
  ];

  sortButtons.forEach((sortButton) => {
    sortButton.classList.toggle(
      'active',
      sortButton.dataset.sort === selectedSort
    );
  });

  localStorage.setItem(
    'github-sort',
    selectedSort
  );

  if (selectedSort === 'stars') {
    sortedRepositories.sort(
      (
        firstRepository,
        secondRepository
      ) =>
        secondRepository.stargazers_count -
        firstRepository.stargazers_count
    );
  } else if (selectedSort === 'name') {
    sortedRepositories.sort(
      (
        firstRepository,
        secondRepository
      ) =>
        firstRepository.name.localeCompare(
          secondRepository.name
        )
    );
  } else {
    sortedRepositories.sort(
      (
        firstRepository,
        secondRepository
      ) =>
        new Date(
          secondRepository.updated_at
        ) -
        new Date(
          firstRepository.updated_at
        )
    );
  }

  displayGitHubProjects(
    sortedRepositories
  );
}

sortButtons.forEach((button) => {
  button.addEventListener('click', () => {
    applyGitHubSort(
      button.dataset.sort
    );
  });
});

loadGitHubProjects();