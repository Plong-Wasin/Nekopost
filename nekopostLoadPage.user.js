// ==UserScript==
// @name         Nekopost Load Page
// @namespace    https://www.nekopost.net/
// @version      1.4.1
// @description  Nekopost Load Page
// @author       Wasin Phungwigrai
// @include      https://www.nekopost.net/manga/*/*
// @include      https://www.nekopost.net/doujin/*/*
// @updateURL    https://github.com/Plong-Wasin/Nekopost/raw/main/nekopostLoadPage.user.js
// @downloadURL  https://github.com/Plong-Wasin/Nekopost/raw/main/nekopostLoadPage.user.js
// @grant        unsafeWindow
// @grant        window.close
// ==/UserScript==
var imageAddrLen;
var imageAddr;
var img;
var count = 0;

var btn = document.createElement("spam"); // Create a <button> element
btn.innerHTML =
    '<button class="btn btn-success btn-sm" onclick="gotoManga()">Manga</button>';
document
    .getElementById("bottom-menu")
    .insertBefore(btn, document.getElementById("bottom-menu").childNodes[0]);
var getClass = document.getElementsByClassName("btn btn-success btn-sm");
var countClass = getClass.length - 1;
getClass[countClass].innerText = "X";
getClass[countClass].style.backgroundColor = "red";
getClass[countClass].style.borderColor = "red";
getClass[countClass].onclick = closeNekopost;

function closeNekopost() {
    window.close();
}

setTimeout(function() {
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
        document.getElementById("btnClose").onclick = closeNekopost;
    }
}, 3000);

var i = 0;

function run() {
    if (i < 4)
        try {
            a();
        } catch (error) {
            setTimeout(() => {
                i = i + 1;
                run();
            }, 1000);
        }
    else if ($("div").hasClass("img_item") == false) {
        location.reload();
    }
}
run();

function a() {
    imageAddrLen = $(".img_item").length;
    imageAddr = $(".img_item")[imageAddrLen - 1].children[0].src;
    img = new Image();
    img.src = imageAddr;
    img.onload = genPage;
    img.onerror = genPage;
}
unsafeWindow.gotoManga = gotoManga;

var imageLen = 0;

function genPage() {
    generatePage();
    if (imageLen != $(".img_item").length) {
        a();
        imageLen = $(".img_item").length;
    }
}

function gotoManga() {
    window.location = "https://www.nekopost.net/manga";
}