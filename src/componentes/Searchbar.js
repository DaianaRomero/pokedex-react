import React from "react";
import '../estilos-pokemon.css';


const {useState} = React;


const Searchbar = (props) =>{
const {onSearch} = props;
const [buscarPokemon,setBuscarPokemon] = useState("");


const onChange = (evento)=>{
setBuscarPokemon(evento.target.value)
console.log(evento.target.value)
console.log(evento.target.value.length)
if(evento.target.value.length === 0){
    console.log(evento.target.value.length)
    console.log("CONTAR")

    onSearch(null)
}
}

const onClick = async(evento)=>{
   onSearch(buscarPokemon)

}


return(

<div className="searchBar-container">
    <div className="searchBar">
        <input onChange={onChange} placeholder="Buscar Pokemon..."/>
    </div>
    <div className="searchBar-btn">
        <button onClick={onClick}> Buscar</button>
    </div>
</div>

)

}

export default Searchbar;