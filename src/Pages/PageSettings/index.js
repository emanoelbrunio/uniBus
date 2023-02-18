import React, {useState} from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';

function PageSettings() {
    const [isEnabled1, setIsEnabled1] = useState(true);
    const toggleSwitch1 = () => isEnabled1 ? setIsEnabled1(false) : setIsEnabled1(true);

    const [isEnabled2, setIsEnabled2] = useState(true);
    const toggleSwitch2 = () => isEnabled2 ? setIsEnabled2(false) : setIsEnabled2(true);
    
    return (
        
        <View style={styles.pagToda}>
           
            <TouchableOpacity
                style={styles.card}
                activeOpacity={0.7}
                onPress={() => toggleSwitch1()}
            > 
                <Text style={styles.txt}>Receber notificação para responder lista do dia</Text> 
                <Switch
                    trackColor={{false: '#B8B8B8', true: "#00C71480"}}
                    thumbColor={isEnabled1 ? "#00C714" : '#858585'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch1}
                    value={isEnabled1}
                />
            </TouchableOpacity >


            <TouchableOpacity
                style={styles.card}
                activeOpacity={0.7}
                onPress={() => toggleSwitch2()}
            >
                <Text style={styles.txt}>Receber notificação alertando que está próximo do ônibus sair</Text>
                
                <Switch
                    trackColor={{false: '#B8B8B8', true: "#00C71480"}}
                    thumbColor={isEnabled2 ? "#00C714" : '#858585'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch2}
                    value={isEnabled2}
                />
            </TouchableOpacity >
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
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"    
    },
    txt: {
        color: "#00598F",
        fontWeight: 700,
        fontSize: 16,
        width: "80%",
    },
})

export default PageSettings;