import React from 'react';
import { StatusBar, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Firstscreen from './src/Pages/Firstscreen';
import Login from './src/Pages/Login/index'
import HomeH from './src/Pages/Home'
import Profile from './src/Pages/Profile/index.js'
import EditProfile from './src/Pages/Editprofile';
import PageSettings from './src/Pages/PageSettings';
import Notification from './src/Pages/Notification'
import NewAccount from './src/Pages/NewAccount'
import Info from './src/Pages/Info';


const Stack = createNativeStackNavigator();

function App() {

 


  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#00598f" barStyle="light-content" />
      <Stack.Navigator >

        

        {/* <Stack.Screen
          name="Primary"
          component={Firstscreen}
          options={
            {
              headerTransparent: true,
              headerTitle: '',
              headerLeft: null,
              animation: 'slide_from_right'
            }
          }
        />

        <Stack.Screen
        
          name="Login"
          component={Login}
          options={
            {
              headerTransparent: true,
              headerTitle: 'Voltar',
              animation: 'slide_from_right'
            }
          }
          
        />

        <Stack.Screen 
          name="NewAccount"
          component={NewAccount}
          options={
            {
              headerTransparent: true,
              headerTitle: 'Voltar',
              animation: 'slide_from_right'
            }
          }
        />
        
        <Stack.Screen
          name="Home"
          component={HomeH} 
          options={
            {
              headerShown: false,
              animation: 'slide_from_right'
            }
          }
        /> */}
        
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={
            {
              headerTitle: 'Meu Perfil',
              headerStyle: {backgroundColor: '#00598F'},
              headerTintColor: '#fff',
              headerTitleStyle: {fontWeight: 'bold'},
              animation: 'slide_from_right'
            }
          }
        />
        
        <Stack.Screen
          name="Edit-Profile"
          component={EditProfile}
          options={
            {
              headerTitle: 'Editar Perfil',
              headerStyle: {backgroundColor: '#00598F'},
              headerTintColor: '#fff',
              headerTitleStyle: {fontWeight: 'bold'},
              animation: 'slide_from_right'
            }
          }
        />

        <Stack.Screen
          name="Settings-Profile"
          component={PageSettings}
          options={
            {
              headerTitle: 'Configurações do app',
              headerStyle: {backgroundColor: '#00598F'},
              headerTintColor: '#fff',
              headerTitleStyle: {fontWeight: 'bold'},
              animation: 'slide_from_right'
            }
          }
        />

        <Stack.Screen
          name="Notification"
          component={Notification}
          options={
            {
              headerTitle: 'Notificações',
              headerStyle: {backgroundColor: '#00598F'},
              headerTintColor: '#fff',
              headerTitleStyle: {fontWeight: 'bold'},
              animation: 'slide_from_right'
            }
          }
        />

        <Stack.Screen
          name="Info"
          component={Info}
          options={
            {
              headerTitle: 'Informações do ônibus',
              headerStyle: {backgroundColor: '#00598F'},
              headerTintColor: '#fff',
              headerTitleStyle: {fontWeight: 'bold'},
              animation: 'slide_from_right'
            }
          }
        
        />


      </Stack.Navigator>


  
    </NavigationContainer>
  );
}

export default App;
