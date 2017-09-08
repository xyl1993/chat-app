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
import Icon from 'react-native-vector-icons/Ionicons';
import LoadMoreFooter from '../components/LoadMoreFooter.js';

class Dynamic extends Component{
  constructor (props){
    super(props);
    this.loadList = this.loadList.bind(this);
    this._onRefresh = this._onRefresh.bind(this);
    this._toEnd = this._toEnd.bind(this);
    this._renderFooter = this._renderFooter.bind(this);
  }
  componentWillMount(){
    this.loadList()
  }
  loadList (){
    const { actions , Dynamic } = this.props;
    actions.getDynamic({
      page : Dynamic.page,
      pageSize: Dynamic.pageSize
    })
  }
  _onRefresh (PullRefresh){
    const { actions , Dynamic } = this.props;
    actions.getDynamic({
      page : 1,
      pageSize: Dynamic.pageSize
    })
  }
  _toEnd() {
    const { actions , Dynamic } = this.props;
    //ListView滚动到底部，根据是否正在加载更多 是否正在刷新 是否已加载全部来判断是否执行加载更多
    
    if (Dynamic.getIsPending) {
        return;
    };
    InteractionManager.runAfterInteractions(() => {
        console.log("触发加载更多 toEnd() --> ");
        if(Dynamic.currentPage<Dynamic.pageCount){
          actions.getDynamic({
              page : Dynamic.page + 1,
              pageSize: Dynamic.pageSize
          })
        }
    });
  }
  _renderFooter() {
    const { Dynamic } = this.props;
    //通过当前product数量和刷新状态（是否正在下拉刷新）来判断footer的显示
    if (Dynamic.dynamics.length < 1 || Dynamic.getIsPending) {
        return null
    };
    if (Dynamic.currentPage!==1 && Dynamic.currentPage < Dynamic.pageSize) {
        //还有更多，默认显示‘正在加载更多...’
        return <LoadMoreFooter />
    }else{
        // 加载全部
        return <LoadMoreFooter isLoadAll={true}/>
    }
  }
  _refreshControl(){
    const { Dynamic } = this.props;
    return (
      <RefreshControl
        refreshing={Dynamic.getIsPending}
        onRefresh={this._onRefresh}
        tintColor="#ff0000"
        title="Loading..."
        colors={['#ff0000', '#00ff00', '#0000ff']}
        progressBackgroundColor="#ffff00"
      />
    )
  }
  render(){
    const { Dynamic } = this.props;
    if(!Dynamic.getIsPending){
        return (
          <View style={{flex:1,flexDirection:'column'}}>
            <View style={[styles.container]}>
                <ListView 
                    refreshControl={this._refreshControl()}
                    style={{flex:1}}
                    contentContainerStyle = {[styles.listViewContent]}
                    dataSource={Dynamic.dataSource}
                    initialListSize={6}
                    pageSize={4}
                    onEndReached={this._toEnd}
                    onEndReachedThreshold={420}
                    renderFooter={ this._renderFooter}
                    renderRow={(rowData,sectionID,rowID,highlightRow) => this._renderDynamic(rowData,sectionID,rowID,highlightRow)}>
                  >
                  </ListView>
            </View>
            <View style={{flex:1,height:60,position:'absolute',left:0,right:0,bottom:0,backgroundColor:'#ffec57'}}>
              <Text style={[{fontSize:14,height:60,lineHeight:38,color:'#000',textAlign:'center'},styles.defaultFontFamily]}>
                <Text>+</Text>
                <Text>New Message</Text>
              </Text>
            </View>
          </View>
        )
      
    }else{
      return(
        <View style={[styles.container]}>
          <Text>loading....</Text>
        </View>
      )
    }
  
  }

  _renderDynamic(rowData,sectionID,rowID,highlightRow){
    let time = getDateDiff(rowData.date);
    return(
      <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat')}>
        <View style={styles.listView}>
          {
            rowData.img.length===1?
            <Image style={{width:60,height:60}} source={require('../public/Avatar.png')} />:null
          }
          {
            rowData.img.length===2?
            <View style={{width:60,height:60}}>
              <Image style={{width:35,height:35,position:'absolute',left:0,top:0}} source={require('../public/Avatar.png')} />
              <Image style={{width:35,height:35,position:'absolute',right:0,bottom:0}} source={require('../public/Avatar.png')} />
            </View>:null
          }
          <View style={{flex:1,height:60,paddingLeft:25}}>
            <Text style={[{height:43,color:'#000',fontSize:13},styles.regularFamily]}>{rowData.content}</Text>
            <View style={{flexDirection:'row'}}>
              <Text style={[{color:'#000',fontSize:13,flex:1},styles.defaultFontFamily]} numberOfLines={2}>
                {rowData.author}
              </Text>
              <Text style={[{color:'#b8a6e4',fontSize:12,width:60,textAlign:'right'},styles.defaultFontFamily]}>
                {time}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
    
  }
}
function getDateDiff(dateTimeStamp){
	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var now = new Date().getTime();
	var diffValue = now - dateTimeStamp;
	if(diffValue < 0){return;}
	var monthC =diffValue/month;
	var weekC =diffValue/(7*day);
	var dayC =diffValue/day;
	var hourC =diffValue/hour;
	var minC =diffValue/minute;
	if(monthC>=1){
		result="" + parseInt(monthC) + "月前";
	}
	else if(weekC>=1){
		result="" + parseInt(weekC) + "周前";
	}
	else if(dayC>=1){
		result=""+ parseInt(dayC) +"天前";
	}
	else if(hourC>=1){
		result=""+ parseInt(hourC) +"小时前";
	}
	else if(minC>=1){
		result=""+ parseInt(minC) +"分钟前";
	}else
	result="刚刚";
	return result;
}
const styles = StyleSheet.create({
  container : {
    flex : 1,
    paddingTop:100,
    paddingLeft:25,
    paddingRight:25,
    paddingBottom:60
  },
  listView:{
    flex:1,
    backgroundColor:'#fff',
    paddingTop:30,
    paddingBottom:30,
    paddingLeft:20,
    paddingRight:20,
    marginBottom:15,
    flexDirection:'row',
  },
  defaultFontFamily:{
    fontFamily:'Karla-Bold'
  },
  regularFamily:{
    fontFamily:'Karla-Regular'
  },
})


export const LayoutComponent = Dynamic;
export function mapStateToProps(state){
  return {
    Dynamic : state.Dynamic,
  }
}