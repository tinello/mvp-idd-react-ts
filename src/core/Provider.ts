import ApiClient from "./infrastructure/ApiClient";
import { GetPokemon } from "./pokemon/actions/GetPokemon";
import { GetPokemons } from "./pokemon/actions/GetPokemons";

const apiClient = new ApiClient()

export const provider = {
    getPokemons: new GetPokemons(apiClient),
    getPokemon: new GetPokemon(apiClient),
};

export type ProviderType = typeof provider