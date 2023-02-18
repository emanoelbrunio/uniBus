import React, {useState} from "react";
import { Image, View, TouchableOpacity, Text, StyleSheet, TextInput, Modal} from "react-native";

import Logo from '../../../assets/Images/logo.svg'
import NomeLogo from '../../../assets/Images/nome.svg'
import Enviado from '../../Pages/Enviado'
function NewAccount ({navigation}){
    const [visibleModal, setVisibleModal] = useState(false);
    return (
        <View style={styles.pagFull}>
            <View style={styles.logos}>
                <Logo />
                <NomeLogo />
            </View>

            <View style={styles.att}>
                <Text style={styles.title}>ATENÇÃO</Text>
                <Text style={styles.describe}>Suas informações serão enviadas e analisadas pela Secretária de Educação municipal, em breve você receberá matrícula e senha por e-mail. </Text>
            </View>
            <View style={styles.inputs}>
                <View style={styles.labelInput}>
                    <Text style={styles.label} for>Nome completo: *</Text>
                    <TextInput placeholder="Insira seu nome completo aqui"  style={styles.input} placeholderTextColor="#9b9b9b" />
                </View>
                
                <View style={styles.labelInput}>
                    <Text style={styles.label} for>E-mail: *</Text>
                    <TextInput placeholder="Insira seu e-mail aqui" style={styles.input} placeholderTextColor="#9b9b9b" secureTextEntry={true}/>
                </View>
                <View style={styles.labelInput}>
                    <Text style={styles.label} for>Número do whatsapp: *</Text>
                    <TextInput placeholder="Ex: (99) 9.9999-9999" style={styles.input} placeholderTextColor="#9b9b9b" secureTextEntry={true}/>
                </View>
                <View style={styles.labelInput}>
                    <Text style={styles.label} for>Universidade: *</Text>
                    <TextInput placeholder="Insira o nome da sua universidade aqui" style={styles.input} placeholderTextColor="#9b9b9b" secureTextEntry={true}/>
                </View>

                
                
                <TouchableOpacity
                    style={styles.cta}
                    activeOpacity={0.7}
                    onPress={() => {
                        setVisibleModal(true)
                    }}
                >
                    <Text style={styles.txtCta} >Enviar informações</Text>
                </TouchableOpacity>
          
            </View>

            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.request}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.requestText1}>Já tem uma conta?</Text>
                <Text style={styles.requestText2}> Entre agora</Text>
            </TouchableOpacity>

            <Modal
                visible={visibleModal}
                transparent={ true }
                onRequestClose={() => setVisibleModal(false)}
                animationType="fade"
            >
                <Enviado
                    handleClose= {()=> setVisibleModal(false)}
                />
            </Modal>

        </View>
    );

}

const styles = StyleSheet.create({

    pagFull: {
       justifyContent: "space-between",
        paddingBottom: 20,
        paddingTop: 50,
        paddingHorizontal: 20,
        overflow: "hidden",
        backgroundColor: "#fff",
        flex: 1
    },
    att: {
        backgroundColor: "#F6F6F6",
        padding: 10, 
        borderRadius: 15,
        alignItems: "center"
    },
    logos:{
        alignItems: "center",
        gap: 10,
        justifyContent: "space-between",
    },
    title:{
        color: '#FF0000',
        fontWeight: "900",
        fontSize: 15
    },
    describe: {
        fontSize: 13,
        fontWeight: 700,
        color: '#FF0000BF',

    },
    inputs: {
        gap: 10,
    },
    labelInput:{
        gap: 1,
        justifyContent: "flex-start",
    },
    label: {
        color: "#00598f",
        fontSize: 16,
        fontWeight: "bold",
    },
    input: {
        backgroundColor: "#f3f3f3",
        borderRadius: 15,
        padding: 15,
        color: "#000"
    },
    btts: {
        width: "100%",
        gap: 120,
    },
    cta: {
        backgroundColor: "#00598F",
        width: "100%",
        paddingHorizontal: 40,
        paddingVertical: 15,
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

export default NewAccount;