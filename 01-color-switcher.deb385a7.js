!function(){var t=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");t.addEventListener("click",(function(o){timerId=setInterval((function(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.backgroundColor=t,console.log(t)}),1e3),t.disabled=!0})),o.addEventListener("click",(function(o){clearInterval(timerId),t.disabled=!1})),console.log(t),console.log(o)}();
//# sourceMappingURL=01-color-switcher.deb385a7.js.map