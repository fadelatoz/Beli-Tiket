import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import LottieView from 'lottie-react-native'
import * as Location from 'expo-location';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios';
import { PermissionsAndroid } from 'react-native';



const SplashScreen = ({ navigation }: any) => {
  const animation = useRef(null)
  const [locationPermission, setLocationPermission] = useState<any>(null);
  const [location, setLocation] = useState<string |any | null>(null);
  const [address, setAddress] = useState(null);


  const permissionsLocations = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Beli Tiket Want To Access Your Location',
          message: 'Bolehkah Beli Tiket Akses Lokasi Anda?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'Allow',
        },
      );
      console.log('granted', granted);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        await Location.requestBackgroundPermissionsAsync();
        let location = await Location.getCurrentPositionAsync({});
        setLocation(location);
        getAddress(location.coords.latitude, location.coords.longitude)
        navigation.navigate('MainApp', {
          params: address
        })

      } else {
        return false
      }
    } catch (err) {
      return false;
    }
  };


  const getAddress = (latitude: string | any, longitude: string | any) => {
    console.log(latitude,'latitude',longitude)
    axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=id`)
      .then((data) => {
        setAddress(data?.data)
      })
  }

  useEffect(() => {
    permissionsLocations()
  }, [])


  return (
    <View style={{ margin: 50 }}>
      <Text>{JSON.stringify(location)}</Text>
      <TouchableOpacity onPress={permissionsLocations}>
        <Text style={{ color: 'red' }}>
          asd
        </Text>
      </TouchableOpacity>

      <Text>{JSON.stringify(address)}</Text>
      {/* <LottieView
                autoPlay
                ref={animation}
                style={{
                    width: 400,
                    height: 800,
                    backgroundColor: '#eee',
                }}
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require('../../../src/assets/lottie/intro.json')}
            /> */}
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})