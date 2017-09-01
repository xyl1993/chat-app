import React , { Component } from 'react';
import {  Navigator , View , Text , TabBarIOS,Image,StyleSheet} from 'react-native';
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
import * as ArticlePage from '../page/article';
import Welfare from '../page/welfare';

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

const Article = connectComponent(ArticlePage);
export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        tab:'essence'
    }
  }
  _renderComponent (){

  }
//   setState(tab){
//       this.state.tab = tab;
//   }
  
  renderTabber (){
    return (
        <TabNavigator  
            tabBarStyle={styles.tabbarAndroid}
            >  
            <TabNavigator.Item  
                title="精选"  
                selected={this.state.tab=='essence'}  
                onPress={()=>this.setState({tab:'essence'})}  
                renderIcon={() => <Icon
                      name='ios-home-outline'
                      size={ 18 }
                      color='#000'
                   />}
                renderSelectedIcon={() => <Icon
                      name='ios-home'
                      size={ 18 }
                      color='rgb(0,122,255)'
                   />}
                >  
                <View style={{flex:1}}><Text>123</Text></View>
            </TabNavigator.Item>  
            <TabNavigator.Item
                selected={this.state.tab=='article'}  
                title="发现"
                onPress={()=>this.setState({tab:'article'})}  
                renderIcon={() => <Icon
                      name='ios-eye-outline'
                      size={ 18 }
                      color='#000'
                   />}
                renderSelectedIcon={() => <Icon
                      name='ios-eye'
                      size={ 18 }
                      color='rgb(0,122,255)'
                   />}
                >
                <View style={{flex:1}}><Article {...this.props} /></View>
            </TabNavigator.Item>
            <TabNavigator.Item  
                title="福利"  
                onPress={()=>this.setState({tab:'welfare'})}  
                selected={this.state.tab=='welfare'}  
                renderIcon={() => <Icon
                      name='ios-heart-outline'
                      size={ 18 }
                      color='#000'
                   />}
                renderSelectedIcon={() => <Icon
                      name='ios-heart'
                      size={ 18 }
                      color='rgb(0,122,255)'
                   />}
                >  
                <View style={{flex:1}}><Welfare {...this.props} /></View>
            </TabNavigator.Item>  
        </TabNavigator>  
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
        backgroundColor : '#e5e5e5',
	}
});