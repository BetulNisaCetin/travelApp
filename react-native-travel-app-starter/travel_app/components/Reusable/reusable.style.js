import { StyleSheet } from "react-native";
import { Text, View } from 'react-native'
import React from 'react'

const reusable = StyleSheet.create({
    container:{
        flex:1,
        marginHorizontal:20,
    },
    rowWithSpace:(justifyContent)=>({
        flexDirection:"row",
        alignItems:"center",
        justifyContent:justifyContent,




    }) 
});
export default reusable
 