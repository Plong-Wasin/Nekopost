// ==UserScript==
// @name         Nekopost load list
// @namespace    https://www.nekopost.net/
// @version      1.3
// @description  Nekopost load list
// @author       Wasin Phungwigrai
// @include      https://www.nekopost.net/manga/
// @include      https://www.nekopost.net/doujin/
// @include      https://www.nekopost.net/novel
// @updateURL
// @downloadURL
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