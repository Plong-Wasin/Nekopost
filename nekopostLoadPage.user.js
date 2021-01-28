// ==UserScript==
// @name         Nekopost Load Page
// @namespace    https://github.com/Plong-Wasin/Nekopost
// @version      1.4.4
// @description  Nekopost Load Page
// @author       Plong
// @include      https://www.nekopost.net/manga/*/*
// @include      https://www.nekopost.net/doujin/*/*
// @updateURL    https://github.com/Plong-Wasin/Nekopost/raw/main/nekopostLoadPage.meta.js
// @downloadURL  https://github.com/Plong-Wasin/Nekopost/raw/main/nekopostLoadPage.user.js
// '@grant        unsafeWindow
// @grant        window.close
// ==/UserScript==
var imageAddrLen;
var imageAddr;
var img;
var count = 0;

function createBtnBR() {
    let btn = document.createElement("spam"); // Create a <button> element
    btn.innerHTML =
        '<button class="btn btn-success btn-sm" onclick="window.location.href=\'https://www.nekopost.net/manga\'">Manga</button>';
    document
        .getElementById("bottom-menu")
        .insertBefore(btn, document.getElementById("bottom-menu").childNodes[0]);
    var getClass = document.getElementsByClassName("btn btn-success btn-sm");
    var countClass = getClass.length - 1;
    getClass[countClass].innerText = "X";
    getClass[countClass].style.backgroundColor = "red";
    getClass[countClass].style.borderColor = "red";
    getClass[countClass].onclick = function() {
        window.close();
    };
}

function createBtnB() {
    if (document.getElementById("btnChangeChapterNextBottom").disabled) {
        var btn2 = document.createElement("spam"); // Create a <button> element
        btn2.innerHTML =
            '<div id="manga" style="padding-bottom: 5px" class="mt-1 text-ellipsis"><span id="projectNameBottom"><a href="https://www.nekopost.net//manga/" class="btn btn-success">Manga</a></span></div>';
        document
            .getElementsByClassName("text-center mb-5")[0]
            .insertBefore(
                btn2,
                document.getElementsByClassName("text-center mb-5")[0].childNodes[0]
            );
        var btn3 = document.createElement("spam"); // Create a <button> element
        btn3.innerHTML =
            ' <button id="btnClose" class="btn btn-success" style="display: hide;" onclick="closeNekopost()">Close</button>';
        document
            .getElementsByClassName("text-center mb-5")[0]
            .insertBefore(
                btn3,
                document.getElementsByClassName("text-center mb-5")[0].childNodes[0]
            );
        document.getElementById("btnClose").style.backgroundColor = "red";
        document.getElementById("btnClose").style.borderColor = "red";
        document.getElementById("btnClose").onclick = function() {
            window.close();
        };
    }
}
// setTimeout(function() {
//     if (document.getElementById("btnChangeChapterNextBottom").disabled) {
//         var btn2 = document.createElement("spam"); // Create a <button> element
//         btn2.innerHTML =
//             '<div id="manga" style="padding-bottom: 5px" class="mt-1 text-ellipsis"><span id="projectNameBottom"><a href="https://www.nekopost.net//manga/" class="btn btn-success">Manga</a></span></div>';
//         document
//             .getElementsByClassName("text-center mb-5")[0]
//             .insertBefore(
//                 btn2,
//                 document.getElementsByClassName("text-center mb-5")[0].childNodes[0]
//             );
//         var btn3 = document.createElement("spam"); // Create a <button> element
//         btn3.innerHTML =
//             ' <button id="btnClose" class="btn btn-success" style="display: hide;" onclick="closeNekopost()">Close</button>';
//         document
//             .getElementsByClassName("text-center mb-5")[0]
//             .insertBefore(
//                 btn3,
//                 document.getElementsByClassName("text-center mb-5")[0].childNodes[0]
//             );
//         document.getElementById("btnClose").style.backgroundColor = "red";
//         document.getElementById("btnClose").style.borderColor = "red";
//         document.getElementById("btnClose").onclick = function() {
//             window.close();
//         };
//     }
// }, 3000);

$(document).ready(function() {
    newGeneratePage();
    createBtnB();
    createBtnBR();
});

function newGeneratePage() {
    try {
        generatePage();
        let lastPage = document.getElementsByTagName("img");
        lastPage[lastPage.length - 1].onload = function() {
            newGeneratePage();
        };
    } catch (error) {
        setTimeout(() => {
            newGeneratePage();
        }, 1000);
    }
}