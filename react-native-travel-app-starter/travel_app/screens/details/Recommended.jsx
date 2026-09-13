import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS, SIZES } from '../../constants/theme'
import ReusableTile from '../../components/Reusable/ReusableTile'

const Recommended = ({navigation}) => {
   const recommendations =  [
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
    <SafeAreaView style = {{marginHorizontal:20}}> 
      <View style = {{height:50}}>
        <AppBar 
        top={10}
        left={0}
        right={0}
        title = {"Recommendations"} 
        color ={COLORS.white} 
        icon={'search1'}
        color1={COLORS.white}
        onPress={()=>navigation.goBack()}
        onPress1={()=> navigation.navigate('Search')}
        />

      </View>
      <View style = {{paddingTop:20}}>
        <FlatList
        data={recommendations}
        keyExtractor={(item)=>item._id}
        renderItem={({item})=>(
          <View style ={{marginBottom:10}}>
          <ReusableTile item={item} onPress={()=>navigation.navigate('Place Details',item._id)}/>
          </View>
        )}

        />

      </View>
      
    </SafeAreaView>
  
    
  )
}

export default Recommended