import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Detail, Product} from '../screens';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default Navigation;
