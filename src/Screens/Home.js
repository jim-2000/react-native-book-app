import React,{useState} from 'react'
import { StyleSheet, Text, View,FlatList, StatusBar, TouchableOpacity,ScrollViewComponent, ScrollView } from 'react-native'
import COLORS from '../const/mycolors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
import books from '../const/books'
import BookCard from '../components/BookCard';
import ListCatagory from '../components/ListCatagory';


//
const Home = ({navigation}) => {
    const [data, setdata] = useState(books)
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={COLORS.white} barStyle="dark-content"  />
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
                style={styles.activeBookcata}               
                >
                    <Text style={{
                        fontSize:22,
                        fontWeight:'bold',
                        color:"#251447"
                        }}>EBooks</Text>
                </TouchableOpacity>
             
                <TouchableOpacity
                onPress={()=>navigation.navigate("audiobook")}
                style={styles.InactiveBookcata}>
                <Text style={{
                      fontSize:22,
                      fontWeight:'400',
                      color:"#000"
                }}>AudioBook</Text>
                </TouchableOpacity>  
            </View>
          
         {/* {   <ListCatagory />} */}
    <ScrollView>
    <View style={{marginTop:10}}>
              <Text 
                style={{
                    fontSize:22,
                    fontWeight:'bold',
                    color:COLORS.dark,
                    paddingVertical: 10,
                    paddingHorizontal:15
                }}>
                        EBooks</Text>
                <FlatList 
                // contentContainerStyle={{margin:0}}
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 data={data}
                 renderItem={({item}) => <BookCard book={item}  navigation={navigation} />}
                />
            </View>
            {/* best book  */}
            <View style={{marginTop:10}}>
            <Text 
            style={{
                fontSize:22,
                fontWeight:'bold',
                color:COLORS.dark,
                paddingVertical: 10,
                paddingHorizontal:15
            }}>
                        Best Book</Text>
                <FlatList 
                // contentContainerStyle={{margin:0}}
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 data={books}
                 renderItem={({item}) => <BookCard book={item} />}
                />
            </View>
{/* top book  */}
            <View style={{marginTop:10}}>
            <Text 
            style={{
                fontSize:22,
                fontWeight:'bold',
                color:COLORS.dark,
                paddingVertical: 10,
                paddingHorizontal:15
            }}>
                        Top Book</Text>
                <FlatList 
                // contentContainerStyle={{margin:0}}
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 data={books}
                 renderItem={({item}) => <BookCard book={item} />}
                />
            </View>
    </ScrollView>
        </View>
    )
}

export default Home

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
        paddingHorizontal:20
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
        
    }
})
