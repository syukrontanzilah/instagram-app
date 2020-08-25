import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';
import { Home } from './pages';

const App = () => {

  return (
    <NavigationContainer>
      <Home/>
    </NavigationContainer>
  )

}

const styles = StyleSheet.create({

});

export default App;


