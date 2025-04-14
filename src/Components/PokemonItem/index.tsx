import React, { useEffect, useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import styles from './styles';
import { getImageUrl,getIdFromUrl } from '../../Helper';
import { SvgUri } from 'react-native-svg';
import { height, width } from '../../Utills/Dimensions';
interface PokemonItemProps {
  item: any,
  onPress?: () => void;
  searchQuery:string;
}
const PokemonItem = ({ item, searchQuery,onPress }: PokemonItemProps): React.JSX.Element | null => {
  const id = getIdFromUrl(item?.url);
  const imageUrl = getImageUrl(id);
  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
    >
      <Text style={styles.idText}>#{id.toString().padStart(3, '0')}</Text>
      <SvgUri
        uri={imageUrl}
        style={styles.imageStyles}
        width={width(30)}
        height={height(11)}
      />
      <View style={styles.background} >
        <Text style={styles.nameText}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
      </View>
    </Pressable>
  );
}

export default PokemonItem