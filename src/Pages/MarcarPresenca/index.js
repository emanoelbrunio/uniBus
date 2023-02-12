import React, { useState } from 'react';
import { View, SafeAreaView, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

import prancheta from '../../../assets/Images/pranchetaBig.png'
import vouevolto from '../../../assets/Images/vouevolto.png'
import vou from '../../../assets/Images/vou.png'
import volto from '../../../assets/Images/volto.png'

function RadioButton(props) {
    return (
        <View style={[{
          height: 24,
          width: 24,
          borderRadius: 15,
          borderWidth: 2,
          borderColor: '#00598F',
          alignItems: 'center',
          justifyContent: 'center',
        }, props.style]}>
          {
            props.selected ?
              <View style={{
                height: 18,
                width: 18,
                borderRadius: 15,
                backgroundColor: '#00598F',
              }}/>
              : null
          }
        </View>
    );
}

function MarcarPresenca({handleClose}) {
    const [select1, setSelect1] = useState(false);
    const [select2, setSelect2] = useState(false);
    const [select3, setSelect3] = useState(false);

    return (
        <SafeAreaView style={styles.container}>

            <TouchableOpacity
                style={{flex: 1, zIndex: 9}}
                onPress={handleClose}
            >
            </TouchableOpacity>
            
            <View style={styles.content}>
                <View style={styles.line1}>
                    <Image source={prancheta}/>
                    <Text style={styles.titleCard}>Minha presença hoje</Text>
                    <Text style={styles.describe}>Marque uma opção para que o motorista saiba se você vai hoje ou não.</Text>
                </View>
                
                <View style={styles.line2}></View>

                <View style={styles.line3}>
                    <TouchableOpacity style={[select1 ? styles.selected : styles.select]} activeOpacity={0.7} onPress={() => { 
                        if (select1 === false){
                            setSelect1(true) 
                            setSelect2(false) 
                            setSelect3(false)
                        }
                        else {
                            setSelect1(false) 
                        }
                    }}>
                        
                        <View style={styles.imgTitle}>
                            <Image source={vouevolto}/>
                            <Text style={styles.titleSelect}>Eu vou e volto</Text>
                        </View>

                        <RadioButton selected={select1} />
                    </TouchableOpacity>

                    <TouchableOpacity style={[select2 ? styles.selected : styles.select]} activeOpacity={0.7} onPress={() => { 
                        if (select2 === false){
                            setSelect1(false) 
                            setSelect2(true) 
                            setSelect3(false) 
                        }
                        else {
                            setSelect2(false) 
                        }
                    }}>
                        
                        <View style={styles.imgTitle}>
                            <Image source={vou}/>
                            <Text style={styles.titleSelect}>Eu apenas vou</Text>
                        </View>

                        <RadioButton selected={select2} />
                    </TouchableOpacity>

                    <TouchableOpacity style={[select3 ? styles.selected : styles.select]} activeOpacity={0.7} onPress={() => { 
                        if (select3 === false){
                            setSelect1(false) 
                            setSelect2(false) 
                            setSelect3(true) 
                        }
                        else {
                            setSelect3(false) 
                        }
                    }}>
                        
                        <View style={styles.imgTitle}>
                            <Image source={volto}/>
                            <Text style={styles.titleSelect}>Eu apenas volto</Text>
                        </View>

                        <RadioButton selected={select3} />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={[select1 || select2 || select3 ? styles.cta : styles.ctaDesable]}
                    activeOpacity={select1 || select2 || select3 ? 0.7 : 1}
                    onPress={() => {
                        select1 || select2 || select3 ? console.log('Ativado') : console.log('desativado')
                    }}   
                >
                    <Text style={styles.txtCta}>Salvar</Text>
                </TouchableOpacity>
            
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#00000030",
        justifyContent: "space-between"
    },
    content: {
        padding: 20,
        backgroundColor: "#fff",
        gap: 15,
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,

    }, 
    line1:{
        flexDirection: "column",
        gap: 5,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "flex-start"
    },
    titleCard: {
        fontSize: 20,
        color: "#002339",
        fontWeight: 700, 
    },
    describe: {
        fontSize: 14,
        color: "#00598FB2",
    },
    line2: {
        height: 1.5,
        backgroundColor: "#002339"
    },
    line3: {
        flexDirection: "column",
        gap: 10,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
    },
    select: {
        backgroundColor: "#F0F0F0",
        width: "100%",
        borderRadius: 15,
        padding: 20,
        gap: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    selected: {
        backgroundColor: "#00598F26",
        width: "100%",
        borderRadius: 15,
        padding: 20,
        gap: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    imgTitle:{
        flexDirection: "row",
        gap: 20,
        alignItems: "center"
    },
    titleSelect: {
        fontSize: 16,
        color: "#002339",
    },
    cta: {
        backgroundColor: "#00598F",
        width: "100%",
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 12,
        alignItems: "center",
    },
    ctaDesable: {
        backgroundColor: "#858585",
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
})

export default MarcarPresenca;