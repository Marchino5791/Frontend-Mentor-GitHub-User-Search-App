# Frontend Mentor - GitHub user search app solution

This is a solution to the [GitHub user search app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/github-user-search-app-Q09YOgaH6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences. _Hint_: Research `prefers-color-scheme` in CSS.

### Screenshot

![GitHub User Search App screenshot](https://github.com/Marchino5791/Frontend-Mentor-GitHub-User-Search-App/blob/main/Screenshot%202023-08-31%2013.30.42.png)

### Links

- Solution URL: [https://github.com/Marchino5791/Frontend-Mentor-GitHub-User-Search-App](https://github.com/Marchino5791/Frontend-Mentor-GitHub-User-Search-App)
- Live Site URL: [https://marchino5791.github.io/Frontend-Mentor-GitHub-User-Search-App/](https://marchino5791.github.io/Frontend-Mentor-GitHub-User-Search-App/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Tailwind CSS
- Flexbox
- CSS Grid
- Mobile-first workflow
- TypeScript
- Vite
- [React](https://reactjs.org/) - JS library
- [Google Fonts](https://fonts.google.com/) - For fonts

### What I learned

I learn to create a dark mode switcher through function like

useEffect(() => {
if (theme === 'dark') {
document.documentElement.classList.add('dark')
} else {
document.documentElement.classList.remove('dark')
}
}, [theme])

and

    darkMode: 'class', (in tailwind.config.js)

Another importat function I learned is window.matchMedia('(prefers-color-scheme: dark)').matches. It's allowed website to understand wich theme is currently in use.

### Continued development

I want to acquire more confidence with typescript and react.

### Useful resources

- [Tailwind CSS Dark Mode | React App Theme Switcher](https://www.youtube.com/watch?v=VylXkPy-MIc) - This video helped me to create a dark mode switcher in React and Tailwind

## Author

- Frontend Mentor - [@marchino5791](https://www.frontendmentor.io/profile/marchino5791)
- LinkedIn - [@Marco Antonio Paolino](https://www.linkedin.com/in/marco-paolino/)
