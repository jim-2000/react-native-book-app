import React from 'react'
import { StyleSheet, Text, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigations from './src/Navigations/AuthNavigations'
import AppNavigation from './src/Navigations/AppNavigation'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BookDetails from './src/Screens/BookDetails'
import AudioBook from './src/Screens/AudioBook'
import COLORS from './src/const/mycolors'
const Stack = createNativeStackNavigator()
const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator
      screenOptions={{headerShown:false}}>
        <Stack.Screen component={AppNavigation} name="mainHome" />
        <Stack.Screen component={BookDetails} name="Details" />
        <Stack.Screen component={AudioBook} name="audiobook" />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
