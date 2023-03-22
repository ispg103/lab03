export var Attribute4;
(function (Attribute4) {
    Attribute4["title"] = "title";
    Attribute4["image"] = "image";
    Attribute4["description"] = "description";
    Attribute4["button"] = "button";
})(Attribute4 || (Attribute4 = {}));
class Systems extends HTMLElement {
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
                <link rel="stylesheet" href="./app/components/systems/systems.css">
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
customElements.define("my-systems", Systems);
export default Systems;
