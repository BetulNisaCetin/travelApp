import { StyleSheet, Text, View,TextInput, Touchable, FlatList} from 'react-native'
import React,{useState,useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './search.style'
import { TouchableOpacity } from 'react-native'
import reusable from '../../components/Reusable/reusable.style'
import {Feather} from '@expo/vector-icons'
import { COLORS } from '../../constants/theme'
import { Image } from 'react-native'
import {HeightSpacer,AppBar} from '../../components'
import ReusableTile from '../../components/Reusable/ReusableTile'

const Search = ({navigation}) => {
  const[searchKey,setSearchKey] = useState('')
  const[searchResults,setSearchResults] = useState([]) 
  const search =  [
        {
            "_id": "64c631650298a05640539adc",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Walt Disney World",
             "location": "U.S.A New York",
            "imageUrl": "https://i.insider.com/61566043b414c10018633f2e?width=1200&format=jpeg",
            "rating": 4.7,
            "review": "1204 Reviews"
        },
        {
            "_id": "64d062a3de20d7c932f1f70a",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Statue of Liberty",
            "location": "U.S.A New York",
            "imageUrl": "https://media.cnn.com/api/v1/images/stellar/prod/181122102925-statue-of-liberty-crown.jpg?q=w_2000,c_fill",
            "rating": 4.8,
            "review": "1452 Reviews"
        },
        {
            "_id": "64d09e3f364e1c37c8b4b13c",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Golden Gate Bridge",
            "location":"U.S.A New York",
            "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/2560px-GoldenGateBridge-001.jpg",
            "rating": 4.6,
            "review": "2145 Reviews"
        },
        {
            "_id": "64d09f90364e1c37c8b4b140",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "Yellowstone National Park",
            "location": "U.S.A New York",
            "imageUrl": "https://www.destinationparks.com/images/park/yellowstone-national-park-1280x853.jpg",
            "rating": 4.8,
            "review": "24455 Reviews"
        },
        {
            "_id": "64d30f789d008909fa8b7ce5",
            "country_id": "64d2fd32618522e2fb342eec",
            "imageUrl": "https://d326fntlu7tb1e.cloudfront.net/uploads/f3f44363-f250-4002-88a8-19fe79169cc7-geyser-yelowstone-burst_h.webp",
            "title": "Yellowstone National Park",
            "location": "U.S.A New York",
            "rating": 4.8,
            "review": "24455 Reviews"
        }
  ];
  return (
    <SafeAreaView style = {reusable.container}>
      <View style ={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
          style={styles.input}
          value={searchKey}
          onChangeText={setSearchKey}
          placeholder='where do you want to visit?'
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Feather name='search' size={24} color={COLORS.white}/>

        </TouchableOpacity>

      </View>

      {search.length === 0 ?(
        <View>
          <HeightSpacer height={'20%'}/>
           <Image
          source={require('../../assets/images/search.png')}
          style={styles.searchImage}

        /> 
        </View>
       
      ):(
        <FlatList
        data={search}
        keyExtractor={(item)=>item._id}
        renderItem={({item})=>(
          <View style= {styles.tile}>
            <ReusableTile item={item} onPress={()=>navigation.navigate('PlaceDetails',item._id)}/>
          </View>
        )}
        />
      ) }

    </SafeAreaView>
  )
}

export default Search

