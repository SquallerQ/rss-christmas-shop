# RSS Christmas Shop

**RS School Christmas Shop project** — a festive website built with HTML, CSS, and JavaScript.  
The project features dynamic catalog rendering, filtering by categories, modal product cards, slider, countdown timer, and responsive design.

## 🌐 Live Demo
* [Netlify](https://q-christmas-shop.netlify.app/pages/main/)

## 🖥️ Screenshot
![Christmas Shop Screenshot](assets/images/screenshot.png)

## Features

1. Dynamic gift card rendering from JSON file  
2. Category-based tabs with caching system  
3. Random "Best Gifts" selection on homepage  
4. Modal window with detailed product info  
5. Star-based rating visualization  
6. Responsive slider with adaptive scroll steps  
7. Countdown timer to New Year  
8. Burger menu for mobile navigation  
9. Scroll-to-top button for better UX  
10. Layout shift prevention when opening modal  
11. Optimized project structure and cleaned codebase  

## Tech Stack

* **HTML**
* **CSS**
* **JavaScript**

## Run Locally
1. Clone the repo: git clone https://github.com/SquallerQ/rss-christmas-shop.git
2. In the <head> section on main page, comment out this line:
```html
<base href="/pages/main/">
```
3. Open index.html in your browser

ℹ️ The <base> tag is required for correct routing and asset loading on Netlify,
but must be disabled for local file-based running to avoid broken paths.