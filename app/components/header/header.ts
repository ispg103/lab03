class Header extends HTMLElement {
    
    static get observedAttributes() {
        return [];
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback() {            
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/header/header.css">
                <section class="firstBar">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Nintendo_Logo_2017.png/640px-Nintendo_Logo_2017.png" class="image">
                <img src="https://cdn-icons-png.flaticon.com/512/54/54481.png" class="searchImg">
                <div class="search">Search games, hardware, news, etc</div>
                <b><div class="categories">All categories</div></b>
                <img src="https://cdn-icons-png.flaticon.com/512/32/32195.png" class="one">

                <div class="support"> 
                <img src="https://cdn0.iconfinder.com/data/icons/entypo/92/help-512.png">
                <h2>Support</h2>
                </div>

                <div class="wishList"> 
                <img src="https://icon-library.com/images/heart-icon-png/heart-icon-png-29.jpg">
                <h2>Wish List</h2>
                </div>
                
                <div class="cart"> 
                <img src="https://cdn-icons-png.flaticon.com/512/60/60992.png">
                <h2>Cart</h2>
                </div>

                <div class="profile"> 
                <img src="https://cdn-icons-png.flaticon.com/512/3106/3106921.png">
                <h2>Log in / Sign up</h2>
                </div>

                </section>

                <section class="SecondBar">

                <div class="store"> 
                <img src="https://cdn1.iconfinder.com/data/icons/ios-11-glyphs/30/buy-512.png">
                <h2>My Nintendo Store</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/32/32195.png" class="two">
                </div>

                <div class="games"> 
                <img src="https://cdn-icons-png.flaticon.com/512/434/434884.png">
                <h2>Games</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/32/32195.png" class="three">
                </div>
                
                <div class="switch"> 
                <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3210154/nintendo-switch-icon-md.png">
                <h2>Nintendo Switch</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/32/32195.png" class="four">
                </div>

                <div class="news"> 
                <img src="https://icons.veryicon.com/png/o/miscellaneous/blackcat/comment-44.png">
                <h2>News & Events</h2>
                </div>

                <div class="nintendo"> 
                <img src="https://cdn1.iconfinder.com/data/icons/devices-gaming-solid/24/gaming-star-solid-512.png">
                <h2>Play Nintendo</h2>
                <img src="https://cdn-icons-png.flaticon.com/512/32/32195.png" class="five">
                </div>

                </section>
                `;
            }
        }
    }

    customElements.define("my-header", Header);
    export default Header;