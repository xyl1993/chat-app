
/**
 * 登录页面
 */
import React , { Component } from 'react';
import {
  View ,
  StyleSheet,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

export default class Walkthrough extends Component {
  constructor (props){
    super(props);
  }
  componentWillMount(){
      setTimeout(()=>{
        this.props.navigation.navigate('Login')
      },3000)
  }
  render (){
    return (
      <ImageBackground style={{flex:1}} source={require('../public/Walkthrough.png')}>
        
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  
  
})