## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [The requested design](#The-requested-design)
  - [The design I made](#The-design-I-made)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Links

- Live Site URL: [https://ori-r335.github.io/Article_preview_component/]

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS library

### What I learned

I learned how to download and use fonts, I've dealt with horizontal scrolling and fixed it in the mobile view.

I'm proud of this JS that handles the overlay, when you click anywhere on the page it closes the modal if it's open.

also the if statement that handles the change of the share button when you click it in the mobile view.

```js
function handleOverlay(evt) {
  if (shareModal.classList.contains("modal_opened")) {
    const isClickInsideModal =
      shareModal.contains(evt.target) || shareButton.contains(evt.target);

    if (!isClickInsideModal) {
      closePopup(shareModal);
    }
  }
}

if (mediaQuery.matches && shareModal.classList.contains("modal_opened")) {
  shareButton.style.background = "hsl(217, 19%, 35%)";
} else {
  shareButton.style.background = "hsl(210, 46%, 95%)";
}
```

### Continued development

I still have a lot to learn in how to improve this code, the position absolute changes accourding to the screen size which make the modal not be in his accurate place.

Because I based on pictures of the design and didn't get it from figma the design is not accurate and when I click on the share button in the mobile view the background changes but not the icon inside.

### The requested design

![desktop view](./design/desktop-design.jpg)
![desktop view active state](./design/desktop-active-state.jpg)
![mobile view](./design/mobile-design.jpg)
![mobile view active state](./design/mobile-active-state.jpg)

### The design I made

![desktop view](./design%20of%20my%20code/1440%20px%20-%20my%20code%20no%20modal.png)
![desktop view active state](./design%20of%20my%20code/1440%20px%20-%20my%20code.png)
![mobile view](./design%20of%20my%20code/375px%20-%20my%20code%20no%20modal.png)
![mobile view active state](./design%20of%20my%20code/375px%20-%20my%20code.png)
