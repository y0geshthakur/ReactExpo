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