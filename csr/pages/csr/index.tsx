import { useState, useEffect } from 'react'

type Pokemon = {
    id: number;
    name: string;
    image: string;
}

const CSRPage = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const fetchData = async () => {
        const res = await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json')
        const data = await res.json();
        setPokemons(data);
    }

    useEffect(() => {
        fetchData();
    }, []);
    
    return ( 
        <div>
            {pokemons.length <= 0
                ? <p>Loading...</p>
                :  <div>{pokemons.map(user => <p key={user.id}>{user.name}</p>)}</div>
            }
        </div> 
    );
}
 
export default CSRPage;