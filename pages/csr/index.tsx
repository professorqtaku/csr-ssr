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

    const fetchData = async () => {
        const res = await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json')
        const data = await res.json();
        setPokemons(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1>This page is CSR rendered</h1>
            <div className={styles.container}>
                {pokemons.length <= 0 
                ? <p>Loading...</p>
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