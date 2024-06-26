import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider, ThemeContext } from './theme-context';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import MyCardsScreen from './screens/MyCardsScreen';
import StatisticsScreen from './screens/StatisticsScreen';
import { Image, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const AppWrapper = () => {
  const { navigationTheme } = useContext(ThemeContext);
  const isDarkTheme = navigationTheme.dark;
  return (
    <NavigationContainer theme={navigationTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconSource;

            if (route.name === 'Home') {
              iconSource = require('./assets/home.png');
            } else if (route.name === 'My Cards') {
              iconSource = require('./assets/myCards.png');
            } else if (route.name === 'Statistics') {
              iconSource = require('./assets/statistics.png');
            } else if (route.name === 'Settings') {
              iconSource = require('./assets/settings.png');
            }

            return <Image source={iconSource} style={{ width: size, height: size, tintColor: color }} />
          },
          tabBarStyle: {
            backgroundColor: isDarkTheme ? '#1c1c33' : '#fff',
            height:65
          },
          headerStyle: {
            backgroundColor: isDarkTheme ? '#2a2744' : '#fff', 
          },
          headerTitleStyle: {
            color: isDarkTheme ? '#fff' : '#000',
          },
          tabBarLabelStyle: {
            fontSize: 15,
            
          },
          tabBarActiveTintColor: '#4070f5',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="My Cards" component={MyCardsScreen} />
        <Tab.Screen name="Statistics" component={StatisticsScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const App = () => (
  <ThemeProvider>
    <AppWrapper />
  </ThemeProvider>
);

export default App;
