import React,{useState} from 'react'
import { StyleSheet, Text, View,Dimensions, Platform, Button, TouchableOpacity, TextInput, StatusBar } from 'react-native'

import COLORS from '../const/mycolors'

import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';


//
const SignUp = ({navigation}) => {
    //state
const [data, setdata] = useState({
     email:"",
     password:"",
     chec_textInputChange:false,
     secureTextEntry:true
})

// email
const textInputChange=(e)=>{
    if (e.length != 0) {
        setdata({
            ...data,
            email:e,
            chec_textInputChange:true
        })
    }else{
        setdata({
            ...data,
            email:e,
            chec_textInputChange:false
        })
    }
};

    const handlePasword = (e)=>{
        setdata({
        ...data,
        password:e
        })
    };
const updatesecureText = ()=>{
    setdata({
        ...data,
        secureTextEntry:!data.secureTextEntry,
    })
}

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#009387" barStyle="light-content" />
          <View style={styles.header}>
              <Text style={styles.headerText}>Create Your Account </Text>
              <Text style={[styles.headerText,{color:COLORS.light,fontSize:50}]}>Enjoy your Life with us. </Text>
          </View>
          <Animatable.View
          animation="fadeInUpBig"
          style={styles.footer} >
                <Text style={{
                  marginTop:35,
                  fontSize:18,
                  fontWeight:'bold',
                  color:"#05375a",
                }}>Username</Text>
                <View style={styles.actions}>
                <Feather 
                    name="lock"
                    color="#ddd"
                    size={20}
                />
                <TextInput 
                placeholder="captaion..."
                style={styles.textInput}
                />
                
              </View>

              <Text style={styles.textFooter}>Email</Text>
              <View style={styles.actions}>
                <FontAwesome 
                name="user-o"
                color={COLORS.grey}
                size={20}
                />
                <TextInput 
                placeholder="Your Email"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(e)=>textInputChange(e)}
                />
                {
                    data.chec_textInputChange ? 
                <Animatable.View
                animation="bounceIn"

                >
                    <Feather 
                    name="check-circle"
                    color="green"
                    size={20}
                /> 
                </Animatable.View>
               :                
                null
                }
              </View>
              <Text style={{
                  marginTop:35,
                  fontSize:18,
                  fontWeight:'bold',
                  color:"#05375a",
                }}>Password</Text>
              <View style={styles.actions}>
                <Feather 
                    name="lock"
                    color="#ddd"
                    size={20}
                />
                <TextInput 
                secureTextEntry={data.secureTextEntry ? true : false}
                placeholder="Password..."
                style={styles.textInput}
                onChangeText={(e)=>handlePasword(e)}
                />
                <TouchableOpacity
                onPress={updatesecureText}
                >
                    <Feather         
                    name="eye-off"
                    color="#05375a"
                    size={20}
                    />
                </TouchableOpacity>
                
              </View>

              <Text style={{
                  marginTop:35,
                  fontSize:18,
                  fontWeight:'bold',
                  color:"#05375a",
                }}>Confirm Password</Text>
              <View style={styles.actions}>
                <Feather 
                    name="lock"
                    color="#ddd"
                    size={20}
                />
                <TextInput 
                secureTextEntry={data.secureTextEntry ? true : false}
                placeholder="confirm Password..."
                style={styles.textInput}
                onChangeText={(e)=>handlePasword(e)}
                />
                <TouchableOpacity
                onPress={updatesecureText}
                >
                    <Feather         
                    name="eye-off"
                    color="#05375a"
                    size={20}
                    />
                </TouchableOpacity>
                
              </View>

            <View
             style={{flexDirection:'row',justifyContent:'center'}}                
            >
                <TouchableOpacity style={styles.SignInWrapp} activeOpacity={0.8}>
                    <Text style={styles.signinText}>Sign UP</Text>
                </TouchableOpacity>
            </View>
          </Animatable.View>
        </View>
    )
}

export default SignUp;


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#009387'
    },
    header:{
        flex: 0.8,
        paddingHorizontal:30,
        paddingVertical:30,
        justifyContent:'flex-end'
    
    },
    footer:{
        flex: 2,
        backgroundColor:COLORS.white,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        paddingHorizontal:30,
        paddingVertical:50,
        marginTop:25,
    },
    textFooter:{
        color: '#05375a',
        fontSize: 18,
        marginTop:15,

    },
    headerText:{
        fontSize:25,
        fontWeight:'bold',
        color: "pink",
    },
    actions:{
        flexDirection:'row',
        marginTop:10,
        borderBottomColor:"#f2f2f2",
        borderBottomWidth:1,
        paddingBottom:5
    },
    textInput:{
        flex: 1,
        marginTop:Platform.OS == 'ios' ? 0 : -12,
        paddingLeft:10,
        color: COLORS.dark,
    },
    SignInWrapp:{
        flex: 1,
        height: 60,
        backgroundColor:COLORS.primary,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:40,
        marginTop:35,
    },
    signinText:{
        fontSize:22,
        fontWeight:'bold',
        color: COLORS.white
    }
})
