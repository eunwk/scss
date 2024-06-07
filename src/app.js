import * as vars from './assets/scss/common/_variables.scss';
import { primary } from './assets/scss/common/_variables.scss'
import './assets/css/styles.css';

console.log("웹팩실행", vars.primary, primary);

const checkViewportHeight = () => {
   // console.log("checkView")
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};
 

const init = () => {
    checkViewportHeight();
}

window.addEventListener("load", init)
window.addEventListener('resize', checkViewportHeight);