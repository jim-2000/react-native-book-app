import React from 'react'
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import COLORS from '../const/mycolors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';


const BookDetails = ({navigation,route}) => {
    const book =route.params;
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:15,paddingTop:5}}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                    >
                        <MaterialIcons 
                        name="arrow-back"
                        color={COLORS.dark}
                        size={35}
                     
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MaterialIcons 
                        name="more-horiz"
                        color={COLORS.dark}
                        size={35}
                        />
                    </TouchableOpacity>                                  
                </View>
                <View style={{
                    height: 300,
                    alignItems:'center',
                    justifyContent:'center',
                    marginVertical:20 
                }}>
                    <Image source={book.image} style={{height:300,width:"80%",borderRadius:20}} />
                </View>
            </View>

            <View style={styles.footer}>
                  <View style={{
                        marginTop:10,
                    }}>
                      <Text style={styles.title}>{book.name}</Text>
                      <Text style={[styles.title,{fontSize:18,color:COLORS.grey}]}>{book.author}</Text>
                  </View>
                  <View style={{
                      flexDirection:'row',
                      justifyContent:'space-between',
                      alignItems:'baseline'
                  }}>
                        <View style={{
                            flexDirection:'row',
                            justifyContent:'space-around'
                        }}>
                            <MaterialIcons name="star"  size={25} 
                                color={COLORS.primary}
                                onPress={navigation.goBack}
                            />
                            <MaterialIcons name="star"  size={25} 
                                color={COLORS.primary}
                                onPress={navigation.goBack}
                            />
                            <MaterialIcons name="star"  size={25} 
                                color={COLORS.primary}
                                onPress={navigation.goBack}
                            />
                            <MaterialIcons name="star"  size={25} 
                                color={COLORS.primary}
                                onPress={navigation.goBack}
                            />
                            <MaterialIcons name="star"  size={25} 
                                color={COLORS.primary}
                                onPress={navigation.goBack}
                            />
                        </View>
                        <View>
                            <Text style={[styles.title,{fontSize:18}]}>4.5/5</Text>
                        </View>
                  </View>
                  
                        
                  <View style={{
                      paddingVertical:10,
                      paddingHorizontal:10,
                      marginTop:10
                      
                  }}>
                      <Text style={{
                          textAlign:'center',
                          fontSize:18,
                          color: COLORS.grey
                      }}>{book.details}</Text>
                  </View>                
            </View>
             <View style={{marginVertical:20,marginHorizontal:20}}>
                 <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                    <TouchableOpacity
                    style={[styles.btnContainer,]}
                    >
                         <MaterialIcons name="description"  size={25} 
                            color={COLORS.primary}
                            onPress={navigation.goBack}
                            />
                        <Text style={[styles.title,{color:COLORS.dark,fontSize:18,marginLeft:5}]}>Preview</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={[styles.btnContainer,{backgroundColor:COLORS.grey}]}
                    >
                         <MaterialIcons 
                         name="message"
                           size={25} 
                            color={COLORS.primary}
                            onPress={navigation.goBack}
                            />
                        <Text style={[styles.title,{color:COLORS.dark,fontSize:18,marginLeft:5}]}>Message</Text>
                    </TouchableOpacity>                   
                  </View>
            </View>
            <View style={{
                flex: 1,
                justifyContent:'center',
                alignItems:'center',
                marginHorizontal:20
            }}>
                <TouchableOpacity
                activeOpacity={0.6}
                    style={[styles.btnContainer,{width:"100%",justifyContent:'center',alignItems:'center',paddingVertical:20,backgroundColor:COLORS.dark}]}
                    >
                         <MaterialIcons 
                         name="favorite-border"
                           size={25} 
                            color={COLORS.light}
                            onPress={navigation.goBack}
                            />
                        <Text style={[styles.title,{color:COLORS.white,fontSize:22,marginLeft:10}]}>Buy Now</Text>
                    </TouchableOpacity>  
            </View>
        </SafeAreaView>
    )
}

export default BookDetails



{/* <View style={styles.iconContainer}>
                            <MaterialIcons name="favorite-border"  size={25} 
                            color={COLORS.primary}
                            onPress={navigation.goBack}
                            />
                        </View> */}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:"#fff"
    },
    header:{
        // flex: 0.6,
        borderBottomRightRadius:40,
        borderBottomLeftRadius:40,
        paddingVertical:10
    },
    
    footer:{
        justifyContent:'center',
        alignItems:'center'
        // paddingHorizontal:20,
        // paddingTop:60,
        // paddingBottom:90,
        // backgroundColor:COLORS.primary,
        // borderTopRightRadius:40,
        // borderTopLeftRadius:40,
    },
    title:{
        fontSize:28,
        fontWeight:'bold',
        textAlign:'center'
    },
    iconContainer:{
        backgroundColor:COLORS.dark,
        height: 50,
        width: 50,
        justifyContent:'center',alignItems:'center',borderRadius:30
    },
    btnContainer:{
        width: "50%",
        backgroundColor:COLORS.light,
        paddingVertical:15,
        borderRadius:20,
        flexDirection:'row',
        justifyContent:'center',
        marginHorizontal:5,
        alignItems:'center'
    }
})

