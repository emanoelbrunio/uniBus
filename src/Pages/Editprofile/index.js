import React, {useState,useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import ImgProfile from '../../../assets/Images/imgProfile.svg'
import firebase from '../../../src/Firebase/firebaseConnection.js'

function EditProfile() {
    const [nome, setNome] = useState('Antonio Cláudio');
    const [facul, setFacul] = useState('UFERSA');
    const [num, setNum] = useState('(88) 9.9999-9999');

    useEffect(()=> {
        async function Dados(){
            //o "on" atualiza sempre que tem informação nova no firebase
            // await firebase.database().ref('nome').on('value', (snapshot)=>{
            //     setNome(snapshot.val())
            // })
            // await firebase.database().ref(`usuarios/1/nome`).on('value', (snapshot)=>{
            //     setNome(snapshot.val())
            // })
            await firebase.database().ref(`usuarios/2`).on('value', (snapshot)=>{
                setNome(snapshot.val().nome)
                setIdade(snapshot.val().idade)
            })
           // o once pega apenas uma vez
            await firebase.database().ref('Usuarios').on('value', (snapshot) => {
                setNome(snapshot.val().name);
                setFacul(snapshot.val().uni);
                setNum(snapshot.val().num);
            })
        }

        
        Dados();
    }, [])

    // async function atualiza(name, uni, num){
    //     await firebase.database().ref('Usuarios').set({
    //         name: name,
    //         num: num,
    //         uni: uni,
    //     })
    //}

    return (
        
        <View style={styles.pagToda}>

            <View style={[styles.card, styles.card1]}> 
            <ImgProfile />
                
                <TouchableOpacity style={styles.newPhoto}>
                    <Text style={styles.txtBttNewPhoto}>
                        Carregar nova foto
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.card}>        
                <Text style={styles.txtTitulo}>Nome: </Text>
                <TextInput
                    
                    value={nome}
                    onChangeText={setNome}
                    
                    style={styles.input}
                    placeholder="Seu nome aqui"
                />
            </View>

            <View style={styles.card}>        
                <Text style={styles.txtTitulo}>Universidade: </Text>
                <TextInput
                    value={facul}
                    onChangeText={setFacul}
                    
                    style={styles.input}
                    placeholder="Seu universidade aqui"
                />
            </View>

            <View style={styles.card}>        
                <Text style={styles.txtTitulo}>Número: </Text>
                <TextInput
                    value={num}
                    onChangeText={setNum}
               
                    style={styles.input}
                    placeholder="Seu nome aqui"
                />
            </View>
            <TouchableOpacity
                style={styles.cta}
                // onPress={()=> atualiza(nome, facul, num)}
            >
                <Text style={styles.txtCta} >Salvar informações</Text>
            </TouchableOpacity>
        </View>
        
    );
}

const styles = StyleSheet.create({
    
    pagToda:{
        backgroundColor: "#FAFAFA",
        padding: 20,
        gap: 15,
        alignItems: "center",
        flex: 1
    },
    card: {
        width: "100%",
        padding: 20, 
        backgroundColor: "#fff",
        borderRadius: 15,
        gap: 15,
        flexDirection: "column",
    },
    card1: {
        flexDirection: "row",
        alignItems: "center"
    },
    txtBttNewPhoto: {
        color: "#00598F",
        fontSize: 18,
        fontWeight: 700,
        textDecorationLine: "underline"
    },
    txtTitulo: {
        fontSize: 20,
        fontWeight: 700,
        color: "#002339"
    },
    input: {
        padding: 15,
        backgroundColor: "#F6F6F6",
        borderRadius: 15,
        color: "#858585",
        fontSize: 18,
       
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
})

export default EditProfile;