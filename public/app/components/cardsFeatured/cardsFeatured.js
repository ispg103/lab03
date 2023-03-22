export var Attribute2;
(function (Attribute2) {
    Attribute2["image"] = "image";
    Attribute2["title"] = "title";
    Attribute2["description"] = "description";
})(Attribute2 || (Attribute2 = {}));
class CardsFeatured extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
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
customElements.define("my-cardsfeatured", CardsFeatured);
export default CardsFeatured;
