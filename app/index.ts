import * as components from './components/index.js'
import data1 from './data1.js'
import data2 from './data2.js'
import data3 from './data3.js'
import data4 from './data4.js'
import data5 from './data5.js'
import data6 from './data6.js'
import data7 from './data7.js'
import data8 from './data8.js'
import data9 from './data9.js'

import Featured, {Attribute1} from "./components/featured/featured.js"
import CardsFeatured, {Attribute2} from "./components/cardsFeatured/cardsFeatured.js"
import Store, {Attribute3} from "./components/store/store.js"
import Systems, {Attribute4} from "./components/systems/systems.js"
import News, {Attribute5} from "./components/news/news.js"
import CardsNews, {Attribute6} from "./components/cardsNews/cardsNews.js"
import Characters, {Attribute7} from "./components/characters/characters.js"
import Sellers, {Attribute8} from "./components/sellers/sellers.js"
import Releases, {Attribute9} from "./components/releases/releases.js"

class AppContainer extends HTMLElement{
    featured: Featured[] = []
    cardsfeatured: CardsFeatured[] = []
    store: Store[] = []
    systems: Systems[] = []
    news: News[] = []
    cardsnews: CardsNews[] = []
    characters: Characters[] = []
    sellers: Sellers[] = []
    releases: Releases[] = []
    

     constructor(){
        super()
        this.attachShadow({mode: 'open'})

        data1.forEach((card)=>{
            const featuredCard=this.ownerDocument.createElement('my-featured') as Featured
            featuredCard.setAttribute(Attribute1.titles, card.titles)
            featuredCard.setAttribute(Attribute1.description, card.description)
            featuredCard.setAttribute(Attribute1.button, card.button)
            featuredCard.setAttribute(Attribute1.image, card.image)
            this.featured.push(featuredCard);
         });

         data2.forEach((card)=>{
            const cardsfeaturedCard=this.ownerDocument.createElement('my-cardsfeatured') as CardsFeatured
            cardsfeaturedCard.setAttribute(Attribute2.title, card.title)
            cardsfeaturedCard.setAttribute(Attribute2.description, card.description)
            cardsfeaturedCard.setAttribute(Attribute2.image, card.image)
            this.cardsfeatured.push(cardsfeaturedCard);
         });

         data8.forEach((card)=>{
            const storeCard=this.ownerDocument.createElement('my-store') as Store
            storeCard.setAttribute(Attribute3.title, card.titles)
            storeCard.setAttribute(Attribute3.description, card.description)
            storeCard.setAttribute(Attribute3.button, card.button)
            storeCard.setAttribute(Attribute3.image, card.image)
            this.store.push(storeCard);
         });

         data9.forEach((card)=>{
            const systemsCard=this.ownerDocument.createElement('my-systems') as Systems
            systemsCard.setAttribute(Attribute4.title, card.titles)
            systemsCard.setAttribute(Attribute4.description, card.description)
            systemsCard.setAttribute(Attribute4.button, card.button)
            systemsCard.setAttribute(Attribute4.image, card.image)
            this.systems.push(systemsCard);
         })

         data3.forEach((card)=>{
            const newsCard=this.ownerDocument.createElement('my-news') as News
            newsCard.setAttribute(Attribute5.date, card.date)
            newsCard.setAttribute(Attribute5.title, card.title)
            newsCard.setAttribute(Attribute5.description, card.description)
            newsCard.setAttribute(Attribute5.read, card.read)
            newsCard.setAttribute(Attribute5.image, card.image)
            newsCard.setAttribute(Attribute5.bigt, card.bigt)
            this.news.push(newsCard);
         });

         data4.forEach((card)=>{
            const cardsnewsCard=this.ownerDocument.createElement('my-cardsnews') as CardsNews
            cardsnewsCard.setAttribute(Attribute6.date, card.date)
            cardsnewsCard.setAttribute(Attribute6.title, card.title)
            cardsnewsCard.setAttribute(Attribute6.read, card.read)
            cardsnewsCard.setAttribute(Attribute6.image, card.image)
            cardsnewsCard.setAttribute(Attribute6.text, card.text)
            this.cardsnews.push(cardsnewsCard);
         });

         data5.forEach((card)=>{
            const charactersCard=this.ownerDocument.createElement('my-characters') as Characters
            charactersCard.setAttribute(Attribute7.title, card.title)
            charactersCard.setAttribute(Attribute7.image, card.image)
            charactersCard.setAttribute(Attribute7.bigt, card.bigt)
            this.characters.push(charactersCard);
         });

         data6.forEach((card)=>{
            const sellersCard=this.ownerDocument.createElement('my-sellers') as Sellers
            sellersCard.setAttribute(Attribute8.title, card.title)
            sellersCard.setAttribute(Attribute8.date, card.date)
            sellersCard.setAttribute(Attribute8.price, card.price)
            sellersCard.setAttribute(Attribute8.description, card.description)
            sellersCard.setAttribute(Attribute8.image, card.image)
            sellersCard.setAttribute(Attribute8.bigt, card.bigt)
            this.sellers.push(sellersCard);
         });

         data7.forEach((card)=>{
            const releasesCard=this.ownerDocument.createElement('my-releases') as Releases
            releasesCard.setAttribute(Attribute9.title, card.title)
            releasesCard.setAttribute(Attribute9.date, card.date)
            releasesCard.setAttribute(Attribute9.box, card.box)
            releasesCard.setAttribute(Attribute9.price, card.price)
            releasesCard.setAttribute(Attribute9.description, card.description)
            releasesCard.setAttribute(Attribute9.image, card.image)
            releasesCard.setAttribute(Attribute9.bigt, card.bigt)
            this.releases.push(releasesCard);
         });
     }

    connectedCallback(){
       this.render();
    }


    render(){
      if(this.shadowRoot){
       this.shadowRoot.innerHTML=``
      }

      this.featured.forEach((card) => {
         this.shadowRoot?.appendChild(card);
      });

      this.cardsfeatured.forEach((card) => {
         this.shadowRoot?.appendChild(card);
      });

      this.store.forEach((card) => {
         this.shadowRoot?.appendChild(card);
      });

      this.systems.forEach((card) => {
        this.shadowRoot?.appendChild(card);
     });

      this.news.forEach((card) => {
         this.shadowRoot?.appendChild(card);
      });

      this.cardsnews.forEach((card) => {
         this.shadowRoot?.appendChild(card);
      });

      this.characters.forEach((card) => {
         this.shadowRoot?.appendChild(card);
      });

      this.sellers.forEach((card) => {
         this.shadowRoot?.appendChild(card);
      });

      this.releases.forEach((card) => {
         this.shadowRoot?.appendChild(card);
      });
   
    }

}

customElements.define("app-container", AppContainer);