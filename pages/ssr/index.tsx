import { GetServerSideProps } from 'next'
import { Pokemon } from '../../types/types'
import styles from '../../styles/Styles.module.css'
import Link from 'next/link'

interface Props {
  pokemons: Pokemon[]
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json');
    if (!res.ok) {
      return {
        props: { pokemons: [] }
      }
    }
    
    const data: Pokemon[] = await res.json();
    
    return {
      props: { pokemons: data }
    };
  } catch (error) {
    return {
      props: { pokemons: [] }
    }
  }
};

const SSRPage = ({ pokemons }: Props) => {
  return (
    <div>
      <h1>This page is SSR rendered</h1>
      <div className={styles.container}>
        {pokemons.length <= 0
        ? <p>No data</p>       
        : pokemons.map((pokemon) => (
          <div key={pokemon.id} className={styles.card}>
            <Link key={pokemon.id} href={`/ssr/${pokemon.id}`}>
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
        ))}
      </div>
    </div>
  );
}

 
export default SSRPage;