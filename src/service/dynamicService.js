import * as requestService from './requestService';
import config from '../config';
import json from '../data/dynamicList.json';
const urlPrefix = config.ghDomain;
export function getDynamic({page,limit}){
  console.log(json);
  // let url = `../data/dynamicList.json`;
  // let url = `${urlPrefix}`;
  // return requestService.get(url,true).then( data =>{
  //   if(!data.error){
  //     return {
  //       params : {
  //         page,
  //         limit
  //       }
  //     }
  //     // return data.showapi_res_body.newslist
  //   }else{
  //     throw 'do getPhoto failed'
  //   }
  // })
  return json
}
