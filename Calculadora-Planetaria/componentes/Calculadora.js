import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Button, TouchableHighlight, TouchableOpacity, ImageBackground } from 'react-native';

const background = require('./imgs/background.png')
const ac = require('./imgs/AC.png')
const jupiter = require('./imgs/JUPTER.png')
const lua = require('./imgs/LUA.png')
const marte = require('./imgs/MARTE.png')
const mercurio = require('./imgs/MERCURIO.png')
const netuno = require('./imgs/NETUNO.png')
const plutao = require('./imgs/PLUTAO.png')
const saturno = require('./imgs/SATURNO.png')
const sol = require('./imgs/SOL.png')
const urano = require('./imgs/URANO.png')
const venus = require('./imgs/VENUS.png')


export default class Calculadora extends Component {
    state = {
        pesoTerra: '',
        resultado: 0,
    }

    jupiter() {
        this.setState({ resultado: parseInt((this.state.pesoTerra)/10) * parseInt(25) })
    }
    lua() {
        this.setState({ resultado: parseInt((this.state.pesoTerra) / 10) * parseInt(1,6) })
    }
    marte() {
        this.setState({ resultado: parseInt((this.state.pesoTerra) / 10) * parseInt(3,7) })
    }
    mercurio() {
        this.setState({ resultado: parseInt((this.state.pesoTerra) / 10) * parseInt(3,7) })
    }
    netuno() {
        this.setState({ resultado: parseInt((this.state.pesoTerra) / 10) * parseInt(11) })
    }
    plutao() {
        this.setState({ resultado: parseInt((this.state.pesoTerra) / 10) * parseInt(0,6) })
    }
    saturno() {
        this.setState({ resultado: parseInt((this.state.pesoTerra) / 10) * parseInt(10,5) })
    }
    sol() {
        this.setState({ resultado: parseInt((this.state.pesoTerra) / 10) * parseInt(275) })
    }
    urano() {
        this.setState({ resultado: parseInt((this.state.pesoTerra) / 10) * parseInt(8,9) })  
    }
    venus() {
        this.setState({ resultado: parseInt((this.state.pesoTerra) / 10) * parseInt(8,9) })
    }


    ac() {
        this.setState({ pesoTerra: '' })
        this.setState({ resultado: 0 })
    }

    render() {
        return (
            <ImageBackground source={background} style={{ height: '100%', width: '100%' }} >
                <View style={{ flex: 1 }}>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column'
                    }}>
                    </View>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                    }}>
                    <View>
                        <Text style={styles.txt}>{this.state.resultado} KG</Text>
                    </View>
                    </View>

                    {/* VIEW DO INPUT */}
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'stretch',
                        justifyContent: 'flex-end'
                    }} >
                        <TextInput style={styles.txtInput}
                            placeholder='INFORME O SEU PESO'
                            placeholderTextColor="#707070" 
                            value={this.state.pesoTerra}
                            onChangeText={(ps) => this.setState({ pesoTerra: ps })}
                            keyboardType='numeric' />
                    </View>

                    {/* COMEÇO DAS VIEWS E COLUNAS */}
                    <View style={{
                        flex: 2,
                        flexDirection: 'column'
                    }}>

                        {/* COMEÇO DA 1 COLUNA */}
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'stretch',
                            justifyContent: 'space-around'
                        }}>

                            {/* IMAGEM DO BURACO DE MINHOCA */}
                            <TouchableHighlight style={{
                                flex: 2,
                                justifyContent: 'space-around',
                            }} onPress={() => { this.ac(); }}>
                                <Image source={ac} style={{ width: '100%', height: '100%' }} />
                            </TouchableHighlight>

                            {/* IMAGEM DA LUA */}
                            <TouchableHighlight style={{
                                flex: 1,
                                justifyContent: 'space-around',
                            }} onPress={() => { this.lua(); }}>
                                <Image source={lua} style={{ width: '100%', height: '100%' }} />
                            </TouchableHighlight>

                            {/* IMAGEM DE MERCURIO */}
                            <TouchableHighlight style={{
                                flex: 1,
                                justifyContent: 'space-around',
                            }} onPress={() => { this.mercurio(); }}>
                                <Image source={mercurio} style={{ width: '100%', height: '100%' }} />
                            </TouchableHighlight>

                        </View>

                        {/* COMEÇO DA 2 COLUNA */}
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'stretch',
                            justifyContent: 'space-between',

                        }}>
                            {/* IMAGEM DE VENUS */}
                            <TouchableHighlight style={{
                                flex: 1,
                                justifyContent: 'space-around'
                            }} onPress={() => { this.venus(); }}>
                                <Image source={venus} style={{ width: '100%', height: '100%' }} />
                            </TouchableHighlight>

                            {/* IMAGEM DE MARTE */}
                            <TouchableHighlight style={{
                                flex: 1,
                                justifyContent: 'space-around'
                            }} onPress={() => { this.marte(); }}>
                                <Image source={marte} style={{ width: '100%', height: '100%' }} />
                            </TouchableHighlight>

                            {/* IMAGEM DE JUPITER */}
                            <TouchableHighlight style={{
                                flex: 1,
                                justifyContent: 'space-around'
                            }} onPress={() => { this.jupiter(); }}> 
                                <Image source={jupiter} style={{ width: '100%', height: '100%' }} />
                            </TouchableHighlight>

                            {/* IMAGEM DE SATURNO */}
                            <TouchableHighlight style={{
                                flex: 1,
                                justifyContent: 'space-around'
                            }} onPress={() => { this.saturno(); }}>
                                <Image source={saturno} style={{ width: '100%', height: '100%' }} />
                            </TouchableHighlight>

                        </View>


                        {/* COMEÇO DA 3 COLUNA */}
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            alignItems: 'stretch',
                            justifyContent: 'space-around',

                        }}>
                            {/* IMAGEM DO URANO */}
                            <TouchableHighlight style={{
                                flex: 1,
                                justifyContent: 'space-around'
                            }} onPress={() => { this.urano(); }}>
                                <Image source={urano} style={{ width: '90%', height: '90%' }} />
                            </TouchableHighlight>

                            {/* IMAGEM DO NETUNO */}
                            <TouchableHighlight style={{
                                flex: 1,
                                justifyContent: 'space-around'
                            }} onPress={() => { this.netuno(); }}>
                                <Image source={netuno} style={{ width: '90%', height: '90%' }} />
                            </TouchableHighlight>

                            {/*   IMAGEM DO PLUTAO  */}
                            <TouchableHighlight style={{
                                flex: 1,
                                justifyContent: 'space-around'
                            }} onPress={() => { this.plutao(); }}>
                                <Image source={plutao} style={{ width: '90%', height: '90%' }} />
                            </TouchableHighlight>


                            {/* IMAGEM DO SOL */}
                            <TouchableHighlight style={{
                                flex: 1,
                                justifyContent: 'space-around'
                            }} onPress={() => { this.sol(); }}>
                                <Image source={sol} style={{ width: '70%', height: '70%' }} />
                            </TouchableHighlight>

                        </View>
                    </View>

                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    txt: {
        fontSize: 50,
        color: '#ffffff',
        fontFamily: 'Press Start 2P',
        margin: 10
    },
    txtInput: {
        fontSize: 18,
        color: '#ffffff',
        fontFamily: 'Press Start 2P',
        textAlign: 'center'
    }

});