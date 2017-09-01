
/**
 * 登录页面
 */
import React , { Component } from 'react';
import {
  View ,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  ImageBackground,
  TextInput,
  PixelRatio,
} from 'react-native';
import _ from 'lodash';
import Button from '../components/ReactNativeButton';
// _.wrap是lodash的一个函数,用来包裹传入的函数，然后返回一个新的函数
// Text.prototype.render = _.wrap(Text.prototype.render, function (func, ...args) {
//     let originText = func.apply(this, args);
//     return React.cloneElement(originText, {
//         style: [
//             originText.props.style,
//             styles.defaultFontFamily
//         ]
//     });
// });
export default class Login extends Component {
  constructor (props){
    super(props);
  }

  render (){
    return (
      <ImageBackground style={styles.container} source={require('../public/loginBac.png')}>
        <View style={styles.inputContainer}>
            <View style={styles.textBox}>
                <View style={styles.textLabel}>
                    <Text style={[styles.title,styles.defaultFontFamily]}>USERNAME</Text>
                    <TextInput style={styles.input} underlineColorAndroid={'#000'}/>
                </View>
                <View style={styles.textLabel}>
                    <Text style={[styles.title,styles.defaultFontFamily]}>PASSWORD</Text>
                    <TextInput secureTextEntry={true} underlineColorAndroid={'#000'} style={styles.input}/>
                </View>
            </View>
            <Button style={[styles.buttonText]} containerStyle={styles.button} onPress={() => this.props.navigation.navigate('Main')}>
                Get Start
            </Button>
        </View>
        <Text onPress={() => this.props.navigation.navigate('NewAccount')}
             style={[{position:'absolute',bottom:30,left:40,fontWeight:'bold'},styles.defaultFontFamily]}>Create Account</Text>
        <Text style={[{position:'absolute',bottom:30,alignSelf: 'flex-end',right:40,fontWeight:'bold'},styles.defaultFontFamily]}>Need Help?</Text>
      </ImageBackground>
    )
  }
}
const { width , height } = Dimensions.get('window');
const styles = StyleSheet.create({
  defaultFontFamily:{
    fontFamily:'Karla-Bold'
  },
  container : {
    flex : 1
  },
  inputContainer:{
      height:270,
      position:'absolute',
      left:25,
      right:25,
      bottom:74,
      backgroundColor:'#fff',
      elevation: 20,
      shadowOffset: {width: 0, height: 15},
      shadowColor: 'black',
      shadowOpacity: 1,
      shadowRadius: 5
  },
  textBox:{
      paddingLeft:69,
      paddingRight:69,
  },
  textLabel:{
      marginTop:28,
  },
  title:{
      color:'#b5a4e1',
      fontSize:10,
      fontWeight:'bold',
  },
  input:{
      
  },
  button:{
      backgroundColor:'#ffec57',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      height:60,
      marginTop:32
  },
  buttonText:{
    color:'#000',
    fontSize:13,
    fontFamily:'Karla-Bold',
  },

})