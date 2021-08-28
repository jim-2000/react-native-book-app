import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
// import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import SignIn from '../Screens/SignIn';
import OnBoard from '../Screens/OnBoard';
import Signup from '../Screens/SignUp';

//
const AuthNavigations = () => {
    const Stack = createNativeStackNavigator();
    return (
    <Stack.Navigator
    screenOptions={{headerShown:false}}
    >
        <Stack.Screen component={OnBoard} name="bord"/>
        <Stack.Screen component={SignIn} name="SignIn"/>
        <Stack.Screen component={Signup} name="SignUp"/>
      </Stack.Navigator>
    )
}

export default AuthNavigations

const styles = StyleSheet.create({})
