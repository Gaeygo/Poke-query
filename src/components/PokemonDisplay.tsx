import { useQuery } from "@tanstack/react-query";
import React from "react";
import { PokemonSearch, fetchPoke } from "../hooks/usePoke";

interface Props {
  pokeId: PokemonSearch;
}

const PokemonDisplay: React.FC<Props> = ({ pokeId }) => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["pokemon", pokeId],
    queryFn: () => fetchPoke(pokeId),
  });

  if (isLoading) return <p>Loading</p>;

  if (isError) return <p>Error: {error as string}</p>;

  if (data)
    return (
      <div>
        <p className="text-cyan-800">{data?.name}</p>
        {data?.abilities.map((ability) => (
          <p key={ability.ability.name}>{ability.ability.name}</p>
        ))}
        {data?.stats.map((stat) => (
          <div key={stat.stat.name}>
            {" "}
            <p>{stat.stat.name}</p>
            <p>{stat.base_stat}</p>
            <p>{stat.effort}</p>
          </div>
        ))}
        <img src={data.sprites.front_default as string} />
      </div>
    );
};

export default PokemonDisplay;
