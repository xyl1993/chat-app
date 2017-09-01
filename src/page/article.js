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
import Carousel from 'react-native-looped-carousel'
// import PullRefreshScrollView from 'react-native-pullrefresh-scrollview';
import LoadMoreFooter from '../components/LoadMoreFooter.js';

class Article extends Component {
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

  shouldComponentUpdate(nextProps){
    if(nextProps.Acticle.photos == this.props.Acticle.photos){
      return false
    }
    return true
  }

  loadList (){
    const { actions , Acticle } = this.props;
    actions.getPhoto({
      page : Acticle.page,
      limit: Acticle.limit
    })
  }
  _onRefresh (PullRefresh){
    const { actions , Acticle } = this.props;
    actions.getPhoto({
      page : 1,
      limit: Acticle.limit
    })
  }
  _toEnd() {
    const { actions , Acticle } = this.props;
    //ListView滚动到底部，根据是否正在加载更多 是否正在刷新 是否已加载全部来判断是否执行加载更多
    if (Acticle.getPhotosIsPending) {
        return;
    };
    InteractionManager.runAfterInteractions(() => {
        console.log("触发加载更多 toEnd() --> ");
        actions.getPhoto({
          page : Acticle.page + 1,
          limit: Acticle.limit
      })
    });
  }
  _renderFooter() {
    const { Acticle } = this.props;
    //通过当前product数量和刷新状态（是否正在下拉刷新）来判断footer的显示
    if (Acticle.photos.length < 1 || Acticle.getPhotosIsPending) {
        return null
    };
    if (Acticle.photos.length < 30) {
        //还有更多，默认显示‘正在加载更多...’
        return <LoadMoreFooter />
    }else{
        // 加载全部
        return <LoadMoreFooter isLoadAll={true}/>
    }
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
  render (){
    const { Acticle } = this.props;
    if(!Acticle.getPhotosIsPending){
      if(Acticle && Acticle.photos && Acticle.photos.length !=0){
        return (
          <View style={[styles.container]}>
              <ListView 
                  refreshControl={this._refreshControl()}
                  style={{flex:1}}
                  contentContainerStyle = {[styles.listViewContent]}
                  dataSource={Acticle.dataSource}
                  initialListSize={6}
                  pageSize={4}
                  onEndReached={this._toEnd}
                  onEndReachedThreshold={420}
                  renderFooter={ this._renderFooter}
                  renderRow={(rowData,sectionID,rowID,highlightRow) => this._renderImg(rowData,sectionID,rowID,highlightRow)}>
                >
                </ListView>
          </View>
        )
      }else{
        return(
          <View style={[styles.container]}>
            <View style={{flexDirection:'row',paddingTop:30,alignItems : 'center',justifyContent : 'center'}}>
              <Text style={{fontSize:20}}>说好的妹子呢</Text>
            </View>
          </View>
        );
      }
    }else{
      return(
        <View style={[styles.container]}>
          <Text>loading....</Text>
        </View>
      )
    }
  }

  _lightImg(item){
    // console.log(item)
    const { Acticle } = this.props;
    const imgs = [];
    const urlArr = [];
    Acticle && Acticle.photos.length && Acticle.photos.map( (v,k) =>{
        urlArr.push(v.url);
        imgs.push(
          <View style={{flex: 1}} key={k}>
            <Image
              style={{flex: 1}}
              resizeMode="contain"
              source={{ uri: v.url }}
            />
          </View>
        )
    })
    imgs.unshift(
      <View style={{flex: 1}} key='212'>
        <Image
          style={{flex: 1}}
          resizeMode="contain"
          source={{ uri: item.url }}
        />
      </View>
    )
    let inx = urlArr.findIndex( (v,k,arr) => {
      return v == item.url;
    })
    imgs.splice(inx,1);
    return (
      <Carousel
        style={{ width: width, height: height }}
        autoplay={false}
      >
        {imgs}
      </Carousel>
    );
  }


  _renderImg(rowData,sectionID,rowID,highlightRow){
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        key={'photo-' + rowID}
      >
        <LightBox
          renderContent={()=>this._lightImg(rowData)}
        > 
          <View style={styles.itemStyle}>
            <Image
              style={{width:width/2,height:420}}
              source={{uri : rowData.url}}
              defaultSource={require('../public/Icon.png')}
            />
          </View>
          
        </LightBox>
      </TouchableOpacity>
    )
  }
}
const { width , height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'cornsilk'
  },
  itemStyle: {
    // 对齐方式
    alignItems:'center',
    justifyContent:'center',
  },
  listViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export const LayoutComponent = Article;
export function mapStateToProps(state){
  return {
    Acticle : state.Acticle,
  }
}
