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
      nara-logo {
        margin-left: 20px;
        float: left;
        width: 230px;
        height: 30px !important;
      }
      td.title{  
        color: var(--blue-bg-color);
        font-size: 20px;
        font-weight: bold;
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
    this.title = 'NARA Branding Bar';
  }


  firstUpdated(){
    this.shadowRoot.querySelector('[modal-id="smt1"]').associateEvents(this.shadowRoot.querySelector('[controls="smt1"]'));
  }

  render() {
    return html`
      <nara-logo format="horizontal"></nara-logo>
      <button class="collapsible-mxg" controls="smt1">Explore our Websites</button>
      <simple-modal-template modal-id="smt1" title="US National Archives"> <div slot="header">Simple Modal 1 Header</div> 
      
        <table slot="content">
          <tr>
            <td class="title">Main Website</td>
            <td class="title">For Research</td>
            <td class="title">Presidential Libraries</td>
            <td class="title">Presidential Libraries</td>
          </tr>
          <tr>
            <td><a href="https://www.archives.gov">National Archives</a></td>
            <td><a href="https://catalog.archives.gov/">Catalog</a></td>
            <td><a href="https://hoover.archives.gov/">Herbert Hoover Library and Museum</a></td>
            <td><a href="http://www.fordlibrarymuseum.gov/">Gerald R. Ford Library and Museum</a></td>
          </tr>
          <tr>
            <td class="title">Visit Us</td>
            <td><a href="https://historyhub.history.gov/">History Hub</a></td>
            <td><a href="https://fdrlibrary.org/">Franklin D. Roosevelt Library and Museum</a></td>
            <td><a href="http://www.jimmycarterlibrary.gov/">Jimmy Carter Library and Museum</a></td>
          </tr>
          <tr>
            <td><a href="https://museum.archives.gov/">National Archives Museum</a></td>
            <td><a href="https://1940census.archives.gov/">1940 Census</a></td>
            <td><a href="http://www.trumanlibrary.org/">Harry S. Truman Library and Museum</a></td>
            <td><a href="http://www.reaganlibrary.gov/">Ronald Reagan Library and Museum</a></td>
          </tr>
          <tr>
            <td><a href="https://www.archives.gov/locations">See All Locations</a></td>
            <td><a href="https://founders.archives.gov/">Founders Online</a></td>
            <td><a href="http://www.eisenhower.archives.gov/">Dwight D. Eisenhower Library and Museum</a></td>
            <td><a href="https://bush41library.tamu.edu/">George Bush Library and Museum</a></td>
          </tr>
          <tr>
            <td> </td>
            <td class="title">For Teachers</td>
            <td><a href="http://www.jfklibrary.org/">John F. Kennedy Library and Museum</a></td>
            <td><a href="https://www.clintonlibrary.gov/">William J. Clinton Library and Museum</a></td>
          </tr>
          <tr>
            <td> </td>
            <td><a href="https://www.docsteach.org/">DocsTeach</a></td>
            <td><a href="http://www.lbjlibrary.org/">Lyndon B. Johnson Library and Museum</a></td>
            <td><a href="http://www.georgewbushlibrary.smu.edu/">George W. Bush Library and Museum</a></td>
          </tr>
          <tr>
            <td> </td>
            <td><a href="https://www.ourdocuments.gov/">Our Documents</a></td>
            <td><a href="http://www.nixonlibrary.gov/">Richard Nixon Library and Museum</a></td>
            <td><a href="https://www.obamalibrary.gov/#">Barack Obama Library</a></td>
          </tr>
        </table>
       
      <div slot="buttons"><paper-button dialog-dismiss>Close</paper-button>
      </div> 
      </simple-modal-template>

    
    `;
  }
}
