import React , { Component } from 'react';
import {  Navigator , 
    View , 
    Text , 
    TabBarIOS,Image,
    StyleSheet,
    ImageBackground
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Menu extends Component {
  constructor (props){
    super(props);
  }
  render (){
    return (
      <ImageBackground style={styles.container} source={require('../public/Background.png')}>
        <View style={{height:60,paddingLeft:17,flexDirection:'row',paddingRight:17,justifyContent:'space-between'}}>
          <View style={{width:60}}>
            <Icon name="md-close"
              size={ 26 }
              color='#000'
              onPress={() => this.props.navigation.navigate('Main')} 
            />
          </View>
          <Image style={{width:60,height:60}} source={require('../public/Avatar.png')}/>
        </View>
        <View style={{height:400,flexDirection:'column',justifyContent:'space-around',alignItems:'flex-end',marginTop:50}}>
          <Text style={styles.defaultFontFamily}>
            Home
          </Text>
          <Text style={styles.defaultFontFamily} onPress={() => this.props.navigation.navigate('Profile')}> 
            Profile
          </Text>
          <Text style={styles.defaultFontFamily} onPress={() => this.props.navigation.navigate('Compose')} >
            Compose
          </Text>
          <Text style={styles.defaultFontFamily}>Gallery</Text>
          <Text style={styles.defaultFontFamily}>Capture</Text>
          <Text style={styles.defaultFontFamily}>Stats</Text>
        </View>
        <Icon
          name="md-power"
          size={ 26 }
          color='#000'
          onPress={() => this.props.navigation.navigate('Main')} 
          style={{position:'absolute',bottom:62,right:40}}
        />
        <Icon
          name="md-settings"
          size={ 26 }
          color='#000'
          onPress={() => this.props.navigation.navigate('Main')} 
          style={{position:'absolute',bottom:62,left:40}}
        />
      </ImageBackground>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
    paddingTop:24,
  },
  defaultFontFamily:{
    fontFamily:'Karla-Bold',
    fontSize:50,
  },
});