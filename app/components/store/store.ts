export enum Attribute3 {
    "title" = "title",
    "image" = "image",
    "description"="description",
    "button"="button"
}

class Store extends HTMLElement {
    titles?: string;
    image?: string
    description?: string;
    button?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attribute3, null> = {
            description: null,
            button: null,
            title: null,
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
    
    attributeChangedCallback(propName: Attribute3, oldValue: undefined, newValue: string){
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
                <link rel="stylesheet" href="./app/components/store/store.css">
                <section class="main">
                <h1>${this.title}</h1>
                <img src="${this.image}">
                <h2>${this.description}</h2>
                <button>${this.button}</button>
                </section>
                `;
            }
        }
    }

    customElements.define("my-store", Store);
    export default Store;