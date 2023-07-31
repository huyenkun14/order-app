/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './../screens/HomeScreen';
import DetailScreen from './../screens/DetailScreen';
import CartScreen from './../screens/CartScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Detail" component={DetailScreen} />
                <Stack.Screen name="Cart" component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
