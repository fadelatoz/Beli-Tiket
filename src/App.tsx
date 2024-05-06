import { StyleSheet, Text, View } from 'react-native';

import SplashScreen from './pages/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';



export default function App() {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
