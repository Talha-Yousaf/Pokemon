import React from 'react';
import { View, Text, useColorScheme, Image, ScrollView, ActivityIndicator, StatusBar, Platform } from 'react-native';
import BackgroundImage from "../../assets/Images/Pokeball_Large.png";
import { ScreenWrapper } from 'react-native-screen-wrapper';
import AppColors from '../../Utills/AppColors';
import styles from "./styles";
import Header from "../../Components/Header";
import usePokemonDetailController from './usePokemonDetail.controller';
import Character from "../../assets/Images/Character.png";
import { getTypeColor } from '../../Helper';
import Scale from "./Components/Scale";
import State from "./Components/Stats";
import { SvgUri } from 'react-native-svg';
import { width } from '../../Utills/Dimensions';
const Detail = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const { primaryColor, pokemon, id, loading, onBackPress } = usePokemonDetailController();

  // Render Loading while fetching the Pokemon Details from the End-Point
  if (loading) {
    return (
      <View style={styles.activityIndicatorContainer}>
        <ActivityIndicator color={AppColors.Primary} size={"large"} />
      </View>
    )
  }
  else {
    return (
      <ScreenWrapper
        barStyle={isDarkMode ? 'dark-content' : 'light-content'}
        statusBarColor={primaryColor || AppColors.Primary}
      >
        <View style={[styles.mainContainer, { backgroundColor: primaryColor }, Platform.OS === "android" && { marginTop: StatusBar.currentHeight }]}>
          <View style={styles.container}>
            <Image source={BackgroundImage} style={styles.backgroungImage} />
            <Header
              name={pokemon?.name || ""}
              id={id}
              onBackPress={onBackPress}
            />
          </View>
          {/* Character ImageContainer */}
          <View style={styles.characterImageContainer}>
            <SvgUri uri={pokemon?.image || Character} width={width(50)} height={width(50)} style={styles.characterImage} />
          </View>
          {/* Character Details Container */}
          <View style={styles.characterDetailsContainer}>
            <ScrollView>
              <View style={styles.typesContainer}>
                {
                  pokemon?.types.map((item: any, index: number) => {
                    return (
                      <View key={index} style={[styles.types, { backgroundColor: getTypeColor(item) }]}>
                        <Text style={styles.typeText}>{item}</Text>
                      </View>
                    )
                  })
                }
              </View>
              <Text style={[styles.aboutText, { color: primaryColor }]}>About</Text>
              <View style={styles.scaleContainer}>
                <Scale scaleValue={pokemon?.weight || 0} label={"Weight"} unit={"KG"} />
                <View style={styles.verticalLine} />
                <Scale scaleValue={pokemon?.height || 0} label={"Height"} unit={"m"} isHeight />
                <View style={styles.verticalLine} />
                <View>
                  {
                    pokemon?.abilities.map((ability: string, index: number) => {
                      return (
                        <Text key={index} style={styles.abilityText}>{ability}</Text>
                      )
                    })
                  }
                  <Text style={styles.moveText}>Moves</Text>
                </View>
              </View>
              <Text style={styles.flavorText}>{pokemon?.flavorText.replace(/\s+/g, " ").trim().replace(/ /g, "   ")}</Text>
              <Text style={[styles.aboutText, { color: primaryColor }]}>STATS</Text>
              {/* STATS Numbers */}
              <State stats={pokemon?.stats || []} primaryColor={primaryColor} />
            </ScrollView>
          </View>
        </View>
      </ScreenWrapper>
    )
  }
}

export default Detail