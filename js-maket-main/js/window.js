'use strict'

const div = document.querySelector('div');
const btn = document.querySelector('button');

// const width = div.clientWidth;
// const height = div.clientHeight;
// const width = div.offsetWidth;
// const height = div.offsetHeight
// const height = div.scrollHeight



// console.log(width);
// console.log(height);

btn.addEventListener('click' , ()=>{
    // div.style.height = div.scrollHeight + 'px'

    console.log(div.scrolTop);
})

const style = window.getComputedStyle(div)
console.log(style);