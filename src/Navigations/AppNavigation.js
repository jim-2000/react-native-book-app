import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AudioBook from '../Screens/AudioBook';

//
const AppNavigation = () => {
    const Tab = createBottomTabNavigator()
    return (
       <Tab.Navigator
       screenOptions={({route})=>({
           tabBarIcon:({focused,color,size})=>{
               let iconName ;

               if (route.name == "Home") {
                   iconName = focused 
                   ?  'home'
                   : 'home';
                  
               }
               return <MaterialIcons name={iconName} size={size} color={color} />;   
           }
       }),{headerShown:false}}
       >
           <Tab.Screen component={Home} name="Home" />
           {/* <Tab.Screen component={AudioBook} name="audioBokk" /> */}
       </Tab.Navigator>
    )
}

export default AppNavigation;
