import * as types from './ActionTypes';
import * as acticleService from '../service/acticleService';
import {createAction} from 'redux-actions';

export const getPhoto = createAction(types.GET_PHOTO , acticleService.getPhoto , ({
  page,
  limit
} , resolved , rejected) => {
  resolved && resolved();
})
