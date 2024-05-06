import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons'
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import axios from 'axios';


const CustomHeaders = ({ navigation }: any) => {
  const [locationPermission, setLocationPermission] = useState<any>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [address, setAddress] = useState(null);

  const startBackgroundTracking = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status == "granted") {
      await Location.requestBackgroundPermissionsAsync();
    }
    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    getAddress(location.coords.latitude, location.coords.longitude);
  };


  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }



  console.log(location)

  return (
    <View style={{ backgroundColor: 'white' }}>
      <View style={styles.areaContainer} >
        <View>
          <TouchableOpacity activeOpacity={0.7} style={styles.location}>
            <Text style={styles.buyTicket}>Beli Tiket</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.location} onPress={startBackgroundTracking}>
          <FontAwesome5 name="map-marker-alt" size={24} color="#65A1A0" />
          <Text>{text}</Text>
        </TouchableOpacity>
        <View>
          <Ionicons name='notifications' size={24} color='black' />
        </View>
      </View>
    </View>
  )
}

export default CustomHeaders

const styles = StyleSheet.create({
  areaContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 50, marginHorizontal: 30 },
  location: { flexDirection: 'row', alignItems: 'center' },
  fontLoc: { color: '#8c9896' },
  city: { marginTop: 5, flexDirection: 'row', alignItems: 'center' },
  buttonSearch: { marginHorizontal: 30, marginVertical: 20 },
  areaButton: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5, elevation: 5, shadowColor: 'black' },
  areaInButton: { flexDirection: 'row', alignItems: 'center' },
  fontButton: { color: 'grey', fontSize: 12 },
  buyTicket: { color: 'red', fontSize: 20 }
})