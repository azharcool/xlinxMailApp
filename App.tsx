/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,

  
} from 'react-native';



import NavContainer from './src/navigation';
import Shimmering from './src/skeleton';

const App = () => {
  
  return (
      <NavContainer />
      // <Shimmering
      //       wrapperStyle={{width: 60, height: 60, borderRadius: 30}}
      //     />
  );

};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },

  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#ffff'
  }



});

export default App;
