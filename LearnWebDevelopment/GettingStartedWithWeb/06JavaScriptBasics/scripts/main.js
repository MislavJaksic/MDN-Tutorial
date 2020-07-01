function registerSwapImage() {
  let mozillaImagePath = 'images/mozilla-logo-smaller.png';
  let chromeImagePath = 'images/chrome-logo-smaller.png';

  let image = document.querySelector('img');

  image.onclick = function() {
    let src = image.getAttribute('src');
    if (src === mozillaImagePath) {
      image.setAttribute('src', chromeImagePath);
    } else {
      image.setAttribute('src', mozillaImagePath);
    }
  }
}

function registerSetUsername() {
  let button = document.querySelector('button');

  button.onclick = function() {
    setUserName();
  }
}

function storeUsername() {
  let heading = document.querySelector('h1');

  if (!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    heading.innerHTML = 'Mozilla is cool, ' + storedName;
  }
}

function setUserName() {
  let heading = document.querySelector('h1');

  let username = prompt('Please enter your name.');
  if (!username) {
    setUserName();
  } else {
    localStorage.setItem('name', username);
    heading.innerHTML = 'Mozilla is cool, ' + username;
  }
}

registerSwapImage();
registerSetUsername();
storeUsername();
