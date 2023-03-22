export var Attribute6;
(function (Attribute6) {
    Attribute6["image"] = "image";
    Attribute6["date"] = "date";
    Attribute6["title"] = "title";
    Attribute6["read"] = "read";
    Attribute6["button"] = "button";
    Attribute6["text"] = "text";
})(Attribute6 || (Attribute6 = {}));
class CardsNews extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
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
