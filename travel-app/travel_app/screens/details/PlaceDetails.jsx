import { View, Text,StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {NetworkImage, ReusableText,HeightSpacer,AppBar,DescriptionText, ReusableBtn, PopularList,} from '../../components/index';
import { COLORS, SIZES, TEXT } from '../../constants/theme';
import reusable from '../../components/Reusable/reusable.style';
import {TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

const PlaceDetails = ({navigation}) => {
    const route = useRoute();
    const id =route.params
    const place = {
        "_id": "64d062a3de20d7c932f1f70a",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Statue of Liberty",
        "description": "The Statue of Liberty is an iconic symbol of freedom and democracy, located on Liberty Island in New York Harbor. This colossal statue was a gift from France to the United States and was dedicated in 1886. Standing at 305 feet tall, the statue represents Libertas, the Roman goddess of liberty, holding a torch and a tablet inscribed with the date of the American Declaration of Independence. The Statue of Liberty has welcomed countless immigrants to the USA, serving as a symbol of hope and opportunity.",
        "contact_id": "64c5d95adc7efae2a45ec376",
        "imageUrl": "https://www.exp1.com/wp-content/uploads/sites/2/2025/02/AdobeStock_268267939-scaled.jpeg",
        "rating": 4.8,
        "review": "1452 Reviews",
        "latitude": 40.689247,
        "longitude": -74.044502,
        "location": "Liberty Island, New York Harbor",
        "popular": [
           {
        "_id": "64d0b5a4d3cb4985a76ac1aa",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "The Ritz-Carlton New York, NoMad",
        "imageUrl": "https://media.cntraveler.com/photos/634416f1b67e8cc6076f4011/master/pass/The%20Ritz-Carlton%20New%20York,%20NoMad_Madison-Suite-Bedroom.jpgs",
        "rating": 4.7,
        "review": "1204 Reviews",
        "location": "New York City, USA"
    },
    {
        "_id": "64c675be3cfa5e847bcd5439",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "San Ysidro Ranch",
        "imageUrl": "https://gothammag.com/get/files/image/galleries/bt_E6EMCMN1R9WNZGQXR2SR7BVI41S2U.jpg",
        "rating": 4.6,
        "review": "12854 Reviews",
        "location": "Montecito, California, USA "
    },
    {
        "_id": "64c67442776ed29f19727fd7",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Blackberry Farm",
        "imageUrl": "https://media.cntraveler.com/photos/5c54ac24afdba32d5b5d9ff7/16:9/w_2240,c_limit/Blackberry-Farm__2019_BandT_20140930_9168.jpg",
        "rating": 4.7,
        "review": "1204 Reviews",
        "location": "Walland,USA"
    }
        ]
    
}

  return (
   <ScrollView> 
        <View>
        
          <NetworkImage
          source={place.imageUrl}
          width={"100%"}
          height={350}
          radius={30}
          />
          <AppBar 
        top={40}
        left={20}
        right={20}
        title = {place.title} 
        color ={COLORS.white} 
        icon={"search1"}
        color1={COLORS.white}
        onPress={()=>navigation.goBack()}
        onPress1={()=> ("")}
        />
          
        </View>
  <View style={styles.description}>
    <HeightSpacer height={15}/>
          <ReusableText
            text={place.location}
            family={"medium"}
            size ={TEXT.large}
            color={COLORS.black}
          />

    <DescriptionText text={place.description}/>
      <View style = {{alignContent:"center"}}> 
        <HeightSpacer height={20}/>
        
        <View style ={reusable.rowWithSpace("space-between")}>
          <ReusableText
            text={"Popular Hotels"}
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
         <PopularList data = {place.popular}/>
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

export default PlaceDetails

const styles = StyleSheet.create({
  description: {
    marginHorizontal:20
  }
})