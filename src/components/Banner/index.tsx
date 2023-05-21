import React from 'react';
import './banner.css'

interface BannerProps{
    enderecoImagem: string;
    textAlternativo?: string; 
}

function Banner({enderecoImagem, textAlternativo}:BannerProps){
    return(
        <header className="banner">

            <img  src={enderecoImagem} 
        alt={textAlternativo}

        />
        </header>
        

    )
}
export default Banner;