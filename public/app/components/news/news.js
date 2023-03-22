export var Attribute5;
(function (Attribute5) {
    Attribute5["bigt"] = "bigt";
    Attribute5["image"] = "image";
    Attribute5["date"] = "date";
    Attribute5["title"] = "title";
    Attribute5["description"] = "description";
    Attribute5["read"] = "read";
})(Attribute5 || (Attribute5 = {}));
class News extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
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
    attributeChangedCallback(propName, oldValue, newValue) {
        switch (propName) {
            default:
                this[propName] = newValue;
                this.render();
                break;
        }
        this.render();
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
