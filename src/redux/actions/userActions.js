import * as types from './actionTypes';

export function AddUser (user) {
  return {type: types.ADD_USER, user}
}

export function UpdateUser(user){
  return {type: types.UPDATE_USER, user}
}

export function AddPost(post){
  return {type: types.ADD_POST, post}
}