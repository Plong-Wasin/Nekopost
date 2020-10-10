// ==UserScript==
// @name         Nekopost Load Page
// @namespace    http://tampermonkey.net/
// @version      0.92
// @description  Nekopost Load Page
// @author       Wasin Phungwigrai
// @include      https://www.nekopost.net/manga/*/*
// @include      https://www.nekopost.net/doujin/*/*
// @updateURL    https://github.com/Plong-Wasin/Nekopost/raw/main/Nekopost%20Load%20Page.user.js
// @downloadURL  https://github.com/Plong-Wasin/Nekopost/raw/main/Nekopost%20Load%20Page.user.js
// @grant        unsafeWindow
// ==/UserScript==
var imageAddrLen;
var imageAddr;
var img;
var check = 0;
window.onload = function() {
    var btn = document.createElement("spam"); // Create a <button> element
    btn.innerHTML =
        '<button class="btn btn-success btn-sm" onclick="gotoManga()">Manga</button>';
    document
        .getElementById("bottom-menu")
        .insertBefore(btn, document.getElementById("bottom-menu").childNodes[0]);
    setTimeout(function() {
        if (document.getElementById("btnChangeChapterNextBottom").disabled) {
            var btn2 = document.createElement("spam"); // Create a <button> element
            btn2.innerHTML =
                '<div style="padding-bottom: 5px" class="mt-1 text-ellipsis"><span id="projectNameBottom"><a href="https://www.nekopost.net//manga/" class="btn btn-success">Manga</a></span></div>';
            document
                .getElementsByClassName("text-center mb-5")[0]
                .insertBefore(
                    btn2,
                    document.getElementsByClassName("text-center mb-5")[0].childNodes[0]
                );
        }
    }, 1000);
};
setTimeout(function() {
    try {
        a();
    } catch (error) {
        if ($("div").hasClass("img_item") == false) {
            location.reload();
        }
    }
}, 2000);

function a() {
    imageAddrLen = $(".img_item").length;
    imageAddr = $(".img_item")[imageAddrLen - 1].children[0].src;
    img = new Image();
    img.src = imageAddr;
    img.onload = function() {
        generatePage();
        if (check != imageAddrLen) {
            check = imageAddrLen;
            a();
        }
    };
}
unsafeWindow.gotoManga = gotoManga;

function gotoManga() {
    window.location = "https://www.nekopost.net/manga";
}