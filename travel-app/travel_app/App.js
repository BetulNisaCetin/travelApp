import { View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CountryDetails, HotelDetails, HotelList, Onboarding, Payments, PlaceDetails, Recommended, Search, SelectRoom,HotelSearch, SelectedRoom, Succesful, Failed } from './screens';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import Settings from './screens/setttings/Settings';



const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync(); // Splash ekranı otomatik gizlenmesin



export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/regular.otf'),
    medium: require('./assets/fonts/medium.otf'),
    bold: require('./assets/fonts/bold.otf'),
    light: require('./assets/fonts/light.otf'),
    xtrabold: require('./assets/fonts/xtrabold.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Onboard" component={Onboarding} options={{ headerShown: false }} />
          <Stack.Screen name="Bottom" component={BottomTabNavigation} options={{ headerShown: false }} />
          <Stack.Screen name="Search" component={Search} options={{ headerShown: false }} />
          <Stack.Screen name="CountryDetails" component={CountryDetails} options={{ headerShown: false }} />
          <Stack.Screen name="Recommended" component={Recommended} options={{ headerShown: false }} />
          <Stack.Screen name="PlaceDetails" component={PlaceDetails} options={{ headerShown: false }} />
          <Stack.Screen name="HotelDetails" component={HotelDetails} options={{ headerShown: false }} />
          <Stack.Screen name="HotelList" component={HotelList} options={{ headerShown: false }} />
          <Stack.Screen name="HotelSearch" component={HotelSearch} options={{ headerShown: false }} />
          <Stack.Screen name="SelectRoom" component={SelectRoom} options={{ headerShown: false }} />
          <Stack.Screen name="Payments" component={Payments} options={{ headerShown: false }} />
          <Stack.Screen name="Success" component={Succesful} options={{ headerShown: false }} />
          <Stack.Screen name="Fail" component={Failed} options={{ headerShown: false }} />
          <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
          <Stack.Screen name="SelectedRoom" component={SelectedRoom} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
