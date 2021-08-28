import React from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import books from '../const/books'
const ListCatagory = () => {
    return (
        <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.catagoryListContainer}
        >
           {
               books.map((book,index)=>(
                <TouchableOpacity
                key={index}
                style={{
                    paddingVertical:15,
                    paddingHorizontal:30,
                    backgroundColor:"#ddd"
                }}
                >
                    <View>
                        <Text>{book.catagory}</Text>
                    </View>
                </TouchableOpacity>
               ))
           }
        </ScrollView>
    )
}

export default ListCatagory

const styles = StyleSheet.create({
    catagoryListContainer:{
        width: "100%",
        height: 150,
    }
})
