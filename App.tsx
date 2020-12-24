import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';
import {Provider, useStore, useSelector, useDispatch} from "react-redux";
import ReduxThunk from 'redux-thunk';
import store,{State} from "./redux/store";
import { TextInput } from 'react-native-gesture-handler';
import { changeAddressAction } from './redux/actions';
import HomeScreen from './screens/HomeScreen';
import AddressOverviewScreen from './screens/AddressOverviewScreen';


export type RootStackParamList = {
  Home: undefined
  AddressOverview: undefined
}

const Stack = createStackNavigator<RootStackParamList>();


const App = () => {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen component={HomeScreen} name="Home" options={{headerShown:false}}/>
          <Stack.Screen component={AddressOverviewScreen} name="AddressOverview"/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
