import './styles.css';
import { createHomePage } from './home.js';
import { createMenuPage } from './menu.js';
import { createContactPage } from './contact.js';

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const contactBtn = document.querySelector('#contact');

window.addEventListener("load", createHomePage);

homeBtn.addEventListener("click", createHomePage);
menuBtn.addEventListener("click", createMenuPage);
contactBtn.addEventListener("click", createContactPage);
