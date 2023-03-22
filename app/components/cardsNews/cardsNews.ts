export enum Attribute6 {
    "image" = "image",
    "date" = "date",
    "title" = "title",
    "read" = "read",
    "button" = "button",
    "text" = "text",
}

class CardsNews extends HTMLElement {
    image?: string;
    date?: string;
    titles?: string;
    read?: string;
    text?: string;
    button?: string;

    static get observedAttributes() {
        const attrs: Record<Attribute6, null> = {
            read: null,
            date: null,
            title: null,
            image: null,
            text: null,
            button: null,
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
    
    attributeChangedCallback(propName: Attribute6, oldValue: undefined, newValue: string){
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
                <link rel="stylesheet" href="./app/components/cardsNews/cardsNews.css">

                <section class="card">
                <img src="${this.image}">
                <p>${this.date}</p>
                <h2>${this.title}</h2>
                <a href="">${this.read}</a>
                </section>

                `;
            }
        }
    }

    customElements.define("my-cardsnews", CardsNews);
    export default CardsNews;