# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)



## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot



<p align="center">
  <img src="./src/assets/screen-shots/light-mode.png" width="600"/>
</p>

<p align="center">
  <img src="./src/assets/screen-shots/dark-mode.png" width="600"/>
</p>



## My process

### Built with

- Semantic JSX markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library




### What I learned

Using the picture element to swap out photo's based on the media attribute 
@previewCard.jsx

```JSX
            <div className="preview-card__image">
                <picture>
                    <source media="(min-width: 765px)" srcSet={desktopImage} />
                    <img src={mobileImage}
                        alt="Gabrielle Essence Eau De Parfum bottle on a cream background with decorative leaves on top left and bottom right corners" />
                </picture>
            </div>
```






