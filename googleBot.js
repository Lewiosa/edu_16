// ==UserScript==
// @name         GoogleBot
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.google.ru/*
// @icon         https://www.google.com/s2/favicons?domain=vozhzhaev.ru
// @grant        none
// ==/UserScript==


let worlds = ["гобой","флейта","как звучит кларнет","валторна","фагот"];
let googleInput = document.getElementsByName("q")[0];
googleInput.value=worlds[getIntRandom(0, worlds.length)];
let btnK = document.getElementsByName("btnK")[0];
if(btnK != undefined){
    setTimeout(function(){
    btnK.click();
    },1500)

}else{
    let links = document.links;
    let pnnext = document.getElementById("pnnext");
    let goToTheNextPage = true;
    for(let i=0; i<links.length; i++){
    let link = links[i];
        if(link.href.indexOf("xn----7sbab5aqcbiddtdj1e1g.xn--p1ai") != -1){
        link.click();
        goToTheNextPage = false;
            break;
        }
    }
    if(goToTheNextPage) setTimeout(function(){pnnext.click();},1800);
}

function getIntRandom(min,max){
   return Math.floor(Math.random()*(max-min)+min);
}
