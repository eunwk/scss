// import * as vars from './assets/scss/common/_variables.scss';
// import { primary } from './assets/scss/common/_variables.scss'
import './assets/scss/styles.scss';
import ico from './assets/images/icon_edit.svg';

// console.log("웹팩실행", vars.primary, primary);

const checkViewportHeight = () => {
   // console.log("checkView")
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
};
const createImage = `<div>
<img src="${ico}" />
<img src="/images/arrow-alt-left2.png" width="50px"/>
<img src="./assets/images/bg-dot.png" width="50px"/>
</div>

`

const init = () => {
    checkViewportHeight();
}

window.addEventListener("load", init)
window.addEventListener('resize', checkViewportHeight);

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#root").innerHTML = createImage;
});