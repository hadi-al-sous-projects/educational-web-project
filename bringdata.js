// bring data from data.js

import {Hlesson as h,Clesson as c,Jlesson as j,starlist } from "./data.js";

// llesson = h or c or j or s the datajs content
let llesson;

// index number of the llesson
let nowIndex ;

// parms at the the end of url to open multipe pages by subject probertie in link after ? 

const parms=new URLSearchParams(window.location.search);//bring the words after ? from link
const pageId = parms.get('subject');

// ul = lisstlinks in html page

const listlinks = document.getElementById("listlinks");
let links=[];

// content (head,lesson,code) in html

let head = document.getElementById("head");
let lesson = document.getElementById("lesson");
let code = document.getElementById("code");

// the footer (prev,pres,next)

let prev = document.getElementById("prev");
let pres = document.getElementById("pres");
let next = document.getElementById("next");


// save page by click on the photo

const photo=document.getElementById("photo");

// the real saved array [{sub,ind},...] —use for delete too

let realstarlist = [];

// // // // // // // // // // // // // // //

// the opening page 

const rsl = localStorage.getItem("starlist");//get the information from browser
if (pageId === "html") {
    llesson = h;
} 
else if (pageId === "css") {
    llesson = c;
}
else if (pageId === "js") {
    llesson = j;
}

// the three pages h,c,j are const , but star is changeable

else if (pageId === "star") {
    realstarlist = rsl ? JSON.parse(rsl) : [];//give the value af rsl if it exist to realstarlist
    llesson = realstarlist.map(item=>{
        if (item.sub==="html")return h[item.ind];
        if (item.sub==="css")return c[item.ind];
        if (item.sub==="js")return j[item.ind];
    }).filter(Boolean);//delete undifined values
}

// if llesson take one of (h,c,j,s)values create (1-list content from heads in data by function addlinks)

if (llesson){
    addLinks(llesson);
    // (2-open either the last visited page (from the local store by get) or if not the first page (by nowIndex=0))
    const savedSubject = localStorage.getItem('lastSubject');
    const savedIndexrsl = localStorage.getItem('lastIndex');
    const savedIndex = savedIndexrsl !== null ? Number(savedIndexrsl) : null;
    const validSavedIndex = savedIndex !== null && Number.isInteger(savedIndex) && savedIndex >= 0 && savedIndex < llesson.length;
    if (savedSubject === pageId && validSavedIndex) {
        showlesson(savedIndex);
        nowIndex = savedIndex;
    } else {
        showlesson(0);
        nowIndex = 0;
    }
    // after get all j.s ,apply it all ,let the css appear
    const savedDir = sessionStorage.getItem("dir");
    sessionStorage.removeItem("dir"); // clear stale direction after use
    const direction = savedDir === "right" ? "right" : "left";//give direction one of tow possible savedDir values
    requestAnimationFrame(()=>{
        requestAnimationFrame(()=>{
            curtain.style.transition="left 1s cubic-bezier(0.77,0,0.18,1)";
            curtain.style.left = direction === "right" ? "200%" : "-100%";//according to it's value
        })
    })
}

// create list of links by function dynamic add lessons

function addLinks(llesson){
    links = [];
    for (let i = 0; i < llesson.length; i++){
        const link = document.createElement("li");
        link.innerHTML = llesson[i].head;
        // reletionship between head maknig i index each head using it to lesson appear with function showlesson
        link.dataset.index = i;
        links.push(link);
    }
    if (links.length) {
        listlinks.append(...links);
    }
}
function setactive(index){
    links.forEach(element => {
        element.classList.remove('active');
    });
    const activeLink = typeof index === 'number' ? links[index] : index;
    if (activeLink && activeLink.classList){
        activeLink.classList.add('active');
        activeLink.scrollIntoView({behavior:'smooth',block:'nearest'});
    }
}

// bubble on father or you can add event listner to each li in foreah
// e mean the element information that user click on it

listlinks.addEventListener("click", (e) => {
    if (e.target.dataset.index === undefined)return;
    nowIndex = Number(e.target.dataset.index);
    //the order is open the page then modify pres in footer
    showlesson(nowIndex);
    setactive(nowIndex);
    pres.textContent=`${ nowIndex + 1 } / ${llesson.length}`;
    // this function work the first open
});

// new idea : .dataset.index in j.s==data-index in html
// the most important function in this webpage showlesson

