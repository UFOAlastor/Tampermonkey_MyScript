// ==UserScript==
// @name         B站/s/页面自动跳转正常页面
// @namespace    https://Alastor.top
// @version      1.0
// @description  网页搜索有时候会进入www.bilibili.com/s/的无评论区页面，通过这个脚本自动进入去掉/s/类型的正常B站页面
// @author       Zander Alastor
// @match        *://www.bilibili.com/s/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    var url = document.URL;
    url=url.replace(/\/s\//,"/")
    window.location.href=url;
})();
