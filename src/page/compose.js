import React , { Component } from 'react';
import {  Navigator , 
    View , 
    Text , 
    TabBarIOS,Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStore , applyMiddleware , combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import ComposeRedus from '../reducers/Compose'
import promiseMiddleware from '../utils/promiseMiddleware'
import reduxPromiseMiddleware from 'redux-promise';
import asyncActionCallbackMiddleware from '../utils/asyncActionCallbackMiddleware';
import connectComponent from '../utils/connectComponent';

let middlewares = [
  thunk,
  promiseMiddleware,
  reduxPromiseMiddleware,
  asyncActionCallbackMiddleware,
]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const reducer = combineReducers({ComposeRedus});
const store = createStoreWithMiddleware(reducer);

class ComposeTem extends Component {

  constructor(props){
    super(props);
    this.loadList = this.loadList.bind(this);
  }
  componentWillMount (){
    this.loadList()
  }
//   setState(tab){
//       this.state.tab = tab;
//   }
  loadList (){
    console.log(this.props);
    const { actions , Compose } = this.props;
    actions.getCompose()
  }
  renderTabber (){
    const { Compose } = this.props;
    console.log(Compose);
    return (
        <ImageBackground style={styles.container} source={require('../public/Background.png')}>
            <View style={styles.header}>
                <Text onPress={() => this.props.navigation.navigate('Menu')} style={{width:34}} >
                    <Image source={require('../public/Icon-Menu.png')} style={{width:34,height:24}}/>
                </Text>
                <View style={{flex:1}}>
                    <Text style={{color:'#fff',fontSize:17,alignSelf:'center'}}>Compose</Text>
                </View>
                <View style={{width:25}}>
                    <TouchableOpacity style={{width:25,height:25}} onPress={() => this.props.navigation.navigate('UserHome')}>
                        <Image style={{width:25,height:25}} source={require('../public/Avatar.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flex:0,paddingLeft:25,paddingTop:25,paddingBottom:25,flexDirection:'row',alignItems:'center'}}>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    <Icon
                      name='ios-search'
                      size={ 22 }
                      style={{flex:0}}
                      color='#000'
                      style={{paddingRight:25}}
                    />
                    <TextInput multiline={false} placeholder='Search people...' style={{flex:1,color:'#000',fontFamily:'Karla-Regular'}}/>
                </View>
                <Text style={{fontFamily:'Karla-Bold',fontSize:50,color:'#000',width:130,textAlign:'right'}}>New</Text>
            </View>
            <View style={{flex:1,paddingLeft:25,paddingRight:25}}>
                <View style={styles.composrCointer}>
                    {!Compose.getIsPending?
                    <FlatList
                        data={Compose.composeList}
                        initialNumToRender = {6}
                        keyExtractor={(item, index) => item.id}
                        getItemLayout={(data, index) => (
                          {length: 65, offset: 65 * index, index}
                        )}
                        renderItem={({item}) => this._renderList(item)}
                    />
                    :
                    <View style={[styles.container]}>
                        <Text>loading....</Text>
                    </View>}
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
        </ImageBackground>
    )
  }
  _renderList(item){
      return(
          <TouchableOpacity>
            <View style={{flex:0,flexDirection:'row',alignItems:'center',paddingTop:25,paddingBottom:25}}>
                <Image style={{width:40,height:40}} source={require('../public/Avatar.png')}></Image>
                <Text style={{paddingLeft:20,color:'#000',paddingRight:20,fontSize:12,fontFamily:'Karla-Bold'}}>
                    {item.name}
                </Text>
                <Icon 
                    name="md-checkmark"
                    size={ 22 }
                    style={{flex:0}}
                    color='#000'
                />
            </View>
          </TouchableOpacity>
      )
  }
  render(){
    return(
        <View style={{flex:1}}>
          {this.renderTabber()}
        </View>
    )
  }
}
const LayoutComponent = ComposeTem;
function mapStateToProps(state){
  return {
    Compose : state.ComposeRedus,
  }
}
const ComposeComponent = connectComponent({mapStateToProps,LayoutComponent});
export default class ComposePage extends Component{
    render(){
        return(
            <Provider store={store}>
                <ComposeComponent {...this.props} />
            </Provider>
        )
    }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    flexDirection:'column',
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
  composrCointer:{
      backgroundColor:'#fff',
      flex:1,
      flexDirection:'column',
      alignItems:'flex-start',
      paddingLeft:25,
      paddingRight:25,
  }
});