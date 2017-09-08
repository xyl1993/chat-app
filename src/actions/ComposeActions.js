import * as types from './ActionTypes';
import * as composeService from '../service/composeService';
import {createAction} from 'redux-actions';

export const getCompose = createAction(types.GET_COMPOSE , composeService.getCompose , ({} , resolved , rejected) => {
  resolved && resolved();
})
