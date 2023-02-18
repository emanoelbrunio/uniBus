import React, {useState} from "react";
import { View, TouchableOpacity, Text, StyleSheet, Modal } from "react-native";

import ProfileSmall from '../../../assets/Images/ProfileSmall.svg'
import LogoSmall from '../../../assets/Images/LogoSmall.svg'
import Bell from '../../../assets/Images/bell.svg'

import Prancheta from '../../../assets/Images/prancheta.svg'
import Arrow from '../../../assets/Images/arrow.svg'
import Exclamacao from '../../../assets/Images/exclamacao.svg'
import Lista from '../../../assets/Images/Lista.svg'
import Info from '../../../assets/Images/Info.svg'
import Headphone from '../../../assets/Images/headphone.svg'
import Chat from '../../../assets/Images/Chat.svg'

import MarcarPresenca from "../MarcarPresenca";

function Firstscreen({navigation}){
    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <View style={styles.pagFull}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Profile')
                    }}
                >
                    
                    <ProfileSmall />
                </TouchableOpacity>
                
                <LogoSmall />

                <TouchableOpacity
                    onPress={()=> navigation.navigate('Notification')}
                >
                    <Bell />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Text style={styles.shortcut}>Atalhos rápidos</Text>
                
                <TouchableOpacity
                    style={styles.cardBig}
                    activeOpacity={0.7}
                    onPress={()=> {setVisibleModal(true)}}
                >
                    <View style={styles.line1}>
                       
                       <Prancheta />
                       <Exclamacao/>
                    
                    </View>

                    <View style={styles.line2}>
                        <Text style={styles.titleCard}>Minha presença hoje</Text>
                        <View style={styles.line2Line2}>
                            <Text style={styles.describeCard}>Marque se você vai hoje ou não.</Text>
                            <Arrow />
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.cardDouble}>
                    <TouchableOpacity style={styles.cardSmall} activeOpacity={0.7}>
                        <View style={styles.line1}>
                            <Lista />
                        </View>

                        <View style={styles.line2}>
                            <Text style={styles.titleCard}>Lista</Text>
                            <View style={styles.line2Line2}>
                                <Text style={styles.describeCard}>Lista de hoje.</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.cardSmall}
                        activeOpacity={0.7}
                        onPress={()=> navigation.navigate('Info')}
                    >
                        <View style={styles.line1}>
                            <Info />
                        </View>

                        <View style={styles.line2}>
                            <Text style={styles.titleCard}>Informações</Text>
                            <View style={styles.line2Line2}>
                                <Text style={styles.describeCard}>Sobre o ônibus.</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.cardBig} activeOpacity={0.7}>
                    <View style={styles.line1}>
                        <Headphone />
                    </View>

                    <View style={styles.line2}>
                        <Text style={styles.titleCard}>Suporte</Text>
                        <View style={styles.line2Line2}>
                            <Text style={styles.describeCard}>Entre em contato com o suporte.</Text>
                            <Arrow />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.bttChat} activeOpacity={0.7}>
                <Chat />
            </TouchableOpacity>

            <Modal
                visible={visibleModal}
                transparent={ true }
                onRequestClose={() => setVisibleModal(false)}
                animationType="slide"
            >
                <MarcarPresenca
                    handleClose= {()=> setVisibleModal(false)}
                />

            </Modal>
        </View>
    );

}

const styles = StyleSheet.create({

    pagFull: {
        justifyContent: "space-between",
        height: "100%",
        paddingBottom: 50,
        paddingTop: 100,
        backgroundColor: "#F6F6F680",
       
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        position: "absolute",
        top: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 20,
        paddingVertical: 25,
        alignItems: "center",
    },
    nameLogo:{
        transform: "scale(0.6)"
    },
    content: {
        paddingHorizontal: 20,
        gap: 10
    },
    shortcut: {
        color: "#002339",
        fontSize: 16,
        fontWeight: 700
    },
    cardBig: {
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 20,
        flexDirection: "column",
        gap: 20,
    },
    cardSmall: {
        backgroundColor: "#fff",
        borderRadius: 15,
        padding: 20,
        flexDirection: "column",
        gap: 20,
        flex: 1,
    },
    line1: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    line2: {
        justifyContent: "space-between",
        flexDirection: "column",
        gap: 5
    },
    titleCard: {
        fontSize: 20,
        color: "#002339",
        fontWeight: 700,
    },
    line2Line2: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    describeCard: {
        fontSize: 15,
        color: "#00598FB2",

    },
    cardDouble: {
        flexDirection: "row",
        gap: 10,
        maxHeight: "100%"
    },
    bttChat: {
        padding: 20,
        borderRadius: 15,
        backgroundColor: "#00598F",
        position: "absolute",
        right: 1,
        bottom: 1,
        marginBottom: 30,
        marginRight: 30,
        shadowColor: 'rgba(0,0,0, 1)',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        elevation: 5,
        shadowOpacity: 1,
        shadowRadius: 10,
    }


    
})

export default Firstscreen;