import React from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet} from 'react-native';

function Enviado ({handleClose}) {

    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity
                style={{flex: 1, zIndex: 9}}
                onPress={handleClose}
            ></TouchableOpacity>
            
            <View style={styles.content}>

                <Text style={styles.title}>SUCESSO!</Text>

                <View style={styles.line1}></View>

                <Text style={styles.describe}> 
                    Suas informações foram enviadas com sucesso, agora a secretária fará uma análise e enviará suas informações de login por e-mail!
                </Text>

                <TouchableOpacity
                    activeOpacity={0.7}
                    style={styles.bttOK}
                    onPress={handleClose}
                >
                    <Text style={styles.txtOk}>Ok, vou aguardar!</Text>
                </TouchableOpacity>

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
        gap: 15,
        borderRadius: 15,
        alignItems: "center", 
    },
    title: {
        fontSize: 20,
        fontWeight: "900",
        color: '#00C714'
    },
    line1:{
        borderColor:'#00C714CC',
        borderWidth: 0.2,
        width: "100%"
    },
    describe:{
        color: '#00C714CC',
        fontSize: 16,
        fontWeight: 700,
    },
    bttOK: {
        width: '100%',
        padding: 15,
        alignItems: "center",
        backgroundColor: "#00C71430",
        borderRadius: 15
    },
    txtOk: {
        color: "#002339",
        fontSize: 18,
        fontWeight: 700
    }
    
})

export default Enviado;