import { StyleSheet, View, Image, ScrollView } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Registration, Signin } from '../screens';
import { COLORS } from '../constants/theme';
import { HeightSpacer } from '../components';

const Tab = createMaterialTopTabNavigator();

const AuthTopTab = ({ onLoginSuccess }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView style={{ flex: 1 }}>
        <HeightSpacer height={80} />

        <Image
          source={require('../assets/images/bg2.png')}
          style={{
            width: '100%',
            height: 200,
            resizeMode: 'contain',
          }}
        />

        <View style={{ height: 600 }}>
          <Tab.Navigator>
            <Tab.Screen name="Signin">
              {() => <Signin onLoginSuccess={onLoginSuccess} />}
            </Tab.Screen>

            <Tab.Screen name="Registiration" component={Registration} />
          </Tab.Navigator>
        </View>
      </ScrollView>
    </View>
  );
};

export default AuthTopTab;

const styles = StyleSheet.create({});
