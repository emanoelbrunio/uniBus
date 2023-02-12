import React, {useState} from "react";
import { Image, View, TouchableOpacity, Text, StyleSheet, Modal } from "react-native";
import perfil from '../../../assets/Images/Perfil.png'
import nomeLogo from '../../../assets/Images/nome.png'
import bell from '../../../assets/Images/bell.png'
import prancheta from '../../../assets/Images/prancheta.png'
import arrow from '../../../assets/Images/arrow.png'
import exclamacao from '../../../assets/Images/exclamacao.png'
import list from '../../../assets/Images/list.png'
import info from '../../../assets/Images/info.png'
import phone from '../../../assets/Images/phone.png'
import chat from '../../../assets/Images/chat.png'

import MarcarPresenca from "../MarcarPresenca";

function Firstscreen({navigation}){
    const [visibleModal, setVisibleModal] = useState(false);

    return (
        <View style={styles.pagFull}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image source={perfil}/>
                </TouchableOpacity>
                
                <Image source={nomeLogo} style={styles.nameLogo}/>

                <TouchableOpacity>
                    <Image source={bell}/>
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
                        <Image source={prancheta}/>
                        <Image source={exclamacao}/>
                    </View>

                    <View style={styles.line2}>
                        <Text style={styles.titleCard}>Minha presença hoje</Text>
                        <View style={styles.line2Line2}>
                            <Text style={styles.describeCard}>Marque se você vai hoje ou não.</Text>
                            <Image source={arrow}/>
                        </View>
                    </View>
                </TouchableOpacity>

                <View style={styles.cardDouble}>
                    <TouchableOpacity style={styles.cardSmall} activeOpacity={0.7}>
                        <View style={styles.line1}>
                            <Image source={list}/>
                        </View>

                        <View style={styles.line2}>
                            <Text style={styles.titleCard}>Lista</Text>
                            <View style={styles.line2Line2}>
                                <Text style={styles.describeCard}>Lista de hoje.</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cardSmall} activeOpacity={0.7}>
                        <View style={styles.line1}>
                            <Image source={info}/>
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
                        <Image source={phone}/>
                    </View>

                    <View style={styles.line2}>
                        <Text style={styles.titleCard}>Suporte</Text>
                        <View style={styles.line2Line2}>
                            <Text style={styles.describeCard}>Entre em contato com o suporte.</Text>
                            <Image source={arrow}/>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.bttChat} activeOpacity={0.7}>
                <Image source={chat}/>
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
        backgroundColor: "#F6F6F6",
       
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