export var Attribute9;
(function (Attribute9) {
    Attribute9["bigt"] = "bigt";
    Attribute9["image"] = "image";
    Attribute9["title"] = "title";
    Attribute9["date"] = "date";
    Attribute9["box"] = "box";
    Attribute9["price"] = "price";
    Attribute9["description"] = "description";
})(Attribute9 || (Attribute9 = {}));
class Releases extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
            description: null,
            title: null,
            date: null,
            price: null,
            box: null,
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
                <link rel="stylesheet" href="./app/components/releases/releases.css">

                <h1>${this.bigt}</h1>

                <section class="card">
                <img src="${this.image}">
                <h3>${this.title}</h3>
                <p>${this.date}</p>
                <h3 class="box">${this.box}</h3>
                <h3>${this.price}</h3>
                <section class="line">
                <p>${this.description}</p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Heart_icon_red_hollow.svg/812px-Heart_icon_red_hollow.svg.png" class="heart">
                </section>
                </section>
                `;
        }
    }
}
customElements.define("my-releases", Releases);
export default Releases;
