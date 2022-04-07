import { useState, useEffect } from 'react'
import { PokemonDetail as Pokemon } from '../../types/types'

const CSRPage = () => {
    const [pokemon, setPokemon] = useState<Pokemon>(null);

    const fetchData = async () => {
        const res = await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json')
        const data = await res.json();
        setPokemon(data);
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    return ( 
        <div>
            {pokemon 
                ? <p>Loading...</p>
                :  <div><p>{pokemon.name}</p></div>
            }
        </div> 
    );
}
 
export default CSRPage;