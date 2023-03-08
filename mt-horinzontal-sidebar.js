class Horinzontalsiderbar extends HTMLElement{
    constructor(){
        super()

        this.side_dom=this.attachShadow({mode:"open"})
        this.elements=[{Tittle:'prueba',Adr:'prueba.html'}]
        this.css=document.createElement("link")
        this.css.setAttribute("href","mt-horinzontal-sidebar.css")
        this.css.setAttribute("rel","stylesheet")
    }
    updatesidebar(){
        
        this.List=document.createElement("ul")
        this.Listitem=document.createElement("li")
        //this.parsed=JSON.parse(this.elements)
        this.side_dom.appendChild(this.css)
        this.side_dom.appendChild(this.List)
        this.elements.forEach(function (e){
            console.log(e)
            this.Listitem=document.createElement("li")
            this.Listitem.innerHTML=e.Tittle
            this.side_dom.appendChild(this.Listitem)
            this.adr=document.createElement("a")
            this.adr.setAttribute("href",e.Adr)
            this.Listitem.appendChild(this.adr)
        });
    }
    connectedCallback(){   
        this.updatesidebar()
    }
}
customElements.define("mt-vsiderbar",Horinzontalsiderbar)