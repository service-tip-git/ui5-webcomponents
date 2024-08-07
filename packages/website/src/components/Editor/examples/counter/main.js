export default `import UI5Element from "@ui5/webcomponents-base/dist/UI5Element.js";
import litRender, { html } from "@ui5/webcomponents-base/dist/renderer/LitRenderer.js";
import { customElement, property } from "@ui5/webcomponents-base/dist/decorators.js";

@customElement({
  tag: "my-counter",
  renderer: litRender,
})
export class MyCounter extends UI5Element {
  @property({ type: Number })
  count = 0;

  render() {
    return html \`<div>
    <slot></slot>
    <button @click=\${() => {this.count += 2}}>
        Count \${this.count}
    </div>\`
  }

  static styles = \`button {
    color: #334eff;
    border-color: #334eff;
    border-radius: 0.5rem;
    padding: 1rem;
  }\`;
}

MyCounter.define();
`;
