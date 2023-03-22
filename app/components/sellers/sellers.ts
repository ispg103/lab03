export enum Attribute8 {
    "bigt" = "bigt",
    "image" = "image",
    "title" = "title",
    "date" = "date",
    "price" = "price",
    "description" = "description",
}

class Sellers extends HTMLElement {
    image?: string;
    titles?: string;
    date?: string;
    price?: string;
    description?: string;
    bigt?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attribute8, null> = {
            description: null,
            title: null,
            date: null,
            price: null,
            image: null,
            bigt: null,
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
    
    attributeChangedCallback(propName: Attribute8, oldValue: undefined, newValue: string){
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
                <link rel="stylesheet" href="./app/components/sellers/sellers.css">
                
                <h1>${this.bigt}</h1>

                <section class="card">
                <img src="${this.image}">
                <h3>${this.title}</h3>
                <p>${this.date}</p>

                <section class="last">
                <h3>${this.price}</h3>

                <section class="line">
                <p>${this.description}</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Heart_icon_red_hollow.svg/812px-Heart_icon_red_hollow.svg.png" class="heart">
                </section>
                </section>
                </section>

                `;
            }
        }
    }

    customElements.define("my-sellers", Sellers);
    export default Sellers;