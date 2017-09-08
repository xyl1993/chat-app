import * as types from '../actions/ActionTypes';
import {
  ListView
} from 'react-native';

export default function Dynamic (state={page:1,pageSize:10,dynamics:[],dataSource:[],getIsPending:true} , action={}){
  const { payload ,error , meta={}} = action;
  const { sequence ={} } = meta;
  console.log(action);
  switch (action.type) {
    case types.GET_DYNAMIC:
        if(sequence.type !== 'start'){
            let data = payload.data;
            let temp =  data.currentPage===1?data.list:state.dynamics.concat(data.list);
            return Object.assign(
                {} , state , {
                    dynamics :temp,
                    dataSource:new ListView.DataSource({rowHasChanged: (r1,r2) => r1!==r2 }).cloneWithRows(temp),
                    page : data.currentPage,
                    pageSize : data.pageSize,
                    getIsPending : false
                }
            )
        }else{
            state.getIsPending = true;
            return state
        }
    default:
      return state;
  }
}
