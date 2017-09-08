import React , { Component } from 'react';
import {  Navigator , 
    View , 
    Text , 
    TabBarIOS,Image,
    StyleSheet,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import { createStore , applyMiddleware , combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';
import {createLogger} from 'redux-logger';
import promiseMiddleware from '../utils/promiseMiddleware'
import reduxPromiseMiddleware from 'redux-promise';
import asyncActionCallbackMiddleware from '../utils/asyncActionCallbackMiddleware';
import NavigationExperimental from 'react-native-deprecated-custom-components';
import TabNavigator from 'react-native-tab-navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import connectComponent from '../utils/connectComponent';
import * as Dynamicpage from '../page/dynamic';

const logger = createLogger({
	predicate: (getState, action) => false,
	duration: true,
    colors: {
        prevState: () => `#FFEB3B`,
        nextState: () => `#4CAF50`,
    },
    diff: true
});

let middlewares = [
  thunk,
  promiseMiddleware,
  reduxPromiseMiddleware,
  asyncActionCallbackMiddleware,
  logger      //logger就一定要放在最后，否则输出结果会不正确。
]
const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

const Dynamic = connectComponent(Dynamicpage);
export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        tab:'dynamic'
    }
  }
  _renderComponent (){

  }
//   setState(tab){
//       this.state.tab = tab;
//   }
  
  renderTabber (){
    return (
        <ImageBackground style={styles.container} source={require('../public/Background.png')}>
            <View style={styles.header}>
                <Text onPress={() => this.props.navigation.navigate('Menu')} style={{width:34}} >
                    <Image source={require('../public/Icon-Menu.png')} style={{width:34,height:24}}/>
                </Text>
                <View style={{flex:1}}>
                    <Text style={{color:'#fff',fontSize:17,alignSelf:'center'}}>Good morning</Text>
                </View>
                <View style={{width:25}}>
                    <TouchableOpacity style={{width:25,height:25}} onPress={() => this.props.navigation.navigate('UserHome')}>
                        <Image style={{width:25,height:25}} source={require('../public/Avatar.png')} />
                    </TouchableOpacity>
                </View>
            </View>
            <TabNavigator  
                tabBarStyle={styles.tabbarAndroid}
                >  
                <TabNavigator.Item  
                    selected={this.state.tab=='dynamic'}  
                    onPress={()=>this.setState({tab:'dynamic'})}  
                    renderIcon={() => <Icon
                        name='md-heart'
                        size={ 22 }
                        color='#fff'
                    />}
                    renderSelectedIcon={() => <Icon
                        name='md-heart'
                        size={ 22 }
                        color='#ffec57'
                    />}
                    selectedTabStyle={{borderBottomColor:'#ffec57'}}
                    tabStyle = {{borderBottomColor:'#000',borderBottomWidth:2}}
                    >  
                    <View style={{flex:1}}><Dynamic {...this.props} /></View>
                </TabNavigator.Item>  
                <TabNavigator.Item
                    selected={this.state.tab=='article'}  
                    onPress={()=>this.setState({tab:'article'})}  
                    renderIcon={() => <Icon
                        name='md-person'
                        size={ 22 }
                        color='#fff'
                    />}
                    renderSelectedIcon={() => <Icon
                        name='md-person'
                        size={ 22 }
                        color='#ffec57'
                    />}
                    selectedTabStyle={{borderBottomColor:'#ffec57'}}
                    tabStyle = {{borderBottomColor:'#000',borderBottomWidth:2}}
                    >
                    <View style={{flex:1}}><Text>123</Text></View>
                </TabNavigator.Item>
                <TabNavigator.Item  
                    onPress={()=>this.setState({tab:'welfare'})}  
                    selected={this.state.tab=='welfare'}  
                    renderIcon={() => <Icon
                        name='ios-time'
                        size={ 22 }
                        color='#fff'
                    />}
                    renderSelectedIcon={() => <Icon
                        name='ios-time'
                        size={ 22 }
                        color='#ffec57'
                    />}
                    selectedTabStyle={{borderBottomColor:'#ffec57'}}
                    tabStyle = {{borderBottomColor:'#000',borderBottomWidth:2}}
                    >  
                    <View style={{flex:1}}><Text>123</Text></View>
                </TabNavigator.Item>  
            </TabNavigator>
        </ImageBackground>
    )
  }
  render(){
    return(
      <Provider store={store}>
        <View style={{flex:1}}>
          {this.renderTabber()}
        </View>
      </Provider>
    )
  }
}
const styles = StyleSheet.create({
	tabbarAndroid: {
      height : 45,
      backgroundColor : '#000',
	},
  container:{
    flex:1
  },
  header:{
    height:81,
    backgroundColor:'#000',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    paddingLeft:15,
    paddingRight:15
  }
});