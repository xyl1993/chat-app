
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
  ImageBackground,
  TextInput,
  PixelRatio,
} from 'react-native';
import _ from 'lodash';
import Button from '../components/ReactNativeButton';
import Icon from 'react-native-vector-icons/Ionicons';
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'


export default class NewAccount extends Component {
  constructor (props){
    super(props);
  }
  render (){
    return (
      <ImageBackground style={styles.container} source={require('../public/Background.png')}>
        <View style={styles.header}>
            <Icon
                name='md-arrow-dropleft'
                size={ 26 }
                color='#fff'
                style={{position:'absolute',left:15,top:20}}
                onPress={() => this.props.navigation.navigate('Login')}
            />
            <Text style={[{alignSelf:'center',color:'#fff',fontSize:17},styles.regularFamily]}>profile</Text>
        </View>
        <View style={{flex:1,paddingTop:62,paddingLeft:25,paddingRight:25,paddingBottom:73}}>  
            <View style={{flex:1,backgroundColor:'#fff',}}>
                <View style={{flex:1,paddingTop:50,paddingLeft:40,paddingRight:40,marginBottom:10}}>
                    <Text style={{fontSize:10,color:'#ad9cd6',marginTop:30}}>
                        USERNAME
                    </Text>
                    <TextInput secureTextEntry={true} underlineColorAndroid={'#000'}/>
                    <Text style={{fontSize:10,color:'#ad9cd6',marginTop:30}}>
                        PASSWORD
                    </Text>
                    <TextInput secureTextEntry={true} underlineColorAndroid={'#000'}/>
                    <Text style={{fontSize:10,color:'#ad9cd6',marginTop:30}}>
                       QUERY PASSWORD
                    </Text>
                    <TextInput secureTextEntry={true} underlineColorAndroid={'#000'}/>
                </View>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Next Step</Text>
                </View>
            </View>
        </View>
      </ImageBackground>
    )
  }
}
const { width , height } = Dimensions.get('window');
const styles = StyleSheet.create({
  defaultFontFamily:{
    fontFamily:'Karla-Bold'
  },
  regularFamily:{
    fontFamily:'Karla-Regular'
  },
  container : {
    flex : 1,

  },
  header:{
    backgroundColor:'#000',
    height:64,
    width:width,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
      backgroundColor:'#ffec57',
      justifyContent:'center',
      alignItems:'center',
      height:60
  },
  buttonText:{
    color:'#000',
    fontSize:13,
    fontFamily:'Karla-Bold',
  },
})