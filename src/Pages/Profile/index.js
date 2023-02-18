import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import ImgProfile from '../../../assets/Images/imgProfile.svg'
import ImgEdit from '../../../assets/Images/edit.svg'
import ImgSettings from '../../../assets/Images/settings.svg'
import ImgExit from '../../../assets/Images/exit.svg'

import Exit from '../../Pages/ModalExit'

function Profile({navigation}) {
    const [visibleModal, setVisibleModal] = useState(false);
    
    return (
        <View style={styles.pagToda}>

            <View style={styles.card}>
                <Text style={styles.txtTitulo}>Você</Text>
                <View style={styles.contentCard}>
                    <ImgProfile />
                    <View style={styles.names}>
                        <Text style={styles.nameAll}>Antônio Carlos</Text>
                        <Text style={styles.nameFacul}>UFERSA</Text>
                    </View>
                </View>
            </View>

            <View style={styles.card}>
                         
                <Text style={styles.txtTitulo}>Configurações</Text>

                <TouchableOpacity
                    style={styles.btt}
                    onPress={() => navigation.navigate('Edit-Profile')}
                >
                    <ImgEdit />
                    <Text style={styles.txtBtt}>Editar perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btt}
                    onPress={() => navigation.navigate('Settings-Profile')}
                >
                    <ImgSettings />
                    <Text style={styles.txtBtt}>Configurações do app</Text>
                </TouchableOpacity>
                
            </View>

            <View style={styles.card}>
                         
                <Text style={styles.txtTitulo}>Conta</Text>

                <TouchableOpacity
                    style={styles.btt}
                    onPress={()=> setVisibleModal(true)}
                >
                    <ImgExit />
                    <Text style={[styles.txtBtt, styles.txtSair]}>Sair da minha conta</Text>
                </TouchableOpacity>                
            </View>


            <Modal
                visible={visibleModal}
                transparent={ true }
                onRequestClose={() => setVisibleModal(false)}
                animationType="fade"
            >
                <Exit
                    handleClose= {()=> setVisibleModal(false)}
                    navigation={navigation}
                />
            </Modal>
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
        gap: 15,
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
    nameAll: {
        color: "#00598F",
        fontSize: 20,
        fontWeight: 700,
    },
    nameFacul: {
        color: "#858585",
        fontSize: 14,
        fontWeight: 500
    },
    btt: {
        backgroundColor:"#00598F1A",
        flexDirection: "row",
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 15,
        gap: 10,
        alignItems: "center",
        flex: 0,
        alignSelf: "flex-start"
    },
    txtBtt: {
        color: "#002339",
        fontSize: 18,
        fontWeight: 600
    },
    txtSair: {
        color: "#FF0000BF",
    }

})

export default Profile;