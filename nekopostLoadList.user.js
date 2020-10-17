// ==UserScript==
// @name         Nekopost load list
// @namespace    https://www.nekopost.net/
// @version      1.4.1
// @description  Nekopost load list
// @author       Wasin Phungwigrai
// @include      https://www.nekopost.net/manga/
// @include      https://www.nekopost.net//manga/
// @include      https://www.nekopost.net/doujin/
// @include      https://www.nekopost.net/novel
// @updateURL    https://github.com/Plong-Wasin/Nekopost/raw/main/nekopostLoadList.user.js
// @downloadURL  https://github.com/Plong-Wasin/Nekopost/raw/main/nekopostLoadList.user.js
// @grant        none
// ==/UserScript==
$(window).scroll(function() {
    if (
        $(window).scrollTop() + $(window).height() >=
        $(document).height() - 200
    ) {
        $("#btn_more_project").click();
    }
});
