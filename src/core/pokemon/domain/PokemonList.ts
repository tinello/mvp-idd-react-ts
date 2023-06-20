export type PokemonList = {
  count: number,
  next: string,
  previous: string,
  results: PokemonListItem[],
}

export type PokemonListItem = {
  name: string,
  url: string,
}

export type Pokemon = {
  base_experience: string,
  weight: number,
  id: number,
  height: number,
  name: string,
}
