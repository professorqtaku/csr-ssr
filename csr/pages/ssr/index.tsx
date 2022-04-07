import { useState, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { Pokemon } from '../../types/types'

interface Props {
  pokemons: Pokemon[]
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json')
    const data: Pokemon[] = await res.json();
  
    return {
      props: { pokemons: data }
    };
  };

const SSRPage = ({ pokemons }: Props) => {
    return (
        <div>{pokemons.map(pokemon => <p key={pokemon.id}>{pokemon.name}</p>)}</div>
    )
}

 
export default SSRPage;