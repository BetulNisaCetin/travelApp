import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppBar, 
        DescriptionText, 
        HeightSpacer,
         NetworkImage, 
         ReusableBtn, 
         ReusableText, 
         ReviewsList} from '../../components'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import styles from './hotelDetails.style'
import reusable from '../../components/Reusable/reusable.style'
import {Rating} from 'react-native-stock-star-rating'
import { TouchableOpacity } from 'react-native'
import {Feather} from '@expo/vector-icons'
import HotelMap from '../../components/Hotel/HotelMap'




const HotelDetails = ({navigation}) => {
  const hotel = {
  "availability": {
    start: "2023-08-20T00:00:00.000Z",
    end: "2023-08-25T00:00:00.000Z"
  },
  "coordinates": {
    "latitude":37.7749,
    "longitude":-122.4194
  },
  "_id": "64c75793cfa5e847bcd5436",
  "country_id": "64c62bfc65af9f8c969a8d04",
  "title": "Seaside Resort",
  "description":
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  "contact": "64c5d95adc7efae2a45ec376",
  "imageUrl":
    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/97/29/df/caption.jpg?w=900&h=500&s=1",
  "rating": 4.9,
  "review": "1204 Reviews",
  "location": "Miami Beach, FL",
  "latitude": 37.7749,
  "longitude": -122.4194,
  "price": 400,
  "__v":1,
  "reviews": [
    {
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestias quas vel sint commodi reprehenderit.",
      rating: 4.6,
      user: {
        _id: "64c5d95adc7efae2a45ec376",
        username: "Betül Çetin",
        profile:
          "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?ga=GA1.1.1924144109.1749424859&semt=ais_items_boosted&w=740"
      },
      updatedAt: "2023-08-09T13:09:09.200Z"
    }
  ]
};


let coordinates = {
  id :hotel._id,
  title:hotel.title,
  latitude:hotel.latitude,
  longitude:hotel.longitude,
  latitudeDelta: 0.01,
  longitudeDelta:0.01,
}

  return (
    <ScrollView>
      <View style ={{height:80}}>
        <AppBar
        top={50}
        left={20}
        right={20}
        title = {hotel.title} 
        color ={COLORS.white} 
        icon={"search1"}
        color1={COLORS.white}
        onPress={()=>navigation.goBack()}
        onPress1={()=> ("")}
        />

      </View>
      <View>
         <View style={styles.container}>
        <NetworkImage
        source={hotel.imageUrl}
        width={"100%"}
        height={220}
        radius={25}
        />
        <View style={styles.titleContainer}>
           <View style={styles.titleColumn}>
            <ReusableText
            text={hotel.title}
            family={"medium"}
            size ={SIZES.xLarge}
            color={COLORS.black}
          />
          <HeightSpacer height={10}/>
          <ReusableText
            text={hotel.location}
            family={"medium"}
            size ={SIZES.medium}
            color={COLORS.black}
          />
          <HeightSpacer height={15}/>
          <View style = {reusable.rowWithSpace("space-between")}>
            <Rating
            maxStars={5}
            stars={hotel.rating}
            bordered = {false}
            color={'#FD9942'}

            />
            <ReusableText
            text={`(${hotel.review})`}
            family={"medium"}
            size ={SIZES.medium}
            color={COLORS.black}
           />

          </View>

           </View>

        </View>

      </View>

      <View style= {[styles.container,{paddingTop:90}]}>
           <ReusableText
            text={"Description"}
            family={"medium"}
            size ={SIZES.large}
            color={COLORS.black}
           />
           <HeightSpacer height={10}/>
           <DescriptionText text={hotel.description}/>
           <HeightSpacer height={10}/>
           <ReusableText
            text={"Location"}
            family={"medium"}
            size ={SIZES.large}
            color={COLORS.black}
           />
           <HeightSpacer height={15}/>
           <ReusableText
            text={hotel.location}
            family={"regular"}
            size ={SIZES.small+2}
            color={COLORS.gray}
           />
           <HotelMap coordinates={coordinates}/>

           <View style ={reusable.rowWithSpace('space-between')}>
             <ReusableText
             text={'Reviews'}
             family={"medium"}
             size ={SIZES.large}
             color={COLORS.black}
            />
            <TouchableOpacity>
              <Feather name ='list' size={20}/>
            </TouchableOpacity>

           </View>
           <HeightSpacer height={10}/>
           <ReviewsList reviews={hotel.reviews}/>
           </View>
           <View style={[reusable.rowWithSpace('space-between'), styles.bottom]}>
           <View>
            <ReusableText
            text={` ${hotel.price} $`}
            family={"regular"}
            size ={SIZES.large}
            color={COLORS.black}
           />
           <HeightSpacer height={5}/>
           <ReusableText
            text={"Jan 01-Dec 25"}
            family={"medium"}
            size ={SIZES.large}
            color={COLORS.black}
           />
           </View>

           </View>
           <ReusableBtn
                onPress={()=>navigation.navigate("SelectRoom")}
                btnText={"Select Room"}
                width={(SIZES.width-50)/2.2 }
                backgroundColor={COLORS.green}
                borderColor={COLORS.green}
                borderWidth={0}
                textColor={COLORS.white}
          />
      </View>
     
    </ScrollView>
  );
};

export default HotelDetails

