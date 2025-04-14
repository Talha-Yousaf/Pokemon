// src/screens/PokemonListScreen.js
import React from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  Pressable,
  StatusBar,
  Platform
} from 'react-native';
import { FlashList } from "@shopify/flash-list";
import { ScreenWrapper } from 'react-native-screen-wrapper';
import styles from './styles';
import PokemonLogo from '../../Components/PokemonLogo';
import AppColors from '../../Utills/AppColors';
import TextInputComponent from '../../Components/TextInput';
import Icon, { Icons } from '../../Utills/Icons/Icons';
import { width } from '../../Utills/Dimensions';
import Alpha from "../../assets/Images/alpha.png";
import Tag from "../../assets/Images/tag.png";
import { FlatList } from 'react-native-gesture-handler';
import PokemonItem from '../../Components/PokemonItem';
import useHomeController from './useHomeController';

const Home = () => {

  const { navigateToDetail, fetchPokemon, setSearchQuery, isDarkMode, searchQuery, sortType, pokemonData, searchresults,loading } = useHomeController();
  return (
    <ScreenWrapper
      barStyle={isDarkMode ? 'dark-content' : 'light-content'}
      statusBarColor={AppColors.Primary}
    >
      <View style={[styles.mainContainer, Platform.OS === "android" && { marginTop: StatusBar.currentHeight }]}>
        <View style={styles.container}>
          <PokemonLogo />
          <View style={styles.searchContainer}>
            <TextInputComponent
              value={searchQuery}
              placeholder="Search Pokémon..."
              onChangeText={setSearchQuery}
              LeftIcon={<Icon type={Icons.EvilIcons} name='search' color={AppColors.Primary} size={width(6)} />}
              containerStyle={styles.textInputContainerStyles}
            />
            <Pressable style={styles.sortButton}
              onPress={() => { }}
            >
              {
                sortType === 'number' ? (
                  <Image source={Alpha} style={styles.alphaIcon} />
                ) : (
                  <Image source={Tag} style={styles.tagIcon} />
                )
              }
            </Pressable>
          </View>
         {/* I am not using Flashlist because It does not Yet Supports the columnWrapperStyle Prope Which I need in my case */}
          <FlatList
            numColumns={2}
            data={searchresults.length>0?searchresults: pokemonData}
            style={styles.listStyles}
            columnWrapperStyle={styles.columnWrapperStyle}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item }) => <PokemonItem item={item} onPress={() => navigateToDetail(item)} searchQuery={searchQuery}/>}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<View style={styles.listHeader} />}
            ListFooterComponent={
              loading ? <ActivityIndicator size="large" color="#0000ff" /> : null
            }
            onEndReached={pokemonData.length>0?fetchPokemon:()=>{}}
            onEndReachedThreshold={0.5}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};


export default Home;
