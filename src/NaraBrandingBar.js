import { html, css, LitElement } from 'lit-element';
import "nara-logo/nara-logo.js";
import "@lrnwebcomponents/simple-modal/lib/simple-modal-template.js"

export class NaraBrandingBar extends LitElement {
  static get styles() {
    return css`
      :host {
        --nara-branding-bar-text-color: #000;
        display: block;
        padding: 25px;
        color: var(--nara-branding-bar-text-color);
      }
      button {
        display: inline-block;
        text-decoration: none;
        font-family: "Source Sans Pro","Helvetica Neue","Helvetica","Roboto","Arial",sans-serif;
        text-align: left;
        outline: none;
        font-size: 14px;
        border: solid 1px #f1f1f1;
        border-radius: 5px;    height: auto !important;
        background-color: transparent !important;
        color: black;
        font-weight: normal;
        padding: 5px 5px !important;
        margin: 7px 0px !important;
        line-height: 1em !important;
        vertical-align: top;
      }

    `;
  }

  static get properties() {
    return {
      title: { type: String },
      counter: { type: Number },
    };
  }

  constructor() {
    super();
    this.title = 'Hey there';
    this.counter = 5;
  }

  __increment() {
    this.counter += 1;
  }

  firstUpdated(){
    this.shadowRoot.querySelector('[modal-id="smt1"]').associateEvents(this.shadowRoot.querySelector('[controls="smt1"]'));
  }

  render() {
    return html`
      <nara-logo format="horizontal"></nara-logo>
      <button class="collapsible-mxg" @click=${this.__increment}>Explore our Websites</button>
      <simple-modal-template modal-id="smt1" title="simple-modal-template 1"> <div slot="header">Simple Modal 1 Header</div> <p slot="content">Button 1 opens the first simple-modal-template template.</p> <div slot="buttons"><paper-button dialog-dismiss>Close Modal 1</paper-button></div> </simple-modal-template>

    
    `;
  }
}
