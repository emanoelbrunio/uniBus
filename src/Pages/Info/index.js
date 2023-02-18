import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import ImgProfile from '../../../assets/Images/motorista.svg'
import Arrow from '../../../assets/Images/arrowSmall.svg'
import ArrowRigth from '../../../assets/Images/arrowRigth.svg'
import Check from '../../../assets/Images/check.svg'

function Info({navigation}) {

    
    return (
        <View style={styles.pagToda}>

            <View style={styles.card}>
                <Text style={styles.txtTitulo}>Motorista</Text>
                <View style={styles.contentCard}>
                    <ImgProfile />
                    <View style={styles.names}>
                        <Text style={styles.name}>Carlos Evandro</Text>

                        <TouchableOpacity
                            style={styles.bttWpp}
                        >
                            <Text style={styles.numWpp}>WhatsApp: (88) 9.9999-9999</Text>
                            <Arrow />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.txtTitulo}>Horário</Text>

                <View style={styles.contentTheCard}>
                    <View style={styles.contentCardPrincipal}>
                        <ArrowRigth />
                        <Text style={styles.titleCardSaida}>Saída: 17:30</Text>
                    </View>
                    <Text style={styles.describeCardSaída}>Tolerância de 10 minutos*</Text>
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.txtTitulo}>Situação do ônibus</Text>

                <View style={styles.contentTheCard}>
                    <View style={styles.contentCardPrincipal}>
                        <Check />
                        <Text style={styles.titleCardSituacao}>Vai hoje</Text>
                    </View>
                    
                </View>
            </View>

            <View style={styles.card}>
                <Text style={styles.txtTitulo}>Observações </Text>

                <View style={styles.contentTheCard}>
                    <View style={styles.contentCardPrincipal}>
                        <Text style={styles.titleCardObs}>Sem observações por hoje</Text>
                    </View>
                    
                </View>
            </View>

            
        </View>
        
    );
}

const styles = StyleSheet.create({
    
    pagToda:{
        backgroundColor: "#FAFAFA",
        padding: 20,
        gap: 15,
        alignItems: "center",
        flex:  1
    },
    card: {
        width: "100%",
        padding: 20, 
        backgroundColor: "#fff",
        borderRadius: 15,
        gap: 10,
        flexDirection: "column",
    },
    txtTitulo: {
        fontSize: 20,
        fontWeight: 700,
        color: "#002339"
    },
    contentCard: {
        flexDirection: "row",
        gap: 20,
        alignItems: "center"
    },
    names: {
        gap: 5,
        alignItems: "flex-start"
    },
    name: {
        color: "#00598F",
        fontSize: 20,
        fontWeight: 700,
    },
    bttWpp: {
        alignItems: "center",
        flexDirection: "row",
        gap: 10,

    },
    numWpp: {
        color: "#858585",
        fontSize: 14,
        fontWeight: 500
    },
    contentTheCard: {
        gap: 5,
        
    },
    contentCardPrincipal: {
        flexDirection:"row",
        backgroundColor: "#00598F1A",
        gap: 15,
        alignItems: "center",
        borderRadius: 15,
        padding: 15,
        alignSelf: "flex-start",
    },
    titleCardSaida:{
        color: "#FF0000",
        fontWeight: "900",
        fontSize: 18
    },
    describeCardSaída:{
        color: "#FF0000BF",
        fontSize: 14,
    },
    titleCardSituacao: {
        color: "#00C714",
        fontWeight: "900",
        fontSize: 18
    },
    titleCardObs:{
        color: "#858585",
        fontWeight: "900",
        fontSize: 18
    }

})

export default Info;