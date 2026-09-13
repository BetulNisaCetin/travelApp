import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import reusable from '../../components/Reusable/reusable.style'
import { SIZES, TEXT,COLORS  } from '../../constants/theme'
import { TouchableOpacity } from 'react-native'
import Places from '../../components/Home/Places'
import { AntDesign } from '@expo/vector-icons'
import {  HeightSpacer, ReusableText,Recommendations,} from '../../components'
import styles from "./home.style";
import BestHotels from '../../screens/home/BestHotels';

const Home = ({navigation }) => {
  return (
    <SafeAreaView style ={reusable.container}>
      <View>
        <View style = {reusable.rowWithSpace('space-between')}>
               <ReusableText
                text={'Hey User!'}
                family={"regular"}
                size ={TEXT.large}
                color={COLORS.black}
                />
                <TouchableOpacity style={styles.box }
                onPress={()=> navigation.navigate('Search')}>
                  <AntDesign
                  name='search1'
                  size={26} />
                  </TouchableOpacity>
                  </View>
                  <HeightSpacer height={SIZES.xLarge}/>

                  <ReusableText
                text={'Places'}
                family={"medium"}
                size ={TEXT.large}
                color={COLORS.black}
                />
                <Places/>

                <HeightSpacer height={15}/>
               <Recommendations/>
                <HeightSpacer height={30}/>
                <BestHotels/>
               
                </View>
                </SafeAreaView>
  )
}

export default Home

