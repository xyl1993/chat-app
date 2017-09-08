import * as types from './ActionTypes';
import * as dynamicService from '../service/dynamicService';
import {createAction} from 'redux-actions';

export const getDynamic = createAction(types.GET_DYNAMIC , dynamicService.getDynamic , ({
  page,
  limit
} , resolved , rejected) => {
  resolved && resolved();
})
