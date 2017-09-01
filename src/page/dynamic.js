/**
 * 发现页面
 */
import React , { Component } from 'react';
import {
  View ,
  Text,
  StyleSheet,
  Image,
  ListView,
  TouchableOpacity,
  Dimensions,
  InteractionManager,
  RefreshControl
} from 'react-native';
import LightBox from 'react-native-lightbox'
// import PullRefreshScrollView from 'react-native-pullrefresh-scrollview';
import LoadMoreFooter from '../components/LoadMoreFooter.js';

class Dynamic extends Component{
  constructor (props){
    super(props);
    this.loadList = this.loadList.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
    this._toEnd = this._toEnd.bind(this);
    this._renderFooter = this._renderFooter.bind(this);
  }
  shouldComponentUpdate(nextProps){
    if(nextProps.Acticle.photos == this.props.Acticle.photos){
      return false
    }
    return true
  }

  loadList (){
    const { actions , Acticle } = this.props;
    
  }
  _onRefresh (PullRefresh){
    const { actions , Acticle } = this.props;
    
  }
  _toEnd() {
    const { actions , Acticle } = this.props;
    //ListView滚动到底部，根据是否正在加载更多 是否正在刷新 是否已加载全部来判断是否执行加载更多
    
    InteractionManager.runAfterInteractions(() => {
        console.log("触发加载更多 toEnd() --> ");
        
    });
  }
  _renderFooter() {
    const { Acticle } = this.props;
    //通过当前product数量和刷新状态（是否正在下拉刷新）来判断footer的显示
    
  }
  _refreshControl(){
    const { Acticle } = this.props;
    return (
      <RefreshControl
        refreshing={Acticle.getPhotosIsPending}
        onRefresh={this._onRefresh}
        tintColor="#ff0000"
        title="Loading..."
        colors={['#ff0000', '#00ff00', '#0000ff']}
        progressBackgroundColor="#ffff00"
      />
    )
  }
  render(){
    return (
      <View>

      </View>
    )
  }
}
export const LayoutComponent = Dynamic;
export function mapStateToProps(state){
  return {
    Dynamic : state.Dynamic,
  }
}