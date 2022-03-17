//import logo from './logo.svg';
import React from "react"
import Searchbar from "./Searchbar";
import Pokedex from "./Pokedex";
import Navbar from "./Navbar";
import '../estilos-pokemon.css';
//import Pagination from "./components/Pagination";
import { getPokemones, getPokemonData, busquedaPokemon } from '../api';
import NotFound from "./NotFound";
const {useState, useEffect} = React;


export default function Pokemon() {

  const [pokemones, setPokemones] = useState([]);
  const [page,setPage] = useState(0);
  const [total,setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setnotFound] = useState(false);
//--------------------------------------------------------------------

  const fetchPokemones = async() => {
    try {
      setLoading(true)
      const data = await getPokemones(12, 12* page);
      console.log(data.results)
      
      const promises =data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemones(results);
      setLoading(false);
      setTotal(Math.ceil(data.count /12));
      setnotFound(false)
    } catch (error) {
      
    }
  }

  const onSearch = async (pokemon)=>{
    if(pokemon == null){
      console.log("se borro todo")
      return fetchPokemones();
    }
    setLoading(true)
    setnotFound(false)
    console.log("se borro todoa")
    const result = await busquedaPokemon(pokemon)
    if(!result){
      setnotFound(true)
      setLoading(false)
      return;

    }else{
      setPokemones([result])
      setPage(0)
      setTotal(1)
    
    }
    setLoading(false)
  }



  useEffect( () =>{
    fetchPokemones()} , 
    [page] 
  )

  return (
    <div>
     
    
    <div className="App">
      <Navbar/>
    <Searchbar
    onSearch = {onSearch}/>
    {notFound ? <NotFound/> : 
    
      <Pokedex
          loading = {loading}
          pokemones = {pokemones}
          page = {page}
          setPage = {setPage}
          total = {total}
          
          />}
    
    
    </div>
    </div>
  );
}

