import stories from '../stories.js';

// MENU
const wrapper = document.querySelector('body');
const menu = document.querySelector('.menu-list');

const closeMenu = (img) => {
  if (!img) img = document.querySelector('.menu-button img');
  img.src = 'resources/images/icon-menu.svg';
  img.alt = 'menu icon';
  wrapper.classList.remove('no-scroll');
  menu.classList.add('desktop');
};

const openMenu = (img) => {
  img.src = 'resources/images/icon-cancel.svg';
  img.alt = 'cancel icon';
  wrapper.classList.add('no-scroll');
  menu.classList.remove('desktop');
};

document.querySelector('.menu-button').addEventListener('click', (event) => {
  if (event.target.alt === 'menu icon') {
    openMenu(event.target);
  } else {
    closeMenu(event.target);
  }
});

// DYNAMIC HTML GENERATION
const imagePath = 'resources/images/';

const fillValues = (aStory, story) => {
  const picture = aStory.querySelector('img');
  picture.src = imagePath + story.picture;
  picture.alt = story.alt;

  aStory.querySelector('.story-title').textContent = story.title;
  aStory.querySelector('.story-teller').textContent = story.teller;
  aStory.querySelector('.story-hashtag').textContent = story.hashtag;
  aStory.querySelector('.story-team').textContent = story.team;
  aStory.querySelector('.story-members').textContent = story.members
    .toString()
    .replaceAll(',', ', ');
};

const createStoryList = (stories) => {
  const storiesContainer = document.querySelector('.stories-container');

  if (storiesContainer != null) {
    const card = storiesContainer.querySelector('.story');

    stories.forEach((story) => {
      const aStory = card.cloneNode(true);
      fillValues(aStory, story);
      storiesContainer.appendChild(aStory);
    });
    card.remove();
  }
};

createStoryList(stories);
