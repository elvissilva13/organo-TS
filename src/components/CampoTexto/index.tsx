import React from 'react'
import './CampoTexto.css'

interface CampoTextoProps{
   aoAlterado: (valor:string) => void;
   placeholder: string;
   label: string;
   valor: string;
   obrigatorio?: boolean;
   tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const CampoTexto = ({aoAlterado,label,valor,placeholder,obrigatorio=false,tipo='text'}:CampoTextoProps) =>{
    const placeholderModificada =`${placeholder}...`
    
    const aoDigitar = (evento:React.ChangeEvent<HTMLInputElement>) =>{
        aoAlterado(evento.target.value)
        
    }
    return(
        <div className="campo-texto">
            <label>{label}</label>
            <input 
                value={valor} 
                onChange={aoDigitar} 
                required={obrigatorio} 
                placeholder={placeholderModificada}
                type={tipo}
                />

        </div>
    )
}

export default CampoTexto;