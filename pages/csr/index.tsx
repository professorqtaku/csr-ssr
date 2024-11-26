import Link from 'next/link';
import { useState, useEffect } from 'react'
import styles from '../../styles/Styles.module.css'

type Pokemon = {
    id: number;
    name: string;
    image: string;
}

const CSRPage = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const res = await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json')
            const data = await res.json();
            setPokemons(data);
            setIsLoading(false);
            
        } catch (error) {
            setPokemons([]);
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1>This page is CSR rendered</h1>
            <div className={styles.container}>
                { isLoading ? <p>Loading...</p> : 
                    pokemons.length <= 0 ? <p>No data</p>
                : (
                    pokemons.map((pokemon) => (
                        <div key={pokemon.id} className={styles.card}>
                        <Link key={pokemon.id} href={`/csr/${pokemon.id}`}>
                        <a>
                            <img
                            className={styles.image}
                            src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                            alt={pokemon.image}
                            />
                            <p className={styles.title}>{pokemon.name}</p>
                        </a>
                        </Link>
                    </div>
                    ))
                )}
            </div>
        </>
    );
}
 
export default CSRPage;