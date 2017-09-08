import React , { Component } from 'react';
import {  Navigator , 
    View , 
    Text , 
    TabBarIOS,Image,
    StyleSheet,
    ImageBackground,
    TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Chat extends Component {
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
                onPress={() => this.props.navigation.navigate('Main')}
            />
            <View style={{flex:1}}>
                <Text style={{color:'#fff',fontSize:17,alignSelf:'center'}}>Profile</Text>
            </View>
            <View style={{width:25}}>
                <Icon
                    name="md-more"
                    size={ 26 }
                    color='#fff'
                />
            </View>
        </View>
        <View style={{flex:1,paddingTop:25}}>
            <View style={{flex:1,paddingLeft:25,paddingRight:25}}>
                <View style={[{marginBottom:30},styles.meCointer]}>
                    <View style={{backgroundColor:'#fff',flex:0}}>
                        <Image style={[{width:40,height:40},styles.meIcon]} source={require('../public/Avatar.png')}/>
                        <Text style={[styles.commonContent,styles.meContent]}>
                             really like you!...
                        </Text>
                    </View>
                    <Text style={[styles.meTime,styles.commonTime]}>4分钟前</Text>
                </View>
                <View style={[{marginBottom:30},styles.otherCointer]}>
                    <View style={{backgroundColor:'#fff',flex:0}}>
                        <Image style={[{width:40,height:40},styles.otherIcon]} source={require('../public/Avatar.png')}/>
                        <Text style={[styles.commonContent,styles.otherContent]}>
                             really like you!...
                        </Text>
                    </View>
                    <Text style={[styles.otherTime,styles.commonTime]}>4分钟前</Text>
                </View>
            </View>
            <View style={{height:110,flexDirection:'column',justifyContent:'space-around',backgroundColor:'#ffec57',paddingLeft:18,paddingRight:18,paddingTop:20,paddingBottom:20}}>
                <TextInput multiline={false} placeholder='Type message...' style={{flex:1,color:'#000',fontFamily:'Karla-Regular'}}/>
                <View style={{flex:1,alignItems:'center',flexDirection:'row',paddingLeft:5}}>
                    <Icon
                      name="md-image"
                      size={ 22 }
                      color='#000'
                      style={{paddingRight:20}}
                      onPress={() => this.props.navigation.navigate('Main')} 
                    />
                    <Icon
                      name="logo-youtube"
                      size={ 22 }
                      color='#000'
                      style={{paddingRight:20}}
                      onPress={() => this.props.navigation.navigate('Main')} 
                    />
                    <Icon
                      name="ios-mic"
                      size={ 22 }
                      style={{paddingRight:20}}
                      color='#000'
                      onPress={() => this.props.navigation.navigate('Main')} 
                    />
                    <View style={{flex:1}}></View>
                    <Text style={{width:57,fontSize:20,alignSelf:'flex-end',fontFamily:'Karla-Bold',color:'#000'}}>
                        Send
                    </Text>
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
  },
  textRight:{
      textAlign:'right'
  },
  textLeft:{
      textAlign:'left'
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
    fontSize:50,
  },
  meIcon:{
      position:'absolute',
      right:0,
      top:0
  },
  otherIcon:{
    position:'absolute',
    left:0,
    top:0
  },
  commonTime:{
    fontSize:10,
    fontFamily:'Karla-Bold',
    marginTop:15,
    color:'#000',
    flex:0
  },
  meTime:{
      textAlign:'left'
  },
  otherTime:{
      textAlign:'right'
  },
  meCointer:{
    alignSelf:'flex-end'
  },
  otherCointer:{
    alignSelf:'flex-start'
  },
  commonContent:{
      paddingTop:20,
      paddingBottom:20,
      fontSize:15,
      flex:0,
      fontFamily:'Karla-Regular',
      color:'#000'
  },
  meContent:{
      paddingLeft:20,
      paddingRight:60,
      textAlign:'right' 
  },
  otherContent:{
    paddingLeft:60,
    paddingRight:20,
    textAlign:'left' 
  }
});