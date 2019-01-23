import * as types from '../actions/actionTypes';
import initalState from './initialState'

export default function userReducer(state = initalState, action) {
  switch (action.type) {
    case types.ADD_USER:
      return  { ...state,
          name: action.user.name,
          email: action.user.email,
          ...state.posts
      }
    case types.UPDATE_USER:
      return Object.assign({}, action.user)


    case types.ADD_POST:
      return {...state,
        posts:[ ...state.posts, action.post]
      }
    default:
      return state;
  }
};

