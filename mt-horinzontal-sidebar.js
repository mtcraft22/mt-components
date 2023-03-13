class Horinzontalsiderbar extends HTMLElement{
    constructor(){
        super()

        this.side_dom=this.attachShadow({mode:"open"})
        this.elements=[{Tittle:'prueba',Adr:'prueba.html'}]
        this.css=document.createElement("link")
        this.css.setAttribute("href","mt-horinzontal-sidebar.css")
        this.css.setAttribute("rel","stylesheet")
    }
    static get observedAttributes(){
        return ["items"]
    }
    updatesidebar(){
        this.List=document.createElement("ul")
        //this.parsed=JSON.parse(this.elements)
        this.side_dom.appendChild(this.css)
        this.side_dom.appendChild(this.List)
        for (let i=0;i<this.elements.length;i++){
            this.adress=document.createElement("a")
            this.adress.setAttribute("href",this.elements[i].Adr)
            this.listitem=document.createElement("li")
            this.adress.innerHTML=this.elements[i].Tittle
            this.listitem.append(this.adress)
            this.List.appendChild(this.listitem)
        }
    }
    connectedCallback(){     
        this.updatesidebar()
    }
    attributeChangedCallback(nombre,viejovalor,nuevovalor){
        if (nombre=="items"){
            this.elements=[]
            let lista=Array(nuevovalor)
            for (let i=0;i<lista.length;i++){
                console.log(lista[i])
                console.log(JSON.parse(lista[i]))
                

            }
            updatesidebar()
        }
    }

}
customElements.define("mt-vsiderbar",Horinzontalsiderbar)