import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'


export default function CartScreen() {
  const animation = useRef(null)
  const [locationPermission, setLocationPermission] = useState<any>(null);
  const [location, setLocation] = useState<string | null>(null);
  const [address, setAddress] = useState(null);


  const startBackgroundTracking = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status == "granted") {
        await Location.requestBackgroundPermissionsAsync();
      //   navigation?.replace('MainApp')

      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    };

  
    useEffect (() => {
      startBackgroundTracking()
    },[])

  return (
    <View style={styles.container}>
      <MapView style={styles.map}
        region={{
          latitude : -6.570000171661377,
          longitude : 106.75,
          latitudeDelta : 20,
          longitudeDelta :20 
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '40%',
  },
});
