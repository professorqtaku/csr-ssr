import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PokemonDetail as Pokemon } from "../../types/types";
import styles from "../../styles/Styles.module.css";

const CsrPokemonPage = () => {
  const router = useRouter();
  const [pokemon, setPokemon] = useState<Pokemon>(null);
  const [isLoading, setLoading] = useState(false);

  const { id } = router.query;
  const fetchData = async () => {
    const res = await fetch(
      `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`
    );
    const data = await res.json();
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    if (id) {
      fetchData();
    }
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (!pokemon) return <p>No profile data</p>;

  return (
    <div>
      <h1> This pokemon is rendered in CSR </h1>
      <p>{pokemon.name}</p>
      <img
        className={styles.image}
        src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
        alt={pokemon.image}
      />
    </div>
  );
};

export default CsrPokemonPage;
