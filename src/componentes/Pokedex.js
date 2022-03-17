import React from "react";
import Pagination from "./Pagination";
 import PokemonCard from "./PokemonCard";
import Spinner from "./Spinner";
import '../estilos-pokemon.css';

const Pokedex = (props)=>{
    const {pokemones, page, setPage, total, loading} = props;

const lastPage = ()=> {
    const nextPage=Math.max(page - 1,0)
    setPage(nextPage);
}

const nextPage = ()=> {
    const nextPage=Math.min(page + 1,total -1)
    setPage(nextPage);
}


    return  (
            <div className="pokedex-card">
                <div className="header">
                   <div><h1>Pokedex</h1></div>
                    <Pagination 
                        page ={page +1} 
                        totalPages={total}
                        clickLeft = {lastPage}
                        clickRight = {nextPage}
                        
                        />
                </div>

                {loading ? <div><Spinner/></div>
                        : 

                <div className="pokedex-grid">
                    {pokemones.map((pokemon, idx) => {
                        return (
                            <PokemonCard pokemon={pokemon} key={pokemon.name}/>
                        )
                    })}
                  
                    

                </div>
                }
            </div>
    )
}
export default Pokedex;