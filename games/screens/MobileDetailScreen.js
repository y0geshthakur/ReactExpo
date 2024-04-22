import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const GamesDetailScreen = ({ route }) => {
  const {games} = route.params;

  return (
    <View>
      <Text>Name: {games.name}</Text>
      <Image source={{ uri: games.image }} style={styles.image}/>
      <Text>Company: {games.model}</Text>
    </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});
export {SWDetailScreen};