import { GetServerSideProps } from 'next'

import { PokemonDetail as Pokemon } from '../../types/types'

interface Props {
  pokemon: Pokemon
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  
  const id = context.params.id;
  const res = await fetch(`https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`)
  const data = await res.json();

  return {
    props: { pokemon: data }
  };
};

const SSRPage = ({ pokemon }: Props) => {
  const { name, image } = pokemon;
    return (
        <div>
          <p>{name}</p>
          <img src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${image}`} alt={image}/>
        </div>
    )
}


 
export default SSRPage;