export var Attribute1;
(function (Attribute1) {
    Attribute1["titles"] = "titles";
    Attribute1["image"] = "image";
    Attribute1["description"] = "description";
    Attribute1["button"] = "button";
})(Attribute1 || (Attribute1 = {}));
class Featured extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            description: null,
            button: null,
            titles: null,
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
                <link rel="stylesheet" href="./app/components/featured/featured.css">
                <section class="main">
                <h1>${this.titles}</h1>
                <img src="${this.image}">
                <h2>${this.description}</h2>
                <button>${this.button}</button>
                </section>
                `;
        }
    }
}
customElements.define("my-featured", Featured);
export default Featured;
