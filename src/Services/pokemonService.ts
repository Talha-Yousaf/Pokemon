// services/pokemonService.ts
import { getImageUrl,capitalizeFirstLetter,getEnglishFlavorText } from "../Helper";
  

  // We can use axios here if we plan to scale, as It has options to configure base url once and it provide intercepters as well
  export const getPokemonDetails = async (id: string) => {
    try {
      const [pokemon, species] = await Promise.all([
        //First End-Point to get the Pokemon Basic details
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json()),
        // Second End-Point will give us Specie Details, We can also add different stats in the future
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) => res.json()),
      ]);

      const flavorText = getEnglishFlavorText(species);
      return {
        id: pokemon.id,
        name: capitalizeFirstLetter(pokemon.name),
        types: pokemon.types.map((t: any) => t.type.name),
        // Converting into metric Unit as we're not in the USA :)
        height: pokemon.height / 10, 
        weight: pokemon.weight / 10,
        abilities: pokemon.abilities.map((a: any) => a.ability.name),
        stats: pokemon.stats.map((s: any) => ({
          name: s.stat.name,
          value: s.base_stat,
        })),
        image: getImageUrl(pokemon.id),
        flavorText,
        mainType: pokemon.types[0]?.type?.name ?? null,
      };
    } catch (error) {
      console.error("Error fetching Pokémon data:", error);
      throw error;
    }
  };
  