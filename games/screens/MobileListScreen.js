
import React, { useContext, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { GamesListContext } from '../components/GamesListContext.js';
import axios from 'axios';

const GamesListScreen = ({navigation}) => {
  const { games, setGames } = useContext(GamesListContext);

  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/y0geshthakur/mobile/games')
      .then((response) => {
        console.log("got games");
        setGames(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);
  
  return (
    <View style={styles.container}>
      {games.map((games) => ( // Changed from techBooks to games
        <View key={games.brand} style={styles.name}>
          <Text style={styles.name}>{games.name}</Text>
          <Text style={styles.company}>{games.company}</Text>
          <Button
            title="View Details"
            onPress={() =>
              navigation.navigate( "GamesDetailScreen", { games })
            }
          />
        </View>
      ))}
    </View>
  );
};
export {GamesListScreen};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  brand: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    width: '80%',
  },
  model: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
