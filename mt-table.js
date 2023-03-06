class Tablaextendida extends HTMLElement{
    constructor(){
        super()
        this._rows=1
        this._columns=1
        this.tabledom=this.attachShadow({mode:"open"})
        this.css=document.createElement("link")
        this.css.setAttribute("href","mt-table.css")
        this.css.setAttribute("rel","stylesheet")
    }
    static get observedAttributes(){return ["rows","columns"]}
    updatetable(){
        this.tabla=document.createElement("table")
        this.tabla.setAttribute("id","tablas")
        this.tabledom.appendChild(this.css)
        this.tabledom.appendChild(this.tabla)
    
        for (let i=0; i<this._rows; i++){
            this.tabla.appendChild(document.createElement("tr"))
            for (let j=0; j<this._columns; j++){
                this.td=document.createElement("td")
                this.tabla.appendChild(this.td)
                
                this.Hueco=document.createElement("slot")
                this.Hueco.setAttribute("name",`${i}${j}`)
                this.td.appendChild(this.Hueco)
            }
        }
    }
    connectedCallback(){
        if(this.tabledom.getElementById("tablas")!=null){
            this.tabledom.getElementById("tablas").remove()
        }
        this.updatetable()
    }
    attributeChangedCallback(atr,old,newval){
        if (atr=="rows"){
        this._rows=newval
        }
        if (atr=="columns"){
        this._columns=newval
        }
        if(this.tabledom.getElementById("tablas")!=null){
            this.tabledom.getElementById("tablas").remove()
        }
        
        this.updatetable()
    }
    
}

customElements.define("mt-table",Tablaextendida)