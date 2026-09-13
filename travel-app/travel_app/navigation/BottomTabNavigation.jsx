import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Home, Profile, Location } from '../screens';
import TopTab from '../navigation/TopTab';
import AuthTopTab from './AuthTopTab';
import { COLORS } from '../constants/theme';

const Tab = createBottomTabNavigator();

const tabBarStyle = {
  padding: 20,
  borderRadius: 20,
  height: 80,
  position: 'absolute',
  bottom: 20,
  left: 20,
  right: 20,
};

const BottomTabNavigation = () => {
  const [userData, setUserData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigation = useNavigation();

  const handleLoginSuccess = (data) => {
    setIsLoggedIn(true);
    setUserData(data);
    navigation.navigate('Home'); 

  };


  return (
    <Tab.Navigator
      initialRouteName="Chat"
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: tabBarStyle,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'grid' : 'grid-outline'}
              color={focused ? COLORS.red : COLORS.gray}
              size={26}
            />
          ),
          tabBarButton: (props) =>
            isLoggedIn ? <TouchableOpacity {...props} /> : null,
        }}
      />

      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'location' : 'location-outline'}
              color={focused ? COLORS.red : COLORS.gray}
              size={26}
            />
          ),
          tabBarButton: (props) =>
            isLoggedIn ? <TouchableOpacity {...props} /> : null,
        }}
      />

      <Tab.Screen
        name="Chat"
        children={() => <AuthTopTab onLoginSuccess={handleLoginSuccess} />}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'}
              color={focused ? COLORS.red : COLORS.gray}
              size={26}
            />
          ),
        }}
      />

     <Tab.Screen
  name="Profile"
  children={() => <TopTab user={userData} />}
  options={{
    tabBarIcon: ({ focused }) => (
      <Ionicons
        name={focused ? 'person' : 'person-outline'}
        color={focused ? COLORS.red : COLORS.gray}
        size={26}
      />
    ),
    tabBarButton: (props) =>
      isLoggedIn ? <TouchableOpacity {...props} /> : null,
  }}
/>
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
