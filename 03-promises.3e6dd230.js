var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("iQIUW");const l=document.querySelector(".form"),i=document.querySelector("button"),s=document.querySelectorAll("input");let d=null,a=null,u=null;function c(e,n){return new Promise(((t,r)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:n}):r({position:e,delay:n})}),n)}))}l.addEventListener("submit",(e=>{e.preventDefault(),e.target.tagName;const{elements:{delay:n,step:t,amount:r}}=e.currentTarget;d=Number(n.value),a=Number(t.value),u=Number(r.value);for(let e=1;e<=u;e+=1)c(e,d).then((({position:e,delay:n})=>{o.Notify.success(`✅ Fulfilled promise ${e} in ${n}ms`)})).catch((({position:e,delay:n})=>{o.Notify.failure(`❌ Rejected promise ${e} in ${n}ms`)})),d+=a;e.currentTarget.reset()}));const p="\nborder: none;\nborder-radius: 20px;\nbackground-color: rgb(25 223 20);\ncolor: rgb(16 83 229);\npadding: 10px 40px;\nfont-size: 18px;\n";i.style.cssText=p,i.addEventListener("focus",(()=>{i.style.cssText+="\nbackground-color: rgb(170, 85, 250);\nbox-shadow: 2px 2px 2px 1px rgba(106, 106, 109, 0.2);\n"})),i.addEventListener("blur",(()=>{i.style.cssText=p})),s.forEach((e=>{e.style.cssText="\n  padding-top: 5px;\n  padding-bottom: 5px;\n  margin-right: 5px;\n  font-size: 20px;\n"}));
//# sourceMappingURL=03-promises.3e6dd230.js.map
