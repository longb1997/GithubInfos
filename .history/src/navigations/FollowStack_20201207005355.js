import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import FollowScreen from '@feature/follow';
import SearchScreen from '@feature/follow/Search';
import {StyleSheet} from 'react-native';

const Stack = createStackNavigator();

function FollowStack() {
  return (
    <Stack.Navigator
      screenOptions={() => ({
        headerTitleAlign: 'center',
        headerStyle: styles.headerStyle,
        gestureDirection: 'vertical-inverted',
      })}>
      <Stack.Screen
        name="follow"
        component={FollowScreen}
        options={{
          title: 'Home',
        }}
      />
    </Stack.Navigator>
  );
}

export default FollowStack;

const styles = StyleSheet.create({
  headerStyle: {
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0,
    shadowRadius: 0,
    elevation: 0,
  },
});
