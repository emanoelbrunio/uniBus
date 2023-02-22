import React, {useState, useEffect} from "react";
import { Image, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { symbolName } from "typescript";
import logo from '../../../assets/Images/logo.png'
import nomeLogo from '../../../assets/Images/nome.png'
import firebase from '../../../src/Firebase/firebaseConnection.js'


function Firstscreen({navigation}){
    // const [nome, setNome] = useState('carregando');
    // const [idade, setIdade] = useState('');

    // useEffect(()=> {
    //     async function Dados(){
    //         //o "on" atualiza sempre que tem informação nova no firebase
    //         // await firebase.database().ref('nome').on('value', (snapshot)=>{
    //         //     setNome(snapshot.val())
    //         // })
    //         // await firebase.database().ref(`usuarios/1/nome`).on('value', (snapshot)=>{
    //         //     setNome(snapshot.val())
    //         // })
    //         // await firebase.database().ref(`usuarios/2`).on('value', (snapshot)=>{
    //         //     setNome(snapshot.val().nome)
    //         //     setIdade(snapshot.val().idade)
    //         // })
    //         //o once pega apenas uma vez
    //         // await firebase.database().ref('nome').once('value', (snapshot) => {
    //         //     setNome(snapshot.val());
    //         // })

             
    //     }

    //     Dados();
    // }, [])

    return (
        <View style={styles.pagFull}>

            {/* <Text style={{fontSize: 35, color: "#000"}}> olá {nome} </Text>
            <Text style={{fontSize: 35, color: "#000"}}> idade {idade} </Text> */}
            <View style={styles.logos}>
                <Image source={logo}/>
                <Image source={nomeLogo}/>
                <Text style={styles.describe}> Um aplicativo feito para o universitário</Text>
            </View>

            <View style={styles.btts}>
                <TouchableOpacity
                    style={styles.cta}
                    onPress={() => {
                        navigation.navigate('Login')
                    }}
                >
                    <Text style={styles.txtCta} >Entrar na minha conta</Text>
                </TouchableOpacity>
                
                <TouchableOpacity
                    style={styles.btt}
                    onPress={() => navigation.navigate('NewAccount')}
                >
                    <Text style={styles.txtBtt}>Solicitar uma conta</Text>
                </TouchableOpacity>
            </View>
        
        </View>
    );

}

const styles = StyleSheet.create({

    pagFull: {
        justifyContent: "space-between",
        height: "100%",
        paddingBottom: 50,
        paddingTop: 100,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        
    },
    logos:{
        alignItems: "center",
        gap: 10,
    },
    describe: {
        fontSize: 16,
        fontWeight: 700,
        color: "#000",
    },
    btts: {
        width: "100%",
        gap: 10,
    },
    cta: {
        backgroundColor: "#00598F",
        width: "100%",
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 12,
        alignItems: "center",
    },
    txtCta: {
        color: "#fff",
        fontWeight: 700,
        fontSize: 18
    },
    btt: {
        backgroundColor: "#fff",
        width: "100%",
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 12,
        alignItems: "center",
        borderColor: "#00598f",
        borderWidth: 2,
        
    },
    txtBtt: {
        color: "#00598f",
        fontWeight: 700,
        fontSize: 18
    },
})

export default Firstscreen;