export enum Attribute5 {
    "bigt" = "bigt",
    "image" = "image",
    "date"="date",
    "title" = "title",
    "description"="description",
    "read"="read",
}

class News extends HTMLElement {
    date?: string;
    titles?: string;
    description?: string;
    read?: string;
    image?: string;
    bigt?: string;
    
    static get observedAttributes() {
        const attrs: Record<Attribute5, null> = {
            description: null,
            title: null,
            date: null,
            read: null,
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
    
    attributeChangedCallback(propName: Attribute5, oldValue: undefined, newValue: string){
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
                <link rel="stylesheet" href="./app/components/news/news.css">

                <h1 class="title">${this.bigt}</h1>
                
                <section class="card">
                <img src="${this.image}">
                <p>${this.date}</p>
                <h2>${this.title}</h2>
                <p>${this.description}</p>
                <a href="">${this.read}</a>
                </section>
                `;
            }
        }
    }

    customElements.define("my-news", News);
    export default News;