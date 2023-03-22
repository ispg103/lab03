class Banner extends HTMLElement {
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
                <link rel="stylesheet" href="./app/components/banner/banner.css">
                <img src="https://assets.nintendo.com/image/upload/f_auto/q_auto/c_fill,w_1100/ncom/en_US/merchandising/center-stage-banner/bayonetta-origins/3600x1300_BayoOrigins_centerstage_desktop" class="bigImg">
                <section class="main1">
                <h1>Pre-order digitally today, play on 3/17</h1>
                <button>Pre-order now</button>
                </section>
                <section class="main2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/ESRB_2013_Teen.svg/800px-ESRB_2013_Teen.svg.png" class="icon">
                <p>Animated Blood, Fantasy Violence</p>
                </section>
                `;
        }
    }
}
customElements.define("my-banner", Banner);
export default Banner;
