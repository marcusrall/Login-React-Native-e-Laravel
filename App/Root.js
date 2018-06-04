import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
//Chamo o arquivo de rotas
import Routes from './Routes'


export default class Root extends Component {
    render(){
        return(
              // Meu components de rotas
              <Routes />
            )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DDDDDD',
        alignItems:'center',
        justifyContent:'center'
    }
})
