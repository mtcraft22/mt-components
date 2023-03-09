class Horinzontalsiderbar extends HTMLElement{
    constructor(){
        super()

        this.side_dom=this.attachShadow({mode:"open"})
        this.elements=[{Tittle:'prueba',Adr:'prueba.html'},{Tittle:'prueba2',Adr:'prueba2.html'}]
        this.css=document.createElement("link")
        this.css.setAttribute("href","mt-horinzontal-sidebar.css")
        this.css.setAttribute("rel","stylesheet")
    }
    updatesidebar(){
        
        this.List=document.createElement("ul")
        //this.parsed=JSON.parse(this.elements)
        this.side_dom.appendChild(this.css)
        this.side_dom.appendChild(this.List)
        for (let i=0;i<this.elements.length;i++){
            this.adress=document.createElement("a")
            this.adress.setAttribute("href",)
            this.listitem=document.createElement("li")
            this.listitem.append(this.adress)
            this.listitem.innerHTML=this.elements[i].Tittle
            this.List.appendChild(this.listitem)
        }
    }
    connectedCallback(){     
        this.updatesidebar()
    }
}
customElements.define("mt-vsiderbar",Horinzontalsiderbar)