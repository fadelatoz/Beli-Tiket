import { StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native'
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons'
import Carousel from 'react-native-snap-carousel';
import Data from '../../assets/dummy/movies.json'
import React from 'react'
import CardHomeScreen, { SLIDER_WIDTH, ITEM_WIDTH } from '../../components/Card/CardHomeScreen';

const FavoriteScreen = ({ navigation }: any) => {
  const isCarousel = React.useRef(null)
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <TouchableOpacity style={styles.buttonSearch} activeOpacity={0.9} onPress={() => navigation.navigate('Search')}>
        <View style={styles.areaButton}>
          <View style={styles.areaInButton}>
            <Ionicons name='search-outline' size={24} color='black' />
            <TextInput style={styles.fontButton} placeholder='Search' />
          </View>
          <View style={styles.filter}>
            <Ionicons name='filter-circle' size={24} color='black' />
          </View>
        </View>
      </TouchableOpacity>

      <View>
        <Text>Popular</Text>
        <Carousel
          ref={isCarousel}
          data={Data}
          renderItem={CardHomeScreen}
          useScrollView={true}
          layout='default'
          sliderWidth={SLIDER_WIDTH}
          layoutCardOffset={20}
          itemWidth={150}
        />
      </View>
      <View>
        <Text>Trending</Text>
        <Carousel
          ref={isCarousel}
          data={Data}
          renderItem={CardHomeScreen}
          useScrollView={true}
          layout='default'
          sliderWidth={SLIDER_WIDTH}
          itemWidth={150}
        />
      </View>



    </View>
  )
}

export default FavoriteScreen

const styles = StyleSheet.create({
  areaContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 50, marginHorizontal: 30 },
  location: { flexDirection: 'row', alignItems: 'center' },
  fontLoc: { color: '#8c9896' },
  city: { marginTop: 5, flexDirection: 'row', alignItems: 'center' },
  buttonSearch: { marginHorizontal: 30, marginVertical: 20 },
  areaButton: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5, elevation: 5, shadowColor: 'black' },
  areaInButton: { flexDirection: 'row', alignItems: 'center' },
  fontButton: { color: 'grey', fontSize: 12 },
  filter: { borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10 }
})