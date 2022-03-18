import React from "react";
import '../estilos-pokemon.css';

const PokemonCard =(props)=>{
    const {pokemon} = props;
    return(
        
      
            
            <div className="pokemon-card">
                        <div className="pokemon-img-container">
                                <img className="pokemon-img" src={pokemon.sprites.front_default} alt={pokemon.name}/>
                        </div>    
                        <div className="card-body ">
                                <div className="card-top">
                                    <h2>{pokemon.name}</h2>
                                    <div>#{pokemon.id}</div>
                                </div>
                                <div className="card-bottom">
                                        <div className="pokemon-type">
                                            {pokemon.types.map((type, idx) =>{
                                                return  <div className="pokemon-type-text"  key={idx}>{type.type.name}</div>
                                                
                                            })}
                                        </div>
                                </div>
                        </div>
            </div>

    )
}

export default PokemonCard;