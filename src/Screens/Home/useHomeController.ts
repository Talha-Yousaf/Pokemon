import { useState,useCallback,useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteParams, Routes } from '../../Routes/constants';

const useHomeController = () => {
  const navigation = useNavigation<StackNavigationProp<RouteParams>>();
  
  const isDarkMode = useColorScheme() === 'dark';
  const [sortType, setSortType] = useState<'number' | 'alphabet'>('number');
  const [loading, setLoading] = useState(false);
  const [pokemonData, setPokemonData] = useState<PokemonResult[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  let url = "https://pokeapi.co/api/v2/pokemon"
  const [searchresults , setSearchresults] = useState<PokemonResult[]>([]);


  useEffect(()=>{
    // Quering the pokemonData to find the matches
    if (searchQuery) {
      const regex = new RegExp(searchQuery.trim().toLowerCase(), 'i');
      const filteredResults = pokemonData.filter(pokemon => regex.test(pokemon.name));
      setSearchresults(filteredResults);
    } else {
      setSearchresults([]);
    }
  },[searchQuery])

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = useCallback(async () => {
    // Fetch until the next pointer is not null
    if(url){
      setLoading(true);
      try {
        const response = await fetch(url);
        const json = await response.json();
          url = json?.next
        setPokemonData((prev: PokemonResult[]) => [...prev, ...json.results]);
      } catch (error) {
        console.error("Error fetching Pokémon: ", error);
      }
      setLoading(false);
    }
  }, []);

  const navigateToDetail = (item: any) => {
    navigation.navigate(Routes.DETAIL, { item: item });
  };
  return {
    navigateToDetail,
    fetchPokemon,
    setSearchQuery,
    searchresults,
    isDarkMode,
    searchQuery,
    sortType,
    pokemonData,
    loading,
  }
}
export default useHomeController;