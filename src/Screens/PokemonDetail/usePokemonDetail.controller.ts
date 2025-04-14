import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteParams, Routes } from '../../Routes/constants';
import { RouteProp, useRoute } from '@react-navigation/native';
import { getIdFromUrl,getTypeColor } from '../../Helper';
import { getPokemonDetails } from "../../Services/pokemonService";
import AppColors from "../../Utills/AppColors";
const usePokemonDetail = () => {
    const navigation = useNavigation<StackNavigationProp<RouteParams>>();
    const { params } = useRoute<RouteProp<RouteParams, Routes.DETAIL>>();
    const character = params.item;
    const id = getIdFromUrl(character.url);

    const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);
    const primaryColor = getTypeColor(pokemon?.mainType || "normal")
    
    const onBackPress = ()=>{
      navigation.goBack();
    }
    useEffect(() => {
      let isMounted = true;
      setLoading(true);
      getPokemonDetails(id)
        .then((data) => {
          if (isMounted) {
            setPokemon(data);
            setError(null);
          }
        })
        .catch((err) => {
          if (isMounted) {
            setError(err);
            setPokemon(null);
          }
        })
        .finally(() => {
          if (isMounted) setLoading(false);
        });
  
      return () => {
        isMounted = false;
      };
    }, [id]);

  return {
    primaryColor,
    pokemon,
    id,
    loading,
    onBackPress,
  }
}
export default usePokemonDetail;