const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let r=null;function a(){document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.addEventListener("click",(()=>{r=setInterval(a,1e3),document.querySelector("[data-start]").disabled=!0})),e.addEventListener("click",(function(){clearInterval(r),t.removeEventListener("click",a),document.querySelector("[data-start]").disabled=!1}));
//# sourceMappingURL=01-color-switcher.56f65fed.js.map
