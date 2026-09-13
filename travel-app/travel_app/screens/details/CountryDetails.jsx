import { View, Text,StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {NetworkImage, ReusableText,HeightSpacer,AppBar,DescriptionText, ReusableBtn, PopularList,} from '../../components/index';
import { COLORS, SIZES, TEXT } from '../../constants/theme';
import reusable from '../../components/Reusable/reusable.style';
import {TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons'
import { useRoute } from '@react-navigation/native';
const CountryDetails = ({navigation}) => {
  const route = useRoute();
  const {item} = route.params.item;
  const country = {
    "_id": "64c62bfc65af9f8c969a8d04",
    "country": "USA",
    "description": "The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.",
    "imageUrl": "https://media.istockphoto.com/id/486334510/photo/new-york-city-skyline.jpg?s=612x612&w=0&k=20&c=RkcUiEmZYarBPnQW8qm7GUJEegE24Molcl2ijMlY3kQ=",
    "popular": [
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
    ],
    "region": "North America, USA"
}
  return (

      <ScrollView> 
        <View>
          <NetworkImage
          source={country.imageUrl}
          width={"100%"}
          height={350}
          radius={30}
          />
          <AppBar 
        top={40}
        left={20}
        right={20}
        title = {country.country} 
        color ={COLORS.white} 
        icon={"search1"}
        color1={COLORS.white}
        onPress={()=>navigation.goBack()}
        onPress1={()=> ("")}
        />
          
        </View>
  <View style={styles.description}>
          <ReusableText
            text={country.region}
            family={"medium"}
            size ={TEXT.xLarge}
            color={COLORS.black}
          />

    <DescriptionText text={country.description}/>
      <View style = {{alignContent:"center"}}> 
        <HeightSpacer height={20}/>
        
        <View style ={reusable.rowWithSpace("space-between")}>
          <ReusableText
            text={"Popular Destinations"}
            family={"medium"}
            size ={TEXT.large}
            color={COLORS.black}
          />
          <TouchableOpacity onPress={()=>{}}>
          <Feather 
                name="list"
                size={20}    
          />   
          </TouchableOpacity>
         
        </View>
        <HeightSpacer height={20}/>
         <PopularList data = {country.popular}/>
          <ReusableBtn
                onPress={()=>navigation.navigate("HotelSearch")}
                btnText={"Find Best Hotels"}
                width={SIZES.width - 40 }
                backgroundColor={COLORS.green}
                borderColor={COLORS.green}
                borderWidth={0}
                textColor={COLORS.white}
                />
                <HeightSpacer height={50}/>
      </View>
  </View>
      </ScrollView>
    
  )
}

export default CountryDetails;

const styles= StyleSheet.create({
  container: {
    backgroundColor: "#F4F4F8",
    marginHorizontal:20,

  },
  description:{
    marginHorizontal:20,
    paddingTop:20 

  }

});