import FollowScreen from '@feature/follow';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={FollowScreen}
        options={{
          title: 'Following',
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
