import axios from "axios";

export const busquedaPokemon = async (pokemon) =>{
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const data1 =  await response.data
        return data1
    } catch (error) {
        console.log("tu vieja")
        
    }
};


export const getPokemones =async (limit = 25, offset = 0) =>{
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        const data1 =  await response.data
        return data1
    } catch (error) {
        console.log("tu viejaaa")
    }
}
export const getPokemonData = async (url) =>{
    try {
        
        const response = await axios.get(url)

        const data1 =  await response.data
        return data1
    } catch (error) {
        console.log("tu vieja1")
        
    }
}