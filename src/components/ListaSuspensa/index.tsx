import "./ListaSuspensa.css";

interface ListaSuspensaProps{
    aoAlterado:(valor:string) => void
    obrigatorio?:boolean
    itens:string[]
    valor:string
    label:string
}

const ListaSuspensa =(props:ListaSuspensaProps) =>{
   
    return(
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select
             onChange={evento => props.aoAlterado(evento.target.value)} 
             required={props.obrigatorio} value={props.valor}
             >
             <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}
export default ListaSuspensa;