import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import AppColors from '../../Utills/AppColors';
import Pokeball from "../../assets/Images/Pokeball.png";
const PokemonLogo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headingRow}>
        <Image source={Pokeball} style={styles.pokeballIcon} />
        <Text style={styles.PokedexText}>Pokédex</Text>
      </View>
    </View>
  )
}

export default PokemonLogo