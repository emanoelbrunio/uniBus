import React, { useState } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

function ModalExit({handleClose, navigation}) {
    const [select1, setSelect1] = useState(false);
    const [select2, setSelect2] = useState(false);
    const [select3, setSelect3] = useState(false);

    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity
                style={{flex: 1, zIndex: 9}}
                onPress={handleClose}
            ></TouchableOpacity>
            
            <View style={styles.content}>

                <Text style={styles.title}>Deseja sair da sua conta?</Text>

                <View style={styles.line1}></View>

                <View style={styles.btts}>

                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.bttFicar}
                        onPress={handleClose}
                    >
                        <Text style={styles.txtFicar}>Ficar na conta</Text>
                    </TouchableOpacity>

                    <View style={styles.line2}></View>

                    <TouchableOpacity
                        onPress={()=> navigation.navigate('Primary')}
                        style={styles.bttExit}
                    >
                        <Text style={styles.txtExit}>Sair agora</Text>
                    </TouchableOpacity>
                </View>
            
            </View>
            
            <TouchableOpacity
                style={{flex: 1, zIndex: 9}}
                onPress={handleClose}
            ></TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#00000060",
        justifyContent: "space-between",
        paddingHorizontal: 20
    },
    content: {
        padding: 20,
        backgroundColor: "#fff",
        gap: 10,
        borderRadius: 15,
        alignItems: "center",
       
    },
    title: {
        fontSize: 20,
        fontWeight: "900",
        color: '#002339'
    },
    line1:{
        borderColor: '#00598FB2',
        borderWidth: 0.3,
        width: "100%"
    },
    btts:{
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    bttFicar:{
        padding: 15,
        width: "49%",
        alignItems: "center"
    },
    txtFicar:{
        color: '#002339',
        fontSize: 18,
        fontWeight: "900",
    },
    line2:{
        borderColor: '#00598FB2',
        borderWidth: 0.3,
        height: "50%"
    },
    bttExit: {
        padding: 15,
        width: "49%",
        alignItems: "center"
    },
    txtExit: {
        
        fontSize: 18,
        fontWeight: "900",
        color: "#FF0000BF"
    }
})

export default ModalExit;