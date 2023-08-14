// body start 
let body = document.querySelector("body");
body.style.padding = "0";
body.style.margin = "0";
body.style.textDecoration = "none";
body.style.boxSizing = "border-box";
body.style.listStyle = "none";
// navbar html code start 
// container start /
let container = document.querySelector(".container");
container.style.width = "1140px";
container.style.margin = "auto";
container.style.marginTop = "0px";
container.style.marginBottom = "0px";
// container end 
// let header = document.querySelector("header")


const navs = ["Portfolio", "About", "Contact"];

let navbar = document.querySelector(".uls");

for (let i = 0; i < navs.length; i++) {

    let liTeg = document.createElement("li");

    let aTeg = document.createElement("a");

    aTeg.textContent = navs[i];

    aTeg.classList.add("uls");

    liTeg.appendChild(aTeg);

    navbar.appendChild(liTeg);
    liTeg.style.marginLeft = "40px";
    liTeg.style.fontSize = "11px";
    liTeg.style.textTransform = "uppercase";
    liTeg.style.color = "#999999";
    navbar.style.display = "flex"
}
// nav-list start 
let navlist = document.querySelector(".nav-list");
navlist.style.paddingTop = "43px";
navlist.style.display = "flex";
navlist.style.justifyContent = "space-between";
// nav-list end 
// navbar html code end 

// header style start 
let headers = document.querySelector("header");
headers.style.backgroundColor = "#222";
headers.style.width = "100%";
headers.style.height = "80vh";
headers.style.backgroundSize = "contain";
headers.style.backgroundRepeat = "no-repeat";
headers.style.backgroundPosition = "top";
headers.style.margin = "0";
headers.style.padding = "0";
headers.style.textDecoration = "none";
headers.style.boxSizing = "border-box";


let page = document.querySelector(".page");
page.style.width = "1140px";
page.style.margin = "0 auto";
// header style end

// brend class style start 
const brend = ["VERSUS"];
let brends = document.querySelector(".brend");
for (let i = 0; i < brend.length; i++) {
    let lis = document.createElement("li");
    let as = document.createElement("a");
    as.textContent = brend[i];
    as.classList.add(".brend");
    lis.appendChild(as);
    brends.appendChild(as);
    as.style.fontSize = "24px";
    as.style.color = "#fff";
}
// brend class style end 

// h-info style start
let h_info = document.querySelector(".h-info");
h_info.style.textAlign = "center";
h_info.style.marginTop = "160px";
// h1 
let h1textcenter = document.querySelector("#h1texts");
h1textcenter.style.fontSize = "48px";
h1textcenter.style.color = "#fff";
h1textcenter.style.textAlign = "center";
h1textcenter.style.width = "465px";
h1textcenter.style.margin = "auto";
h1textcenter.style.marginBottom = "40px";
// h1 
// button
let buttons = document.querySelector("button");
buttons.style.fontSize = "13px";
buttons.style.textAlign = "center";
buttons.style.textTransform = "uppercase";
buttons.style.color = "#00D6B4";
buttons.style.background = "none";
buttons.style.borderColor = "#00D6B4";
buttons.style.padding = "10px 26px";
// button
// h-info style start 

//section start 
let sections = document.querySelector("section");
sections.style.backgroundColor = "#222222";
sections.style.margin = "0";
sections.style.padding = "0";
sections.style.textDecoration = "none";
sections.style.boxSizing = "border-box";



const test = ["Latest Work"];
let texth1 = document.querySelector(".text");
for (let i = 0; i < test.length; i++) {
    let h1text = document.createElement("h1");
    let div = document.createElement("div");
    div.textContent = test[i];
    div.classList.add(".text");
    h1text.appendChild(div);
    texth1.appendChild(h1text);
    h1text.style.color = "#fff";
    h1text.style.fontSize = "25px";
    h1text.style.textAlign = "center";
    h1text.style.paddingTop = "49px";
    h1text.style.marginBottom = "33px";
}

// section end 

const imgpage = [
    "./img/im1.png",
    "./img/im2.png",
    "./img/im3.png",
    "./img/im4.png",
    "./img/im5.png",
    "./img/im6.png",
    "./img/im7.png",
    "./img/im8.png",
    "./img/im9.png",
    "./img/im1.png",
    "./img/im2.png",
    "./img/im3.png",
    "./img/im4.png",
    "./img/im5.png",
    "./img/im6.png",
    "./img/im7.png",
    "./img/im8.png",
    "./img/im9.png",
]


let sectionEl = document.querySelector(".imgs-page");

for (let i = 0; i < imgpage.length; i++) {

    let litegs = document.createElement("li");

    let imgs = document.createElement("img");

    imgs.src = imgpage[i];

    imgs.classList.add(".imgs-page");

    litegs.appendChild(imgs);

    sectionEl.appendChild(litegs);
    imgs.style.width = "300px";
    imgs.style.height = "225px";
    imgs.style.marginTop = "22px";
    imgs.style.marginLeft = "20px";
    sectionEl.style.display = "flex";
    sectionEl.style.justifyContent = "space-between";
    sectionEl.style.alignItems = "center";
    sectionEl.style.flexWrap = "wrap";
}

// img funksiya end code end

const text = [
    "VERSUS",
    "Powered by Webflow"
]
let textpage = document.querySelector(".info");
for (let i = 0; i < text.length; i++) {
    let h1Teg = document.createElement("h1");
    let pTEg = document.createElement("p");
    textpage.style.width = "1140px";
    pTEg.textContent = text[i];
    pTEg.classList.add("info");
    h1Teg.appendChild(pTEg);
    textpage.appendChild(h1Teg);
    pTEg.style.color = "#C2C2C2";
    pTEg.style.paddingBottom = "15px";
    h1Teg.style.fontSize = "18px";
    pTEg.style.textTransform = "uppercase";
    pTEg.style.marginTop = "50px";
    pTEg.style.textAlign = "center"
}