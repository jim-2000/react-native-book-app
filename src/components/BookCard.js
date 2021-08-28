import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,ImageBackground, Dimensions } from 'react-native'
import COLORS from '../const/mycolors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const BookCard = (props) => {
    const {book} = props;
    return (
        <View style={{paddingHorizontal:8,paddingVertical:10}} >
            <TouchableOpacity 
            activeOpacity={0.4}
            underlayColor={COLORS.white}
            onPress={()=>props.navigation.navigate("Details",book) }
            >
                <ImageBackground source={book.image} style={styles.cardImage} >
                <Text style={{color:COLORS.white,fontSize:20,fontWeight:'bold',marginTop:10}}>{book.name}</Text>

                <View style={{
                    flex:1,
                    flexDirection:'row',justifyContent:'space-between',alignItems:'flex-end'}}>
                    <MaterialIcons 
                    name="person"
                    color={COLORS.primary}
                    size={25}
                    />
                        <Text
                         style={{
                            marginLeft:5,color:COLORS.white,fontWeight:'bold',
                            fontSize:22,
                            }}>
                        {book.author}</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
                <MaterialIcons 
                    name="star"
                    color={COLORS.primary}
                    size={25}
                    />
                        <Text
                         style={{
                            marginLeft:5,color:COLORS.dark,fontWeight:'bold',
                            fontSize:22,
                            }}>
                        5
                        </Text>
                </View>
                </ImageBackground>            
            </TouchableOpacity>
        </View>
    )
}

export default BookCard
const {width} = Dimensions.get('screen');
const styles = StyleSheet.create({
    cardImage:{
        height: 220,
        width: width/2,
        padding: 15,
        overflow:'hidden',
        borderRadius:10,
    }
})
