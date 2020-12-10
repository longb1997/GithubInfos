import HomeScreen from '@feature/home';
import Stargazer from '@feature/stargazer';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="stargazer"
        component={Stargazer}
        options={{
          title: 'Stargazer',
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
