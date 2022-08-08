// ==UserScript==
// @name         YouTube字幕自动选择翻译－>中文简体
// @version      2.0
// @description  translate to Chinese automatically. 自动点击字幕翻译到中文简体
// @author       Origin by qwertyuiop6 | Modify by Zander Alastor
// @match        https://www.youtube.com/watch*
// @grant        none
// @run-at       document-end: DOMContentLoaded
// @icon         https://www.google.com/s2/favicons?sz=256&domain=www.youtube.com
// ==/UserScript==

(window.onload=function(){
    const $=document.querySelector.bind(document);
    const $$=document.getElementsByClassName.bind(document);

    let video;

    if(!location.href.includes('watch')){
        document.addEventListener('click',e=>{
           console.log(e.target)
           if(e.target.closest('.ytd-rich-grid-media')){
             setTimeout(listenVideo,300)
           }
        },true)
    }else{
        listenVideo()
    }

    function listenVideo(){
        video=$('video');
        video.addEventListener('canplay', ()=>{
            $('.ytp-ad-skip-button-icon')?.click();
        })
        video.addEventListener('loadeddata',clickToTranslate)
    }

    function checkAndClick(){
        const findElem=findElemByText.bind($$("ytp-menuitem"));
        const sub=findElem("字幕");
        if(sub){
            sub.click();
            var myVer= setInterval(function(){
                //alert("here");
                const subc = findElem("中文");
                if(subc){
                    subc.click();
                    clearInterval(myVer);
                }
                else{
                    const autoTrans = findElem("自动翻译");
                    if (!autoTrans) return false;
                    autoTrans.click();
                    const autoTransC = findElem("中文（简体）");
                    if (!autoTransC) return false;
                    autoTransC.click();
                    clearInterval(myVer);
                }
            }, 100);
        }
        else return false;
        return true;
    }

    function findElemByText(text) {
        for (const elem of this) {
            if (elem.innerText.includes(text)) {
                return elem
            }
        }
        return null
    }

    function clickToTranslate(){
        $('.ytp-subtitles-button[aria-pressed="false"]')?.click();
        const settingsButton=$('.ytp-settings-button');
        settingsButton.click();
        if(!checkAndClick()) settingsButton.click();
    }
})();
