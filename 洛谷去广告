// ==UserScript==
// @name         洛谷去广告
// @version      1.0
// @description  自动关闭洛谷题目页面的推广广告
// @author       Zander_Alastor
// @match        *://www.luogu.com.cn/problem/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=www.luogu.com.cn
// @grant        none
// ==/UserScript==

(function(){
    const $=document.getElementsByClassName.bind(document);

    window.onload=function(){
        var myVar = setInterval(function(){
            //alert("Hello");
            const findElem=findElemByText.bind($("lfe-form-sz-small"))
            const sub=findElem("关闭");
            if(sub){
                sub.click();
                clearInterval(myVar);
            }
        }, 100);
    }

    function findElemByText(text) {
        for (const elem of this) {
            if (elem.innerText.includes(text)) {
                return elem
            }
        }
        return null
    }
})();
