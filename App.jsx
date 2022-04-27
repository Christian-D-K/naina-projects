import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from 'firebase/app';
import ConfirmScreen from './src/screens/ConfirmScreen';
import MainScreen from './src/screens/MainScreen';
import { firebaseConfig } from './env';

import { COLORS } from './src/utils/colors';
import EditCardScreen from './src/screens/EditCardScreen';

const Stack = createStackNavigator();
// Initialize Firebase
if (getApps().length === 0) {
  initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{
          headerStyle: { backgroundColor: '#ffffff' },
          headerTitleStyle: { color: COLORS.GRAY_D001 },
          headerTitle: 'NAINA',
          headerBackTitle: 'Back',
          // cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Confirm" component={ConfirmScreen} />
        <Stack.Group
          screenOptions={{ presentation: 'modal' }}
        >
          <Stack.Screen
            name="EditCard"
            component={EditCardScreen}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
