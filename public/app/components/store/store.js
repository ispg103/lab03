export var Attribute3;
(function (Attribute3) {
    Attribute3["title"] = "title";
    Attribute3["image"] = "image";
    Attribute3["description"] = "description";
    Attribute3["button"] = "button";
})(Attribute3 || (Attribute3 = {}));
class Store extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
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
