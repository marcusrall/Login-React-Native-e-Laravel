import React, { Component } from 'react'
// Components do react usados na tela de login
import { View, Text, TextInput, Button, TouchableHighlight, ImageBackground, Image } from 'react-native'
import axios from 'axios';


export default class formLogin extends Component {

  // O contrutor é necessario para carregar as props
  constructor(props){
    super(props)

    // Declaração de variaveis interna do component
    this.state = {login: '02638041190', senha: 'ap@1869'}
  }


  componentWillMount() {
    //Verificação se os dados são carregados sem o header de autenticação
    axios.get('http://10.0.2.2:8000/api/user')
    .then((resp) => {
       console.log('PRIMEIRO', resp);
    }).catch((error) => {console.log('Error', error.response);});
  }


  //Função para efetuar o login
  logar(){

    console.log('Login: ', this.state.login);
    console.log('Senha: ', this.state.senha);

    //Dados necessarios para emissão do token via Laravel PassPort
    const dados = {
      grant_type: 'password',
      client_id: '2',
      client_secret: 'LFxb2cDRJrNh4LIXOy5W0tWjldnKtJA4MSSt6V3i',
      username: this.state.login,
      password: this.state.senha,
      scope: ''
    }

    //Rota para adiquirir o token
    axios.post('http://10.0.2.2:8000/oauth/token', dados)
    .then((response) => {
      console.log('RESPONSE', response)
      // testando o token gerado
      axios({
        method: 'GET',
        url:'http://10.0.2.2:8000/api/user',
        headers: {
            'Content-Type' : 'application/json',
            'Accept' :'application/json',
            'Authorization' : 'Bearer '+ response.data.access_token
        },

      })
      .then((resp) => {

         console.log(resp);
      }).catch((error) => {console.log('Error', error.response);});


      // Caso a autenticação falhe imprimir erro
    }).catch((error) => {
      console.log('ERROR', error.response)
    })

  }
  renderBtnAcessar(){
    return (
      // Botão que executa a função logar
      <Button style={{ fontSize: 20, height: 125, padding: 20  }} title="Acessar" color='#004c54' onPress={() => this.logar()} />
    )
  }

  //View do Login
  render(){
      return(
        <ImageBackground style={{flex: 1, width: null}} source={require('../../imgs/main_bg.jpg')}>

        <View style={{ flex: 1, padding: 10 }}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{flex: 1, width: 180}} source={require('../../imgs/icon.png')} />

          </View>
          <View style={{ flex: 2, padding: 20 }}>
            <TextInput
              style={{ fontSize: 20, height: 45 }}
              placeholder="E-mail" placeholderTextColor='#777'
              onChangeText={(login) => this.setState({login})}
              value={this.state.login}
            />
            <TextInput
              secureTextEntry
              style={{ fontSize: 20, height: 85, marginTop: 20}}
              placeholder="Senha" placeholderTextColor='#777'
              onChangeText={(senha) => this.setState({senha})}
              value={this.state.senha}
            />
        </View>
        <View style={{ flex: 2, paddingHorizontal: 20 }}>
          {this.renderBtnAcessar()}
        </View>
        </View>
      </ImageBackground>
          )
  }
}
