
/**
 * 福利页面
 */
import React , { Component } from 'react';
import {
  View ,
  FlatList,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  PixelRatio
} from 'react-native';

export const windowWidth = Dimensions.get('window').width; //当前设备宽高
export const windowHeight = Dimensions.get('window').height; 
const fontScale = PixelRatio.getFontScale();
const pixelRatio = PixelRatio.get(); //当前设备像素密度
const PPI = 2; //iphone6 像素密度，将iPhone6作为基准
const iphone6Width = 750 / PPI; 
const iphone6Height = 1334 / PPI;
const scaleWidth = windowWidth / iphone6Width; //获取宽高缩放比例
const scaleHeight = windowHeight / iphone6Height; 

export default class Welfare extends Component {
  constructor (props){
    super(props);
  }

  render (){
    return (
      <View style={[styles.container]}>
        <FlatList
            data={[{key:'../public/1.jpg'}]}
            renderItem = {({item})=>
                    <Image style={{width:W(667)}} source={require('../public/Icon.png')} />
                
            }
        />
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    backgroundColor : 'cornsilk'
  }
})

/**
* 设置text为sp
* @param size sp
* @returns {Number} dp
*/
export function setSpText(size) {
var scale = Math.min(scaleWidth, scaleHeight);
size = Math.round((size * scale) * pixelRatio / fontScale);
return size;
}

/**
* 屏幕适配,缩放size
* @param size
* @returns {Number}
* @constructor
*/
export function W(size) {
size = Math.round((size * scaleWidth));
console.log(size / PPI);
return size / PPI;
}

export function H(size) {
size = Math.round((size * scaleHeight));
return size / PPI;
}
/*
*根据屏幕分辨率设置百分比
*/
export function HB(length){
let dp = Math.round(windowHeight * ( length / 100 ));
return dp;
}

export function WB(length){
let dp = Math.round(windowWidth * ( length / 100 ));
return dp;
}
