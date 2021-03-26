import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStackScreen from './components/HomeStackScreen';
import SettingsStackScreen from './components/SettingsStackScreen';
import ChartStackScreen from './components/ChartStackScreen';
import MessagesStackScreen from './components/MessageStackScreen';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{ tabBarLabel: 'Home' }}
        />
        <Tab.Screen
          name="Chart"
          component={ChartStackScreen}
          options={{ tabBarLabel: 'Chart' }}
        />
        <Tab.Screen
          name="Messages"
          component={MessagesStackScreen}
          options={{ tabBarLabel: 'Messages' }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{ tabBarLabel: 'Settings' }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}