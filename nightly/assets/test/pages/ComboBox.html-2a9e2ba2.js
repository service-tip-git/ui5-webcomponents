import"../../bundle.esm-022f60ef.js";document.getElementById("lazy").addEventListener("ui5-input",async e=>{const{value:i}=e.target;if(e.target.loading=!0,!i)return;const t=await(await fetch(`https://restcountries.com/v3.1/name/${i}`)).json();for(;document.getElementById("lazy").firstChild;)document.getElementById("lazy").removeChild(document.getElementById("lazy").firstChild);t.map(c=>{const n=document.createElement("ui5-cb-item");n.setAttribute("text",c.name.common),document.getElementById("lazy").appendChild(n)}),e.target.loading=!1});const a=document.getElementById("cb-filter-none");let d,m;a.addEventListener("input",e=>{m!==void 0&&clearTimeout(m),m=setTimeout(async()=>{m=void 0;const t=e.target.value;if(d!==void 0&&d.cancel(),t){d=l(t);const c=await d.items;c&&(d=void 0,u(),c.forEach(n=>{const o=document.createElement("ui5-cb-item");o.setAttribute("text",n),a.appendChild(o)}))}else u()},250)});function u(){[...a.children].forEach(e=>a.removeChild(e))}function l(e){let i;return{cancel:()=>i(),items:new Promise(t=>{const c=setTimeout(()=>{const n=[];for(let o=0;o<5;o++)n.push(`${e} #${o+1}`);t(n)},500);i=()=>{clearTimeout(c),t(void 0)}})}}
