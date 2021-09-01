import "./main.css";
import "./images/sprite.svg";
import menuArr from "./menu.json";
import menuTpl from "./menu-tpl.hbs";


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

// // const markup = menuTpl('menu');

const refs = {
    menu: document.querySelector('.js-menu'),
    checkbox: document.querySelector('.theme-switch__toggle'),
    body: document.querySelector('body'),
};

refs.menu.insertAdjacentHTML("beforeend", menuTpl(menuArr));

function setThemeOnStart() {
        if (localStorage.getItem('theme')  === "dark") {
        refs.body.classList.add(Theme.DARK);
        refs.checkbox.setAttribute('checked', 'true');
    } else {
        refs.body.classList.add(Theme.LIGHT);
        refs.checkbox.removeAttribute('checked');
    }

};
setThemeOnStart();

function switchThemeHandler(evt) {
    const hasDarkTheme = refs.body.classList.contains(Theme.DARK);

    function addThemeClassToBody() {
            if (!hasDarkTheme) {
            refs.body.classList.add(Theme.DARK);
            refs.body.classList.remove(Theme.LIGHT);
            localStorage.setItem('theme', "dark");
        } else {
            refs.body.classList.add(Theme.LIGHT);
            refs.body.classList.remove(Theme.DARK)
            localStorage.setItem('theme', "light");
        };
    };

    addThemeClassToBody();
};

refs.body.addEventListener('change', switchThemeHandler);






// 1. из меню JSON подставить свойства в шаблон для шаблонизатора. 
