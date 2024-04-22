import { Component } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import GamesDetail from './GamesDetail';

export class GamesList extends Component {
  state = {
    games: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get('https://my-json-server.typicode.com/y0geshthakur/mobile/games')
      .then((res) => {
        this.setState({ mobiles: res.data, loading: false });
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { games, loading } = this.state;

    if (loading) {
      return (
        <View style={styles.container}>
          <Text>Loading..</Text>
        </View>
      );
    }

    return (
      <ScrollView style={styles.container}>
        {games.map((games, index) => (
          <View key={index} style={styles.gamesContainer}>
            <GamesDetail
              name={games.name}
              company={games.company}
              url={games.url}
              image={games.image}
            />
          </View>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mobilesContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
});
