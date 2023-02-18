import React from "react";
import { Image, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import logo from '../../../assets/Images/logo.png'
import nomeLogo from '../../../assets/Images/nome.png'
function Firstscreen({navigation}){
    return (
        <View style={styles.pagFull}>
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