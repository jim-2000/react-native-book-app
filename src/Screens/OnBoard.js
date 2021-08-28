import React from 'react'
import { StyleSheet, Text, View,Dimensions, Image, Button, TouchableOpacity } from 'react-native'
import COLORS from '../const/mycolors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const OnBoard = ({navigation}) => {

    return (
        <View style={styles.container}>
           <View style={styles.header}>
               <Animatable.Image 
               animation="bounceIn"         
               duration={5500}
               source={require('../../images/icon.png')}
               style={styles.logo}
               resizeMode="stretch"
               />
        

           </View>
           <Animatable.View 
           animation="fadeInUpBig"
           style={styles.footer}>
               <Text style={styles.title}>Stay connect with Everyone!</Text>
               <Text style={styles.text}>Sign in with account</Text>
               <View style={{alignItems:'flex-end',marginTop:30}}>
                   <TouchableOpacity style={styles.getStarted}
                   onPress={()=>navigation.navigate('SignIn')}
                   >
                       <Text style={{fontWeight:'bold',color:COLORS.white}}>Get Started</Text>
                       <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                   </TouchableOpacity>
               </View>
           </Animatable.View>
        </View>
    )
}

export default OnBoard;
const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;
// const { height } = Dimension.get('screen');
// const heigh_logo = height * 0.28 ;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:COLORS.light,
    },
    header:{
        flex: 2,
        justifyContent:'center',
        alignItems:'center',
        // backgroundColor:COLORS.light,       
        
    },
    footer:{
        flex: 1,
        backgroundColor:COLORS.grey,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,  
        paddingVertical:50,
        paddingHorizontal:20,
    },
    logo:{
        height: height_logo,
        width: height_logo,
    },
    title:{
        fontSize:38,
        color: COLORS.white,
        fontWeight:'bold',        
    },
    text:{
        fontSize:22,
        color: '#ddd',
        marginTop:5,
    },
    getStarted:{
        width: 250,
        height: 50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row',
        backgroundColor:COLORS.primary
    }

})
