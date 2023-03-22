export enum Attribute2 {
    "image" = "image",
    "title" = "title",
    "description"="description",
}

class CardsFeatured extends HTMLElement {
    image?: string
    titles?: string;
    description?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attribute2, null> = {
            description: null,
            title: null,
            image: null,
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
    
    attributeChangedCallback(propName: Attribute2, oldValue: undefined, newValue: string){
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
                <link rel="stylesheet" href="./app/components/cardsfeatured/cardsfeatured.css">

                <section class="card">
                <img src="${this.image}">
                <h2>${this.title}</h2>
                <p>${this.description}</p>
                </section>
                `;
            }
        }
    }

customElements.define("my-cardsfeatured", CardsFeatured) 
export default CardsFeatured