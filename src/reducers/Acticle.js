import * as types from '../actions/ActionTypes';
import {
  ListView
} from 'react-native';

export default function Acticle (state={page:1,limit:10,photos:[],dataSource:[],getPhotosIsPending:true} , action={}){
  const { payload ,error , meta={}} = action;
  const { sequence ={} } = meta;
  switch (action.type) {
    case types.GET_PHOTO:
        if(sequence.type !== 'start'){
            let temp =  payload.params.page===1?payload.list:state.photos.concat(payload.list);
            return Object.assign(
                {} , state , {
                    photos :temp,
                    dataSource:new ListView.DataSource({rowHasChanged: (r1,r2) => r1!==r2 }).cloneWithRows(temp),
                    page : payload.params.page,
                    limit : payload.params.limit,
                    getPhotosIsPending : false
                }
            )
        }else{
            state.getPhotosIsPending = true;
            return state
        }
    default:
      return state;
  }
}
