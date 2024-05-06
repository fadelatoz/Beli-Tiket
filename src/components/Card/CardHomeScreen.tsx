import React from 'react';
import { View, Text, Image, StyleSheet,Dimensions } from 'react-native';




export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)


const CardHomeScreen = ({ item,index } : any) => {
  return (
    <View  style={styles.card}>
      <Image source={{ uri: item?.poster }} style={styles.poster} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    width : 150,
    height : 200,
    padding: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  poster: {
    width: 130,
    height: 180,
    borderRadius: 10,
  },
  details: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateRelease : {
    color : 'grey'
  },
  description: {
    fontSize: 14,
    marginTop: 5,
    marginBottom : 70
  },
  rating: {
    fontSize: 12,
    marginTop: 5,
    color: 'gray',
  },
});

export default CardHomeScreen;
