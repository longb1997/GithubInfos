import HomeScreen from '@feature/home';
import Stargazers from '@feature/stargazers';
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
        component={Stargazers}
        options={{
          title: 'Stargazers',
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
