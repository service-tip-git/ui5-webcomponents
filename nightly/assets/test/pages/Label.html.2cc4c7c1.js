import{s as a}from"../../bundle.common.2888f99d.js";class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});const e=document.createElement("div");e.innerHTML=`
			<ui5-label for="input">Label:</ui5-label>
			<ui5-input id="input"></ui5-input>
		`,this.shadowRoot.append(e)}}customElements.define("label-page-custom-element",l);var i=document.getElementById("languageSelect"),u={en:"This is a label",fr:"c'est une \xE9tiquette","zh-CN":"\u8FD9\u662F\u4E00\u4E2A\u6807\u7B7E","zh-Hans":"\u8FD9\u662F\u4E00\u4E2A\u6807\u7B7E","zh-TW":"\u9019\u662F\u4E00\u500B\u6A19\u7C64","zh-Hant":"\u9019\u662F\u4E00\u500B\u6A19\u7C64"};function n(t){document.getElementById("differentLanguages").querySelectorAll("ui5-label").forEach(function(e){e.innerText=u[t]})}i.addEventListener("ui5-change",function(t){var e=t.detail.selectedOption.id;a(e),n(e)});n("en");
