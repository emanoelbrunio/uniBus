import React from 'react';
import { Button, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Firstscreen from './src/Pages/Firstscreen';
import Login from './src/Pages/Login/index'
import HomeH from './src/Pages/Home'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Primary" component={Firstscreen} options={{headerTransparent: true, headerTitle: '' }}/>
      <Stack.Screen name="Login" component={Login} options={{headerTransparent: true, headerTitle: 'Voltar' }}/>
      <Stack.Screen name="Home" component={HomeH}  options={{headerShown: false}}/>


      </Stack.Navigator>


  
    </NavigationContainer>
  );
}

export default App;
