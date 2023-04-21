class Horinzontalsiderbar extends HTMLElement{
    constructor(){
        super()
        this.side_dom=this.attachShadow({mode:"open"})
        this.elements=[{Tittle:'prueba',Adr:'prueba.html'}]
        this.css=document.createElement("link")
        this.css.setAttribute("href","./../css/sidebar.css")
        this.css.setAttribute("rel","stylesheet")
    }
    static get observedAttributes(){
        return ["items"]
    }
    updatesidebar(){
        var fileName = location.href.split("/").slice(-1)
        this.List=document.createElement("ul")
        this.List.setAttribute("id","sidebar")
        //this.parsed=JSON.parse(this.elements)
        this.side_dom.appendChild(this.css)
        this.side_dom.appendChild(this.List)
        for (let i=0;i<this.elements.length;i++){
            this.adress=document.createElement("a")
            this.adress.setAttribute("href",this.elements[i].Adr)
            
            this.listitem=document.createElement("li")
            if (this.elements[i].Adr==fileName){this.listitem.setAttribute("class","selected")}
            this.adress.innerHTML=this.elements[i].Tittle
            this.listitem.append(this.adress)
            this.List.appendChild(this.listitem)
        }
    }
    connectedCallback(){
        if(this.side_dom.getElementById("sidebar")!=null){
            this.side_dom.getElementById("sidebar").remove()
        }     
        this.updatesidebar()
    }
    attributeChangedCallback(nombre,viejovalor,nuevovalor){
        if (nombre=="items"){
            this.elements=[]
            let lista=Array(nuevovalor)
            this.elements=JSON.parse(lista)
            if(this.side_dom.getElementById("sidebar")!=null){
                this.side_dom.getElementById("sidebar").remove()
            }
            this.updatesidebar()
        }
    }

}
customElements.define("mt-vsiderbar",Horinzontalsiderbar)