// TopTab.jsx
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TopBookings, TopInfo, TopTrips } from '../screens';
import { COLORS, SIZES } from '../constants/theme';
import { AppBar, NetworkImage, HeightSpacer, ReusableText } from '../components';
import styles from './TopTab.style';

const Tab = createMaterialTopTabNavigator();

const TopTab = ({ user }) => {
  
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          <NetworkImage
            source={
              "https://images.unsplash.com/photo-1739614621579-8f8f396c7412?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width={'100%'}
            height={300}
            radius={0}
          />
          <AppBar
            top={40}
            left={20}
            right={20}
            color={COLORS.white}
            icon={'logout'}
            color1={COLORS.white}
            onPress1={() => {}}
          />
          <View style={styles.profile}>
            <Image
              source={{
                uri:
                  user?.profilePicture ||
                  "https://images.unsplash.com/photo-1739614621579-8f8f396c7412?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              style={styles.image}
            />
            <HeightSpacer height={5} />
            <View style={styles.name}>
              <View style={{ alignItems: 'center' }}>
                <ReusableText
                  text={user?.username || 'king andre'}
                  family={'medium'}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>
            </View>
            <HeightSpacer height={5} />
            <View style={styles.name}>
              <View style={{ alignItems: 'center' }}>
                <ReusableText
                  text={user?.email || 'kvkndfkn@gmail.com'}
                  family={'medium'}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Bookings" component={TopBookings} />
        <Tab.Screen name="Trips" component={TopTrips} />
        <Tab.Screen name="Info" component={TopInfo} />
      </Tab.Navigator>
    </View>
  );
};

export default TopTab;
