import React , { Component } from 'react';
import {
    View,
    Navigator, 
    AppRegistry
} from 'react-native';
import LoginComponent from '../page/login';
export default class SampleComponent extends React.Component { 
   render() {
       let defaultName = 'Login'; 
       let defaultComponent = LoginComponent;
      return (
          <Navigator
              initialRoute={{ name: defaultName, component: defaultComponent }}
              configureScene={(route) => {
                  return Navigator.SceneConfigs.FloatFromRight;
                }}
              renderScene={(route, navigator) => {
                  let Component = route.component;
                  //这个语法是把 routes.params 里的每个key作为props的一个属性，在下个页面即可用this. props.id调用
                  //navigator对象在导航容器跳转时一直存在
                  return <Component {...route.params} navigator={navigator} />
                }}
          />
      );
  }
}
