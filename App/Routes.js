import React from 'react'
// importação dos modulos são necessarios para compor as rotas
import { Router, Scene, Stack } from 'react-native-router-flux'

//Declaração dos components para compor as rotas
import FormLogin from './components/auth/FormLogin'


export default props => (
  <Router navigationBarStyle={{backgroundColor: '#115E54'}} titleStyle={{color: '#fff'}}>
    <Scene key="root">
      <Scene key='formLogin' component={FormLogin} title='Login' hideNavBar />
    </Scene>
  </Router>
)
