// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {GamesListScreen} from './screens/GamesListScreen.js';
import {GamesDetailScreen} from './screens/GamesDetailScreen.js';
import { GamesListProvider } from './components/GamesListContext.js';

const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <GamesListProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="GamesListScreen">
          <Drawer.Screen name="GamesListScreen" component={GamesListScreen} />
          <Drawer.Screen name="GamesDetailScreen" component={GamesDetailScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </GamesListProvider>
  );
};

export default App;
