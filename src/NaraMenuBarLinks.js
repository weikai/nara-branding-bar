import { html, LitElement } from 'lit-element';

export class NaraMenuBarLinks extends LitElement {
  createRenderRoot() {
  /**
   * Render template without shadow DOM. Note that shadow DOM features like 
   * encapsulated CSS and slots are unavailable.
   */
    return this;
  }

  /**
   * LitElement render
   */
  render() {
    return html`
    <style>
      li.title{
        color: var(--blue-bg-color);
        font-size: 20px;
        font-weight: bold;
      }
      
      li a {
        color: black;
        font-weight: normal !important;
        font-size: 16px;
        line-height: 24px;
      }
      ul li {  
        margin-bottom: 6px !important;
        font-size: 16px !important;
        font-weight: normal;
        background: none !important;
        margin: 0px 0px 6px 0px !important;
        padding: 0 !important;
        line-height: 24px;
        list-style: none;
      }
      @media (max-width: 750px){
        .nara-links-grid {
          display: grid;
          grid-template-columns: 100%;
          grid-column-gap: 10px;
          margin-top: 50px;
        }
      }
      @media (min-width: 750px){
        .nara-links-grid{ 
          display: grid;
          grid-template-columns: 20% 20% 30% 30%;
        }
      }
      .nara-links-col{
        padding: 0 18px !important;
        overflow: hidden;
        font-weight: normal !important;
        width: 100%;
      }
      </style>
    <div class="nara-links-grid">
      <div class="nara-links-col">
        <ul>
          <li class="title">Main Website</li>
          <li><a href="https://www.archives.gov">National Archives</a></li>
          <li class="title">Visit Us</li>
          <li><a href="https://museum.archives.gov/">National Archives Museum</a></li>
          <li><a href="https://www.archives.gov/locations">See All Locations</a></li>
        </ul>
      </div>
        <!--DIV BREAK --> 
      <div class="nara-links-col">
        <ul>
          <li class="title">For Research</li>      
          <li><a href="https://catalog.archives.gov/">Catalog</a></li>
          <li><a href="https://historyhub.history.gov/">History Hub</a></li>
          <li><a href="https://1940census.archives.gov/">1940 Census</a></li>
          <li><a href="https://founders.archives.gov/">Founders Online</a></li>
        </ul>  
        <ul> 
          <li class="title">For Teachers</li> 
          <li><a href="https://www.docsteach.org/">DocsTeach</a></li>
          <li><a href="https://www.ourdocuments.gov/">Our Documents</a></li>
        </ul>
      </div>
    <!--DIV BREAK -->
      <div class="nara-links-col">
        <ul>
          <li class="title">Presidential Libraries</li>
          <li><a href="https://hoover.archives.gov/">Herbert Hoover Library and Museum</a></li>
          <li><a href="https://fdrlibrary.org/">Franklin D. Roosevelt Library and Museum</a></li>
          <li><a href="http://www.trumanlibrary.org/">Harry S. Truman Library and Museum</a></li>
          <li><a href="http://www.eisenhower.archives.gov/">Dwight D. Eisenhower Library and Museum</a></li>
          <li><a href="http://www.jfklibrary.org/">John F. Kennedy Library and Museum</a></li>
          <li><a href="http://www.lbjlibrary.org/">Lyndon B. Johnson Library and Museum</a></li>
          <li><a href="http://www.nixonlibrary.gov/">Richard Nixon Library and Museum</a></li>
        </ul>
      </div>
    <!--DIV BREAK -->
    <div class="nara-links-col">
        <ul>
          <li class="title">Presidential Libraries</li>
          <li><a href="http://www.fordlibrarymuseum.gov/">Gerald R. Ford Library and Museum</a></li>
          <li><a href="http://www.jimmycarterlibrary.gov/">Jimmy Carter Library and Museum</a></li>
          <li><a href="http://www.reaganlibrary.gov/">Ronald Reagan Library and Museum</a></li>
          <li><a href="https://bush41library.tamu.edu/">George Bush Library and Museum</a></li>
          <li><a href="https://www.clintonlibrary.gov/">William J. Clinton Library and Museum</a></li>
          <li><a href="http://www.georgewbushlibrary.smu.edu/">George W. Bush Library and Museum</a></li>
          <li><a href="https://www.obamalibrary.gov/#">Barack Obama Library</a></li>
        </ul>
      </div>
  </div>
    `;
  }
}
window.customElements.define('nara-menu-bar-links', NaraMenuBarLinks);
