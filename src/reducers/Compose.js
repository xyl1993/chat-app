import * as types from '../actions/ActionTypes';
import {
  ListView
} from 'react-native';

export default function Compose (state={composeList:[],getIsPending:true} , action={}){
  const { payload ,error , meta={}} = action;
  const { sequence ={} } = meta;
  switch (action.type) {
    case types.GET_COMPOSE:
        if(sequence.type !== 'start'){
            let data = payload.data;
            let temp =  data.list;
            return Object.assign(
                {} , state , {
                    composeList :temp,
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
