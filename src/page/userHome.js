import React , { Component } from 'react';
import {  Navigator , 
    View , 
    Text , 
    Image,
    StyleSheet,
    ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class UserHome extends Component {
  constructor (props){
    super(props);
  }
  render (){
    return (
      <ImageBackground style={styles.container} source={require('../public/Background.png')}>
        <View style={styles.header}>
            <Text onPress={() => this.props.navigation.navigate('Menu')} style={{width:34}} >
                <Image source={require('../public/Icon-Menu.png')} style={{width:34,height:24}}/>
            </Text>
            <View style={{flex:1}}>
                <Text style={{color:'#fff',fontSize:17,alignSelf:'center'}}>Profile</Text>
            </View>
            <View style={{width:25}}>
                <Icon
                    name="md-settings"
                    size={ 26 }
                    color='#fff'
                />
            </View>
        </View>
        <View style={{height:244,paddingLeft:25,paddingRight:25,marginTop:25}}>
            <View style={{height:154,flexDirection:'row',paddingTop:30,paddingRight:30,paddingLeft:30,backgroundColor:'#fff'}}>
                <Image style={{width:70,height:70}} source={require('../public/Avatar.png')}/>
                <View style={{flex:1,paddingLeft:30,paddingRight:30,flexDirection:'column'}}>
                    <Text style={{fontSize:25,fontFamily:'Karla-Bold',color:'#000',paddingBottom:20}} numberOfLines={2}>
                        Sinenna Cardoso
                    </Text>
                    <Text style={{fontSize:14,fontFamily:'Karla-Regular',color:'#000',paddingBottom:7}}>
                        Product Designer
                    </Text>
                    <Text style={{fontSize:14,fontFamily:'Karla-Regular',color:'#000'}}>New York</Text>
                </View>
                <Image style={{width:10,height:28}} source={require('../public/Icon-More.png')} />
            </View>
            <View style={{flex:1,backgroundColor:'#f2f2f2',flexDirection:'row'}}>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',alignContent:'center',flexDirection:'column'}}>
                    <Text style={styles.libFont}>LIKES</Text>
                    <Text style={styles.libNum}>1,345</Text>
                </View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',alignContent:'center',flexDirection:'column'}}>
                    <Text style={styles.libFont}>FOLLOWERS</Text>
                    <Text style={styles.libNum}>1,345</Text>
                </View>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',alignContent:'center',flexDirection:'column'}}>
                    <Text style={styles.libFont}>FOLLOWING</Text>
                    <Text style={styles.libNum}>56k</Text>
                </View>
            </View>
        </View>
        <View style={{flex:1}}>
            <View style={{flex:1,flexDirection:'row'}}>
                <ImageBackground style={{flex:2}} source={require('../public/Avatar.png')}>
                </ImageBackground>
                <View style={{flex:1,flexDirection:'column'}}>
                    <ImageBackground style={{flex:1}} source={require('../public/Avatar.png')}></ImageBackground>
                    <ImageBackground style={{flex:1}} source={require('../public/Avatar.png')}></ImageBackground>
                </View>
            </View>
            <View style={{height:60,paddingRight:25,paddingLeft:25}}>
                <View style={{flex:1,backgroundColor:'#ffec57',alignItems:'center',justifyContent:'center',alignContent:'center',flexDirection:'row'}}>
                        <Icon 
                        name='md-person-add'
                        size={ 26 }
                        color='#000'
                        style={{paddingRight:16}}
                        />
                        <Text style={{fontSize:13,color:'#000',fontFamily:'Karla-Bold'}}>Follow</Text>
                </View>
            </View>
        </View>
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingBottom:25
  },
  header:{
    height:81,
    backgroundColor:'#000',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:15,
    paddingRight:15
  },
  defaultFontFamily:{
    fontFamily:'Karla-Bold',
  },
  libFont:{
      color:'#b09fdb',
      fontSize:10,
      paddingBottom:4,
      fontFamily:'Karla-Bold'
  },
  libNum:{
    fontSize:20,
    color:'#000',
    fontFamily:'Karla-Bold'
  }
});