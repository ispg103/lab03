export enum Attribute1 {
    "titles" = "titles",
    "image" = "image",
    "description"="description",
    "button"="button"
}

class Featured extends HTMLElement {

    titles?: string;
    image?: string
    description?: string;
    button?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attribute1, null> = {
            description: null,
            button: null,
            titles: null,
            image: null
        };
        return Object.keys(attrs);
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback(propName: Attribute1, oldValue: undefined, newValue: string){
        switch(propName){
        default:
        this[propName] = newValue;
        this.render();
        break;
        }
        this.render()
    }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/featured/featured.css">
                <section class="main">
                <h1>${this.titles}</h1>
                <img src="${this.image}">
                <h2>${this.description}</h2>
                <button>${this.button}</button>
                </section>
                `;
            }
        }
    }

    customElements.define("my-featured", Featured);
    export default Featured;