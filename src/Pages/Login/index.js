import React from "react";
import { Image, View, TouchableOpacity, Text, StyleSheet, TextInput } from "react-native";
import logo from '../../../assets/Images/logo.png'
import nomeLogo from '../../../assets/Images/nome.png'
function Firstscreen({navigation}){
    return (
        <View style={styles.pagFull}>
            <View style={styles.logos}>
                <Image source={logo} style={styles.logo1}/>
                <Image source={nomeLogo} style={styles.logo2}/>
                <Text style={styles.describe}> Um aplicativo feito para o universitário</Text>
            </View>

            <View style={styles.inputs}>
                <View style={styles.labelInput}>
                    <Text style={styles.label} for>E-mail: *</Text>
                    <TextInput placeholder="Insira seu e-mail aqui"  style={styles.input} placeholderTextColor="#9b9b9b" />
                </View>
                
                <View style={styles.labelInput}>
                    <Text style={styles.label} for>Senha: *</Text>
                    <TextInput placeholder="Insira sua senha aqui" style={styles.input} placeholderTextColor="#9b9b9b" secureTextEntry={true}/>
                </View>

                <TouchableOpacity activeOpacity={0.5} style={styles.boxForgot}>
                    <Text style={styles.forgot}> Esqueci minha senha</Text>
                </TouchableOpacity>

                <View style={styles.btts}>
                <TouchableOpacity
                    style={styles.cta}
                    activeOpacity={0.7}
                    onPress={() => {
                        navigation.navigate('Home');
                    }}
                >
                    <Text style={styles.txtCta} >Entrar</Text>
                </TouchableOpacity>
            </View>
            </View>

            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.request}
                onPress={()=> navigation.navigate('NewAccount')}
            >
                <Text style={styles.requestText1}> Não tem uma conta?</Text>
                <Text style={styles.requestText2}> Solicite uma conta agora</Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({

    pagFull: {
        justifyContent: "space-between",
        height: "100%",
        paddingBottom: 20,
        paddingTop: 80,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
    },
    logo1: {
        width: 140,
        height: 140,
    },
    logo2: {
        transform: "scale(0.8)"
    },
    logos:{
        alignItems: "center",
        gap: 5,
    },
    describe: {
        fontSize: 14,
        fontWeight: 700,
        color: "#000",
    },
    inputs: {
        gap: 15,
        justifyContent: "flex-end",

    },
    labelInput:{
        gap: 1,
        justifyContent: "flex-start",
    },
    label: {
        color: "#00598f",
        fontSize: 18,
        fontWeight: "bold",
    },
    input: {
        backgroundColor: "#f3f3f3",
        borderRadius: 15,
        padding: 20,
        color: "#000"
    },
    boxForgot:{
        width: "100%",
        alignItems: "flex-end",
        justifyContent: "flex-end"
    },
    forgot:{
        color: "#00598F",
        textDecorationLine: "underline",
        fontSize: 16
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
    request:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    requestText1: {
        color: "#00598F"
    },
    requestText2: {
        color: "#00598F",
        textDecorationLine: "underline", 
        fontWeight: 700
    }
})

export default Firstscreen;