function showlesson(linkdatasettindex) {
    head.textContent = llesson[linkdatasettindex].head;
    lesson.textContent = llesson[linkdatasettindex].lesson;
    code.textContent = llesson[linkdatasettindex].code;
    pres.textContent=`${ linkdatasettindex + 1 } / ${llesson.length}`;
    setactive(linkdatasettindex);
    //save last open on browser local storage
    localStorage.setItem("lastSubject",pageId); 
    localStorage.setItem("lastIndex",linkdatasettindex);
}
// building footer prev and after

prev.addEventListener("click", () => {
    // ensure we have all we need (h,c,j,s or index of the lesson)
    if (!llesson || nowIndex === undefined)return;
    if (nowIndex > 0) {
        nowIndex--;//++,-- translate string to number automaticily
        showlesson(nowIndex);//apply functios showlesson on the index-1 value 
        pres.textContent=`${Number(nowIndex) + 1} / ${llesson.length}`;
        // this function apply each click
    }
    else if (nowIndex == 0){//we put the starter value when we get sure about llesson
        // when ending lessons in the page go to the prev page
        if (pageId === "html") {
            navigateTo("./lesson.html?subject=js","right","./background/prev.png"); 
        }else if (pageId === "css") {
            navigateTo("./lesson.html?subject=html","right","./background/prev.png");
        } else if (pageId === "js") {
            navigateTo("./lesson.html?subject=css","right","./background/prev.png");
        }
    }
    setactive(nowIndex);
});
// same explin foe next function
next.addEventListener("click", () => {
    if (!llesson || nowIndex === undefined)return;
    if (nowIndex < llesson.length - 1) {
        nowIndex++;
        showlesson(nowIndex);
        pres.textContent=`${Number(nowIndex) + 1} / ${llesson.length}`;
    }
    else if (nowIndex == llesson.length - 1){
        if (pageId === "html") {
            navigateTo("./lesson.html?subject=css","left","./background/next.png");
        } else if (pageId === "css") {
            navigateTo("./lesson.html?subject=js","left","./background/next.png");
        } else if (pageId === "js") {
            navigateTo("./lesson.html?subject=html","left","./background/next.png");
        }
    }
    setactive(nowIndex);
});

// // // // // // // // // // // // // // //

// featurse //
// save / delete speacial lesson

photo.addEventListener("click",()=>{
    if (nowIndex === undefined) return;//for pretiction of web lag
    const starlist = rsl ? JSON.parse(rsl) : [];//deal with local storage by .parse(str to obj),after get data
    // after click lisitner ,one off conditions will happen and do something
    if (pageId === "star") {
        // on star page — delete the (real) item using (realstarlist reference)
        // realstarlist[nowIndex] holds the original {sub (h,c,j,s), ind(number of lesson)} of the displayed lesson
        const target = realstarlist[nowIndex];
        if (!target) return;//if starpage without content don't do thing
        //see the realIndex using .findindex ,which bring index of first item that matches conditions (item(in local)(sub,ind)=target(inwebbrowser)(sub,ind))
        const realIndex = starlist.findIndex(item => item.sub === target.sub && item.ind === target.ind);
        if (realIndex !== -1) {
            //NO error happened(sure the value is positive) delete the items in the index of realindex from local storage
            starlist.splice(realIndex, 1);
            // modify the data after delete the local index ,1-send it ,2-delete the variable contain copy ,3-reload
            localStorage.setItem("starlist", JSON.stringify(starlist));
            localStorage.removeItem("lastIndex");
            window.location.reload();
        }
    } else {
        // normal pages: add if not already saved
        const alreadySaved = starlist.some(item => item.sub === pageId && item.ind === Number(nowIndex));
        if (alreadySaved) return;
        starlist.push({ sub: pageId, ind: Number(nowIndex) });
        // read and apply the addition
        localStorage.setItem("starlist", JSON.stringify(starlist));//save string"starlist" deal with browser (set)
    }
});
// windows.open to navigateTofunctoin 
const curtain = document.querySelector("#curtain");
let curtainphotolist=["./background/next.png","./background/prev.png","./background/prevnext.jpg"];//links
function navigateTo(url,dir,curphoto){
    const curphotoindex = curtainphotolist.findIndex(p => p === curphoto);
    if (curphotoindex !== -1) {
        curtain.style.backgroundImage = `url("${curtainphotolist[curphotoindex]}")`;
    }
    curtain.style.transition = "none";
    curtain.style.left = dir === "left" ? "100%" : "-100%";
    requestAnimationFrame(()=>{
        requestAnimationFrame(()=>{
            curtain.style.transition = "left 1s cubic-bezier(0.77,0,0.18,1)";
            curtain.style.left = "0%";
        });
    });
    sessionStorage.setItem("dir",dir);
    setTimeout(()=>{
        window.location.href = url;
    },1000
);
links.classlist.toggle('active');
}