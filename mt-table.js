class Tablaextendida extends HTMLElement{
    constructor(){
        super()
        this._rows=2
        this._columns=2
        this.tabledom=this.attachShadow({mode:"open"})
        this.tabla=document.createElement("table")
        this.css=document.createElement("link")
        this.css.setAttribute("href","mt-table.css")
        this.css.setAttribute("rel","stylesheet")
    }
    static get observedAttributes(){return ["rows","columns"]}
    updatetable(){
        
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
        
        this.updatetable()
    }
    attributeChangedCallback(atr,old,newval){
       if (atr=="rows"){
        this._rows=newval
       }
       if (atr=="columns"){
        this._columns=newval
       }
       this.tabledom.removeChild(this.css)
       this.tabledom.removeChild(this.tabla)
       this.updatetable()
    }
    
}

customElements.define("mt-table",Tablaextendida)