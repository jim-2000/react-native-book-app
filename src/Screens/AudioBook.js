import React from 'react'
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View,Dimensions, ImageBackground, SafeAreaView } from 'react-native'
import COLORS from '../const/mycolors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import books from '../const/books'
//
const Card = ({book})=>{
    return(
       <View style={{paddingHorizontal:8,paddingVertical:8}}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content"  />
           <TouchableOpacity>
           <ImageBackground source={book.image} style={styles.ImageContainer} >

               <View
                style={{
                    flex: 1,
                    flexDirection:'row',
                    alignItems:'flex-start'
                }}
               >
            <Text
            style={{
                color:COLORS.dark,
                fontSize:20,
                fontWeight:'bold',
                marginTop:10,
                }}>{book.name}
            </Text>
               </View>
           
         
           
            <View 
            style={{
                flex: 1,
                flexDirection:'row',
                alignItems:'flex-end'
            }}
            >
                <Text
                style={{
                    color:COLORS.light,
                    fontSize:18,
                    fontWeight:'bold',
                    marginTop:10,
                    
                    }}>{book.details.slice(0,38)}
                </Text>
            </View>
         
            {/* <View style={{flexDirection:'row',flex:1,justifyContent:'space-between',alignItems:'flex-end'}}> 
              <View style={{flexDirection:'row',paddingVertical:10}}>
                  
              <MaterialIcons 
                    name="money"
                    color={COLORS.dark}
                    size={25}
                    />
                    <Text>{book.price}</Text>
              </View>

              <View style={{flexDirection:'row',paddingVertical:10}}>
                  
              <MaterialIcons 
                    name="money"
                    color={COLORS.dark}
                    size={25}
                    style={{
                        paddingBottom:5,paddingHorizontal:5
                    }}
                    />
                    <Text style={{color:COLORS.white,paddingVertical:10,paddingHorizontal:5,fontWeight:'bold'}}>{book.price}</Text>
              </View>
                
               
            </View> */}

         
        </ImageBackground>
           </TouchableOpacity>
       </View>
    )
}


//
const AudioBook = ({navigation}) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        
                <View style={styles.appBar}>
                    <MaterialIcons 
                    name="menu"
                    size={40}
                    style={styles.appbarIcon}
                    />
                    <Text style={{fontSize:22,color:COLORS.primary,fontWeight:'bold'}}>All Books</Text>
                    <MaterialIcons 
                    name="search"
                    size={40}
                    style={styles.appbarIcon}
                    />
                </View>
                <View style={styles.BooksBtn}>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate("Home")}
                        
                    style={styles.InactiveBookcata}               
                    >
                        <Text style={{
                            fontSize:22,
                            fontWeight:'bold',
                            color:"#251447"
                            }}>EBooks</Text>
                    </TouchableOpacity>
                
                    <TouchableOpacity
                    onPress={()=>navigation.navigate("audioBokk")}
                    style={styles.activeBookcata}>
                    <Text style={{
                        fontSize:22,
                        fontWeight:'400',
                        color:"#000"
                    }}>AudioBook</Text>
                    </TouchableOpacity>  
                </View>
{/* audio book  */}
            <SafeAreaView
            style={{backgroundColor:COLORS.white,flex:1}}
            >
                <FlatList              
                    numColumns={2}
                    data={books}
                    horizontal={false}
                    renderItem={({item}) => <Card book={item} />}
                    />
            </SafeAreaView>

            
        </View>
    )
}

export default AudioBook;
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:COLORS.white,
    },
    appBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:30,
        paddingHorizontal:20,
     
    },
    appbarIcon:{
        color:"#251447", 
        fontWeight:'bold'       
    },
    BooksBtn:{
        flexDirection:'row',
        backgroundColor:COLORS.light,
        paddingVertical:10,
        paddingHorizontal:10,
        marginHorizontal:30,
        justifyContent:'space-around',
        alignItems:'center',  
        borderBottomRightRadius:10,  
        borderBottomLeftRadius:10,  
        borderTopRightRadius:10,  
        borderTopLeftRadius:10,  
        marginBottom:10,

    },
    activeBookcata:{
        borderRadius:10,
        width: "50%",
        height: 40,
        backgroundColor:COLORS.white,
        justifyContent:'center',
        alignItems:'center',    
    },
    InactiveBookcata:{
        borderRadius:10,
        width: "50%",
        height: 40,
       
        justifyContent:'center',
        alignItems:'center',   
        // marginLeft:5
        
    },
    ImageContainer:{
        height: 200,
        width: width/2 -20,
        padding: 15,
        overflow:'hidden',
        borderRadius:10,
    }
})
