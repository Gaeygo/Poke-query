import { FetchError } from "../utils/ErrorHandler";
import instance from "../utils/axiosInstance";
import { Pokemon, PokemonSpecies } from "pokenode-ts"

export type PokemonSearch = string


// type NeededPokemonData = Omit<Pokemon,
//     "forms" |
//     "game_indices" |
//     "held_items" |
//     "location_area_encounters" |
//     "moves" |
//     "species" |
//     "types" |
//     "past_types"
// >

// type PokemonNeededColor = Omit<PokemonColor, "pokemon_species" | "names" | 'name'> & { pokeColor: PokemonColor['name'] }


// type FullPokemon = NeededPokemonData & PokemonNeededColor


type OmitAllExcept<T, K extends keyof T> = Pick<T, K>;

export type ApiKey = {
    key: string
}




export type NeededPokemonData = Omit<Pokemon,
    "game_indices" |
    "held_items" |
    "location_area_encounters" |
    "moves" |
    "species" |
    "types" |
    "past_types"
>

export type PokemonList = {
    count: number,
    next: string,
    previous: null,
    results: [{ name: string, url: string }]
}

export type PokemonColor = OmitAllExcept<PokemonSpecies, "color">


export type FullPokemon = NeededPokemonData & PokemonColor


const fetchPoke = async (searchParam?: PokemonSearch): Promise<NeededPokemonData> => {
    if (!searchParam) {
        throw new FetchError({ name: "NULL_POKE_VALUE", message: "Pokemon value/name should not be empty" })
    }

    const pokemon = await instance.post<NeededPokemonData>(`pokemon`, { id: searchParam })
    //pokemon-color
    console.log(pokemon.data);

    return pokemon.data
}

const fetchMultiplePokes = async () => {
    const data = await instance.get("/pokemon")

    return data
}

export {
    fetchPoke, fetchMultiplePokes
}



// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIndex}.png