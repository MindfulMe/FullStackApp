import React, { Component } from 'react';
import { WebView } from 'react-native';

class MyWeb extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://appstores.herokuapp.com/#/'}}
        scalesPageToFit= {false}
        bounces = {true}
        scrollEnabled = {true}
      />
    );
  }
}
export default MyWeb;
