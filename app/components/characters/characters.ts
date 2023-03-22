export enum Attribute7 {
    "bigt" = "bigt",
    "title" = "title",
    "image" = "image",
}

class Characters extends HTMLElement {
    titles?: string;
    image?: string;
    bigt?: string

    static get observedAttributes() {
        const attrs: Record<Attribute7, null> = {
            title: null,
            image: null,
            bigt: null
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
    
    attributeChangedCallback(propName: Attribute7, oldValue: undefined, newValue: string){
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
                <link rel="stylesheet" href="./app/components/characters/characters.css">
                
                <h1 class="title">${this.bigt}</h1>

                <section class="first">
                <img src="${this.image}">
                <h2>${this.title}</h2>
                </section>
                `;
            }
        }
    }

    customElements.define("my-characters", Characters);
    export default Characters;