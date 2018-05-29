import React, { Component } from 'react';
import Root from './App/Root';


export default class App extends Component<Props> {
  render() {
    return (
      <Root />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
