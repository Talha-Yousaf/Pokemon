
import { CommonActions } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteParams, Routes } from '../Routes/constants';

export const resetRoutes = (
  navigation: StackNavigationProp<any, Routes>,
  routeName: Routes,
  routeParams: RouteParams[Routes],
  index = 0,
  postResetRoute?: Routes, // Optional route to navigate to after reset
  postResetParams?: RouteParams[Routes] // Optional params for post-reset route
) => {
  navigation.dispatch(
    CommonActions.reset({
      index: index,
      routes: [{ name: routeName, params: routeParams }],
    })
  );

  // Navigate to a different page after resetting, if specified
  if (postResetRoute) {
    navigation.navigate(postResetRoute, postResetParams);
  }
};


export const getImageUrl = (id: string): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
}

export const getIdFromUrl = (url:string):string =>{
  return url?.split('/').filter(Boolean).pop() || "1";
}

export const getTypeColor = (type: string): string => {
  const typeColors: Record<string, string> = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    grass: "#78C850",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
  };
  return typeColors[type.toLowerCase()] || "#777";
};

export function formatStatLabel(statName: string): string {
  const map: Record<string, string> = {
    hp: "HP",
    attack: "ATK",
    defense: "DEF",
    "special-attack": "SATK",
    "special-defense": "SDEF",
    speed: "SPD",
  };

  return map[statName] || statName.toUpperCase(); // fallback if unknown
}
export const capitalizeFirstLetter = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export const getEnglishFlavorText = (species: any): string => {
  const entry = species.flavor_text_entries.find(
    (entry: any) => entry.language.name === "en"
  );
  return entry?.flavor_text.replace(/\f/g, " ") ?? "";
};
