class Footer extends HTMLElement {
    static get observedAttributes() {
        return [];
    }
    ;
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/footer/footer.css">
                <img src="./app/footerimg.png" class="image">
                `;
        }
    }
}
customElements.define("my-footer", Footer);
export default Footer;
