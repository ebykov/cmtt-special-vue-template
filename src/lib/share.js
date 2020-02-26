import Likely from 'cmtt-likely';

import * as Analytics from './analytics';

const CSS = {
  likely: 'likely',
  likelyCustom: 'likely--custom',
};

export const init = () => {
  Likely.initate();
};

/**
 * Make likely buttons and append to specified element
 * @param {Element} parentContainer - likely container will be placed here
 * @param {Object} set - object with optional params (title, url, twitter)
 */
export const make = (parentContainer, set = {}) => {
  const likelyContainer = document.createElement('div');
  likelyContainer.classList.add(CSS.likely);
  likelyContainer.classList.add(CSS.likelyCustom);

  const socials = {
    facebook: 'Поделиться',
    vkontakte: '',
    twitter: '',
  };

  Object.keys(socials).forEach((key) => {
    const button = document.createElement('div');
    button.classList.add(key);
    button.innerHTML = socials[key];

    button.addEventListener('click', () => Analytics.sendEvent(`Share ${key}`));

    likelyContainer.appendChild(button);
  });

  parentContainer.appendChild(likelyContainer);

  if (set.url) likelyContainer.dataset.url = set.url;
  if (set.twitter) likelyContainer.dataset.twitter = set.twitter;
  if (set.title) likelyContainer.dataset.title = set.title;

  init();
};
