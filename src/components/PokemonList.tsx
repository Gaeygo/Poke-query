import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchMultiplePokes } from "../hooks/usePoke";

// interface Props {
// }

const PokemonList: React.FC = () => {
  // const [page, setPage] = React.useState(1);

  // const { isLoading, isError, data, error } = useQuery({
  //   queryKey: ["pokemonList", page],
  //   queryFn: () => fetchMultiplePokes(page),
  //   keepPreviousData: true,
  // });

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["pokemonList"],
    queryFn: ({ pageParam = 1 }) => fetchMultiplePokes(pageParam),
    getNextPageParam: (lastPage, allPages) => allPages.length + 1,
  });

  if (isLoading) return <p>Loading</p>;

  if (isError) return <p>Error: {error as string}</p>;

  // if (data.length > 0)
  //   return (
  //     <div>
  //       {data.map((data) => (
  //         <p key={data.pokemon.name}>{data.pokemon.name}</p>
  //       ))}
  //       <button onClick={() => setPage((prev) => prev + 1)}>+</button>
  //       {page === 0 ? (
  //         <button onClick={() => setPage((prev) => prev - 1)}>-</button>
  //       ) : null}
  //     </div>
  //   );
};

export default PokemonList;
