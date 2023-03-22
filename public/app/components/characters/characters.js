export var Attribute7;
(function (Attribute7) {
    Attribute7["bigt"] = "bigt";
    Attribute7["title"] = "title";
    Attribute7["image"] = "image";
})(Attribute7 || (Attribute7 = {}));
class Characters extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            title: null,
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
                <link rel="stylesheet" href="./app/components/characters/characters.css">
                
                <h1 class="title">${this.bigt}</h1>

                <section class="first">
                <img src="${this.image}">
                <h2>${this.title}</h2>
                </section>
                `;
        }
    }
}
customElements.define("my-characters", Characters);
export default Characters;
